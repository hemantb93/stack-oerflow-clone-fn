import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // const msg = message.toLoweerCase();

    if (message.includes("hello")) {
      actions.handleHello();
    }

    // Reacct questions
    if (message.includes("what is react")) {
      actions.handleq1();
    }
    if (message.includes("advantages of react")) {
      actions.handleq2();
    }
    if (message.includes("limitations of react")) {
      actions.handleq3();
    }
    if (message.includes("what is useState() in react")) {
      actions.handleq4();
    }
    if (message.includes("what is jsx")) {
      actions.handleq5();
    }
    if (
      message.includes(
        "what are the differences between functional and class components"
      )
    ) {
      actions.handleq6();
    }
    if (message.includes("what are props in  react")) {
      actions.handleq7();
    }
    if (message.includes("what is prop drilling in react")) {
      actions.handleq8();
    }
    if (message.includes("what is react hooks")) {
      actions.handleq9();
    }
    if (message.includes("what are higher order component")) {
      actions.handleq10();
    }

    // Js Questions
    if (message.includes("what are the different data types present in JS")) {
      actions.handleq11();
    }
    if (message.includes("explain Hoisting in javascript.")) {
      actions.handleq12();
    }
    if (message.includes("Dierence between “ == “ and “ === “ operators.")) {
      actions.handleq13();
    }
    if (message.includes("Dierence between var and let keyword in javascript.")) {
      actions.handleq14();
    }
    if (message.includes("what is strict mode in javascript")) {
      actions.handleq15();
    }
    if (message.includes("Explain Scope in Js")) {
      actions.handleq16();
    }
    if (message.includes("Explain Closures in JavaScript.")) {
      actions.handleq17();
    }
    if (message.includes("advantages of javascript.")) {
      actions.handleq18();
    }
    if (message.includes("what are callbacks?")) {
      actions.handleq19();
    }
    if (message.includes("what is memoization?")) {
      actions.handleq20();
    }
    
  };

  return (
    <div className="chatbot-messaage-container">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
