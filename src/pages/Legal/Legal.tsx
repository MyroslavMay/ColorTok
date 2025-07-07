import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

import "./Legal.css";

const Legal: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ColorTok</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ColorTok</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* content here */}
        <div className="legal-content">
          <h1>Copyrights</h1>
          Icons from <a href="https://icons8.com">Icons8</a> &{" "}
          <a href="https://ionic.io/ionicons">IonIcons</a>
          <br />
          Copyright 2025,{" "}
          <a href="https://github.com/MyroslavMay">MyroslavMay</a>
          <br />
          Colorset: {" "}
          <a href="https://github.com/meodai/color-names">color-names</a>
          <br />
          <br />
          <h1>Libraries Used</h1>
          <h2>Capacitor plugins for native functionality</h2>
          <ol>
            <li>
              @capacitor-community/electron - Capacitor plugin for Electron
              support - v5.0.1
            </li>
            <li>
              @capacitor/android - Android platform support for Capacitor -
              v7.1.0
            </li>
            <li>@capacitor/app - App information and control APIs - v7.0.0</li>
            <li>@capacitor/assets - Asset management for Capacitor - v3.0.5</li>
            <li>
              @capacitor/cli - Command-line interface for Capacitor - v7.1.0
            </li>
            <li>@capacitor/clipboard - Clipboard API for Capacitor - v7.0.1</li>
            <li>@capacitor/core - Core Capacitor APIs - v7.1.0</li>
            <li>
              @capacitor/filesystem - Filesystem access for Capacitor - v7.0.1
            </li>
            <li>@capacitor/haptics - Haptic feedback for Capacitor - v7.0.0</li>
            <li>
              @capacitor/keyboard - Keyboard control for Capacitor - v7.0.0
            </li>
            <li>@capacitor/share - Sharing API for Capacitor - v7.0.1</li>
            <li>
              @capacitor/status-bar - Status bar control for Capacitor - v7.0.0
            </li>
          </ol>
          <h2>Ionic React libraries</h2>
          <ol>
            <li>@ionic/react - Ionic React UI components - v8.5.2</li>
            <li>@ionic/react-router - Routing for Ionic React apps - v8.5.2</li>
          </ol>
          <h2>Vite and plugins</h2>
          <ol>
            <li>
              @vitejs/plugin-legacy - Legacy browser support for Vite - v5.4.3
            </li>
            <li>@vitejs/plugin-react - React plugin for Vite - v4.6.0</li>
            <li>vite - Next-generation frontend tooling - v5.2.14</li>
          </ol>
          <h2>React and related types</h2>
          <ol>
            <li>react - React core library - v19.0.0</li>
            <li>react-dom - React DOM rendering - v19.0.0</li>
            <li>react-router - Declarative routing for React - v5.3.4</li>
            <li>react-router-dom - DOM bindings for React Router - v5.3.4</li>
            <li>@types/react - TypeScript types for React - v19.0.10</li>
            <li>@types/react-dom - TypeScript types for ReactDOM - v19.0.4</li>
            <li>
              @types/react-router - TypeScript types for React Router - v5.1.20
            </li>
            <li>
              @types/react-router-dom - TypeScript types for React Router DOM -
              v5.3.3
            </li>
          </ol>
          <h2>Testing libraries</h2>
          <ol>
            <li>@testing-library/dom - DOM testing utilities - v10.4.0</li>
            <li>
              @testing-library/jest-dom - Custom Jest matchers for DOM nodes -
              v5.17.0
            </li>
            <li>@testing-library/react - React testing utilities - v16.2.0</li>
            <li>
              @testing-library/user-event - Simulate user events for testing -
              v14.6.1
            </li>
            <li>vitest - Vite-native unit test framework - v0.34.6</li>
            <li>cypress - End-to-end testing framework - v13.17.0</li>
          </ol>
          <h2>TypeScript and configs</h2>
          <ol>
            <li>typescript - TypeScript language - v5.8.2</li>
            <li>typescript-eslint - Linting for TypeScript code - v8.28.0</li>
            <li>
              @tsconfig/node10 - Shared TypeScript config for Node 10 - v1.0.11
            </li>
            <li>
              @tsconfig/node12 - Shared TypeScript config for Node 12 - v1.0.11
            </li>
            <li>
              @tsconfig/node14 - Shared TypeScript config for Node 14 - v1.0.3
            </li>
            <li>
              @tsconfig/node16 - Shared TypeScript config for Node 16 - v1.0.4
            </li>
          </ol>
          <h2>Linting and formatting</h2>
          <ol>
            <li>eslint - Pluggable JavaScript linter - v9.23.0</li>
            <li>
              eslint-plugin-react - React specific linting rules - v7.37.4
            </li>
            <li>
              eslint-plugin-react-hooks - Linting rules for React Hooks - v5.2.0
            </li>
            <li>
              eslint-plugin-react-refresh - Linting for React Fast Refresh -
              v0.4.19
            </li>
            <li>prettier - Code formatter - v2.8.8</li>
          </ol>
          <h2>UI and icons</h2>
          <ol>
            <li>ionicons - Icon set for Ionic - v7.4.0</li>
            <li>swiper - Modern mobile touch slider - v11.2.6</li>
            <li>html2canvas - Screenshots with JavaScript - v1.4.1</li>
            <li>colornames - Convert color names to hex - v1.1.1</li>
            <li>color-2-name - Convert color values to names - v1.4.4</li>
          </ol>
          <h2>Utilities and helpers</h2>
          <ol>
            <li>lodash.ismatch - Lodash isMatch function - v4.4.0</li>
            <li>quick-lru - Simple "Least Recently Used" cache - v4.0.1</li>
            <li>unique-string - Generate unique strings - v2.0.0</li>
            <li>
              dot-prop - Get, set, or delete a property from a nested object -
              v5.3.0
            </li>
            <li>deep-extend - Recursive object extending - v0.6.0</li>
            <li>arrify - Ensure a value is an array - v1.0.1</li>
            <li>camelcase - Convert strings to camel case - v5.3.1</li>
            <li>decamelize - Convert camelCase to kebab-case - v1.2.0</li>
            <li>strip-bom - Strip BOM from a string/buffer - v3.0.0</li>
            <li>
              trim-newlines - Trim newlines from the start/end of a string -
              v3.0.1
            </li>
            <li>wordwrap - Wrap text at a given width - v1.0.0</li>
            <li>wcwidth - Get printable width of a string - v1.0.1</li>
            <li>
              which-module - Find the module object in require.cache - v2.0.1
            </li>
            <li>xtend - Extend objects - v4.0.2</li>
            <li>yn - Parse yes/no like values - v3.1.1</li>
          </ol>
          <h2>XML and parsing</h2>
          <ol>
            <li>xml-js - Convert XML to JavaScript object - v1.6.11</li>
            <li>xpath - XPath engine for XML/HTML - v0.0.32</li>
            <li>@xml-tools/parser - XML parser - v1.0.11</li>
            <li>mergexml - Merge XML documents - v1.2.4</li>
          </ol>
          <h2>Build and minification</h2>
          <ol>
            <li>
              terser - JavaScript parser and mangler/compressor toolkit -
              v5.39.0
            </li>
            <li>
              uglify-js - JavaScript parser, mangler/compressor, beautifier
              toolkit - v3.19.3
            </li>
          </ol>
          <h2>Other</h2>
          <ol>
            <li>jsdom - JavaScript implementation of the DOM - v22.1.0</li>
            <li>sharp - High performance Node.js image processing - v0.32.6</li>
            <li>
              node-fetch - A light-weight module that brings window.fetch to
              Node.js - v2.7.0
            </li>
            <li>events - Node.js event emitter - v3.3.0</li>
            <li>globals - List of global identifiers - v15.15.0</li>
          </ol>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Legal;
