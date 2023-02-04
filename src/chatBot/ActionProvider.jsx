import React from "react";
import "../App.css";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq1 = () => {
    const botMessage = createChatBotMessage(
      "React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq2 = () => {
    const botMessage = createChatBotMessage(
      `1.React uses virtual DOM to render the view. 2.React allows developers to develop engaging user interfaces that can be easily navigated in various search engines.`
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq3 = () => {
    const botMessage = createChatBotMessage(
      "React is not a full-blown framework as it is only a library. The components of React are numerous and will take time to fully grasp the benefits of all. It might be difficult for beginner programmers to understand React. Coding might become complex as it will make use of inline templating and JSX."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq4 = () => {
    const botMessage = createChatBotMessage(
      "The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq5 = () => {
    const botMessage = createChatBotMessage(
      "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( )"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq6 = () => {
    const botMessage = createChatBotMessage(
      "Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on a feature basis. After the introduction of Hooks, functional components are equivalent to class components."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq7 = () => {
    const botMessage = createChatBotMessage(
      "The props in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq8 = () => {
    const botMessage = createChatBotMessage(
      "Sometimes while developing React applications, there is a need to pass data from a component that is higher in the hierarchy to a component that is deeply nested. To pass data between such components, we pass props from a source component and keep passing the prop to the next component in the hierarchy till we reach the deeply nested component."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq9 = () => {
    const botMessage = createChatBotMessage(
      "React Hooks are the built-in functions that permit developers for using the state and lifecyclemethods within React components. These are newly added featuresmade available in React 16.8 version. Each lifecycle of a component is having 3 phases which includemount, unmount, and update. Along with that, components have properties and states. Hooks will allow using thesemethods by developers for improving the reuse of code with higher flexibility navigating the component tree."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq10 = () => {
    const botMessage = createChatBotMessage(
      "Simply put, Higher-Order Component(HOC) is a function that takes in a component and returns a new"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  // Js Question Action
  const handleq11 = () => {
    const botMessage = createChatBotMessage(
      "Primitive types(string, number  bigint, boolean, null, undefined, symbol) and Non_primitive type(object)."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq12 = () => {
    const botMessage = createChatBotMessage(
      "Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top of the scope."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq13 = () => {
    const botMessage = createChatBotMessage(
      "Both are comparison operators. The dierence between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq14 = () => {
    const botMessage = createChatBotMessage(
      "Some dierences are 1. From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.    2. The keyword 'Var' has function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.    3. 'var' declares a variable that will be hoisted but 'let' declares a variable that will be hoisted."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq15 = () => {
    const botMessage = createChatBotMessage(
      "JavaScript Strict Mode allows you to write a code or a function in a 'strict' operational environment Inmost cases, this language is 'not particularly severe' when it comes to throwing errors. In 'Strict mode,'  however, all forms of errors, including silent errors, will be thrown. As a result, debugging becomes a lot simpler."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq16 = () => {
    const botMessage = createChatBotMessage(
      "There are three types of scopes in JS: Global Scope, Local or Function Scope, Block Scope"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq17 = () => {
    const botMessage = createChatBotMessage(
      "Closures are an ability of a function to remember the variables and functions that are declared in its outer scope."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq18 = () => {
    const botMessage = createChatBotMessage(
      "Javascript is executed on the client-side as well as server-side also. However, if you want to use JavaScript on the backend, you'll need to learn NodeJS."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq19 = () => {
    const botMessage = createChatBotMessage(
      "A callback is a function that will be executed aer another function gets executed. In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function, and can be used  as a property of an object."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq20 = () => {
    const botMessage = createChatBotMessage(
      "Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div className="chatbot-action-container">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleq1,
            handleq2,
            handleq3,
            handleq4,
            handleq5,
            handleq6,
            handleq7,
            handleq8,
            handleq9,
            handleq10,
            handleq11,
            handleq12,
            handleq13,
            handleq14,
            handleq15,
            handleq16,
            handleq17,
            handleq18,
            handleq19,
            handleq20,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
