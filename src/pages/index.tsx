import React from "react";
import Layout from "../components/layout";

const HomePage = () => {

  return (
    <Layout>
      <div style={{ marginLeft: '20px' }}>
        <h1>Dark Mode Toggle</h1>
        <p>
          This is a simple example of how to toggle dark mode in React.
        </p>
        <h4>The Technologies that were used:</h4>
        <ol>
          <li>React</li>
          <li>React Hooks</li>
          <li>Gatsby</li>
          <li>Material UI(MUI)</li>
          <li>Typescript</li>
          <li>Saving User Preference</li>
        </ol>
      </div>
    </Layout>
  )
}

export default HomePage;