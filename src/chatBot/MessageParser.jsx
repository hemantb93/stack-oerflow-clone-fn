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
    if (message.includes("what is useState in react")) {
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
    if (message.includes("what are props in react")) {
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
    if (message.includes("what are the different data types present in js")) {
      actions.handleq11();
    }
    if (message.includes("explain hoisting in javascript")) {
      actions.handleq12();
    }
    if (message.includes("dierence between ==  and ===  operators")) {
      actions.handleq13();
    }
    if (
      message.includes("dierence between var and let keyword in javascript")
    ) {
      actions.handleq14();
    }
    if (message.includes("what is strict mode in javascript")) {
      actions.handleq15();
    }
    if (message.includes("explain Scope in js")) {
      actions.handleq16();
    }
    if (message.includes("explain closures in javascript")) {
      actions.handleq17();
    }
    if (message.includes("advantages of javascript")) {
      actions.handleq18();
    }
    if (message.includes("what are callbacks")) {
      actions.handleq19();
    }
    if (message.includes("what is memoization")) {
      actions.handleq20();
    }
    // Java
    if (message.includes("what is java")) {
      actions.handleq21();
    }
    if (message.includes("what do you mean by data encapsulation")) {
      actions.handleq22();
    }
    if (message.includes("what is mongodb ")) {
      actions.handleq23();
    }
    if (message.includes("what are some of the advantages of mongodb")) {
      actions.handleq24();
    }
    if (message.includes("what is a collection in mongodb")) {
      actions.handleq25();
    }
    //
    if (message.includes("What are databases in mongodb")) {
      actions.handleq26();
    }
    if (message.includes("what is express js")) {
      actions.handleq27();
    }
    if (message.includes("why do we use express js")) {
      actions.handleq28();
    }
    if (message.includes("write a code to get post a query in express js")) {
      actions.handleq29();
    }
    if (message.includes("what is firebase")) {
      actions.handleq30();
    }
    // mongodb
    if (message.includes("what is mysql")) {
      actions.handleq31();
    }
    if (message.includes("what do you mean by databases")) {
      actions.handleq32();
    }
    if (message.includes("what does sql in mysql stand for")) {
      actions.handleq33();
    }
    if (message.includes("what is next js")) {
      actions.handleq34();
    }
    if (message.includes("what is node js")) {
      actions.handleq35();
    }
    //
    if (message.includes("what is php")) {
      actions.handleq36();
    }
    if (message.includes("what does pear stands for")) {
      actions.handleq37();
    }
    if (message.includes("what is python")) {
      actions.handleq38();
    }
    if (message.includes("what is c language")) {
      actions.handleq39();
    }
    if (message.includes("what is c++")) {
      actions.handleq40();
    }
    //
    if (message.includes("what is jquery")) {
      actions.handleq41();
    }
    if (
      message.includes("what is the difference between javascript and jquery")
    ) {
      actions.handleq42();
    }
    if (message.includes("what is angular")) {
      actions.handleq43();
    }
    if (message.includes("define sass")) {
      actions.handleq44();
    }
    if (message.includes("what is test automation")) {
      actions.handleq45();
    }
    if (message.includes("what is selenium")) {
      actions.handleq46();
    }
    if (message.includes("what is jwt token")) {
      actions.handleq47();
    }
    if (message.includes("what is redux")) {
      actions.handleq48();
    }
    if (message.includes("what is router")) {
      actions.handleq49();
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
