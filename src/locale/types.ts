export type Locale = {
  locale: string;

  [k: string]: string;

  // // 1. 通用
  // general: {
  //   increase: string;
  //   decrease: string;
  //   root: string;
  // };

  // // 2. 按照图表组件
  // /** 中心文本 */
  // statistic: {
  //   total: string;
  // };
  // /** 转化率组件 */
  // conversionTag: {
  //   label: string;
  // };
  // legend?: Record<string, string>;
  // tooltip?: Record<string, string>;
  // slider?: Record<string, string>;
  // scrollbar?: Record<string, string>;

  // // 3. 按照图表类型
  // waterfall: {
  //   /** 总计或累计值 */
  //   total: string;
  // };
};
