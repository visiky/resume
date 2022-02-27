/**
 * @author https://github.com/react-hookz/web
 */
import { DependencyList, useMemo, useRef, useEffect } from 'react';

export interface IThrottledFunction<Fn extends (...args: any[]) => any> {
  (this: ThisParameterType<Fn>, ...args: Parameters<Fn>): void;
}

function useUnmountEffect(effect: CallableFunction): void {
  useEffect(
    () => () => {
      effect();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
}

export function useThrottledCallback<Fn extends (...args: any[]) => any>(
  callback: Fn,
  deps: DependencyList,
  delay: number,
  noTrailing = false
): IThrottledFunction<Fn> {
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const lastCall = useRef<{
    args: Parameters<Fn>;
    this: ThisParameterType<Fn>;
  }>();

  useUnmountEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  });

  return useMemo(() => {
    const execute = (context: ThisParameterType<Fn>, args: Parameters<Fn>) => {
      lastCall.current = undefined;
      callback.apply(context, args);

      timeout.current = setTimeout(() => {
        timeout.current = undefined;

        // if trailing execution is not disabled - call callback with last
        // received arguments and context
        if (!noTrailing && lastCall.current) {
          execute(lastCall.current.this, lastCall.current.args);

          lastCall.current = undefined;
        }
      }, delay);
    };

    // eslint-disable-next-line func-names
    const wrapped = function (this, ...args) {
      if (timeout.current) {
        // if we cant execute callback immediately - save its arguments and
        // context to execute it when delay is passed
        lastCall.current = { args, this: this };

        return;
      }

      execute(this, args);
    } as IThrottledFunction<Fn>;

    Object.defineProperties(wrapped, {
      length: { value: callback.length },
      name: { value: `${callback.name || 'anonymous'}__throttled__${delay}` },
    });

    return wrapped;
    // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/no-unsafe-assignment
  }, [delay, noTrailing, ...deps]);
}

export default useThrottledCallback;
