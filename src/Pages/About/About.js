import React from 'react';

const About = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="part-one mt-3">
                        <h4>1. Difference between `javascript` and `nodejs`</h4>
                        <h5>Javascript</h5>
                        <ul>
                            <li>Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development.</li>

                            <li>It is an open-source, flexible, fast, light-weighted framework.</li>
                            <li>It allows cross-compilation.</li>
                            <li>It supports interfaces, modules, and classes.</li>
                            <li>We may extend the JavaScript for writing large applications.</li>
                        </ul>

                        <h5>Node Js</h5>

                        <ul>
                            <li>Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser.</li>
                            <li>js is an MIT-licensed open-source framework.</li>
                            <li>It is a lightweight framework that includes minimum modules. Other modules may be included as per the requirement of an application.</li>
                            <li>s applications never buffered any type of data in applications. Node.js applications simply output data in chunks.</li>
                            <li>js is a quick programming execution library built on the V8 JavaScript Engine in Google Chrome.</li>
                            <li>It is used the JavaScript language to develop server-side applications.</li>
                        </ul>

                    </div>

                    <div className="part-two">
                        <h4>2.Differences between `sql` and `nosql` databases.</h4>
                        <h5>sql</h5>
                        <ul>
                            <li>Databases are categorized as Relational Database Management System (RDBMS).</li>
                            <li>SQL databases have fixed or static or predefined schema.</li>
                            <li>SQL databases display data in form of tables so it is known as table-based database.</li>
                            <li>SQL databases are vertically scalable.</li>
                        </ul>


                        <h5>No sql</h5>
                        <ul>
                            <li>NoSQL databases are categorized as Non-relational or distributed database system.</li>
                            <li>NoSQL databases have dynamic schema.</li>
                            <li>NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.</li>
                            <li>NoSQL databases are horizontally scalable.</li>
                        </ul>
                    </div>
                    <div className="part-three">
                        <h4>3. What is the purpose of `jwt` and how does it work</h4>
                        <p>JSON Web Token is an open standard for securely transferring data within parties using a JSON object. JWT is used for stateless authentication mechanisms for users and providers, this means maintaining session is on the client-side instead of storing sessions on the server. Here, we will implement the JWT authentication system in NodeJs.</p>
                        <ul>
                            <li>NodeJs: NodeJs for backend</li>
                            <li>dotenv: For handling configuration data</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;