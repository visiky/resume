const React = require('react');
const ReactDOM = require('react-dom');
const ReactTestUtils = require('react-dom/test-utils');

//  ReactTestUtils.renderIntoDocument 负责渲染任意的JSX
const button = ReactTestUtils.renderIntoDocument(
    <button
        onClick = {e => e.target.innerHTML="hello"}>
        Click Here!
    </button>
);

describe("We can render a button", () => {
    it("change the text after click", () => {
        expect(ReactDOM.findDOMNode(button).textContent).toEqual("Click Here!");
        // ReactTestUtils.Simulate 负责与界面交互
        ReactTestUtils.Simulate.click(button);
        expect(ReactDOM.findDOMNode(button).textContent).toEqual("hello");
    });
});