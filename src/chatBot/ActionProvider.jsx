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
  // java
  const handleq21 = () => {
    const botMessage = createChatBotMessage(
      "Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices, gaming consoles, medical devices and many others. The rules and syntax of Java are based on the C and C++ languages."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq22 = () => {
    const botMessage = createChatBotMessage(
      "Data Encapsulation is an Object-Oriented Programming concept of hiding the data attributes and their behaviours in a single unit. It helps developers to follow modularity while developing software by ensuring that each object is independent of other objects by having its own methods, attributes, and functionalities"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq23 = () => {
    const botMessage = createChatBotMessage(
      "MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently. "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq24 = () => {
    const botMessage = createChatBotMessage(
      "MongoDB supports field, range-based, string pattern matching type queries. for searching the data in the database MongoDB support primary and secondary index on any fields MongoDB basically uses JavaScript objects in place of procedures MongoDB uses a dynamic database schema MongoDB is very easy to scale up or down"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq25 = () => {
    const botMessage = createChatBotMessage(
      "A collection in MongoDB is a group of documents. If a document is the MongoDB analog of a row in a relational database, then a collection can be thought of as the analog to a table."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq26 = () => {
    const botMessage = createChatBotMessage(
      "MongoDB groups collections into databases. MongoDB can host several databases, each grouping together collections. Some reserved database names are as follows: admin,local,config"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq27 = () => {
    const botMessage = createChatBotMessage(
      "Express.js, or simply Express, is a free, open-source, lightweight, and fast backend web application framework for Node.js. It is released as open-source software under the MIT License. It is designed for building single-page, multi-page, and hybrid web applications and APIs. It is called the de facto standard server framework for Node.js. "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq28 = () => {
    const botMessage = createChatBotMessage(
      "Express.js is an automatically prebuilt Node.js framework that facilitates us to create server-side web applications faster and smarter. The main reason for choosing Express is its simplicity, minimalism, flexibility, and scalability characteristics."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq29 = () => {
    const botMessage = createChatBotMessage(
      "app.use( bodyParser.json() ); app.use(bodyParser.urlencoded({     // to support URL-encoded  extended: true }));  "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq30 = () => {
    const botMessage = createChatBotMessage(
      "Google Firebase is a Google-backed app development platform that allows developers to create apps for iOS, Android, and the web. Firebase Realtime Database (Firebase) is a cloud-based NoSQL database that syncs and stores data in real-time across users."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq31 = () => {
    const botMessage = createChatBotMessage(
      "MySQL is a database management system for web servers. It can grow with the website as it is highly scalable. Most of the websites today are powered by MySQL."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq32 = () => {
    const botMessage = createChatBotMessage(
      "A database is a structured collection of data stored in a computer system and organized in a way to be quickly searched. With databases, information can be rapidly retrieved."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq33 = () => {
    const botMessage = createChatBotMessage(
      "The SQL in MySQL stands for Structured Query Language. This language is also used in other databases such as Oracle and Microsoft SQL Server."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq34 = () => {
    const botMessage = createChatBotMessage(
      "Next JS is a full-stack development React framework that is built over Node JS. It enables its users to render server-side services and build static as well as dynamic web applications. It is an open-source framework developed by Vercel and initially released in 2016. "
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq35 = () => {
    const botMessage = createChatBotMessage(
      "Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq36 = () => {
    const botMessage = createChatBotMessage(
      "PHP stands for PHP: Hypertext Preprocessor is a widely used open-source server-side scripting language especially suited for creating dynamic websites and mobile APIs."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq37 = () => {
    const botMessage = createChatBotMessage(
      "PEAR stands for “PHP Extension and Application Repository. PEAR is a framework and repository for all of the reusable PHP components. PEAR provides a higher level of programming for web developers. It contains all kinds of PHP code snippets and libraries. It also provides you with a command-line interface to automatically install packages."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq38 = () => {
    const botMessage = createChatBotMessage(
      "Python is a high-level, interpreted, general-purpose programming language. Being a general-purpose language, it can be used to build almost any type of application with the right tools/libraries."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq39 = () => {
    const botMessage = createChatBotMessage(
      "C is a mid-level and procedural programming language. The Procedural programming language is also known as the structured programming language is a technique in which large programs are broken down into smaller modules, and each module uses structured code. This technique minimizes error and misinterpretation."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq40 = () => {
    const botMessage = createChatBotMessage(
      "C++ is an object-oriented programming language created by Bjarne Stroustrup. It was released in 1985."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq41 = () => {
    const botMessage = createChatBotMessage(
      "jQuery is a fast, lightweight, feature-rich client-side JavaScript library. It is cross-platform and supports different types of browsers. It has provided a much-needed boost to JavaScript. Before jQuery, JavaScript codes were lengthy and bigger, even for smaller functions. It makes a website more interactive and attractive."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq42 = () => {
    const botMessage = createChatBotMessage(
      "The simple difference is that JavaScript is a language while jQuery is a built-in library built for JavaScript. jQuery simplifies the use of JavaScript language"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq43 = () => {
    const botMessage = createChatBotMessage(
      "Angular is one of the most popular JavaScript frameworks developed and maintained by Google. It is an open-source front-end web framework based on TypeScript. It is most suited for developing enterprise web applications because its code is reusable and maintainable."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq44 = () => {
    const botMessage = createChatBotMessage(
      "SASS means Syntactically Awesome Style sheets. It is a CSS preprocessor which is used to reduce repetition with CSS and save time. It adds power and elegance to the basic language and facilitates you to add variables, nested rules, mixins, inline imports, inheritance and more, all with fully CSS-compatible syntax."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq45 = () => {
    const botMessage = createChatBotMessage(
      "Automation testing uses automation tools to write and execute test cases, no manual involvement is necessary for executing an automated test suite. Testers prefer automation tools to write test scripts and test cases and then group into test suites."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq46 = () => {
    const botMessage = createChatBotMessage(
      "Selenium is a portable framework for software testing. Selenium tool facilitates with a playback tool for authoring functional tests without the need to learn a test scripting language."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq47 = () => {
    const botMessage = createChatBotMessage(
      " JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq48 = () => {
    const botMessage = createChatBotMessage(
      "Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test. While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleq49 = () => {
    const botMessage = createChatBotMessage(
      "The Router in React JS is primarily used to create Single Page Web Apps. In the application, React Router is utilized to define various routes. When a user enters a URL into your browser and the URL route equals one of several 'pathways' as in the router folder, the user is sent to that route."
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
            handleq21,
            handleq22,
            handleq23,
            handleq24,
            handleq25,
            handleq26,
            handleq27,
            handleq28,
            handleq29,
            handleq30,
            handleq31,
            handleq32,
            handleq33,
            handleq34,
            handleq35,
            handleq36,
            handleq37,
            handleq38,
            handleq39,
            handleq40,
            handleq41,
            handleq42,
            handleq43,
            handleq44,
            handleq45,
            handleq46,
            handleq47,
            handleq48,
            handleq49,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
