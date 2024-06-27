import { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* Colors adapted from https://tailwindcss.com/docs/customizing-colors */

  :root {
    &, &.light-mode{
      /* Grey */
      --color-grey-0: #fff;
      --color-grey-50: #f9fafb;
      --color-grey-100: #f3f4f6;
      --color-grey-200: #e5e7eb;
      --color-grey-300: #d1d5db;
      --color-grey-400: #9ca3af;
      --color-grey-500: #6b7280;
      --color-grey-600: #4b5563;
      --color-grey-700: #374151;
      --color-grey-800: #1f2937;
      --color-grey-900: #111827;
      --color-black: #000;
      
      --color-blue-100: #f0f9ff;
      --color-blue-700: #0369a1;
      --color-blue-800: #1e40af;
      --color-green-100: #dcfce7;
      --color-green-200: #bbf7d0;
      --color-green-700: #15803d;
      --color-green-800: #166534;

      --color-indigo-50: #eef2ff;
      --color-indigo-100: #e0e7ff;
      --color-indigo-200: #c7d2fe;
      --color-indigo-300: #a5b4fc;
      --color-indigo-400: #818cf8;
      --color-indigo-500: #6366f1;
      --color-indigo-600: #4f46e5;
      --color-indigo-700: #4338ca;
      --color-indigo-800: #3730a3;
      --color-indigo-900: #312e81;
      --color-indigo-950: #1e1b4b;
    }

    // DARK MODE
    &.dark-mode{
      --color-grey-0: #18212f;
      --color-grey-50: #111827;
      --color-grey-100: #1f2937;
      --color-grey-200: #374151;
      --color-grey-300: #4b5563;
      --color-grey-400: #6b7280;
      --color-grey-500: #9ca3af;
      --color-grey-600: #d1d5db;
      --color-grey-700: #e5e7eb;
      --color-grey-800: #f3f4f6;
      --color-grey-900: #f9fafb;

      --color-blue-100: #075985;
      --color-blue-700: #e0f2fe;
      --color-green-100: #166534;
      --color-green-200: #15803d;
      --color-green-700: #bbf7d0;
      --color-green-800: #dcfce7;

      --color-indigo-50: #1e1b4b;
      --color-indigo-100: #312e81;
      --color-indigo-200: #3730a3;
      --color-indigo-300: #4338ca;
      --color-indigo-400: #4f46e5;
      --color-indigo-500: #6366f1;
      --color-indigo-600: #818cf8;
      --color-indigo-700: #a5b4fc;
      --color-indigo-800: #c7d2fe;
      --color-indigo-900: #e0e7ff;
      --color-indigo-950: #eef2ff;

      --backdrop-color: rgba(0, 0, 0, 0.3);

      --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
      --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
      --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
      
      --image-grayscale: 0;
      --image-opacity: 100%;
    }
    
    /* Blue */
    --color-brand-50: #F7FBFF;
    --color-brand-50-1: #F4FAFF;
    --color-brand-100: #dbeafe;
    --color-brand-200: #bfdbfe;
    --color-brand-500: #3b82f6;
    --color-brand-600: #2563eb;
    --color-brand-700: #1d4ed8;
    --color-brand-800: #1e40af;
    --color-brand-900: #1e3a8a;
    
    --backdrop-color: rgba(255, 255, 255, 0.1);
    
    --shadow-sm: 0 1.5px 2px rgba(0, 0, 0, 0.06);
    --shadow-md: 0 2px 3px rgba(0, 0, 0, .09);
    --shadow-lg: 0 3px 4px rgba(0, 0, 0, 0.3);
    --shadow-modal: 0 0 10px .1px rgba(0, 0, 0, .5);

    --border-radius-tiny: 6px;
    --border-radius-sm: 9px;
    --border-radius-md: 12px;
    --border-radius-lg: 15px;
    --border-radius-full: 50%;
    
    --padding-layout-x: 2rem;

    /* Table Docs Layout Header/Rows */
    /* di, dName, date, resp, clnt, actns */
    --table-layout: 0.4fr 2.2fr 1.1fr 2.2fr 1.5fr 1.5fr;
    --table-layout-padding: 1.4rem 2.4rem;
    /* di, dName, date, resp, actns */
    --table-layout-850: 0.2fr 2.1fr 1.1fr 2.1fr 1.3fr 1.3fr;
    --table-layout-padding-850: 1.3rem 1.5rem;
    /* di, dName, date, actns */
    --table-layout-600: 0.3fr 1.5fr 1fr 1.2fr;
    --table-layout-padding-600: 1rem 1.2rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    /* transition: background-color 0.3s, border 0.3s; */
    transition: all 0.2s ease-in-out;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: var(--color-grey-0);
    color: var(--color-grey-700);
    font-family: "Sono", sans-serif;
    
    /* transition: color 0.3s, background-color 0.3s; */
    transition: all 0.2s ease-in-out;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  
  *:disabled {
    cursor: not-allowed;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }

  /* Style to apply when document in main page is not yet finished */
  .pending > * {
    color: var(--color-grey-500);
    font-weight: 400;
    font-size: 1.4rem;
  }

  /* TOOLTIP STYLES */
  .hk-tooltip {
    color: var(--color-grey-500);
    border: 1px solid var(--color-brand-400);
    background-color: var(--color-grey-100);
  }
  /* TOOLTIP STYLES */
  
`;

export const FadeInAnimation = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export default GlobalStyles;
