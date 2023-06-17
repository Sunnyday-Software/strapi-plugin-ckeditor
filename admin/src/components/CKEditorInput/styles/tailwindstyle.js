import {css} from "styled-components";

export const style = css`

  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding-block: 0.2rem;
    font-size: 0.875rem;
  }

  .ck-editor__main {
    --ck-font-face: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);
    margin: 0;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    font-feature-settings: normal;
    font-variation-settings: normal;


    * {
      font: revert;
      margin: revert;
    }

    //NOTE: Insert the generated TailwindCSS code here before the specific ckeditor classes
    //    Be sure to remove the previous version and being sure to do NOT delete the higher specificity while manually copying

    *, :after, :before {
      box-sizing: border-box;
      border: 0 solid #e5e7eb
    }

    :after, :before {
      --tw-content: ""
    }

    html {
      line-height: 1.5;
      -webkit-text-size-adjust: 100%;
      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
      font-feature-settings: normal;
      font-variation-settings: normal
    }

    body {
      margin: 0;
      line-height: inherit
    }

    hr {
      height: 0;
      color: inherit;
      border-top-width: 1px
    }

    abbr:where([title]) {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted
    }

    h1, h2, h3, h4, h5, h6 {
      font-size: inherit;
      font-weight: inherit
    }

    a {
      color: inherit;
      text-decoration: inherit
    }

    b, strong {
      font-weight: bolder
    }

    code, kbd, pre, samp {
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
      font-size: 1em
    }

    small {
      font-size: 80%
    }

    sub, sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline
    }

    sub {
      bottom: -.25em
    }

    sup {
      top: -.5em
    }

    table {
      text-indent: 0;
      border-color: inherit;
      border-collapse: collapse
    }

    button, input, optgroup, select, textarea {
      font-family: inherit;
      font-size: 100%;
      font-weight: inherit;
      line-height: inherit;
      color: inherit;
      margin: 0;
      padding: 0
    }

    button, select {
      text-transform: none
    }

    [type=button], [type=reset], [type=submit], button {
      -webkit-appearance: button;
      background-color: transparent;
      background-image: none
    }

    :-moz-focusring {
      outline: auto
    }

    :-moz-ui-invalid {
      box-shadow: none
    }

    progress {
      vertical-align: baseline
    }

    ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
      height: auto
    }

    [type=search] {
      -webkit-appearance: textfield;
      outline-offset: -2px
    }

    ::-webkit-search-decoration {
      -webkit-appearance: none
    }

    ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit
    }

    summary {
      display: list-item
    }

    blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
      margin: 0
    }

    fieldset {
      margin: 0
    }

    fieldset, legend {
      padding: 0
    }

    menu, ol, ul {
      list-style: none;
      margin: 0;
      padding: 0
    }

    textarea {
      resize: vertical
    }

    input::-moz-placeholder, textarea::-moz-placeholder {
      opacity: 1;
      color: #9ca3af
    }

    input::placeholder, textarea::placeholder {
      opacity: 1;
      color: #9ca3af
    }

    [role=button], button {
      cursor: pointer
    }

    :disabled {
      cursor: default
    }

    audio, canvas, embed, iframe, img, object, svg, video {
      display: block;
      vertical-align: middle
    }

    img, video {
      max-width: 100%;
      height: auto
    }

    [hidden] {
      display: none
    }

    *, :after, :before {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59, 130, 246, .5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia:
    }

    ::backdrop {
      --tw-border-spacing-x: 0;
      --tw-border-spacing-y: 0;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-gradient-from-position: ;
      --tw-gradient-via-position: ;
      --tw-gradient-to-position: ;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59, 130, 246, .5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia:
    }

    .container {
      width: 100%
    }

    @media (min-width: 640px) {
      .container {
        max-width: 640px
      }
    }
    @media (min-width: 768px) {
      .container {
        max-width: 768px
      }
    }
    @media (min-width: 1024px) {
      .container {
        max-width: 1024px
      }
    }
    @media (min-width: 1280px) {
      .container {
        max-width: 1280px
      }
    }
    @media (min-width: 1536px) {
      .container {
        max-width: 1536px
      }
    }

    .visible {
      visibility: visible
    }

    .invisible {
      visibility: hidden
    }

    .absolute {
      position: absolute
    }

    .relative {
      position: relative
    }

    .bottom-24 {
      bottom: 6rem
    }

    .right-0 {
      right: 0
    }

    .top-0 {
      top: 0
    }

    .z-0 {
      z-index: 0
    }

    .z-10 {
      z-index: 10
    }

    .z-20 {
      z-index: 20
    }

    .m-0 {
      margin: 0
    }

    .m-0\\.5 {
      margin: .125rem
    }

    .m-1 {
      margin: .25rem
    }

    .m-1\\.5 {
      margin: .375rem
    }

    .m-14 {
      margin: 3.5rem
    }

    .m-16 {
      margin: 4rem
    }

    .m-2 {
      margin: .5rem
    }

    .m-2\\.5 {
      margin: .625rem
    }

    .m-20 {
      margin: 5rem
    }

    .m-24 {
      margin: 6rem
    }

    .m-28 {
      margin: 7rem
    }

    .m-3 {
      margin: .75rem
    }

    .m-3\\.5 {
      margin: .875rem
    }

    .m-32 {
      margin: 8rem
    }

    .m-36 {
      margin: 9rem
    }

    .m-40 {
      margin: 10rem
    }

    .m-44 {
      margin: 11rem
    }

    .m-48 {
      margin: 12rem
    }

    .m-52 {
      margin: 13rem
    }

    .m-56 {
      margin: 14rem
    }

    .m-60 {
      margin: 15rem
    }

    .m-64 {
      margin: 16rem
    }

    .m-72 {
      margin: 18rem
    }

    .m-80 {
      margin: 20rem
    }

    .m-96 {
      margin: 24rem
    }

    .m-auto {
      margin: auto
    }

    .m-px {
      margin: 1px
    }

    .mx-0 {
      margin-left: 0;
      margin-right: 0
    }

    .mx-0\\.5 {
      margin-left: .125rem;
      margin-right: .125rem
    }

    .mx-1 {
      margin-left: .25rem;
      margin-right: .25rem
    }

    .mx-1\\.5 {
      margin-left: .375rem;
      margin-right: .375rem
    }

    .mx-14 {
      margin-left: 3.5rem;
      margin-right: 3.5rem
    }

    .mx-16 {
      margin-left: 4rem;
      margin-right: 4rem
    }

    .mx-2 {
      margin-left: .5rem;
      margin-right: .5rem
    }

    .mx-2\\.5 {
      margin-left: .625rem;
      margin-right: .625rem
    }

    .mx-20 {
      margin-left: 5rem;
      margin-right: 5rem
    }

    .mx-24 {
      margin-left: 6rem;
      margin-right: 6rem
    }

    .mx-28 {
      margin-left: 7rem;
      margin-right: 7rem
    }

    .mx-3 {
      margin-left: .75rem;
      margin-right: .75rem
    }

    .mx-3\\.5 {
      margin-left: .875rem;
      margin-right: .875rem
    }

    .mx-32 {
      margin-left: 8rem;
      margin-right: 8rem
    }

    .mx-36 {
      margin-left: 9rem;
      margin-right: 9rem
    }

    .mx-4 {
      margin-left: 1rem;
      margin-right: 1rem
    }

    .mx-40 {
      margin-left: 10rem;
      margin-right: 10rem
    }

    .mx-44 {
      margin-left: 11rem;
      margin-right: 11rem
    }

    .mx-48 {
      margin-left: 12rem;
      margin-right: 12rem
    }

    .mx-52 {
      margin-left: 13rem;
      margin-right: 13rem
    }

    .mx-56 {
      margin-left: 14rem;
      margin-right: 14rem
    }

    .mx-60 {
      margin-left: 15rem;
      margin-right: 15rem
    }

    .mx-64 {
      margin-left: 16rem;
      margin-right: 16rem
    }

    .mx-72 {
      margin-left: 18rem;
      margin-right: 18rem
    }

    .mx-80 {
      margin-left: 20rem;
      margin-right: 20rem
    }

    .mx-96 {
      margin-left: 24rem;
      margin-right: 24rem
    }

    .mx-auto {
      margin-left: auto;
      margin-right: auto
    }

    .mx-px {
      margin-left: 1px;
      margin-right: 1px
    }

    .my-0 {
      margin-top: 0;
      margin-bottom: 0
    }

    .my-0\\.5 {
      margin-top: .125rem;
      margin-bottom: .125rem
    }

    .my-1 {
      margin-top: .25rem;
      margin-bottom: .25rem
    }

    .my-1\\.5 {
      margin-top: .375rem;
      margin-bottom: .375rem
    }

    .my-14 {
      margin-top: 3.5rem;
      margin-bottom: 3.5rem
    }

    .my-16 {
      margin-top: 4rem;
      margin-bottom: 4rem
    }

    .my-2 {
      margin-top: .5rem;
      margin-bottom: .5rem
    }

    .my-2\\.5 {
      margin-top: .625rem;
      margin-bottom: .625rem
    }

    .my-20 {
      margin-top: 5rem;
      margin-bottom: 5rem
    }

    .my-24 {
      margin-top: 6rem;
      margin-bottom: 6rem
    }

    .my-28 {
      margin-top: 7rem;
      margin-bottom: 7rem
    }

    .my-3 {
      margin-top: .75rem;
      margin-bottom: .75rem
    }

    .my-3\\.5 {
      margin-top: .875rem;
      margin-bottom: .875rem
    }

    .my-32 {
      margin-top: 8rem;
      margin-bottom: 8rem
    }

    .my-36 {
      margin-top: 9rem;
      margin-bottom: 9rem
    }

    .my-4 {
      margin-top: 1rem;
      margin-bottom: 1rem
    }

    .my-40 {
      margin-top: 10rem;
      margin-bottom: 10rem
    }

    .my-44 {
      margin-top: 11rem;
      margin-bottom: 11rem
    }

    .my-48 {
      margin-top: 12rem;
      margin-bottom: 12rem
    }

    .my-52 {
      margin-top: 13rem;
      margin-bottom: 13rem
    }

    .my-56 {
      margin-top: 14rem;
      margin-bottom: 14rem
    }

    .my-60 {
      margin-top: 15rem;
      margin-bottom: 15rem
    }

    .my-64 {
      margin-top: 16rem;
      margin-bottom: 16rem
    }

    .my-72 {
      margin-top: 18rem;
      margin-bottom: 18rem
    }

    .my-80 {
      margin-top: 20rem;
      margin-bottom: 20rem
    }

    .my-96 {
      margin-top: 24rem;
      margin-bottom: 24rem
    }

    .my-auto {
      margin-top: auto;
      margin-bottom: auto
    }

    .my-px {
      margin-top: 1px;
      margin-bottom: 1px
    }

    .mb-0 {
      margin-bottom: 0
    }

    .mb-0\\.5 {
      margin-bottom: .125rem
    }

    .mb-1 {
      margin-bottom: .25rem
    }

    .mb-1\\.5 {
      margin-bottom: .375rem
    }

    .mb-14 {
      margin-bottom: 3.5rem
    }

    .mb-16 {
      margin-bottom: 4rem
    }

    .mb-2 {
      margin-bottom: .5rem
    }

    .mb-2\\.5 {
      margin-bottom: .625rem
    }

    .mb-20 {
      margin-bottom: 5rem
    }

    .mb-24 {
      margin-bottom: 6rem
    }

    .mb-28 {
      margin-bottom: 7rem
    }

    .mb-3 {
      margin-bottom: .75rem
    }

    .mb-3\\.5 {
      margin-bottom: .875rem
    }

    .mb-32 {
      margin-bottom: 8rem
    }

    .mb-36 {
      margin-bottom: 9rem
    }

    .mb-4 {
      margin-bottom: 1rem
    }

    .mb-40 {
      margin-bottom: 10rem
    }

    .mb-44 {
      margin-bottom: 11rem
    }

    .mb-48 {
      margin-bottom: 12rem
    }

    .mb-52 {
      margin-bottom: 13rem
    }

    .mb-56 {
      margin-bottom: 14rem
    }

    .mb-60 {
      margin-bottom: 15rem
    }

    .mb-64 {
      margin-bottom: 16rem
    }

    .mb-72 {
      margin-bottom: 18rem
    }

    .mb-80 {
      margin-bottom: 20rem
    }

    .mb-96 {
      margin-bottom: 24rem
    }

    .mb-auto {
      margin-bottom: auto
    }

    .mb-px {
      margin-bottom: 1px
    }

    .ml-0 {
      margin-left: 0
    }

    .ml-0\\.5 {
      margin-left: .125rem
    }

    .ml-1 {
      margin-left: .25rem
    }

    .ml-1\\.5 {
      margin-left: .375rem
    }

    .ml-14 {
      margin-left: 3.5rem
    }

    .ml-16 {
      margin-left: 4rem
    }

    .ml-2 {
      margin-left: .5rem
    }

    .ml-2\\.5 {
      margin-left: .625rem
    }

    .ml-20 {
      margin-left: 5rem
    }

    .ml-24 {
      margin-left: 6rem
    }

    .ml-28 {
      margin-left: 7rem
    }

    .ml-3 {
      margin-left: .75rem
    }

    .ml-3\\.5 {
      margin-left: .875rem
    }

    .ml-32 {
      margin-left: 8rem
    }

    .ml-36 {
      margin-left: 9rem
    }

    .ml-40 {
      margin-left: 10rem
    }

    .ml-44 {
      margin-left: 11rem
    }

    .ml-48 {
      margin-left: 12rem
    }

    .ml-52 {
      margin-left: 13rem
    }

    .ml-56 {
      margin-left: 14rem
    }

    .ml-6 {
      margin-left: 1.5rem
    }

    .ml-60 {
      margin-left: 15rem
    }

    .ml-64 {
      margin-left: 16rem
    }

    .ml-72 {
      margin-left: 18rem
    }

    .ml-80 {
      margin-left: 20rem
    }

    .ml-96 {
      margin-left: 24rem
    }

    .ml-auto {
      margin-left: auto
    }

    .ml-px {
      margin-left: 1px
    }

    .mr-0 {
      margin-right: 0
    }

    .mr-0\\.5 {
      margin-right: .125rem
    }

    .mr-1 {
      margin-right: .25rem
    }

    .mr-1\\.5 {
      margin-right: .375rem
    }

    .mr-14 {
      margin-right: 3.5rem
    }

    .mr-16 {
      margin-right: 4rem
    }

    .mr-2 {
      margin-right: .5rem
    }

    .mr-2\\.5 {
      margin-right: .625rem
    }

    .mr-20 {
      margin-right: 5rem
    }

    .mr-24 {
      margin-right: 6rem
    }

    .mr-28 {
      margin-right: 7rem
    }

    .mr-3 {
      margin-right: .75rem
    }

    .mr-3\\.5 {
      margin-right: .875rem
    }

    .mr-32 {
      margin-right: 8rem
    }

    .mr-36 {
      margin-right: 9rem
    }

    .mr-40 {
      margin-right: 10rem
    }

    .mr-44 {
      margin-right: 11rem
    }

    .mr-48 {
      margin-right: 12rem
    }

    .mr-52 {
      margin-right: 13rem
    }

    .mr-56 {
      margin-right: 14rem
    }

    .mr-60 {
      margin-right: 15rem
    }

    .mr-64 {
      margin-right: 16rem
    }

    .mr-72 {
      margin-right: 18rem
    }

    .mr-80 {
      margin-right: 20rem
    }

    .mr-96 {
      margin-right: 24rem
    }

    .mr-auto {
      margin-right: auto
    }

    .mr-px {
      margin-right: 1px
    }

    .mt-0 {
      margin-top: 0
    }

    .mt-0\\.5 {
      margin-top: .125rem
    }

    .mt-1 {
      margin-top: .25rem
    }

    .mt-1\\.5 {
      margin-top: .375rem
    }

    .mt-14 {
      margin-top: 3.5rem
    }

    .mt-16 {
      margin-top: 4rem
    }

    .mt-2 {
      margin-top: .5rem
    }

    .mt-2\\.5 {
      margin-top: .625rem
    }

    .mt-20 {
      margin-top: 5rem
    }

    .mt-24 {
      margin-top: 6rem
    }

    .mt-28 {
      margin-top: 7rem
    }

    .mt-3 {
      margin-top: .75rem
    }

    .mt-3\\.5 {
      margin-top: .875rem
    }

    .mt-32 {
      margin-top: 8rem
    }

    .mt-36 {
      margin-top: 9rem
    }

    .mt-4 {
      margin-top: 1rem
    }

    .mt-40 {
      margin-top: 10rem
    }

    .mt-44 {
      margin-top: 11rem
    }

    .mt-48 {
      margin-top: 12rem
    }

    .mt-52 {
      margin-top: 13rem
    }

    .mt-56 {
      margin-top: 14rem
    }

    .mt-60 {
      margin-top: 15rem
    }

    .mt-64 {
      margin-top: 16rem
    }

    .mt-72 {
      margin-top: 18rem
    }

    .mt-80 {
      margin-top: 20rem
    }

    .mt-96 {
      margin-top: 24rem
    }

    .mt-auto {
      margin-top: auto
    }

    .mt-px {
      margin-top: 1px
    }

    .block {
      display: block
    }

    .inline-block {
      display: inline-block
    }

    .inline {
      display: inline
    }

    .flex {
      display: flex
    }

    .inline-flex {
      display: inline-flex
    }

    .grid {
      display: grid
    }

    .hidden {
      display: none
    }

    .h-0 {
      height: 0
    }

    .h-0\\.5 {
      height: .125rem
    }

    .h-1 {
      height: .25rem
    }

    .h-1\\.5 {
      height: .375rem
    }

    .h-1\\/5 {
      height: 20%
    }

    .h-14 {
      height: 3.5rem
    }

    .h-16 {
      height: 4rem
    }

    .h-2 {
      height: .5rem
    }

    .h-2\\.5 {
      height: .625rem
    }

    .h-2\\/5 {
      height: 40%
    }

    .h-20 {
      height: 5rem
    }

    .h-24 {
      height: 6rem
    }

    .h-28 {
      height: 7rem
    }

    .h-3 {
      height: .75rem
    }

    .h-3\\.5 {
      height: .875rem
    }

    .h-3\\/5 {
      height: 60%
    }

    .h-32 {
      height: 8rem
    }

    .h-36 {
      height: 9rem
    }

    .h-40 {
      height: 10rem
    }

    .h-44 {
      height: 11rem
    }

    .h-48 {
      height: 12rem
    }

    .h-52 {
      height: 13rem
    }

    .h-56 {
      height: 14rem
    }

    .h-60 {
      height: 15rem
    }

    .h-64 {
      height: 16rem
    }

    .h-72 {
      height: 18rem
    }

    .h-80 {
      height: 20rem
    }

    .h-96 {
      height: 24rem
    }

    .h-auto {
      height: auto
    }

    .h-full {
      height: 100%
    }

    .h-max {
      height: -moz-max-content;
      height: max-content
    }

    .h-min {
      height: -moz-min-content;
      height: min-content
    }

    .h-px {
      height: 1px
    }

    .h-screen {
      height: 100vh
    }

    .max-h-0 {
      max-height: 0
    }

    .max-h-0\\.5 {
      max-height: .125rem
    }

    .max-h-1 {
      max-height: .25rem
    }

    .max-h-1\\.5 {
      max-height: .375rem
    }

    .max-h-14 {
      max-height: 3.5rem
    }

    .max-h-16 {
      max-height: 4rem
    }

    .max-h-2 {
      max-height: .5rem
    }

    .max-h-2\\.5 {
      max-height: .625rem
    }

    .max-h-20 {
      max-height: 5rem
    }

    .max-h-24 {
      max-height: 6rem
    }

    .max-h-28 {
      max-height: 7rem
    }

    .max-h-3 {
      max-height: .75rem
    }

    .max-h-3\\.5 {
      max-height: .875rem
    }

    .max-h-32 {
      max-height: 8rem
    }

    .max-h-36 {
      max-height: 9rem
    }

    .max-h-40 {
      max-height: 10rem
    }

    .max-h-44 {
      max-height: 11rem
    }

    .max-h-48 {
      max-height: 12rem
    }

    .max-h-52 {
      max-height: 13rem
    }

    .max-h-56 {
      max-height: 14rem
    }

    .max-h-60 {
      max-height: 15rem
    }

    .max-h-64 {
      max-height: 16rem
    }

    .max-h-72 {
      max-height: 18rem
    }

    .max-h-80 {
      max-height: 20rem
    }

    .max-h-96 {
      max-height: 24rem
    }

    .max-h-full {
      max-height: 100%
    }

    .max-h-max {
      max-height: -moz-max-content;
      max-height: max-content
    }

    .max-h-min {
      max-height: -moz-min-content;
      max-height: min-content
    }

    .max-h-px {
      max-height: 1px
    }

    .max-h-screen {
      max-height: 100vh
    }

    .min-h-0 {
      min-height: 0
    }

    .min-h-\\[100svh\\] {
      min-height: 100svh
    }

    .min-h-full {
      min-height: 100%
    }

    .min-h-max {
      min-height: -moz-max-content;
      min-height: max-content
    }

    .min-h-min {
      min-height: -moz-min-content;
      min-height: min-content
    }

    .min-h-screen {
      min-height: 100vh
    }

    .w-0 {
      width: 0
    }

    .w-0\\.5 {
      width: .125rem
    }

    .w-1 {
      width: .25rem
    }

    .w-1\\.5 {
      width: .375rem
    }

    .w-1\\/5 {
      width: 20%
    }

    .w-14 {
      width: 3.5rem
    }

    .w-16 {
      width: 4rem
    }

    .w-2 {
      width: .5rem
    }

    .w-2\\.5 {
      width: .625rem
    }

    .w-2\\/5 {
      width: 40%
    }

    .w-20 {
      width: 5rem
    }

    .w-24 {
      width: 6rem
    }

    .w-28 {
      width: 7rem
    }

    .w-3 {
      width: .75rem
    }

    .w-3\\.5 {
      width: .875rem
    }

    .w-3\\/4 {
      width: 75%
    }

    .w-3\\/5 {
      width: 60%
    }

    .w-32 {
      width: 8rem
    }

    .w-36 {
      width: 9rem
    }

    .w-40 {
      width: 10rem
    }

    .w-44 {
      width: 11rem
    }

    .w-48 {
      width: 12rem
    }

    .w-52 {
      width: 13rem
    }

    .w-56 {
      width: 14rem
    }

    .w-60 {
      width: 15rem
    }

    .w-64 {
      width: 16rem
    }

    .w-72 {
      width: 18rem
    }

    .w-80 {
      width: 20rem
    }

    .w-96 {
      width: 24rem
    }

    .w-auto {
      width: auto
    }

    .w-full {
      width: 100%
    }

    .w-max {
      width: -moz-max-content;
      width: max-content
    }

    .w-min {
      width: -moz-min-content;
      width: min-content
    }

    .w-px {
      width: 1px
    }

    .w-screen {
      width: 100vw
    }

    .min-w-0 {
      min-width: 0
    }

    .min-w-full {
      min-width: 100%
    }

    .min-w-max {
      min-width: -moz-max-content;
      min-width: max-content
    }

    .min-w-min {
      min-width: -moz-min-content;
      min-width: min-content
    }

    .max-w-0 {
      max-width: 0
    }

    .max-w-2xl {
      max-width: 42rem
    }

    .max-w-full {
      max-width: 100%
    }

    .max-w-max {
      max-width: -moz-max-content;
      max-width: max-content
    }

    .max-w-min {
      max-width: -moz-min-content;
      max-width: min-content
    }

    .max-w-xs {
      max-width: 20rem
    }

    .animate-gradient-hero-x {
      animation: animate-gradient-horizontally 3s ease infinite
    }

    .animate-hero-bg {
      animation: animate-hero-background 30s ease infinite
    }

    .cursor-pointer {
      cursor: pointer
    }

    .grid-flow-row-dense {
      grid-auto-flow: row dense
    }

    .auto-rows-fr {
      grid-auto-rows: minmax(0, 1fr)
    }

    .auto-rows-min {
      grid-auto-rows: min-content
    }

    .grid-cols-1 {
      grid-template-columns:repeat(1, minmax(0, 1fr))
    }

    .grid-cols-article-horizontal {
      grid-template-columns:4fr 1fr
    }

    .grid-rows-1 {
      grid-template-rows:repeat(1, minmax(0, 1fr))
    }

    .grid-rows-2 {
      grid-template-rows:repeat(2, minmax(0, 1fr))
    }

    .grid-rows-3 {
      grid-template-rows:repeat(3, minmax(0, 1fr))
    }

    .grid-rows-4 {
      grid-template-rows:repeat(4, minmax(0, 1fr))
    }

    .grid-rows-5 {
      grid-template-rows:repeat(5, minmax(0, 1fr))
    }

    .grid-rows-6 {
      grid-template-rows:repeat(6, minmax(0, 1fr))
    }

    .grid-rows-webpage-main-layout {
      grid-template-rows:1fr minmax(40px, auto)
    }

    .flex-col {
      flex-direction: column
    }

    .flex-nowrap {
      flex-wrap: nowrap
    }

    .place-items-center {
      place-items: center
    }

    .items-center {
      align-items: center
    }

    .justify-end {
      justify-content: flex-end
    }

    .gap-0 {
      gap: 0
    }

    .gap-1 {
      gap: .25rem
    }

    .gap-16 {
      gap: 4rem
    }

    .gap-2 {
      gap: .5rem
    }

    .gap-3 {
      gap: .75rem
    }

    .gap-4 {
      gap: 1rem
    }

    .gap-5 {
      gap: 1.25rem
    }

    .gap-6 {
      gap: 1.5rem
    }

    .gap-8 {
      gap: 2rem
    }

    .space-x-0 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(0px * var(--tw-space-x-reverse));
      margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)))
    }

    .space-x-1 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(.25rem * var(--tw-space-x-reverse));
      margin-left: calc(.25rem * calc(1 - var(--tw-space-x-reverse)))
    }

    .space-x-2 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(.5rem * var(--tw-space-x-reverse));
      margin-left: calc(.5rem * calc(1 - var(--tw-space-x-reverse)))
    }

    .space-x-3 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(.75rem * var(--tw-space-x-reverse));
      margin-left: calc(.75rem * calc(1 - var(--tw-space-x-reverse)))
    }

    .space-x-4 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(1rem * var(--tw-space-x-reverse));
      margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)))
    }

    .space-x-5 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(1.25rem * var(--tw-space-x-reverse));
      margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))
    }

    .space-x-6 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(1.5rem * var(--tw-space-x-reverse));
      margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))
    }

    .space-x-8 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-x-reverse: 0;
      margin-right: calc(2rem * var(--tw-space-x-reverse));
      margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)))
    }

    .space-y-0 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(0px * var(--tw-space-y-reverse))
    }

    .space-y-1 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(.25rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(.25rem * var(--tw-space-y-reverse))
    }

    .space-y-2 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(.5rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(.5rem * var(--tw-space-y-reverse))
    }

    .space-y-3 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(.75rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(.75rem * var(--tw-space-y-reverse))
    }

    .space-y-4 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1rem * var(--tw-space-y-reverse))
    }

    .space-y-5 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1.25rem * var(--tw-space-y-reverse))
    }

    .space-y-6 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(1.5rem * var(--tw-space-y-reverse))
    }

    .space-y-8 > :not([hidden]) ~ :not([hidden]) {
      --tw-space-y-reverse: 0;
      margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
      margin-bottom: calc(2rem * var(--tw-space-y-reverse))
    }

    .place-self-center {
      place-self: center
    }

    .self-start {
      align-self: flex-start
    }

    .self-end {
      align-self: flex-end
    }

    .self-center {
      align-self: center
    }

    .justify-self-start {
      justify-self: start
    }

    .overflow-hidden {
      overflow: hidden
    }

    .scroll-smooth {
      scroll-behavior: smooth
    }

    .rounded-full {
      border-radius: 9999px
    }

    .rounded-lg {
      border-radius: .5rem
    }

    .border-amber-100 {
      --tw-border-opacity: 1;
      border-color: rgb(254 243 199/var(--tw-border-opacity))
    }

    .border-amber-200 {
      --tw-border-opacity: 1;
      border-color: rgb(253 230 138/var(--tw-border-opacity))
    }

    .border-amber-300 {
      --tw-border-opacity: 1;
      border-color: rgb(252 211 77/var(--tw-border-opacity))
    }

    .border-amber-400 {
      --tw-border-opacity: 1;
      border-color: rgb(251 191 36/var(--tw-border-opacity))
    }

    .border-amber-50 {
      --tw-border-opacity: 1;
      border-color: rgb(255 251 235/var(--tw-border-opacity))
    }

    .border-amber-500 {
      --tw-border-opacity: 1;
      border-color: rgb(245 158 11/var(--tw-border-opacity))
    }

    .border-amber-600 {
      --tw-border-opacity: 1;
      border-color: rgb(217 119 6/var(--tw-border-opacity))
    }

    .border-amber-700 {
      --tw-border-opacity: 1;
      border-color: rgb(180 83 9/var(--tw-border-opacity))
    }

    .border-amber-800 {
      --tw-border-opacity: 1;
      border-color: rgb(146 64 14/var(--tw-border-opacity))
    }

    .border-amber-900 {
      --tw-border-opacity: 1;
      border-color: rgb(120 53 15/var(--tw-border-opacity))
    }

    .border-blue-100 {
      --tw-border-opacity: 1;
      border-color: rgb(219 234 254/var(--tw-border-opacity))
    }

    .border-blue-200 {
      --tw-border-opacity: 1;
      border-color: rgb(191 219 254/var(--tw-border-opacity))
    }

    .border-blue-300 {
      --tw-border-opacity: 1;
      border-color: rgb(147 197 253/var(--tw-border-opacity))
    }

    .border-blue-400 {
      --tw-border-opacity: 1;
      border-color: rgb(96 165 250/var(--tw-border-opacity))
    }

    .border-blue-50 {
      --tw-border-opacity: 1;
      border-color: rgb(239 246 255/var(--tw-border-opacity))
    }

    .border-blue-500 {
      --tw-border-opacity: 1;
      border-color: rgb(59 130 246/var(--tw-border-opacity))
    }

    .border-blue-600 {
      --tw-border-opacity: 1;
      border-color: rgb(37 99 235/var(--tw-border-opacity))
    }

    .border-blue-700 {
      --tw-border-opacity: 1;
      border-color: rgb(29 78 216/var(--tw-border-opacity))
    }

    .border-blue-800 {
      --tw-border-opacity: 1;
      border-color: rgb(30 64 175/var(--tw-border-opacity))
    }

    .border-blue-900 {
      --tw-border-opacity: 1;
      border-color: rgb(30 58 138/var(--tw-border-opacity))
    }

    .border-cyan-100 {
      --tw-border-opacity: 1;
      border-color: rgb(207 250 254/var(--tw-border-opacity))
    }

    .border-cyan-200 {
      --tw-border-opacity: 1;
      border-color: rgb(165 243 252/var(--tw-border-opacity))
    }

    .border-cyan-300 {
      --tw-border-opacity: 1;
      border-color: rgb(103 232 249/var(--tw-border-opacity))
    }

    .border-cyan-400 {
      --tw-border-opacity: 1;
      border-color: rgb(34 211 238/var(--tw-border-opacity))
    }

    .border-cyan-50 {
      --tw-border-opacity: 1;
      border-color: rgb(236 254 255/var(--tw-border-opacity))
    }

    .border-cyan-500 {
      --tw-border-opacity: 1;
      border-color: rgb(6 182 212/var(--tw-border-opacity))
    }

    .border-cyan-600 {
      --tw-border-opacity: 1;
      border-color: rgb(8 145 178/var(--tw-border-opacity))
    }

    .border-cyan-700 {
      --tw-border-opacity: 1;
      border-color: rgb(14 116 144/var(--tw-border-opacity))
    }

    .border-cyan-800 {
      --tw-border-opacity: 1;
      border-color: rgb(21 94 117/var(--tw-border-opacity))
    }

    .border-cyan-900 {
      --tw-border-opacity: 1;
      border-color: rgb(22 78 99/var(--tw-border-opacity))
    }

    .border-emerald-100 {
      --tw-border-opacity: 1;
      border-color: rgb(209 250 229/var(--tw-border-opacity))
    }

    .border-emerald-200 {
      --tw-border-opacity: 1;
      border-color: rgb(167 243 208/var(--tw-border-opacity))
    }

    .border-emerald-300 {
      --tw-border-opacity: 1;
      border-color: rgb(110 231 183/var(--tw-border-opacity))
    }

    .border-emerald-400 {
      --tw-border-opacity: 1;
      border-color: rgb(52 211 153/var(--tw-border-opacity))
    }

    .border-emerald-50 {
      --tw-border-opacity: 1;
      border-color: rgb(236 253 245/var(--tw-border-opacity))
    }

    .border-emerald-500 {
      --tw-border-opacity: 1;
      border-color: rgb(16 185 129/var(--tw-border-opacity))
    }

    .border-emerald-600 {
      --tw-border-opacity: 1;
      border-color: rgb(5 150 105/var(--tw-border-opacity))
    }

    .border-emerald-700 {
      --tw-border-opacity: 1;
      border-color: rgb(4 120 87/var(--tw-border-opacity))
    }

    .border-emerald-800 {
      --tw-border-opacity: 1;
      border-color: rgb(6 95 70/var(--tw-border-opacity))
    }

    .border-emerald-900 {
      --tw-border-opacity: 1;
      border-color: rgb(6 78 59/var(--tw-border-opacity))
    }

    .border-fuchsia-100 {
      --tw-border-opacity: 1;
      border-color: rgb(250 232 255/var(--tw-border-opacity))
    }

    .border-fuchsia-200 {
      --tw-border-opacity: 1;
      border-color: rgb(245 208 254/var(--tw-border-opacity))
    }

    .border-fuchsia-300 {
      --tw-border-opacity: 1;
      border-color: rgb(240 171 252/var(--tw-border-opacity))
    }

    .border-fuchsia-400 {
      --tw-border-opacity: 1;
      border-color: rgb(232 121 249/var(--tw-border-opacity))
    }

    .border-fuchsia-50 {
      --tw-border-opacity: 1;
      border-color: rgb(253 244 255/var(--tw-border-opacity))
    }

    .border-fuchsia-500 {
      --tw-border-opacity: 1;
      border-color: rgb(217 70 239/var(--tw-border-opacity))
    }

    .border-fuchsia-600 {
      --tw-border-opacity: 1;
      border-color: rgb(192 38 211/var(--tw-border-opacity))
    }

    .border-fuchsia-700 {
      --tw-border-opacity: 1;
      border-color: rgb(162 28 175/var(--tw-border-opacity))
    }

    .border-fuchsia-800 {
      --tw-border-opacity: 1;
      border-color: rgb(134 25 143/var(--tw-border-opacity))
    }

    .border-fuchsia-900 {
      --tw-border-opacity: 1;
      border-color: rgb(112 26 117/var(--tw-border-opacity))
    }

    .border-gray-100 {
      --tw-border-opacity: 1;
      border-color: rgb(243 244 246/var(--tw-border-opacity))
    }

    .border-gray-200 {
      --tw-border-opacity: 1;
      border-color: rgb(229 231 235/var(--tw-border-opacity))
    }

    .border-gray-300 {
      --tw-border-opacity: 1;
      border-color: rgb(209 213 219/var(--tw-border-opacity))
    }

    .border-gray-400 {
      --tw-border-opacity: 1;
      border-color: rgb(156 163 175/var(--tw-border-opacity))
    }

    .border-gray-50 {
      --tw-border-opacity: 1;
      border-color: rgb(249 250 251/var(--tw-border-opacity))
    }

    .border-gray-500 {
      --tw-border-opacity: 1;
      border-color: rgb(107 114 128/var(--tw-border-opacity))
    }

    .border-gray-600 {
      --tw-border-opacity: 1;
      border-color: rgb(75 85 99/var(--tw-border-opacity))
    }

    .border-gray-700 {
      --tw-border-opacity: 1;
      border-color: rgb(55 65 81/var(--tw-border-opacity))
    }

    .border-gray-800 {
      --tw-border-opacity: 1;
      border-color: rgb(31 41 55/var(--tw-border-opacity))
    }

    .border-gray-900 {
      --tw-border-opacity: 1;
      border-color: rgb(17 24 39/var(--tw-border-opacity))
    }

    .border-green-100 {
      --tw-border-opacity: 1;
      border-color: rgb(220 252 231/var(--tw-border-opacity))
    }

    .border-green-200 {
      --tw-border-opacity: 1;
      border-color: rgb(187 247 208/var(--tw-border-opacity))
    }

    .border-green-300 {
      --tw-border-opacity: 1;
      border-color: rgb(134 239 172/var(--tw-border-opacity))
    }

    .border-green-400 {
      --tw-border-opacity: 1;
      border-color: rgb(74 222 128/var(--tw-border-opacity))
    }

    .border-green-50 {
      --tw-border-opacity: 1;
      border-color: rgb(240 253 244/var(--tw-border-opacity))
    }

    .border-green-500 {
      --tw-border-opacity: 1;
      border-color: rgb(34 197 94/var(--tw-border-opacity))
    }

    .border-green-600 {
      --tw-border-opacity: 1;
      border-color: rgb(22 163 74/var(--tw-border-opacity))
    }

    .border-green-700 {
      --tw-border-opacity: 1;
      border-color: rgb(21 128 61/var(--tw-border-opacity))
    }

    .border-green-800 {
      --tw-border-opacity: 1;
      border-color: rgb(22 101 52/var(--tw-border-opacity))
    }

    .border-green-900 {
      --tw-border-opacity: 1;
      border-color: rgb(20 83 45/var(--tw-border-opacity))
    }

    .border-indigo-100 {
      --tw-border-opacity: 1;
      border-color: rgb(224 231 255/var(--tw-border-opacity))
    }

    .border-indigo-200 {
      --tw-border-opacity: 1;
      border-color: rgb(199 210 254/var(--tw-border-opacity))
    }

    .border-indigo-300 {
      --tw-border-opacity: 1;
      border-color: rgb(165 180 252/var(--tw-border-opacity))
    }

    .border-indigo-400 {
      --tw-border-opacity: 1;
      border-color: rgb(129 140 248/var(--tw-border-opacity))
    }

    .border-indigo-50 {
      --tw-border-opacity: 1;
      border-color: rgb(238 242 255/var(--tw-border-opacity))
    }

    .border-indigo-500 {
      --tw-border-opacity: 1;
      border-color: rgb(99 102 241/var(--tw-border-opacity))
    }

    .border-indigo-600 {
      --tw-border-opacity: 1;
      border-color: rgb(79 70 229/var(--tw-border-opacity))
    }

    .border-indigo-700 {
      --tw-border-opacity: 1;
      border-color: rgb(67 56 202/var(--tw-border-opacity))
    }

    .border-indigo-800 {
      --tw-border-opacity: 1;
      border-color: rgb(55 48 163/var(--tw-border-opacity))
    }

    .border-indigo-900 {
      --tw-border-opacity: 1;
      border-color: rgb(49 46 129/var(--tw-border-opacity))
    }

    .border-lime-100 {
      --tw-border-opacity: 1;
      border-color: rgb(236 252 203/var(--tw-border-opacity))
    }

    .border-lime-200 {
      --tw-border-opacity: 1;
      border-color: rgb(217 249 157/var(--tw-border-opacity))
    }

    .border-lime-300 {
      --tw-border-opacity: 1;
      border-color: rgb(190 242 100/var(--tw-border-opacity))
    }

    .border-lime-400 {
      --tw-border-opacity: 1;
      border-color: rgb(163 230 53/var(--tw-border-opacity))
    }

    .border-lime-50 {
      --tw-border-opacity: 1;
      border-color: rgb(247 254 231/var(--tw-border-opacity))
    }

    .border-lime-500 {
      --tw-border-opacity: 1;
      border-color: rgb(132 204 22/var(--tw-border-opacity))
    }

    .border-lime-600 {
      --tw-border-opacity: 1;
      border-color: rgb(101 163 13/var(--tw-border-opacity))
    }

    .border-lime-700 {
      --tw-border-opacity: 1;
      border-color: rgb(77 124 15/var(--tw-border-opacity))
    }

    .border-lime-800 {
      --tw-border-opacity: 1;
      border-color: rgb(63 98 18/var(--tw-border-opacity))
    }

    .border-lime-900 {
      --tw-border-opacity: 1;
      border-color: rgb(54 83 20/var(--tw-border-opacity))
    }

    .border-neutral-100 {
      --tw-border-opacity: 1;
      border-color: rgb(245 245 245/var(--tw-border-opacity))
    }

    .border-neutral-200 {
      --tw-border-opacity: 1;
      border-color: rgb(229 229 229/var(--tw-border-opacity))
    }

    .border-neutral-300 {
      --tw-border-opacity: 1;
      border-color: rgb(212 212 212/var(--tw-border-opacity))
    }

    .border-neutral-400 {
      --tw-border-opacity: 1;
      border-color: rgb(163 163 163/var(--tw-border-opacity))
    }

    .border-neutral-50 {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 250/var(--tw-border-opacity))
    }

    .border-neutral-500 {
      --tw-border-opacity: 1;
      border-color: rgb(115 115 115/var(--tw-border-opacity))
    }

    .border-neutral-600 {
      --tw-border-opacity: 1;
      border-color: rgb(82 82 82/var(--tw-border-opacity))
    }

    .border-neutral-700 {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64/var(--tw-border-opacity))
    }

    .border-neutral-800 {
      --tw-border-opacity: 1;
      border-color: rgb(38 38 38/var(--tw-border-opacity))
    }

    .border-neutral-900 {
      --tw-border-opacity: 1;
      border-color: rgb(23 23 23/var(--tw-border-opacity))
    }

    .border-orange-100 {
      --tw-border-opacity: 1;
      border-color: rgb(255 237 213/var(--tw-border-opacity))
    }

    .border-orange-200 {
      --tw-border-opacity: 1;
      border-color: rgb(254 215 170/var(--tw-border-opacity))
    }

    .border-orange-300 {
      --tw-border-opacity: 1;
      border-color: rgb(253 186 116/var(--tw-border-opacity))
    }

    .border-orange-400 {
      --tw-border-opacity: 1;
      border-color: rgb(251 146 60/var(--tw-border-opacity))
    }

    .border-orange-50 {
      --tw-border-opacity: 1;
      border-color: rgb(255 247 237/var(--tw-border-opacity))
    }

    .border-orange-500 {
      --tw-border-opacity: 1;
      border-color: rgb(249 115 22/var(--tw-border-opacity))
    }

    .border-orange-600 {
      --tw-border-opacity: 1;
      border-color: rgb(234 88 12/var(--tw-border-opacity))
    }

    .border-orange-700 {
      --tw-border-opacity: 1;
      border-color: rgb(194 65 12/var(--tw-border-opacity))
    }

    .border-orange-800 {
      --tw-border-opacity: 1;
      border-color: rgb(154 52 18/var(--tw-border-opacity))
    }

    .border-orange-900 {
      --tw-border-opacity: 1;
      border-color: rgb(124 45 18/var(--tw-border-opacity))
    }

    .border-pink-100 {
      --tw-border-opacity: 1;
      border-color: rgb(252 231 243/var(--tw-border-opacity))
    }

    .border-pink-200 {
      --tw-border-opacity: 1;
      border-color: rgb(251 207 232/var(--tw-border-opacity))
    }

    .border-pink-300 {
      --tw-border-opacity: 1;
      border-color: rgb(249 168 212/var(--tw-border-opacity))
    }

    .border-pink-400 {
      --tw-border-opacity: 1;
      border-color: rgb(244 114 182/var(--tw-border-opacity))
    }

    .border-pink-50 {
      --tw-border-opacity: 1;
      border-color: rgb(253 242 248/var(--tw-border-opacity))
    }

    .border-pink-500 {
      --tw-border-opacity: 1;
      border-color: rgb(236 72 153/var(--tw-border-opacity))
    }

    .border-pink-600 {
      --tw-border-opacity: 1;
      border-color: rgb(219 39 119/var(--tw-border-opacity))
    }

    .border-pink-700 {
      --tw-border-opacity: 1;
      border-color: rgb(190 24 93/var(--tw-border-opacity))
    }

    .border-pink-800 {
      --tw-border-opacity: 1;
      border-color: rgb(157 23 77/var(--tw-border-opacity))
    }

    .border-pink-900 {
      --tw-border-opacity: 1;
      border-color: rgb(131 24 67/var(--tw-border-opacity))
    }

    .border-purple-100 {
      --tw-border-opacity: 1;
      border-color: rgb(243 232 255/var(--tw-border-opacity))
    }

    .border-purple-200 {
      --tw-border-opacity: 1;
      border-color: rgb(233 213 255/var(--tw-border-opacity))
    }

    .border-purple-300 {
      --tw-border-opacity: 1;
      border-color: rgb(216 180 254/var(--tw-border-opacity))
    }

    .border-purple-400 {
      --tw-border-opacity: 1;
      border-color: rgb(192 132 252/var(--tw-border-opacity))
    }

    .border-purple-50 {
      --tw-border-opacity: 1;
      border-color: rgb(250 245 255/var(--tw-border-opacity))
    }

    .border-purple-500 {
      --tw-border-opacity: 1;
      border-color: rgb(168 85 247/var(--tw-border-opacity))
    }

    .border-purple-600 {
      --tw-border-opacity: 1;
      border-color: rgb(147 51 234/var(--tw-border-opacity))
    }

    .border-purple-700 {
      --tw-border-opacity: 1;
      border-color: rgb(126 34 206/var(--tw-border-opacity))
    }

    .border-purple-800 {
      --tw-border-opacity: 1;
      border-color: rgb(107 33 168/var(--tw-border-opacity))
    }

    .border-purple-900 {
      --tw-border-opacity: 1;
      border-color: rgb(88 28 135/var(--tw-border-opacity))
    }

    .border-red-100 {
      --tw-border-opacity: 1;
      border-color: rgb(254 226 226/var(--tw-border-opacity))
    }

    .border-red-200 {
      --tw-border-opacity: 1;
      border-color: rgb(254 202 202/var(--tw-border-opacity))
    }

    .border-red-300 {
      --tw-border-opacity: 1;
      border-color: rgb(252 165 165/var(--tw-border-opacity))
    }

    .border-red-400 {
      --tw-border-opacity: 1;
      border-color: rgb(248 113 113/var(--tw-border-opacity))
    }

    .border-red-50 {
      --tw-border-opacity: 1;
      border-color: rgb(254 242 242/var(--tw-border-opacity))
    }

    .border-red-500 {
      --tw-border-opacity: 1;
      border-color: rgb(239 68 68/var(--tw-border-opacity))
    }

    .border-red-600 {
      --tw-border-opacity: 1;
      border-color: rgb(220 38 38/var(--tw-border-opacity))
    }

    .border-red-700 {
      --tw-border-opacity: 1;
      border-color: rgb(185 28 28/var(--tw-border-opacity))
    }

    .border-red-800 {
      --tw-border-opacity: 1;
      border-color: rgb(153 27 27/var(--tw-border-opacity))
    }

    .border-red-900 {
      --tw-border-opacity: 1;
      border-color: rgb(127 29 29/var(--tw-border-opacity))
    }

    .border-rose-100 {
      --tw-border-opacity: 1;
      border-color: rgb(255 228 230/var(--tw-border-opacity))
    }

    .border-rose-200 {
      --tw-border-opacity: 1;
      border-color: rgb(254 205 211/var(--tw-border-opacity))
    }

    .border-rose-300 {
      --tw-border-opacity: 1;
      border-color: rgb(253 164 175/var(--tw-border-opacity))
    }

    .border-rose-400 {
      --tw-border-opacity: 1;
      border-color: rgb(251 113 133/var(--tw-border-opacity))
    }

    .border-rose-50 {
      --tw-border-opacity: 1;
      border-color: rgb(255 241 242/var(--tw-border-opacity))
    }

    .border-rose-500 {
      --tw-border-opacity: 1;
      border-color: rgb(244 63 94/var(--tw-border-opacity))
    }

    .border-rose-600 {
      --tw-border-opacity: 1;
      border-color: rgb(225 29 72/var(--tw-border-opacity))
    }

    .border-rose-700 {
      --tw-border-opacity: 1;
      border-color: rgb(190 18 60/var(--tw-border-opacity))
    }

    .border-rose-800 {
      --tw-border-opacity: 1;
      border-color: rgb(159 18 57/var(--tw-border-opacity))
    }

    .border-rose-900 {
      --tw-border-opacity: 1;
      border-color: rgb(136 19 55/var(--tw-border-opacity))
    }

    .border-sky-100 {
      --tw-border-opacity: 1;
      border-color: rgb(224 242 254/var(--tw-border-opacity))
    }

    .border-sky-200 {
      --tw-border-opacity: 1;
      border-color: rgb(186 230 253/var(--tw-border-opacity))
    }

    .border-sky-300 {
      --tw-border-opacity: 1;
      border-color: rgb(125 211 252/var(--tw-border-opacity))
    }

    .border-sky-400 {
      --tw-border-opacity: 1;
      border-color: rgb(56 189 248/var(--tw-border-opacity))
    }

    .border-sky-50 {
      --tw-border-opacity: 1;
      border-color: rgb(240 249 255/var(--tw-border-opacity))
    }

    .border-sky-500 {
      --tw-border-opacity: 1;
      border-color: rgb(14 165 233/var(--tw-border-opacity))
    }

    .border-sky-600 {
      --tw-border-opacity: 1;
      border-color: rgb(2 132 199/var(--tw-border-opacity))
    }

    .border-sky-700 {
      --tw-border-opacity: 1;
      border-color: rgb(3 105 161/var(--tw-border-opacity))
    }

    .border-sky-800 {
      --tw-border-opacity: 1;
      border-color: rgb(7 89 133/var(--tw-border-opacity))
    }

    .border-sky-900 {
      --tw-border-opacity: 1;
      border-color: rgb(12 74 110/var(--tw-border-opacity))
    }

    .border-slate-100 {
      --tw-border-opacity: 1;
      border-color: rgb(241 245 249/var(--tw-border-opacity))
    }

    .border-slate-200 {
      --tw-border-opacity: 1;
      border-color: rgb(226 232 240/var(--tw-border-opacity))
    }

    .border-slate-300 {
      --tw-border-opacity: 1;
      border-color: rgb(203 213 225/var(--tw-border-opacity))
    }

    .border-slate-400 {
      --tw-border-opacity: 1;
      border-color: rgb(148 163 184/var(--tw-border-opacity))
    }

    .border-slate-50 {
      --tw-border-opacity: 1;
      border-color: rgb(248 250 252/var(--tw-border-opacity))
    }

    .border-slate-500 {
      --tw-border-opacity: 1;
      border-color: rgb(100 116 139/var(--tw-border-opacity))
    }

    .border-slate-600 {
      --tw-border-opacity: 1;
      border-color: rgb(71 85 105/var(--tw-border-opacity))
    }

    .border-slate-700 {
      --tw-border-opacity: 1;
      border-color: rgb(51 65 85/var(--tw-border-opacity))
    }

    .border-slate-800 {
      --tw-border-opacity: 1;
      border-color: rgb(30 41 59/var(--tw-border-opacity))
    }

    .border-slate-900 {
      --tw-border-opacity: 1;
      border-color: rgb(15 23 42/var(--tw-border-opacity))
    }

    .border-stone-100 {
      --tw-border-opacity: 1;
      border-color: rgb(245 245 244/var(--tw-border-opacity))
    }

    .border-stone-200 {
      --tw-border-opacity: 1;
      border-color: rgb(231 229 228/var(--tw-border-opacity))
    }

    .border-stone-300 {
      --tw-border-opacity: 1;
      border-color: rgb(214 211 209/var(--tw-border-opacity))
    }

    .border-stone-400 {
      --tw-border-opacity: 1;
      border-color: rgb(168 162 158/var(--tw-border-opacity))
    }

    .border-stone-50 {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 249/var(--tw-border-opacity))
    }

    .border-stone-500 {
      --tw-border-opacity: 1;
      border-color: rgb(120 113 108/var(--tw-border-opacity))
    }

    .border-stone-600 {
      --tw-border-opacity: 1;
      border-color: rgb(87 83 78/var(--tw-border-opacity))
    }

    .border-stone-700 {
      --tw-border-opacity: 1;
      border-color: rgb(68 64 60/var(--tw-border-opacity))
    }

    .border-stone-800 {
      --tw-border-opacity: 1;
      border-color: rgb(41 37 36/var(--tw-border-opacity))
    }

    .border-stone-900 {
      --tw-border-opacity: 1;
      border-color: rgb(28 25 23/var(--tw-border-opacity))
    }

    .border-teal-100 {
      --tw-border-opacity: 1;
      border-color: rgb(204 251 241/var(--tw-border-opacity))
    }

    .border-teal-200 {
      --tw-border-opacity: 1;
      border-color: rgb(153 246 228/var(--tw-border-opacity))
    }

    .border-teal-300 {
      --tw-border-opacity: 1;
      border-color: rgb(94 234 212/var(--tw-border-opacity))
    }

    .border-teal-400 {
      --tw-border-opacity: 1;
      border-color: rgb(45 212 191/var(--tw-border-opacity))
    }

    .border-teal-50 {
      --tw-border-opacity: 1;
      border-color: rgb(240 253 250/var(--tw-border-opacity))
    }

    .border-teal-500 {
      --tw-border-opacity: 1;
      border-color: rgb(20 184 166/var(--tw-border-opacity))
    }

    .border-teal-600 {
      --tw-border-opacity: 1;
      border-color: rgb(13 148 136/var(--tw-border-opacity))
    }

    .border-teal-700 {
      --tw-border-opacity: 1;
      border-color: rgb(15 118 110/var(--tw-border-opacity))
    }

    .border-teal-800 {
      --tw-border-opacity: 1;
      border-color: rgb(17 94 89/var(--tw-border-opacity))
    }

    .border-teal-900 {
      --tw-border-opacity: 1;
      border-color: rgb(19 78 74/var(--tw-border-opacity))
    }

    .border-violet-100 {
      --tw-border-opacity: 1;
      border-color: rgb(237 233 254/var(--tw-border-opacity))
    }

    .border-violet-200 {
      --tw-border-opacity: 1;
      border-color: rgb(221 214 254/var(--tw-border-opacity))
    }

    .border-violet-300 {
      --tw-border-opacity: 1;
      border-color: rgb(196 181 253/var(--tw-border-opacity))
    }

    .border-violet-400 {
      --tw-border-opacity: 1;
      border-color: rgb(167 139 250/var(--tw-border-opacity))
    }

    .border-violet-50 {
      --tw-border-opacity: 1;
      border-color: rgb(245 243 255/var(--tw-border-opacity))
    }

    .border-violet-500 {
      --tw-border-opacity: 1;
      border-color: rgb(139 92 246/var(--tw-border-opacity))
    }

    .border-violet-600 {
      --tw-border-opacity: 1;
      border-color: rgb(124 58 237/var(--tw-border-opacity))
    }

    .border-violet-700 {
      --tw-border-opacity: 1;
      border-color: rgb(109 40 217/var(--tw-border-opacity))
    }

    .border-violet-800 {
      --tw-border-opacity: 1;
      border-color: rgb(91 33 182/var(--tw-border-opacity))
    }

    .border-violet-900 {
      --tw-border-opacity: 1;
      border-color: rgb(76 29 149/var(--tw-border-opacity))
    }

    .border-yellow-100 {
      --tw-border-opacity: 1;
      border-color: rgb(254 249 195/var(--tw-border-opacity))
    }

    .border-yellow-200 {
      --tw-border-opacity: 1;
      border-color: rgb(254 240 138/var(--tw-border-opacity))
    }

    .border-yellow-300 {
      --tw-border-opacity: 1;
      border-color: rgb(253 224 71/var(--tw-border-opacity))
    }

    .border-yellow-400 {
      --tw-border-opacity: 1;
      border-color: rgb(250 204 21/var(--tw-border-opacity))
    }

    .border-yellow-50 {
      --tw-border-opacity: 1;
      border-color: rgb(254 252 232/var(--tw-border-opacity))
    }

    .border-yellow-500 {
      --tw-border-opacity: 1;
      border-color: rgb(234 179 8/var(--tw-border-opacity))
    }

    .border-yellow-600 {
      --tw-border-opacity: 1;
      border-color: rgb(202 138 4/var(--tw-border-opacity))
    }

    .border-yellow-700 {
      --tw-border-opacity: 1;
      border-color: rgb(161 98 7/var(--tw-border-opacity))
    }

    .border-yellow-800 {
      --tw-border-opacity: 1;
      border-color: rgb(133 77 14/var(--tw-border-opacity))
    }

    .border-yellow-900 {
      --tw-border-opacity: 1;
      border-color: rgb(113 63 18/var(--tw-border-opacity))
    }

    .border-zinc-100 {
      --tw-border-opacity: 1;
      border-color: rgb(244 244 245/var(--tw-border-opacity))
    }

    .border-zinc-200 {
      --tw-border-opacity: 1;
      border-color: rgb(228 228 231/var(--tw-border-opacity))
    }

    .border-zinc-300 {
      --tw-border-opacity: 1;
      border-color: rgb(212 212 216/var(--tw-border-opacity))
    }

    .border-zinc-400 {
      --tw-border-opacity: 1;
      border-color: rgb(161 161 170/var(--tw-border-opacity))
    }

    .border-zinc-50 {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 250/var(--tw-border-opacity))
    }

    .border-zinc-500 {
      --tw-border-opacity: 1;
      border-color: rgb(113 113 122/var(--tw-border-opacity))
    }

    .border-zinc-600 {
      --tw-border-opacity: 1;
      border-color: rgb(82 82 91/var(--tw-border-opacity))
    }

    .border-zinc-700 {
      --tw-border-opacity: 1;
      border-color: rgb(63 63 70/var(--tw-border-opacity))
    }

    .border-zinc-800 {
      --tw-border-opacity: 1;
      border-color: rgb(39 39 42/var(--tw-border-opacity))
    }

    .border-zinc-900 {
      --tw-border-opacity: 1;
      border-color: rgb(24 24 27/var(--tw-border-opacity))
    }

    .bg-amber-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 243 199/var(--tw-bg-opacity))
    }

    .bg-amber-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(253 230 138/var(--tw-bg-opacity))
    }

    .bg-amber-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(252 211 77/var(--tw-bg-opacity))
    }

    .bg-amber-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(251 191 36/var(--tw-bg-opacity))
    }

    .bg-amber-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(255 251 235/var(--tw-bg-opacity))
    }

    .bg-amber-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(245 158 11/var(--tw-bg-opacity))
    }

    .bg-amber-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(217 119 6/var(--tw-bg-opacity))
    }

    .bg-amber-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(180 83 9/var(--tw-bg-opacity))
    }

    .bg-amber-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(146 64 14/var(--tw-bg-opacity))
    }

    .bg-amber-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(120 53 15/var(--tw-bg-opacity))
    }

    .bg-blue-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(219 234 254/var(--tw-bg-opacity))
    }

    .bg-blue-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(191 219 254/var(--tw-bg-opacity))
    }

    .bg-blue-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(147 197 253/var(--tw-bg-opacity))
    }

    .bg-blue-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(96 165 250/var(--tw-bg-opacity))
    }

    .bg-blue-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(239 246 255/var(--tw-bg-opacity))
    }

    .bg-blue-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(59 130 246/var(--tw-bg-opacity))
    }

    .bg-blue-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(37 99 235/var(--tw-bg-opacity))
    }

    .bg-blue-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(29 78 216/var(--tw-bg-opacity))
    }

    .bg-blue-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(30 64 175/var(--tw-bg-opacity))
    }

    .bg-blue-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(30 58 138/var(--tw-bg-opacity))
    }

    .bg-cyan-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(207 250 254/var(--tw-bg-opacity))
    }

    .bg-cyan-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(165 243 252/var(--tw-bg-opacity))
    }

    .bg-cyan-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(103 232 249/var(--tw-bg-opacity))
    }

    .bg-cyan-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(34 211 238/var(--tw-bg-opacity))
    }

    .bg-cyan-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(236 254 255/var(--tw-bg-opacity))
    }

    .bg-cyan-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(6 182 212/var(--tw-bg-opacity))
    }

    .bg-cyan-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(8 145 178/var(--tw-bg-opacity))
    }

    .bg-cyan-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(14 116 144/var(--tw-bg-opacity))
    }

    .bg-cyan-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(21 94 117/var(--tw-bg-opacity))
    }

    .bg-cyan-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(22 78 99/var(--tw-bg-opacity))
    }

    .bg-emerald-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(209 250 229/var(--tw-bg-opacity))
    }

    .bg-emerald-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(167 243 208/var(--tw-bg-opacity))
    }

    .bg-emerald-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(110 231 183/var(--tw-bg-opacity))
    }

    .bg-emerald-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(52 211 153/var(--tw-bg-opacity))
    }

    .bg-emerald-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(236 253 245/var(--tw-bg-opacity))
    }

    .bg-emerald-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(16 185 129/var(--tw-bg-opacity))
    }

    .bg-emerald-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(5 150 105/var(--tw-bg-opacity))
    }

    .bg-emerald-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(4 120 87/var(--tw-bg-opacity))
    }

    .bg-emerald-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(6 95 70/var(--tw-bg-opacity))
    }

    .bg-emerald-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(6 78 59/var(--tw-bg-opacity))
    }

    .bg-fuchsia-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(250 232 255/var(--tw-bg-opacity))
    }

    .bg-fuchsia-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(245 208 254/var(--tw-bg-opacity))
    }

    .bg-fuchsia-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(240 171 252/var(--tw-bg-opacity))
    }

    .bg-fuchsia-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(232 121 249/var(--tw-bg-opacity))
    }

    .bg-fuchsia-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(253 244 255/var(--tw-bg-opacity))
    }

    .bg-fuchsia-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(217 70 239/var(--tw-bg-opacity))
    }

    .bg-fuchsia-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(192 38 211/var(--tw-bg-opacity))
    }

    .bg-fuchsia-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(162 28 175/var(--tw-bg-opacity))
    }

    .bg-fuchsia-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(134 25 143/var(--tw-bg-opacity))
    }

    .bg-fuchsia-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(112 26 117/var(--tw-bg-opacity))
    }

    .bg-gray-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246/var(--tw-bg-opacity))
    }

    .bg-gray-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(229 231 235/var(--tw-bg-opacity))
    }

    .bg-gray-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(209 213 219/var(--tw-bg-opacity))
    }

    .bg-gray-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(156 163 175/var(--tw-bg-opacity))
    }

    .bg-gray-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251/var(--tw-bg-opacity))
    }

    .bg-gray-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(107 114 128/var(--tw-bg-opacity))
    }

    .bg-gray-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(75 85 99/var(--tw-bg-opacity))
    }

    .bg-gray-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(55 65 81/var(--tw-bg-opacity))
    }

    .bg-gray-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(31 41 55/var(--tw-bg-opacity))
    }

    .bg-gray-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(17 24 39/var(--tw-bg-opacity))
    }

    .bg-green-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(220 252 231/var(--tw-bg-opacity))
    }

    .bg-green-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(187 247 208/var(--tw-bg-opacity))
    }

    .bg-green-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(134 239 172/var(--tw-bg-opacity))
    }

    .bg-green-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(74 222 128/var(--tw-bg-opacity))
    }

    .bg-green-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(240 253 244/var(--tw-bg-opacity))
    }

    .bg-green-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(34 197 94/var(--tw-bg-opacity))
    }

    .bg-green-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(22 163 74/var(--tw-bg-opacity))
    }

    .bg-green-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(21 128 61/var(--tw-bg-opacity))
    }

    .bg-green-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(22 101 52/var(--tw-bg-opacity))
    }

    .bg-green-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(20 83 45/var(--tw-bg-opacity))
    }

    .bg-indigo-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(224 231 255/var(--tw-bg-opacity))
    }

    .bg-indigo-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(199 210 254/var(--tw-bg-opacity))
    }

    .bg-indigo-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(165 180 252/var(--tw-bg-opacity))
    }

    .bg-indigo-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(129 140 248/var(--tw-bg-opacity))
    }

    .bg-indigo-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(238 242 255/var(--tw-bg-opacity))
    }

    .bg-indigo-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(99 102 241/var(--tw-bg-opacity))
    }

    .bg-indigo-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(79 70 229/var(--tw-bg-opacity))
    }

    .bg-indigo-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(67 56 202/var(--tw-bg-opacity))
    }

    .bg-indigo-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(55 48 163/var(--tw-bg-opacity))
    }

    .bg-indigo-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(49 46 129/var(--tw-bg-opacity))
    }

    .bg-lime-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(236 252 203/var(--tw-bg-opacity))
    }

    .bg-lime-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(217 249 157/var(--tw-bg-opacity))
    }

    .bg-lime-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(190 242 100/var(--tw-bg-opacity))
    }

    .bg-lime-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(163 230 53/var(--tw-bg-opacity))
    }

    .bg-lime-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(247 254 231/var(--tw-bg-opacity))
    }

    .bg-lime-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(132 204 22/var(--tw-bg-opacity))
    }

    .bg-lime-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(101 163 13/var(--tw-bg-opacity))
    }

    .bg-lime-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(77 124 15/var(--tw-bg-opacity))
    }

    .bg-lime-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(63 98 18/var(--tw-bg-opacity))
    }

    .bg-lime-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(54 83 20/var(--tw-bg-opacity))
    }

    .bg-neutral-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(245 245 245/var(--tw-bg-opacity))
    }

    .bg-neutral-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(229 229 229/var(--tw-bg-opacity))
    }

    .bg-neutral-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(212 212 212/var(--tw-bg-opacity))
    }

    .bg-neutral-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(163 163 163/var(--tw-bg-opacity))
    }

    .bg-neutral-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 250/var(--tw-bg-opacity))
    }

    .bg-neutral-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(115 115 115/var(--tw-bg-opacity))
    }

    .bg-neutral-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(82 82 82/var(--tw-bg-opacity))
    }

    .bg-neutral-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(64 64 64/var(--tw-bg-opacity))
    }

    .bg-neutral-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(38 38 38/var(--tw-bg-opacity))
    }

    .bg-neutral-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(23 23 23/var(--tw-bg-opacity))
    }

    .bg-orange-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(255 237 213/var(--tw-bg-opacity))
    }

    .bg-orange-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 215 170/var(--tw-bg-opacity))
    }

    .bg-orange-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(253 186 116/var(--tw-bg-opacity))
    }

    .bg-orange-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(251 146 60/var(--tw-bg-opacity))
    }

    .bg-orange-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(255 247 237/var(--tw-bg-opacity))
    }

    .bg-orange-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(249 115 22/var(--tw-bg-opacity))
    }

    .bg-orange-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(234 88 12/var(--tw-bg-opacity))
    }

    .bg-orange-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(194 65 12/var(--tw-bg-opacity))
    }

    .bg-orange-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(154 52 18/var(--tw-bg-opacity))
    }

    .bg-orange-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(124 45 18/var(--tw-bg-opacity))
    }

    .bg-pink-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(252 231 243/var(--tw-bg-opacity))
    }

    .bg-pink-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(251 207 232/var(--tw-bg-opacity))
    }

    .bg-pink-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(249 168 212/var(--tw-bg-opacity))
    }

    .bg-pink-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(244 114 182/var(--tw-bg-opacity))
    }

    .bg-pink-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(253 242 248/var(--tw-bg-opacity))
    }

    .bg-pink-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(236 72 153/var(--tw-bg-opacity))
    }

    .bg-pink-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(219 39 119/var(--tw-bg-opacity))
    }

    .bg-pink-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(190 24 93/var(--tw-bg-opacity))
    }

    .bg-pink-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(157 23 77/var(--tw-bg-opacity))
    }

    .bg-pink-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(131 24 67/var(--tw-bg-opacity))
    }

    .bg-purple-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(243 232 255/var(--tw-bg-opacity))
    }

    .bg-purple-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(233 213 255/var(--tw-bg-opacity))
    }

    .bg-purple-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(216 180 254/var(--tw-bg-opacity))
    }

    .bg-purple-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(192 132 252/var(--tw-bg-opacity))
    }

    .bg-purple-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(250 245 255/var(--tw-bg-opacity))
    }

    .bg-purple-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(168 85 247/var(--tw-bg-opacity))
    }

    .bg-purple-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(147 51 234/var(--tw-bg-opacity))
    }

    .bg-purple-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(126 34 206/var(--tw-bg-opacity))
    }

    .bg-purple-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(107 33 168/var(--tw-bg-opacity))
    }

    .bg-purple-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(88 28 135/var(--tw-bg-opacity))
    }

    .bg-red-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 226 226/var(--tw-bg-opacity))
    }

    .bg-red-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 202 202/var(--tw-bg-opacity))
    }

    .bg-red-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(252 165 165/var(--tw-bg-opacity))
    }

    .bg-red-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(248 113 113/var(--tw-bg-opacity))
    }

    .bg-red-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 242 242/var(--tw-bg-opacity))
    }

    .bg-red-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(239 68 68/var(--tw-bg-opacity))
    }

    .bg-red-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(220 38 38/var(--tw-bg-opacity))
    }

    .bg-red-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(185 28 28/var(--tw-bg-opacity))
    }

    .bg-red-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(153 27 27/var(--tw-bg-opacity))
    }

    .bg-red-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(127 29 29/var(--tw-bg-opacity))
    }

    .bg-rose-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(255 228 230/var(--tw-bg-opacity))
    }

    .bg-rose-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 205 211/var(--tw-bg-opacity))
    }

    .bg-rose-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(253 164 175/var(--tw-bg-opacity))
    }

    .bg-rose-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(251 113 133/var(--tw-bg-opacity))
    }

    .bg-rose-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(255 241 242/var(--tw-bg-opacity))
    }

    .bg-rose-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(244 63 94/var(--tw-bg-opacity))
    }

    .bg-rose-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(225 29 72/var(--tw-bg-opacity))
    }

    .bg-rose-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(190 18 60/var(--tw-bg-opacity))
    }

    .bg-rose-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(159 18 57/var(--tw-bg-opacity))
    }

    .bg-rose-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(136 19 55/var(--tw-bg-opacity))
    }

    .bg-sky-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(224 242 254/var(--tw-bg-opacity))
    }

    .bg-sky-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(186 230 253/var(--tw-bg-opacity))
    }

    .bg-sky-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(125 211 252/var(--tw-bg-opacity))
    }

    .bg-sky-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(56 189 248/var(--tw-bg-opacity))
    }

    .bg-sky-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(240 249 255/var(--tw-bg-opacity))
    }

    .bg-sky-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(14 165 233/var(--tw-bg-opacity))
    }

    .bg-sky-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(2 132 199/var(--tw-bg-opacity))
    }

    .bg-sky-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(3 105 161/var(--tw-bg-opacity))
    }

    .bg-sky-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(7 89 133/var(--tw-bg-opacity))
    }

    .bg-sky-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(12 74 110/var(--tw-bg-opacity))
    }

    .bg-slate-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(241 245 249/var(--tw-bg-opacity))
    }

    .bg-slate-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(226 232 240/var(--tw-bg-opacity))
    }

    .bg-slate-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(203 213 225/var(--tw-bg-opacity))
    }

    .bg-slate-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(148 163 184/var(--tw-bg-opacity))
    }

    .bg-slate-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(248 250 252/var(--tw-bg-opacity))
    }

    .bg-slate-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(100 116 139/var(--tw-bg-opacity))
    }

    .bg-slate-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(71 85 105/var(--tw-bg-opacity))
    }

    .bg-slate-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(51 65 85/var(--tw-bg-opacity))
    }

    .bg-slate-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(30 41 59/var(--tw-bg-opacity))
    }

    .bg-slate-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(15 23 42/var(--tw-bg-opacity))
    }

    .bg-stone-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(245 245 244/var(--tw-bg-opacity))
    }

    .bg-stone-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(231 229 228/var(--tw-bg-opacity))
    }

    .bg-stone-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(214 211 209/var(--tw-bg-opacity))
    }

    .bg-stone-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(168 162 158/var(--tw-bg-opacity))
    }

    .bg-stone-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 249/var(--tw-bg-opacity))
    }

    .bg-stone-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(120 113 108/var(--tw-bg-opacity))
    }

    .bg-stone-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(87 83 78/var(--tw-bg-opacity))
    }

    .bg-stone-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(68 64 60/var(--tw-bg-opacity))
    }

    .bg-stone-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(41 37 36/var(--tw-bg-opacity))
    }

    .bg-stone-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(28 25 23/var(--tw-bg-opacity))
    }

    .bg-teal-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(204 251 241/var(--tw-bg-opacity))
    }

    .bg-teal-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(153 246 228/var(--tw-bg-opacity))
    }

    .bg-teal-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(94 234 212/var(--tw-bg-opacity))
    }

    .bg-teal-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(45 212 191/var(--tw-bg-opacity))
    }

    .bg-teal-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(240 253 250/var(--tw-bg-opacity))
    }

    .bg-teal-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(20 184 166/var(--tw-bg-opacity))
    }

    .bg-teal-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(13 148 136/var(--tw-bg-opacity))
    }

    .bg-teal-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(15 118 110/var(--tw-bg-opacity))
    }

    .bg-teal-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(17 94 89/var(--tw-bg-opacity))
    }

    .bg-teal-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(19 78 74/var(--tw-bg-opacity))
    }

    .bg-violet-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(237 233 254/var(--tw-bg-opacity))
    }

    .bg-violet-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(221 214 254/var(--tw-bg-opacity))
    }

    .bg-violet-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(196 181 253/var(--tw-bg-opacity))
    }

    .bg-violet-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(167 139 250/var(--tw-bg-opacity))
    }

    .bg-violet-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(245 243 255/var(--tw-bg-opacity))
    }

    .bg-violet-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(139 92 246/var(--tw-bg-opacity))
    }

    .bg-violet-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(124 58 237/var(--tw-bg-opacity))
    }

    .bg-violet-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(109 40 217/var(--tw-bg-opacity))
    }

    .bg-violet-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(91 33 182/var(--tw-bg-opacity))
    }

    .bg-violet-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(76 29 149/var(--tw-bg-opacity))
    }

    .bg-yellow-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 249 195/var(--tw-bg-opacity))
    }

    .bg-yellow-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 240 138/var(--tw-bg-opacity))
    }

    .bg-yellow-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(253 224 71/var(--tw-bg-opacity))
    }

    .bg-yellow-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(250 204 21/var(--tw-bg-opacity))
    }

    .bg-yellow-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(254 252 232/var(--tw-bg-opacity))
    }

    .bg-yellow-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(234 179 8/var(--tw-bg-opacity))
    }

    .bg-yellow-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(202 138 4/var(--tw-bg-opacity))
    }

    .bg-yellow-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(161 98 7/var(--tw-bg-opacity))
    }

    .bg-yellow-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(133 77 14/var(--tw-bg-opacity))
    }

    .bg-yellow-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(113 63 18/var(--tw-bg-opacity))
    }

    .bg-zinc-100 {
      --tw-bg-opacity: 1;
      background-color: rgb(244 244 245/var(--tw-bg-opacity))
    }

    .bg-zinc-200 {
      --tw-bg-opacity: 1;
      background-color: rgb(228 228 231/var(--tw-bg-opacity))
    }

    .bg-zinc-300 {
      --tw-bg-opacity: 1;
      background-color: rgb(212 212 216/var(--tw-bg-opacity))
    }

    .bg-zinc-400 {
      --tw-bg-opacity: 1;
      background-color: rgb(161 161 170/var(--tw-bg-opacity))
    }

    .bg-zinc-50 {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 250/var(--tw-bg-opacity))
    }

    .bg-zinc-500 {
      --tw-bg-opacity: 1;
      background-color: rgb(113 113 122/var(--tw-bg-opacity))
    }

    .bg-zinc-600 {
      --tw-bg-opacity: 1;
      background-color: rgb(82 82 91/var(--tw-bg-opacity))
    }

    .bg-zinc-700 {
      --tw-bg-opacity: 1;
      background-color: rgb(63 63 70/var(--tw-bg-opacity))
    }

    .bg-zinc-800 {
      --tw-bg-opacity: 1;
      background-color: rgb(39 39 42/var(--tw-bg-opacity))
    }

    .bg-zinc-900 {
      --tw-bg-opacity: 1;
      background-color: rgb(24 24 27/var(--tw-bg-opacity))
    }

    .bg-gradient-to-b {
      background-image: linear-gradient(to bottom, var(--tw-gradient-stops))
    }

    .bg-gradient-to-bl {
      background-image: linear-gradient(to bottom left, var(--tw-gradient-stops))
    }

    .bg-gradient-to-br {
      background-image: linear-gradient(to bottom right, var(--tw-gradient-stops))
    }

    .bg-gradient-to-r {
      background-image: linear-gradient(to right, var(--tw-gradient-stops))
    }

    .bg-gradient-to-tr {
      background-image: linear-gradient(to top right, var(--tw-gradient-stops))
    }

    .from-\\[\\#27ae6069\\] {
      --tw-gradient-from: #27ae6069 var(--tw-gradient-from-position);
      --tw-gradient-to: rgba(39, 174, 96, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
    }

    .from-\\[\\#2980B969\\] {
      --tw-gradient-from: #2980b969 var(--tw-gradient-from-position);
      --tw-gradient-to: rgba(41, 128, 185, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
    }

    .from-red-500 {
      --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);
      --tw-gradient-to: rgba(239, 68, 68, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
    }

    .from-sky-400 {
      --tw-gradient-from: #38bdf8 var(--tw-gradient-from-position);
      --tw-gradient-to: rgba(56, 189, 248, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
    }

    .from-white {
      --tw-gradient-from: #fff var(--tw-gradient-from-position);
      --tw-gradient-to: hsla(0, 0%, 100%, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to)
    }

    .from-0\\% {
      --tw-gradient-from-position: 0%
    }

    .from-10\\% {
      --tw-gradient-from-position: 10%
    }

    .via-amber-600 {
      --tw-gradient-to: rgba(217, 119, 6, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), #d97706 var(--tw-gradient-via-position), var(--tw-gradient-to)
    }

    .via-purple-500 {
      --tw-gradient-to: rgba(168, 85, 247, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), #a855f7 var(--tw-gradient-via-position), var(--tw-gradient-to)
    }

    .via-white {
      --tw-gradient-to: hsla(0, 0%, 100%, 0) var(--tw-gradient-to-position);
      --tw-gradient-stops: var(--tw-gradient-from), #fff var(--tw-gradient-via-position), var(--tw-gradient-to)
    }

    .via-30\\% {
      --tw-gradient-via-position: 30%
    }

    .via-50\\% {
      --tw-gradient-via-position: 50%
    }

    .to-emerald-500 {
      --tw-gradient-to: #10b981 var(--tw-gradient-to-position)
    }

    .to-green-500 {
      --tw-gradient-to: #22c55e var(--tw-gradient-to-position)
    }

    .to-transparent {
      --tw-gradient-to: transparent var(--tw-gradient-to-position)
    }

    .to-100\\% {
      --tw-gradient-to-position: 100%
    }

    .bg-\\[length\\:200\\%_200\\%\\] {
      background-size: 200% 200%
    }

    .bg-\\[length\\:400\\%_100\\%\\] {
      background-size: 400% 100%
    }

    .bg-clip-text {
      -webkit-background-clip: text;
      background-clip: text
    }

    .p-0 {
      padding: 0
    }

    .p-0\\.5 {
      padding: .125rem
    }

    .p-1 {
      padding: .25rem
    }

    .p-1\\.5 {
      padding: .375rem
    }

    .p-14 {
      padding: 3.5rem
    }

    .p-16 {
      padding: 4rem
    }

    .p-2 {
      padding: .5rem
    }

    .p-2\\.5 {
      padding: .625rem
    }

    .p-20 {
      padding: 5rem
    }

    .p-24 {
      padding: 6rem
    }

    .p-28 {
      padding: 7rem
    }

    .p-3 {
      padding: .75rem
    }

    .p-3\\.5 {
      padding: .875rem
    }

    .p-32 {
      padding: 8rem
    }

    .p-36 {
      padding: 9rem
    }

    .p-4 {
      padding: 1rem
    }

    .p-40 {
      padding: 10rem
    }

    .p-44 {
      padding: 11rem
    }

    .p-48 {
      padding: 12rem
    }

    .p-52 {
      padding: 13rem
    }

    .p-56 {
      padding: 14rem
    }

    .p-60 {
      padding: 15rem
    }

    .p-64 {
      padding: 16rem
    }

    .p-72 {
      padding: 18rem
    }

    .p-80 {
      padding: 20rem
    }

    .p-96 {
      padding: 24rem
    }

    .p-px {
      padding: 1px
    }

    .px-0 {
      padding-left: 0;
      padding-right: 0
    }

    .px-0\\.5 {
      padding-left: .125rem;
      padding-right: .125rem
    }

    .px-1 {
      padding-left: .25rem;
      padding-right: .25rem
    }

    .px-1\\.5 {
      padding-left: .375rem;
      padding-right: .375rem
    }

    .px-14 {
      padding-left: 3.5rem;
      padding-right: 3.5rem
    }

    .px-16 {
      padding-left: 4rem;
      padding-right: 4rem
    }

    .px-2 {
      padding-left: .5rem;
      padding-right: .5rem
    }

    .px-2\\.5 {
      padding-left: .625rem;
      padding-right: .625rem
    }

    .px-20 {
      padding-left: 5rem;
      padding-right: 5rem
    }

    .px-24 {
      padding-left: 6rem;
      padding-right: 6rem
    }

    .px-28 {
      padding-left: 7rem;
      padding-right: 7rem
    }

    .px-3 {
      padding-left: .75rem;
      padding-right: .75rem
    }

    .px-3\\.5 {
      padding-left: .875rem;
      padding-right: .875rem
    }

    .px-32 {
      padding-left: 8rem;
      padding-right: 8rem
    }

    .px-36 {
      padding-left: 9rem;
      padding-right: 9rem
    }

    .px-4 {
      padding-left: 1rem;
      padding-right: 1rem
    }

    .px-40 {
      padding-left: 10rem;
      padding-right: 10rem
    }

    .px-44 {
      padding-left: 11rem;
      padding-right: 11rem
    }

    .px-48 {
      padding-left: 12rem;
      padding-right: 12rem
    }

    .px-52 {
      padding-left: 13rem;
      padding-right: 13rem
    }

    .px-56 {
      padding-left: 14rem;
      padding-right: 14rem
    }

    .px-60 {
      padding-left: 15rem;
      padding-right: 15rem
    }

    .px-64 {
      padding-left: 16rem;
      padding-right: 16rem
    }

    .px-72 {
      padding-left: 18rem;
      padding-right: 18rem
    }

    .px-80 {
      padding-left: 20rem;
      padding-right: 20rem
    }

    .px-96 {
      padding-left: 24rem;
      padding-right: 24rem
    }

    .px-px {
      padding-left: 1px;
      padding-right: 1px
    }

    .py-0 {
      padding-top: 0;
      padding-bottom: 0
    }

    .py-0\\.5 {
      padding-top: .125rem;
      padding-bottom: .125rem
    }

    .py-1 {
      padding-top: .25rem;
      padding-bottom: .25rem
    }

    .py-1\\.5 {
      padding-top: .375rem;
      padding-bottom: .375rem
    }

    .py-14 {
      padding-top: 3.5rem;
      padding-bottom: 3.5rem
    }

    .py-16 {
      padding-top: 4rem;
      padding-bottom: 4rem
    }

    .py-2 {
      padding-top: .5rem;
      padding-bottom: .5rem
    }

    .py-2\\.5 {
      padding-top: .625rem;
      padding-bottom: .625rem
    }

    .py-20 {
      padding-top: 5rem;
      padding-bottom: 5rem
    }

    .py-24 {
      padding-top: 6rem;
      padding-bottom: 6rem
    }

    .py-28 {
      padding-top: 7rem;
      padding-bottom: 7rem
    }

    .py-3 {
      padding-top: .75rem;
      padding-bottom: .75rem
    }

    .py-3\\.5 {
      padding-top: .875rem;
      padding-bottom: .875rem
    }

    .py-32 {
      padding-top: 8rem;
      padding-bottom: 8rem
    }

    .py-36 {
      padding-top: 9rem;
      padding-bottom: 9rem
    }

    .py-40 {
      padding-top: 10rem;
      padding-bottom: 10rem
    }

    .py-44 {
      padding-top: 11rem;
      padding-bottom: 11rem
    }

    .py-48 {
      padding-top: 12rem;
      padding-bottom: 12rem
    }

    .py-52 {
      padding-top: 13rem;
      padding-bottom: 13rem
    }

    .py-56 {
      padding-top: 14rem;
      padding-bottom: 14rem
    }

    .py-60 {
      padding-top: 15rem;
      padding-bottom: 15rem
    }

    .py-64 {
      padding-top: 16rem;
      padding-bottom: 16rem
    }

    .py-72 {
      padding-top: 18rem;
      padding-bottom: 18rem
    }

    .py-80 {
      padding-top: 20rem;
      padding-bottom: 20rem
    }

    .py-96 {
      padding-top: 24rem;
      padding-bottom: 24rem
    }

    .py-px {
      padding-top: 1px;
      padding-bottom: 1px
    }

    .pb-0 {
      padding-bottom: 0
    }

    .pb-0\\.5 {
      padding-bottom: .125rem
    }

    .pb-1 {
      padding-bottom: .25rem
    }

    .pb-1\\.5 {
      padding-bottom: .375rem
    }

    .pb-14 {
      padding-bottom: 3.5rem
    }

    .pb-16 {
      padding-bottom: 4rem
    }

    .pb-2 {
      padding-bottom: .5rem
    }

    .pb-2\\.5 {
      padding-bottom: .625rem
    }

    .pb-20 {
      padding-bottom: 5rem
    }

    .pb-24 {
      padding-bottom: 6rem
    }

    .pb-28 {
      padding-bottom: 7rem
    }

    .pb-3 {
      padding-bottom: .75rem
    }

    .pb-3\\.5 {
      padding-bottom: .875rem
    }

    .pb-32 {
      padding-bottom: 8rem
    }

    .pb-36 {
      padding-bottom: 9rem
    }

    .pb-40 {
      padding-bottom: 10rem
    }

    .pb-44 {
      padding-bottom: 11rem
    }

    .pb-48 {
      padding-bottom: 12rem
    }

    .pb-52 {
      padding-bottom: 13rem
    }

    .pb-56 {
      padding-bottom: 14rem
    }

    .pb-60 {
      padding-bottom: 15rem
    }

    .pb-64 {
      padding-bottom: 16rem
    }

    .pb-72 {
      padding-bottom: 18rem
    }

    .pb-80 {
      padding-bottom: 20rem
    }

    .pb-96 {
      padding-bottom: 24rem
    }

    .pb-px {
      padding-bottom: 1px
    }

    .pl-0 {
      padding-left: 0
    }

    .pl-0\\.5 {
      padding-left: .125rem
    }

    .pl-1 {
      padding-left: .25rem
    }

    .pl-1\\.5 {
      padding-left: .375rem
    }

    .pl-14 {
      padding-left: 3.5rem
    }

    .pl-16 {
      padding-left: 4rem
    }

    .pl-2 {
      padding-left: .5rem
    }

    .pl-2\\.5 {
      padding-left: .625rem
    }

    .pl-20 {
      padding-left: 5rem
    }

    .pl-24 {
      padding-left: 6rem
    }

    .pl-28 {
      padding-left: 7rem
    }

    .pl-3 {
      padding-left: .75rem
    }

    .pl-3\\.5 {
      padding-left: .875rem
    }

    .pl-32 {
      padding-left: 8rem
    }

    .pl-36 {
      padding-left: 9rem
    }

    .pl-40 {
      padding-left: 10rem
    }

    .pl-44 {
      padding-left: 11rem
    }

    .pl-48 {
      padding-left: 12rem
    }

    .pl-52 {
      padding-left: 13rem
    }

    .pl-56 {
      padding-left: 14rem
    }

    .pl-60 {
      padding-left: 15rem
    }

    .pl-64 {
      padding-left: 16rem
    }

    .pl-72 {
      padding-left: 18rem
    }

    .pl-80 {
      padding-left: 20rem
    }

    .pl-96 {
      padding-left: 24rem
    }

    .pl-px {
      padding-left: 1px
    }

    .pr-0 {
      padding-right: 0
    }

    .pr-0\\.5 {
      padding-right: .125rem
    }

    .pr-1 {
      padding-right: .25rem
    }

    .pr-1\\.5 {
      padding-right: .375rem
    }

    .pr-14 {
      padding-right: 3.5rem
    }

    .pr-16 {
      padding-right: 4rem
    }

    .pr-2 {
      padding-right: .5rem
    }

    .pr-2\\.5 {
      padding-right: .625rem
    }

    .pr-20 {
      padding-right: 5rem
    }

    .pr-24 {
      padding-right: 6rem
    }

    .pr-28 {
      padding-right: 7rem
    }

    .pr-3 {
      padding-right: .75rem
    }

    .pr-3\\.5 {
      padding-right: .875rem
    }

    .pr-32 {
      padding-right: 8rem
    }

    .pr-36 {
      padding-right: 9rem
    }

    .pr-40 {
      padding-right: 10rem
    }

    .pr-44 {
      padding-right: 11rem
    }

    .pr-48 {
      padding-right: 12rem
    }

    .pr-52 {
      padding-right: 13rem
    }

    .pr-56 {
      padding-right: 14rem
    }

    .pr-60 {
      padding-right: 15rem
    }

    .pr-64 {
      padding-right: 16rem
    }

    .pr-72 {
      padding-right: 18rem
    }

    .pr-80 {
      padding-right: 20rem
    }

    .pr-96 {
      padding-right: 24rem
    }

    .pr-px {
      padding-right: 1px
    }

    .pt-0 {
      padding-top: 0
    }

    .pt-0\\.5 {
      padding-top: .125rem
    }

    .pt-1 {
      padding-top: .25rem
    }

    .pt-1\\.5 {
      padding-top: .375rem
    }

    .pt-14 {
      padding-top: 3.5rem
    }

    .pt-16 {
      padding-top: 4rem
    }

    .pt-2 {
      padding-top: .5rem
    }

    .pt-2\\.5 {
      padding-top: .625rem
    }

    .pt-20 {
      padding-top: 5rem
    }

    .pt-24 {
      padding-top: 6rem
    }

    .pt-28 {
      padding-top: 7rem
    }

    .pt-3 {
      padding-top: .75rem
    }

    .pt-3\\.5 {
      padding-top: .875rem
    }

    .pt-32 {
      padding-top: 8rem
    }

    .pt-36 {
      padding-top: 9rem
    }

    .pt-40 {
      padding-top: 10rem
    }

    .pt-44 {
      padding-top: 11rem
    }

    .pt-48 {
      padding-top: 12rem
    }

    .pt-52 {
      padding-top: 13rem
    }

    .pt-56 {
      padding-top: 14rem
    }

    .pt-60 {
      padding-top: 15rem
    }

    .pt-64 {
      padding-top: 16rem
    }

    .pt-72 {
      padding-top: 18rem
    }

    .pt-80 {
      padding-top: 20rem
    }

    .pt-96 {
      padding-top: 24rem
    }

    .pt-px {
      padding-top: 1px
    }

    .text-center {
      text-align: center
    }

    .text-right {
      text-align: right
    }

    .text-justify {
      text-align: justify
    }

    .font-body, .font-headings {
      font-family: var(--font-raleway)
    }

    .text-2xl {
      font-size: 1.5rem;
      line-height: 2rem
    }

    .text-3xl {
      font-size: 1.875rem;
      line-height: 2.25rem
    }

    .text-4xl {
      font-size: 2.25rem;
      line-height: 2.5rem
    }

    .text-5xl {
      font-size: 3rem;
      line-height: 1
    }

    .text-6xl {
      font-size: 3.75rem;
      line-height: 1
    }

    .text-7xl {
      font-size: 4.5rem;
      line-height: 1
    }

    .text-8xl {
      font-size: 6rem;
      line-height: 1
    }

    .text-9xl {
      font-size: 8rem;
      line-height: 1
    }

    .text-base {
      font-size: 1rem;
      line-height: 1.5rem
    }

    .text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem
    }

    .text-sm {
      font-size: .875rem;
      line-height: 1.25rem
    }

    .text-xl {
      font-size: 1.25rem;
      line-height: 1.75rem
    }

    .text-xs {
      font-size: .75rem;
      line-height: 1rem
    }

    .font-bold {
      font-weight: 700
    }

    .font-medium {
      font-weight: 500
    }

    .text-accent-600 {
      --tw-text-opacity: 1;
      color: rgb(147 51 234/var(--tw-text-opacity))
    }

    .text-amber-100 {
      --tw-text-opacity: 1;
      color: rgb(254 243 199/var(--tw-text-opacity))
    }

    .text-amber-200 {
      --tw-text-opacity: 1;
      color: rgb(253 230 138/var(--tw-text-opacity))
    }

    .text-amber-300 {
      --tw-text-opacity: 1;
      color: rgb(252 211 77/var(--tw-text-opacity))
    }

    .text-amber-400 {
      --tw-text-opacity: 1;
      color: rgb(251 191 36/var(--tw-text-opacity))
    }

    .text-amber-50 {
      --tw-text-opacity: 1;
      color: rgb(255 251 235/var(--tw-text-opacity))
    }

    .text-amber-500 {
      --tw-text-opacity: 1;
      color: rgb(245 158 11/var(--tw-text-opacity))
    }

    .text-amber-600 {
      --tw-text-opacity: 1;
      color: rgb(217 119 6/var(--tw-text-opacity))
    }

    .text-amber-700 {
      --tw-text-opacity: 1;
      color: rgb(180 83 9/var(--tw-text-opacity))
    }

    .text-amber-800 {
      --tw-text-opacity: 1;
      color: rgb(146 64 14/var(--tw-text-opacity))
    }

    .text-amber-900 {
      --tw-text-opacity: 1;
      color: rgb(120 53 15/var(--tw-text-opacity))
    }

    .text-blue-100 {
      --tw-text-opacity: 1;
      color: rgb(219 234 254/var(--tw-text-opacity))
    }

    .text-blue-200 {
      --tw-text-opacity: 1;
      color: rgb(191 219 254/var(--tw-text-opacity))
    }

    .text-blue-300 {
      --tw-text-opacity: 1;
      color: rgb(147 197 253/var(--tw-text-opacity))
    }

    .text-blue-400 {
      --tw-text-opacity: 1;
      color: rgb(96 165 250/var(--tw-text-opacity))
    }

    .text-blue-50 {
      --tw-text-opacity: 1;
      color: rgb(239 246 255/var(--tw-text-opacity))
    }

    .text-blue-500 {
      --tw-text-opacity: 1;
      color: rgb(59 130 246/var(--tw-text-opacity))
    }

    .text-blue-600 {
      --tw-text-opacity: 1;
      color: rgb(37 99 235/var(--tw-text-opacity))
    }

    .text-blue-700 {
      --tw-text-opacity: 1;
      color: rgb(29 78 216/var(--tw-text-opacity))
    }

    .text-blue-800 {
      --tw-text-opacity: 1;
      color: rgb(30 64 175/var(--tw-text-opacity))
    }

    .text-blue-900 {
      --tw-text-opacity: 1;
      color: rgb(30 58 138/var(--tw-text-opacity))
    }

    .text-cyan-100 {
      --tw-text-opacity: 1;
      color: rgb(207 250 254/var(--tw-text-opacity))
    }

    .text-cyan-200 {
      --tw-text-opacity: 1;
      color: rgb(165 243 252/var(--tw-text-opacity))
    }

    .text-cyan-300 {
      --tw-text-opacity: 1;
      color: rgb(103 232 249/var(--tw-text-opacity))
    }

    .text-cyan-400 {
      --tw-text-opacity: 1;
      color: rgb(34 211 238/var(--tw-text-opacity))
    }

    .text-cyan-50 {
      --tw-text-opacity: 1;
      color: rgb(236 254 255/var(--tw-text-opacity))
    }

    .text-cyan-500 {
      --tw-text-opacity: 1;
      color: rgb(6 182 212/var(--tw-text-opacity))
    }

    .text-cyan-600 {
      --tw-text-opacity: 1;
      color: rgb(8 145 178/var(--tw-text-opacity))
    }

    .text-cyan-700 {
      --tw-text-opacity: 1;
      color: rgb(14 116 144/var(--tw-text-opacity))
    }

    .text-cyan-800 {
      --tw-text-opacity: 1;
      color: rgb(21 94 117/var(--tw-text-opacity))
    }

    .text-cyan-900 {
      --tw-text-opacity: 1;
      color: rgb(22 78 99/var(--tw-text-opacity))
    }

    .text-emerald-100 {
      --tw-text-opacity: 1;
      color: rgb(209 250 229/var(--tw-text-opacity))
    }

    .text-emerald-200 {
      --tw-text-opacity: 1;
      color: rgb(167 243 208/var(--tw-text-opacity))
    }

    .text-emerald-300 {
      --tw-text-opacity: 1;
      color: rgb(110 231 183/var(--tw-text-opacity))
    }

    .text-emerald-400 {
      --tw-text-opacity: 1;
      color: rgb(52 211 153/var(--tw-text-opacity))
    }

    .text-emerald-50 {
      --tw-text-opacity: 1;
      color: rgb(236 253 245/var(--tw-text-opacity))
    }

    .text-emerald-500 {
      --tw-text-opacity: 1;
      color: rgb(16 185 129/var(--tw-text-opacity))
    }

    .text-emerald-600 {
      --tw-text-opacity: 1;
      color: rgb(5 150 105/var(--tw-text-opacity))
    }

    .text-emerald-700 {
      --tw-text-opacity: 1;
      color: rgb(4 120 87/var(--tw-text-opacity))
    }

    .text-emerald-800 {
      --tw-text-opacity: 1;
      color: rgb(6 95 70/var(--tw-text-opacity))
    }

    .text-emerald-900 {
      --tw-text-opacity: 1;
      color: rgb(6 78 59/var(--tw-text-opacity))
    }

    .text-fuchsia-100 {
      --tw-text-opacity: 1;
      color: rgb(250 232 255/var(--tw-text-opacity))
    }

    .text-fuchsia-200 {
      --tw-text-opacity: 1;
      color: rgb(245 208 254/var(--tw-text-opacity))
    }

    .text-fuchsia-300 {
      --tw-text-opacity: 1;
      color: rgb(240 171 252/var(--tw-text-opacity))
    }

    .text-fuchsia-400 {
      --tw-text-opacity: 1;
      color: rgb(232 121 249/var(--tw-text-opacity))
    }

    .text-fuchsia-50 {
      --tw-text-opacity: 1;
      color: rgb(253 244 255/var(--tw-text-opacity))
    }

    .text-fuchsia-500 {
      --tw-text-opacity: 1;
      color: rgb(217 70 239/var(--tw-text-opacity))
    }

    .text-fuchsia-600 {
      --tw-text-opacity: 1;
      color: rgb(192 38 211/var(--tw-text-opacity))
    }

    .text-fuchsia-700 {
      --tw-text-opacity: 1;
      color: rgb(162 28 175/var(--tw-text-opacity))
    }

    .text-fuchsia-800 {
      --tw-text-opacity: 1;
      color: rgb(134 25 143/var(--tw-text-opacity))
    }

    .text-fuchsia-900 {
      --tw-text-opacity: 1;
      color: rgb(112 26 117/var(--tw-text-opacity))
    }

    .text-gray-100 {
      --tw-text-opacity: 1;
      color: rgb(243 244 246/var(--tw-text-opacity))
    }

    .text-gray-200 {
      --tw-text-opacity: 1;
      color: rgb(229 231 235/var(--tw-text-opacity))
    }

    .text-gray-300 {
      --tw-text-opacity: 1;
      color: rgb(209 213 219/var(--tw-text-opacity))
    }

    .text-gray-400 {
      --tw-text-opacity: 1;
      color: rgb(156 163 175/var(--tw-text-opacity))
    }

    .text-gray-50 {
      --tw-text-opacity: 1;
      color: rgb(249 250 251/var(--tw-text-opacity))
    }

    .text-gray-500 {
      --tw-text-opacity: 1;
      color: rgb(107 114 128/var(--tw-text-opacity))
    }

    .text-gray-600 {
      --tw-text-opacity: 1;
      color: rgb(75 85 99/var(--tw-text-opacity))
    }

    .text-gray-700 {
      --tw-text-opacity: 1;
      color: rgb(55 65 81/var(--tw-text-opacity))
    }

    .text-gray-800 {
      --tw-text-opacity: 1;
      color: rgb(31 41 55/var(--tw-text-opacity))
    }

    .text-gray-900 {
      --tw-text-opacity: 1;
      color: rgb(17 24 39/var(--tw-text-opacity))
    }

    .text-green-100 {
      --tw-text-opacity: 1;
      color: rgb(220 252 231/var(--tw-text-opacity))
    }

    .text-green-200 {
      --tw-text-opacity: 1;
      color: rgb(187 247 208/var(--tw-text-opacity))
    }

    .text-green-300 {
      --tw-text-opacity: 1;
      color: rgb(134 239 172/var(--tw-text-opacity))
    }

    .text-green-400 {
      --tw-text-opacity: 1;
      color: rgb(74 222 128/var(--tw-text-opacity))
    }

    .text-green-50 {
      --tw-text-opacity: 1;
      color: rgb(240 253 244/var(--tw-text-opacity))
    }

    .text-green-500 {
      --tw-text-opacity: 1;
      color: rgb(34 197 94/var(--tw-text-opacity))
    }

    .text-green-600 {
      --tw-text-opacity: 1;
      color: rgb(22 163 74/var(--tw-text-opacity))
    }

    .text-green-700 {
      --tw-text-opacity: 1;
      color: rgb(21 128 61/var(--tw-text-opacity))
    }

    .text-green-800 {
      --tw-text-opacity: 1;
      color: rgb(22 101 52/var(--tw-text-opacity))
    }

    .text-green-900 {
      --tw-text-opacity: 1;
      color: rgb(20 83 45/var(--tw-text-opacity))
    }

    .text-indigo-100 {
      --tw-text-opacity: 1;
      color: rgb(224 231 255/var(--tw-text-opacity))
    }

    .text-indigo-200 {
      --tw-text-opacity: 1;
      color: rgb(199 210 254/var(--tw-text-opacity))
    }

    .text-indigo-300 {
      --tw-text-opacity: 1;
      color: rgb(165 180 252/var(--tw-text-opacity))
    }

    .text-indigo-400 {
      --tw-text-opacity: 1;
      color: rgb(129 140 248/var(--tw-text-opacity))
    }

    .text-indigo-50 {
      --tw-text-opacity: 1;
      color: rgb(238 242 255/var(--tw-text-opacity))
    }

    .text-indigo-500 {
      --tw-text-opacity: 1;
      color: rgb(99 102 241/var(--tw-text-opacity))
    }

    .text-indigo-600 {
      --tw-text-opacity: 1;
      color: rgb(79 70 229/var(--tw-text-opacity))
    }

    .text-indigo-700 {
      --tw-text-opacity: 1;
      color: rgb(67 56 202/var(--tw-text-opacity))
    }

    .text-indigo-800 {
      --tw-text-opacity: 1;
      color: rgb(55 48 163/var(--tw-text-opacity))
    }

    .text-indigo-900 {
      --tw-text-opacity: 1;
      color: rgb(49 46 129/var(--tw-text-opacity))
    }

    .text-lime-100 {
      --tw-text-opacity: 1;
      color: rgb(236 252 203/var(--tw-text-opacity))
    }

    .text-lime-200 {
      --tw-text-opacity: 1;
      color: rgb(217 249 157/var(--tw-text-opacity))
    }

    .text-lime-300 {
      --tw-text-opacity: 1;
      color: rgb(190 242 100/var(--tw-text-opacity))
    }

    .text-lime-400 {
      --tw-text-opacity: 1;
      color: rgb(163 230 53/var(--tw-text-opacity))
    }

    .text-lime-50 {
      --tw-text-opacity: 1;
      color: rgb(247 254 231/var(--tw-text-opacity))
    }

    .text-lime-500 {
      --tw-text-opacity: 1;
      color: rgb(132 204 22/var(--tw-text-opacity))
    }

    .text-lime-600 {
      --tw-text-opacity: 1;
      color: rgb(101 163 13/var(--tw-text-opacity))
    }

    .text-lime-700 {
      --tw-text-opacity: 1;
      color: rgb(77 124 15/var(--tw-text-opacity))
    }

    .text-lime-800 {
      --tw-text-opacity: 1;
      color: rgb(63 98 18/var(--tw-text-opacity))
    }

    .text-lime-900 {
      --tw-text-opacity: 1;
      color: rgb(54 83 20/var(--tw-text-opacity))
    }

    .text-neutral-100 {
      --tw-text-opacity: 1;
      color: rgb(245 245 245/var(--tw-text-opacity))
    }

    .text-neutral-200 {
      --tw-text-opacity: 1;
      color: rgb(229 229 229/var(--tw-text-opacity))
    }

    .text-neutral-300 {
      --tw-text-opacity: 1;
      color: rgb(212 212 212/var(--tw-text-opacity))
    }

    .text-neutral-400 {
      --tw-text-opacity: 1;
      color: rgb(163 163 163/var(--tw-text-opacity))
    }

    .text-neutral-50 {
      --tw-text-opacity: 1;
      color: rgb(250 250 250/var(--tw-text-opacity))
    }

    .text-neutral-500 {
      --tw-text-opacity: 1;
      color: rgb(115 115 115/var(--tw-text-opacity))
    }

    .text-neutral-600 {
      --tw-text-opacity: 1;
      color: rgb(82 82 82/var(--tw-text-opacity))
    }

    .text-neutral-700 {
      --tw-text-opacity: 1;
      color: rgb(64 64 64/var(--tw-text-opacity))
    }

    .text-neutral-800 {
      --tw-text-opacity: 1;
      color: rgb(38 38 38/var(--tw-text-opacity))
    }

    .text-neutral-900 {
      --tw-text-opacity: 1;
      color: rgb(23 23 23/var(--tw-text-opacity))
    }

    .text-orange-100 {
      --tw-text-opacity: 1;
      color: rgb(255 237 213/var(--tw-text-opacity))
    }

    .text-orange-200 {
      --tw-text-opacity: 1;
      color: rgb(254 215 170/var(--tw-text-opacity))
    }

    .text-orange-300 {
      --tw-text-opacity: 1;
      color: rgb(253 186 116/var(--tw-text-opacity))
    }

    .text-orange-400 {
      --tw-text-opacity: 1;
      color: rgb(251 146 60/var(--tw-text-opacity))
    }

    .text-orange-50 {
      --tw-text-opacity: 1;
      color: rgb(255 247 237/var(--tw-text-opacity))
    }

    .text-orange-500 {
      --tw-text-opacity: 1;
      color: rgb(249 115 22/var(--tw-text-opacity))
    }

    .text-orange-600 {
      --tw-text-opacity: 1;
      color: rgb(234 88 12/var(--tw-text-opacity))
    }

    .text-orange-700 {
      --tw-text-opacity: 1;
      color: rgb(194 65 12/var(--tw-text-opacity))
    }

    .text-orange-800 {
      --tw-text-opacity: 1;
      color: rgb(154 52 18/var(--tw-text-opacity))
    }

    .text-orange-900 {
      --tw-text-opacity: 1;
      color: rgb(124 45 18/var(--tw-text-opacity))
    }

    .text-pink-100 {
      --tw-text-opacity: 1;
      color: rgb(252 231 243/var(--tw-text-opacity))
    }

    .text-pink-200 {
      --tw-text-opacity: 1;
      color: rgb(251 207 232/var(--tw-text-opacity))
    }

    .text-pink-300 {
      --tw-text-opacity: 1;
      color: rgb(249 168 212/var(--tw-text-opacity))
    }

    .text-pink-400 {
      --tw-text-opacity: 1;
      color: rgb(244 114 182/var(--tw-text-opacity))
    }

    .text-pink-50 {
      --tw-text-opacity: 1;
      color: rgb(253 242 248/var(--tw-text-opacity))
    }

    .text-pink-500 {
      --tw-text-opacity: 1;
      color: rgb(236 72 153/var(--tw-text-opacity))
    }

    .text-pink-600 {
      --tw-text-opacity: 1;
      color: rgb(219 39 119/var(--tw-text-opacity))
    }

    .text-pink-700 {
      --tw-text-opacity: 1;
      color: rgb(190 24 93/var(--tw-text-opacity))
    }

    .text-pink-800 {
      --tw-text-opacity: 1;
      color: rgb(157 23 77/var(--tw-text-opacity))
    }

    .text-pink-900 {
      --tw-text-opacity: 1;
      color: rgb(131 24 67/var(--tw-text-opacity))
    }

    .text-purple-100 {
      --tw-text-opacity: 1;
      color: rgb(243 232 255/var(--tw-text-opacity))
    }

    .text-purple-200 {
      --tw-text-opacity: 1;
      color: rgb(233 213 255/var(--tw-text-opacity))
    }

    .text-purple-300 {
      --tw-text-opacity: 1;
      color: rgb(216 180 254/var(--tw-text-opacity))
    }

    .text-purple-400 {
      --tw-text-opacity: 1;
      color: rgb(192 132 252/var(--tw-text-opacity))
    }

    .text-purple-50 {
      --tw-text-opacity: 1;
      color: rgb(250 245 255/var(--tw-text-opacity))
    }

    .text-purple-500 {
      --tw-text-opacity: 1;
      color: rgb(168 85 247/var(--tw-text-opacity))
    }

    .text-purple-600 {
      --tw-text-opacity: 1;
      color: rgb(147 51 234/var(--tw-text-opacity))
    }

    .text-purple-700 {
      --tw-text-opacity: 1;
      color: rgb(126 34 206/var(--tw-text-opacity))
    }

    .text-purple-800 {
      --tw-text-opacity: 1;
      color: rgb(107 33 168/var(--tw-text-opacity))
    }

    .text-purple-900 {
      --tw-text-opacity: 1;
      color: rgb(88 28 135/var(--tw-text-opacity))
    }

    .text-red-100 {
      --tw-text-opacity: 1;
      color: rgb(254 226 226/var(--tw-text-opacity))
    }

    .text-red-200 {
      --tw-text-opacity: 1;
      color: rgb(254 202 202/var(--tw-text-opacity))
    }

    .text-red-300 {
      --tw-text-opacity: 1;
      color: rgb(252 165 165/var(--tw-text-opacity))
    }

    .text-red-400 {
      --tw-text-opacity: 1;
      color: rgb(248 113 113/var(--tw-text-opacity))
    }

    .text-red-50 {
      --tw-text-opacity: 1;
      color: rgb(254 242 242/var(--tw-text-opacity))
    }

    .text-red-500 {
      --tw-text-opacity: 1;
      color: rgb(239 68 68/var(--tw-text-opacity))
    }

    .text-red-600 {
      --tw-text-opacity: 1;
      color: rgb(220 38 38/var(--tw-text-opacity))
    }

    .text-red-700 {
      --tw-text-opacity: 1;
      color: rgb(185 28 28/var(--tw-text-opacity))
    }

    .text-red-800 {
      --tw-text-opacity: 1;
      color: rgb(153 27 27/var(--tw-text-opacity))
    }

    .text-red-900 {
      --tw-text-opacity: 1;
      color: rgb(127 29 29/var(--tw-text-opacity))
    }

    .text-rose-100 {
      --tw-text-opacity: 1;
      color: rgb(255 228 230/var(--tw-text-opacity))
    }

    .text-rose-200 {
      --tw-text-opacity: 1;
      color: rgb(254 205 211/var(--tw-text-opacity))
    }

    .text-rose-300 {
      --tw-text-opacity: 1;
      color: rgb(253 164 175/var(--tw-text-opacity))
    }

    .text-rose-400 {
      --tw-text-opacity: 1;
      color: rgb(251 113 133/var(--tw-text-opacity))
    }

    .text-rose-50 {
      --tw-text-opacity: 1;
      color: rgb(255 241 242/var(--tw-text-opacity))
    }

    .text-rose-500 {
      --tw-text-opacity: 1;
      color: rgb(244 63 94/var(--tw-text-opacity))
    }

    .text-rose-600 {
      --tw-text-opacity: 1;
      color: rgb(225 29 72/var(--tw-text-opacity))
    }

    .text-rose-700 {
      --tw-text-opacity: 1;
      color: rgb(190 18 60/var(--tw-text-opacity))
    }

    .text-rose-800 {
      --tw-text-opacity: 1;
      color: rgb(159 18 57/var(--tw-text-opacity))
    }

    .text-rose-900 {
      --tw-text-opacity: 1;
      color: rgb(136 19 55/var(--tw-text-opacity))
    }

    .text-sky-100 {
      --tw-text-opacity: 1;
      color: rgb(224 242 254/var(--tw-text-opacity))
    }

    .text-sky-200 {
      --tw-text-opacity: 1;
      color: rgb(186 230 253/var(--tw-text-opacity))
    }

    .text-sky-300 {
      --tw-text-opacity: 1;
      color: rgb(125 211 252/var(--tw-text-opacity))
    }

    .text-sky-400 {
      --tw-text-opacity: 1;
      color: rgb(56 189 248/var(--tw-text-opacity))
    }

    .text-sky-50 {
      --tw-text-opacity: 1;
      color: rgb(240 249 255/var(--tw-text-opacity))
    }

    .text-sky-500 {
      --tw-text-opacity: 1;
      color: rgb(14 165 233/var(--tw-text-opacity))
    }

    .text-sky-600 {
      --tw-text-opacity: 1;
      color: rgb(2 132 199/var(--tw-text-opacity))
    }

    .text-sky-700 {
      --tw-text-opacity: 1;
      color: rgb(3 105 161/var(--tw-text-opacity))
    }

    .text-sky-800 {
      --tw-text-opacity: 1;
      color: rgb(7 89 133/var(--tw-text-opacity))
    }

    .text-sky-900 {
      --tw-text-opacity: 1;
      color: rgb(12 74 110/var(--tw-text-opacity))
    }

    .text-slate-100 {
      --tw-text-opacity: 1;
      color: rgb(241 245 249/var(--tw-text-opacity))
    }

    .text-slate-200 {
      --tw-text-opacity: 1;
      color: rgb(226 232 240/var(--tw-text-opacity))
    }

    .text-slate-300 {
      --tw-text-opacity: 1;
      color: rgb(203 213 225/var(--tw-text-opacity))
    }

    .text-slate-400 {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    .text-slate-50 {
      --tw-text-opacity: 1;
      color: rgb(248 250 252/var(--tw-text-opacity))
    }

    .text-slate-500 {
      --tw-text-opacity: 1;
      color: rgb(100 116 139/var(--tw-text-opacity))
    }

    .text-slate-600 {
      --tw-text-opacity: 1;
      color: rgb(71 85 105/var(--tw-text-opacity))
    }

    .text-slate-700 {
      --tw-text-opacity: 1;
      color: rgb(51 65 85/var(--tw-text-opacity))
    }

    .text-slate-800 {
      --tw-text-opacity: 1;
      color: rgb(30 41 59/var(--tw-text-opacity))
    }

    .text-slate-900 {
      --tw-text-opacity: 1;
      color: rgb(15 23 42/var(--tw-text-opacity))
    }

    .text-stone-100 {
      --tw-text-opacity: 1;
      color: rgb(245 245 244/var(--tw-text-opacity))
    }

    .text-stone-200 {
      --tw-text-opacity: 1;
      color: rgb(231 229 228/var(--tw-text-opacity))
    }

    .text-stone-300 {
      --tw-text-opacity: 1;
      color: rgb(214 211 209/var(--tw-text-opacity))
    }

    .text-stone-400 {
      --tw-text-opacity: 1;
      color: rgb(168 162 158/var(--tw-text-opacity))
    }

    .text-stone-50 {
      --tw-text-opacity: 1;
      color: rgb(250 250 249/var(--tw-text-opacity))
    }

    .text-stone-500 {
      --tw-text-opacity: 1;
      color: rgb(120 113 108/var(--tw-text-opacity))
    }

    .text-stone-600 {
      --tw-text-opacity: 1;
      color: rgb(87 83 78/var(--tw-text-opacity))
    }

    .text-stone-700 {
      --tw-text-opacity: 1;
      color: rgb(68 64 60/var(--tw-text-opacity))
    }

    .text-stone-800 {
      --tw-text-opacity: 1;
      color: rgb(41 37 36/var(--tw-text-opacity))
    }

    .text-stone-900 {
      --tw-text-opacity: 1;
      color: rgb(28 25 23/var(--tw-text-opacity))
    }

    .text-teal-100 {
      --tw-text-opacity: 1;
      color: rgb(204 251 241/var(--tw-text-opacity))
    }

    .text-teal-200 {
      --tw-text-opacity: 1;
      color: rgb(153 246 228/var(--tw-text-opacity))
    }

    .text-teal-300 {
      --tw-text-opacity: 1;
      color: rgb(94 234 212/var(--tw-text-opacity))
    }

    .text-teal-400 {
      --tw-text-opacity: 1;
      color: rgb(45 212 191/var(--tw-text-opacity))
    }

    .text-teal-50 {
      --tw-text-opacity: 1;
      color: rgb(240 253 250/var(--tw-text-opacity))
    }

    .text-teal-500 {
      --tw-text-opacity: 1;
      color: rgb(20 184 166/var(--tw-text-opacity))
    }

    .text-teal-600 {
      --tw-text-opacity: 1;
      color: rgb(13 148 136/var(--tw-text-opacity))
    }

    .text-teal-700 {
      --tw-text-opacity: 1;
      color: rgb(15 118 110/var(--tw-text-opacity))
    }

    .text-teal-800 {
      --tw-text-opacity: 1;
      color: rgb(17 94 89/var(--tw-text-opacity))
    }

    .text-teal-900 {
      --tw-text-opacity: 1;
      color: rgb(19 78 74/var(--tw-text-opacity))
    }

    .text-transparent {
      color: transparent
    }

    .text-violet-100 {
      --tw-text-opacity: 1;
      color: rgb(237 233 254/var(--tw-text-opacity))
    }

    .text-violet-200 {
      --tw-text-opacity: 1;
      color: rgb(221 214 254/var(--tw-text-opacity))
    }

    .text-violet-300 {
      --tw-text-opacity: 1;
      color: rgb(196 181 253/var(--tw-text-opacity))
    }

    .text-violet-400 {
      --tw-text-opacity: 1;
      color: rgb(167 139 250/var(--tw-text-opacity))
    }

    .text-violet-50 {
      --tw-text-opacity: 1;
      color: rgb(245 243 255/var(--tw-text-opacity))
    }

    .text-violet-500 {
      --tw-text-opacity: 1;
      color: rgb(139 92 246/var(--tw-text-opacity))
    }

    .text-violet-600 {
      --tw-text-opacity: 1;
      color: rgb(124 58 237/var(--tw-text-opacity))
    }

    .text-violet-700 {
      --tw-text-opacity: 1;
      color: rgb(109 40 217/var(--tw-text-opacity))
    }

    .text-violet-800 {
      --tw-text-opacity: 1;
      color: rgb(91 33 182/var(--tw-text-opacity))
    }

    .text-violet-900 {
      --tw-text-opacity: 1;
      color: rgb(76 29 149/var(--tw-text-opacity))
    }

    .text-yellow-100 {
      --tw-text-opacity: 1;
      color: rgb(254 249 195/var(--tw-text-opacity))
    }

    .text-yellow-200 {
      --tw-text-opacity: 1;
      color: rgb(254 240 138/var(--tw-text-opacity))
    }

    .text-yellow-300 {
      --tw-text-opacity: 1;
      color: rgb(253 224 71/var(--tw-text-opacity))
    }

    .text-yellow-400 {
      --tw-text-opacity: 1;
      color: rgb(250 204 21/var(--tw-text-opacity))
    }

    .text-yellow-50 {
      --tw-text-opacity: 1;
      color: rgb(254 252 232/var(--tw-text-opacity))
    }

    .text-yellow-500 {
      --tw-text-opacity: 1;
      color: rgb(234 179 8/var(--tw-text-opacity))
    }

    .text-yellow-600 {
      --tw-text-opacity: 1;
      color: rgb(202 138 4/var(--tw-text-opacity))
    }

    .text-yellow-700 {
      --tw-text-opacity: 1;
      color: rgb(161 98 7/var(--tw-text-opacity))
    }

    .text-yellow-800 {
      --tw-text-opacity: 1;
      color: rgb(133 77 14/var(--tw-text-opacity))
    }

    .text-yellow-900 {
      --tw-text-opacity: 1;
      color: rgb(113 63 18/var(--tw-text-opacity))
    }

    .text-zinc-100 {
      --tw-text-opacity: 1;
      color: rgb(244 244 245/var(--tw-text-opacity))
    }

    .text-zinc-200 {
      --tw-text-opacity: 1;
      color: rgb(228 228 231/var(--tw-text-opacity))
    }

    .text-zinc-300 {
      --tw-text-opacity: 1;
      color: rgb(212 212 216/var(--tw-text-opacity))
    }

    .text-zinc-400 {
      --tw-text-opacity: 1;
      color: rgb(161 161 170/var(--tw-text-opacity))
    }

    .text-zinc-50 {
      --tw-text-opacity: 1;
      color: rgb(250 250 250/var(--tw-text-opacity))
    }

    .text-zinc-500 {
      --tw-text-opacity: 1;
      color: rgb(113 113 122/var(--tw-text-opacity))
    }

    .text-zinc-600 {
      --tw-text-opacity: 1;
      color: rgb(82 82 91/var(--tw-text-opacity))
    }

    .text-zinc-700 {
      --tw-text-opacity: 1;
      color: rgb(63 63 70/var(--tw-text-opacity))
    }

    .text-zinc-800 {
      --tw-text-opacity: 1;
      color: rgb(39 39 42/var(--tw-text-opacity))
    }

    .text-zinc-900 {
      --tw-text-opacity: 1;
      color: rgb(24 24 27/var(--tw-text-opacity))
    }

    .ring-amber-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 243 199/var(--tw-ring-opacity))
    }

    .ring-amber-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 230 138/var(--tw-ring-opacity))
    }

    .ring-amber-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 211 77/var(--tw-ring-opacity))
    }

    .ring-amber-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 191 36/var(--tw-ring-opacity))
    }

    .ring-amber-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 251 235/var(--tw-ring-opacity))
    }

    .ring-amber-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 158 11/var(--tw-ring-opacity))
    }

    .ring-amber-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 119 6/var(--tw-ring-opacity))
    }

    .ring-amber-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(180 83 9/var(--tw-ring-opacity))
    }

    .ring-amber-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(146 64 14/var(--tw-ring-opacity))
    }

    .ring-amber-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(120 53 15/var(--tw-ring-opacity))
    }

    .ring-blue-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(219 234 254/var(--tw-ring-opacity))
    }

    .ring-blue-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(191 219 254/var(--tw-ring-opacity))
    }

    .ring-blue-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(147 197 253/var(--tw-ring-opacity))
    }

    .ring-blue-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(96 165 250/var(--tw-ring-opacity))
    }

    .ring-blue-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(239 246 255/var(--tw-ring-opacity))
    }

    .ring-blue-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(59 130 246/var(--tw-ring-opacity))
    }

    .ring-blue-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(37 99 235/var(--tw-ring-opacity))
    }

    .ring-blue-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(29 78 216/var(--tw-ring-opacity))
    }

    .ring-blue-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 64 175/var(--tw-ring-opacity))
    }

    .ring-blue-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 58 138/var(--tw-ring-opacity))
    }

    .ring-cyan-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(207 250 254/var(--tw-ring-opacity))
    }

    .ring-cyan-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(165 243 252/var(--tw-ring-opacity))
    }

    .ring-cyan-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(103 232 249/var(--tw-ring-opacity))
    }

    .ring-cyan-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(34 211 238/var(--tw-ring-opacity))
    }

    .ring-cyan-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 254 255/var(--tw-ring-opacity))
    }

    .ring-cyan-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 182 212/var(--tw-ring-opacity))
    }

    .ring-cyan-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(8 145 178/var(--tw-ring-opacity))
    }

    .ring-cyan-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(14 116 144/var(--tw-ring-opacity))
    }

    .ring-cyan-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(21 94 117/var(--tw-ring-opacity))
    }

    .ring-cyan-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 78 99/var(--tw-ring-opacity))
    }

    .ring-emerald-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(209 250 229/var(--tw-ring-opacity))
    }

    .ring-emerald-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(167 243 208/var(--tw-ring-opacity))
    }

    .ring-emerald-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(110 231 183/var(--tw-ring-opacity))
    }

    .ring-emerald-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(52 211 153/var(--tw-ring-opacity))
    }

    .ring-emerald-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 253 245/var(--tw-ring-opacity))
    }

    .ring-emerald-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(16 185 129/var(--tw-ring-opacity))
    }

    .ring-emerald-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(5 150 105/var(--tw-ring-opacity))
    }

    .ring-emerald-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(4 120 87/var(--tw-ring-opacity))
    }

    .ring-emerald-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 95 70/var(--tw-ring-opacity))
    }

    .ring-emerald-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 78 59/var(--tw-ring-opacity))
    }

    .ring-fuchsia-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 232 255/var(--tw-ring-opacity))
    }

    .ring-fuchsia-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 208 254/var(--tw-ring-opacity))
    }

    .ring-fuchsia-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 171 252/var(--tw-ring-opacity))
    }

    .ring-fuchsia-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(232 121 249/var(--tw-ring-opacity))
    }

    .ring-fuchsia-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 244 255/var(--tw-ring-opacity))
    }

    .ring-fuchsia-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 70 239/var(--tw-ring-opacity))
    }

    .ring-fuchsia-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(192 38 211/var(--tw-ring-opacity))
    }

    .ring-fuchsia-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(162 28 175/var(--tw-ring-opacity))
    }

    .ring-fuchsia-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(134 25 143/var(--tw-ring-opacity))
    }

    .ring-fuchsia-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(112 26 117/var(--tw-ring-opacity))
    }

    .ring-gray-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(243 244 246/var(--tw-ring-opacity))
    }

    .ring-gray-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(229 231 235/var(--tw-ring-opacity))
    }

    .ring-gray-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(209 213 219/var(--tw-ring-opacity))
    }

    .ring-gray-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(156 163 175/var(--tw-ring-opacity))
    }

    .ring-gray-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 250 251/var(--tw-ring-opacity))
    }

    .ring-gray-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(107 114 128/var(--tw-ring-opacity))
    }

    .ring-gray-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(75 85 99/var(--tw-ring-opacity))
    }

    .ring-gray-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(55 65 81/var(--tw-ring-opacity))
    }

    .ring-gray-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(31 41 55/var(--tw-ring-opacity))
    }

    .ring-gray-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(17 24 39/var(--tw-ring-opacity))
    }

    .ring-green-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(220 252 231/var(--tw-ring-opacity))
    }

    .ring-green-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(187 247 208/var(--tw-ring-opacity))
    }

    .ring-green-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(134 239 172/var(--tw-ring-opacity))
    }

    .ring-green-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(74 222 128/var(--tw-ring-opacity))
    }

    .ring-green-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 253 244/var(--tw-ring-opacity))
    }

    .ring-green-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(34 197 94/var(--tw-ring-opacity))
    }

    .ring-green-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 163 74/var(--tw-ring-opacity))
    }

    .ring-green-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(21 128 61/var(--tw-ring-opacity))
    }

    .ring-green-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 101 52/var(--tw-ring-opacity))
    }

    .ring-green-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(20 83 45/var(--tw-ring-opacity))
    }

    .ring-indigo-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(224 231 255/var(--tw-ring-opacity))
    }

    .ring-indigo-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(199 210 254/var(--tw-ring-opacity))
    }

    .ring-indigo-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(165 180 252/var(--tw-ring-opacity))
    }

    .ring-indigo-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(129 140 248/var(--tw-ring-opacity))
    }

    .ring-indigo-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(238 242 255/var(--tw-ring-opacity))
    }

    .ring-indigo-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(99 102 241/var(--tw-ring-opacity))
    }

    .ring-indigo-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(79 70 229/var(--tw-ring-opacity))
    }

    .ring-indigo-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(67 56 202/var(--tw-ring-opacity))
    }

    .ring-indigo-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(55 48 163/var(--tw-ring-opacity))
    }

    .ring-indigo-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(49 46 129/var(--tw-ring-opacity))
    }

    .ring-lime-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 252 203/var(--tw-ring-opacity))
    }

    .ring-lime-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 249 157/var(--tw-ring-opacity))
    }

    .ring-lime-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 242 100/var(--tw-ring-opacity))
    }

    .ring-lime-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(163 230 53/var(--tw-ring-opacity))
    }

    .ring-lime-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(247 254 231/var(--tw-ring-opacity))
    }

    .ring-lime-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(132 204 22/var(--tw-ring-opacity))
    }

    .ring-lime-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(101 163 13/var(--tw-ring-opacity))
    }

    .ring-lime-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(77 124 15/var(--tw-ring-opacity))
    }

    .ring-lime-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(63 98 18/var(--tw-ring-opacity))
    }

    .ring-lime-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(54 83 20/var(--tw-ring-opacity))
    }

    .ring-neutral-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 245 245/var(--tw-ring-opacity))
    }

    .ring-neutral-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(229 229 229/var(--tw-ring-opacity))
    }

    .ring-neutral-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(212 212 212/var(--tw-ring-opacity))
    }

    .ring-neutral-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(163 163 163/var(--tw-ring-opacity))
    }

    .ring-neutral-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 250/var(--tw-ring-opacity))
    }

    .ring-neutral-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(115 115 115/var(--tw-ring-opacity))
    }

    .ring-neutral-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(82 82 82/var(--tw-ring-opacity))
    }

    .ring-neutral-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(64 64 64/var(--tw-ring-opacity))
    }

    .ring-neutral-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(38 38 38/var(--tw-ring-opacity))
    }

    .ring-neutral-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(23 23 23/var(--tw-ring-opacity))
    }

    .ring-orange-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 237 213/var(--tw-ring-opacity))
    }

    .ring-orange-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 215 170/var(--tw-ring-opacity))
    }

    .ring-orange-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 186 116/var(--tw-ring-opacity))
    }

    .ring-orange-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 146 60/var(--tw-ring-opacity))
    }

    .ring-orange-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 247 237/var(--tw-ring-opacity))
    }

    .ring-orange-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 115 22/var(--tw-ring-opacity))
    }

    .ring-orange-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(234 88 12/var(--tw-ring-opacity))
    }

    .ring-orange-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(194 65 12/var(--tw-ring-opacity))
    }

    .ring-orange-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(154 52 18/var(--tw-ring-opacity))
    }

    .ring-orange-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(124 45 18/var(--tw-ring-opacity))
    }

    .ring-pink-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 231 243/var(--tw-ring-opacity))
    }

    .ring-pink-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 207 232/var(--tw-ring-opacity))
    }

    .ring-pink-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 168 212/var(--tw-ring-opacity))
    }

    .ring-pink-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 114 182/var(--tw-ring-opacity))
    }

    .ring-pink-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 242 248/var(--tw-ring-opacity))
    }

    .ring-pink-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 72 153/var(--tw-ring-opacity))
    }

    .ring-pink-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(219 39 119/var(--tw-ring-opacity))
    }

    .ring-pink-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 24 93/var(--tw-ring-opacity))
    }

    .ring-pink-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(157 23 77/var(--tw-ring-opacity))
    }

    .ring-pink-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(131 24 67/var(--tw-ring-opacity))
    }

    .ring-purple-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(243 232 255/var(--tw-ring-opacity))
    }

    .ring-purple-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(233 213 255/var(--tw-ring-opacity))
    }

    .ring-purple-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(216 180 254/var(--tw-ring-opacity))
    }

    .ring-purple-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(192 132 252/var(--tw-ring-opacity))
    }

    .ring-purple-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 245 255/var(--tw-ring-opacity))
    }

    .ring-purple-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(168 85 247/var(--tw-ring-opacity))
    }

    .ring-purple-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(147 51 234/var(--tw-ring-opacity))
    }

    .ring-purple-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(126 34 206/var(--tw-ring-opacity))
    }

    .ring-purple-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(107 33 168/var(--tw-ring-opacity))
    }

    .ring-purple-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(88 28 135/var(--tw-ring-opacity))
    }

    .ring-red-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 226 226/var(--tw-ring-opacity))
    }

    .ring-red-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 202 202/var(--tw-ring-opacity))
    }

    .ring-red-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 165 165/var(--tw-ring-opacity))
    }

    .ring-red-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(248 113 113/var(--tw-ring-opacity))
    }

    .ring-red-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 242 242/var(--tw-ring-opacity))
    }

    .ring-red-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(239 68 68/var(--tw-ring-opacity))
    }

    .ring-red-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(220 38 38/var(--tw-ring-opacity))
    }

    .ring-red-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(185 28 28/var(--tw-ring-opacity))
    }

    .ring-red-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(153 27 27/var(--tw-ring-opacity))
    }

    .ring-red-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(127 29 29/var(--tw-ring-opacity))
    }

    .ring-rose-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 228 230/var(--tw-ring-opacity))
    }

    .ring-rose-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 205 211/var(--tw-ring-opacity))
    }

    .ring-rose-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 164 175/var(--tw-ring-opacity))
    }

    .ring-rose-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 113 133/var(--tw-ring-opacity))
    }

    .ring-rose-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 241 242/var(--tw-ring-opacity))
    }

    .ring-rose-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 63 94/var(--tw-ring-opacity))
    }

    .ring-rose-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(225 29 72/var(--tw-ring-opacity))
    }

    .ring-rose-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 18 60/var(--tw-ring-opacity))
    }

    .ring-rose-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(159 18 57/var(--tw-ring-opacity))
    }

    .ring-rose-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(136 19 55/var(--tw-ring-opacity))
    }

    .ring-sky-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(224 242 254/var(--tw-ring-opacity))
    }

    .ring-sky-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(186 230 253/var(--tw-ring-opacity))
    }

    .ring-sky-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(125 211 252/var(--tw-ring-opacity))
    }

    .ring-sky-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(56 189 248/var(--tw-ring-opacity))
    }

    .ring-sky-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 249 255/var(--tw-ring-opacity))
    }

    .ring-sky-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(14 165 233/var(--tw-ring-opacity))
    }

    .ring-sky-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(2 132 199/var(--tw-ring-opacity))
    }

    .ring-sky-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(3 105 161/var(--tw-ring-opacity))
    }

    .ring-sky-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(7 89 133/var(--tw-ring-opacity))
    }

    .ring-sky-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(12 74 110/var(--tw-ring-opacity))
    }

    .ring-slate-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(241 245 249/var(--tw-ring-opacity))
    }

    .ring-slate-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(226 232 240/var(--tw-ring-opacity))
    }

    .ring-slate-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(203 213 225/var(--tw-ring-opacity))
    }

    .ring-slate-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(148 163 184/var(--tw-ring-opacity))
    }

    .ring-slate-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(248 250 252/var(--tw-ring-opacity))
    }

    .ring-slate-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(100 116 139/var(--tw-ring-opacity))
    }

    .ring-slate-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(71 85 105/var(--tw-ring-opacity))
    }

    .ring-slate-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(51 65 85/var(--tw-ring-opacity))
    }

    .ring-slate-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 41 59/var(--tw-ring-opacity))
    }

    .ring-slate-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(15 23 42/var(--tw-ring-opacity))
    }

    .ring-stone-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 245 244/var(--tw-ring-opacity))
    }

    .ring-stone-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(231 229 228/var(--tw-ring-opacity))
    }

    .ring-stone-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(214 211 209/var(--tw-ring-opacity))
    }

    .ring-stone-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(168 162 158/var(--tw-ring-opacity))
    }

    .ring-stone-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 249/var(--tw-ring-opacity))
    }

    .ring-stone-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(120 113 108/var(--tw-ring-opacity))
    }

    .ring-stone-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(87 83 78/var(--tw-ring-opacity))
    }

    .ring-stone-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(68 64 60/var(--tw-ring-opacity))
    }

    .ring-stone-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(41 37 36/var(--tw-ring-opacity))
    }

    .ring-stone-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(28 25 23/var(--tw-ring-opacity))
    }

    .ring-teal-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(204 251 241/var(--tw-ring-opacity))
    }

    .ring-teal-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(153 246 228/var(--tw-ring-opacity))
    }

    .ring-teal-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(94 234 212/var(--tw-ring-opacity))
    }

    .ring-teal-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(45 212 191/var(--tw-ring-opacity))
    }

    .ring-teal-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 253 250/var(--tw-ring-opacity))
    }

    .ring-teal-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(20 184 166/var(--tw-ring-opacity))
    }

    .ring-teal-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(13 148 136/var(--tw-ring-opacity))
    }

    .ring-teal-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(15 118 110/var(--tw-ring-opacity))
    }

    .ring-teal-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(17 94 89/var(--tw-ring-opacity))
    }

    .ring-teal-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(19 78 74/var(--tw-ring-opacity))
    }

    .ring-violet-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(237 233 254/var(--tw-ring-opacity))
    }

    .ring-violet-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(221 214 254/var(--tw-ring-opacity))
    }

    .ring-violet-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(196 181 253/var(--tw-ring-opacity))
    }

    .ring-violet-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(167 139 250/var(--tw-ring-opacity))
    }

    .ring-violet-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 243 255/var(--tw-ring-opacity))
    }

    .ring-violet-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(139 92 246/var(--tw-ring-opacity))
    }

    .ring-violet-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(124 58 237/var(--tw-ring-opacity))
    }

    .ring-violet-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(109 40 217/var(--tw-ring-opacity))
    }

    .ring-violet-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(91 33 182/var(--tw-ring-opacity))
    }

    .ring-violet-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(76 29 149/var(--tw-ring-opacity))
    }

    .ring-yellow-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 249 195/var(--tw-ring-opacity))
    }

    .ring-yellow-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 240 138/var(--tw-ring-opacity))
    }

    .ring-yellow-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 224 71/var(--tw-ring-opacity))
    }

    .ring-yellow-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 204 21/var(--tw-ring-opacity))
    }

    .ring-yellow-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 252 232/var(--tw-ring-opacity))
    }

    .ring-yellow-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(234 179 8/var(--tw-ring-opacity))
    }

    .ring-yellow-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(202 138 4/var(--tw-ring-opacity))
    }

    .ring-yellow-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(161 98 7/var(--tw-ring-opacity))
    }

    .ring-yellow-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(133 77 14/var(--tw-ring-opacity))
    }

    .ring-yellow-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(113 63 18/var(--tw-ring-opacity))
    }

    .ring-zinc-100 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 244 245/var(--tw-ring-opacity))
    }

    .ring-zinc-200 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(228 228 231/var(--tw-ring-opacity))
    }

    .ring-zinc-300 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(212 212 216/var(--tw-ring-opacity))
    }

    .ring-zinc-400 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(161 161 170/var(--tw-ring-opacity))
    }

    .ring-zinc-50 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 250/var(--tw-ring-opacity))
    }

    .ring-zinc-500 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(113 113 122/var(--tw-ring-opacity))
    }

    .ring-zinc-600 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(82 82 91/var(--tw-ring-opacity))
    }

    .ring-zinc-700 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(63 63 70/var(--tw-ring-opacity))
    }

    .ring-zinc-800 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(39 39 42/var(--tw-ring-opacity))
    }

    .ring-zinc-900 {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(24 24 27/var(--tw-ring-opacity))
    }

    .drop-shadow-lg {
      --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, .04)) drop-shadow(0 4px 3px rgba(0, 0, 0, .1));
      filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
    }

    .transition {
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
      transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
      transition-timing-function: cubic-bezier(.4, 0, .2, 1);
      transition-duration: .15s
    }

    .duration-\\[1000\\] {
      transition-duration: 1000
    }

    .ease-in-out {
      transition-timing-function: cubic-bezier(.4, 0, .2, 1)
    }

    @keyframes animate-gradient-horizontally {
      0% {
        background-position: 0 50%
      }
      50% {
        background-position: 100% 50%
      }
      to {
        background-position: 0 50%
      }
    }
    @keyframes animate-hero-background {
      0% {
        background-position: 0 0
      }
      20% {
        background-position: 20% 65%
      }
      40% {
        background-position: 40% 40%
      }
      60% {
        background-position: 60% 100%
      }
      80% {
        background-position: 80% 100%
      }
      to {
        background-position: 0 0
      }
    }

    .hover\\:m-0:hover {
      margin: 0
    }

    .hover\\:m-0\\.5:hover {
      margin: .125rem
    }

    .hover\\:m-1:hover {
      margin: .25rem
    }

    .hover\\:m-1\\.5:hover {
      margin: .375rem
    }

    .hover\\:m-14:hover {
      margin: 3.5rem
    }

    .hover\\:m-16:hover {
      margin: 4rem
    }

    .hover\\:m-2:hover {
      margin: .5rem
    }

    .hover\\:m-2\\.5:hover {
      margin: .625rem
    }

    .hover\\:m-20:hover {
      margin: 5rem
    }

    .hover\\:m-24:hover {
      margin: 6rem
    }

    .hover\\:m-28:hover {
      margin: 7rem
    }

    .hover\\:m-3:hover {
      margin: .75rem
    }

    .hover\\:m-3\\.5:hover {
      margin: .875rem
    }

    .hover\\:m-32:hover {
      margin: 8rem
    }

    .hover\\:m-36:hover {
      margin: 9rem
    }

    .hover\\:m-40:hover {
      margin: 10rem
    }

    .hover\\:m-44:hover {
      margin: 11rem
    }

    .hover\\:m-48:hover {
      margin: 12rem
    }

    .hover\\:m-52:hover {
      margin: 13rem
    }

    .hover\\:m-56:hover {
      margin: 14rem
    }

    .hover\\:m-60:hover {
      margin: 15rem
    }

    .hover\\:m-64:hover {
      margin: 16rem
    }

    .hover\\:m-72:hover {
      margin: 18rem
    }

    .hover\\:m-80:hover {
      margin: 20rem
    }

    .hover\\:m-96:hover {
      margin: 24rem
    }

    .hover\\:m-auto:hover {
      margin: auto
    }

    .hover\\:m-px:hover {
      margin: 1px
    }

    .hover\\:mx-0:hover {
      margin-left: 0;
      margin-right: 0
    }

    .hover\\:mx-0\\.5:hover {
      margin-left: .125rem;
      margin-right: .125rem
    }

    .hover\\:mx-1:hover {
      margin-left: .25rem;
      margin-right: .25rem
    }

    .hover\\:mx-1\\.5:hover {
      margin-left: .375rem;
      margin-right: .375rem
    }

    .hover\\:mx-14:hover {
      margin-left: 3.5rem;
      margin-right: 3.5rem
    }

    .hover\\:mx-16:hover {
      margin-left: 4rem;
      margin-right: 4rem
    }

    .hover\\:mx-2:hover {
      margin-left: .5rem;
      margin-right: .5rem
    }

    .hover\\:mx-2\\.5:hover {
      margin-left: .625rem;
      margin-right: .625rem
    }

    .hover\\:mx-20:hover {
      margin-left: 5rem;
      margin-right: 5rem
    }

    .hover\\:mx-24:hover {
      margin-left: 6rem;
      margin-right: 6rem
    }

    .hover\\:mx-28:hover {
      margin-left: 7rem;
      margin-right: 7rem
    }

    .hover\\:mx-3:hover {
      margin-left: .75rem;
      margin-right: .75rem
    }

    .hover\\:mx-3\\.5:hover {
      margin-left: .875rem;
      margin-right: .875rem
    }

    .hover\\:mx-32:hover {
      margin-left: 8rem;
      margin-right: 8rem
    }

    .hover\\:mx-36:hover {
      margin-left: 9rem;
      margin-right: 9rem
    }

    .hover\\:mx-40:hover {
      margin-left: 10rem;
      margin-right: 10rem
    }

    .hover\\:mx-44:hover {
      margin-left: 11rem;
      margin-right: 11rem
    }

    .hover\\:mx-48:hover {
      margin-left: 12rem;
      margin-right: 12rem
    }

    .hover\\:mx-52:hover {
      margin-left: 13rem;
      margin-right: 13rem
    }

    .hover\\:mx-56:hover {
      margin-left: 14rem;
      margin-right: 14rem
    }

    .hover\\:mx-60:hover {
      margin-left: 15rem;
      margin-right: 15rem
    }

    .hover\\:mx-64:hover {
      margin-left: 16rem;
      margin-right: 16rem
    }

    .hover\\:mx-72:hover {
      margin-left: 18rem;
      margin-right: 18rem
    }

    .hover\\:mx-80:hover {
      margin-left: 20rem;
      margin-right: 20rem
    }

    .hover\\:mx-96:hover {
      margin-left: 24rem;
      margin-right: 24rem
    }

    .hover\\:mx-auto:hover {
      margin-left: auto;
      margin-right: auto
    }

    .hover\\:mx-px:hover {
      margin-left: 1px;
      margin-right: 1px
    }

    .hover\\:my-0:hover {
      margin-top: 0;
      margin-bottom: 0
    }

    .hover\\:my-0\\.5:hover {
      margin-top: .125rem;
      margin-bottom: .125rem
    }

    .hover\\:my-1:hover {
      margin-top: .25rem;
      margin-bottom: .25rem
    }

    .hover\\:my-1\\.5:hover {
      margin-top: .375rem;
      margin-bottom: .375rem
    }

    .hover\\:my-14:hover {
      margin-top: 3.5rem;
      margin-bottom: 3.5rem
    }

    .hover\\:my-16:hover {
      margin-top: 4rem;
      margin-bottom: 4rem
    }

    .hover\\:my-2:hover {
      margin-top: .5rem;
      margin-bottom: .5rem
    }

    .hover\\:my-2\\.5:hover {
      margin-top: .625rem;
      margin-bottom: .625rem
    }

    .hover\\:my-20:hover {
      margin-top: 5rem;
      margin-bottom: 5rem
    }

    .hover\\:my-24:hover {
      margin-top: 6rem;
      margin-bottom: 6rem
    }

    .hover\\:my-28:hover {
      margin-top: 7rem;
      margin-bottom: 7rem
    }

    .hover\\:my-3:hover {
      margin-top: .75rem;
      margin-bottom: .75rem
    }

    .hover\\:my-3\\.5:hover {
      margin-top: .875rem;
      margin-bottom: .875rem
    }

    .hover\\:my-32:hover {
      margin-top: 8rem;
      margin-bottom: 8rem
    }

    .hover\\:my-36:hover {
      margin-top: 9rem;
      margin-bottom: 9rem
    }

    .hover\\:my-40:hover {
      margin-top: 10rem;
      margin-bottom: 10rem
    }

    .hover\\:my-44:hover {
      margin-top: 11rem;
      margin-bottom: 11rem
    }

    .hover\\:my-48:hover {
      margin-top: 12rem;
      margin-bottom: 12rem
    }

    .hover\\:my-52:hover {
      margin-top: 13rem;
      margin-bottom: 13rem
    }

    .hover\\:my-56:hover {
      margin-top: 14rem;
      margin-bottom: 14rem
    }

    .hover\\:my-60:hover {
      margin-top: 15rem;
      margin-bottom: 15rem
    }

    .hover\\:my-64:hover {
      margin-top: 16rem;
      margin-bottom: 16rem
    }

    .hover\\:my-72:hover {
      margin-top: 18rem;
      margin-bottom: 18rem
    }

    .hover\\:my-80:hover {
      margin-top: 20rem;
      margin-bottom: 20rem
    }

    .hover\\:my-96:hover {
      margin-top: 24rem;
      margin-bottom: 24rem
    }

    .hover\\:my-auto:hover {
      margin-top: auto;
      margin-bottom: auto
    }

    .hover\\:my-px:hover {
      margin-top: 1px;
      margin-bottom: 1px
    }

    .hover\\:mb-0:hover {
      margin-bottom: 0
    }

    .hover\\:mb-0\\.5:hover {
      margin-bottom: .125rem
    }

    .hover\\:mb-1:hover {
      margin-bottom: .25rem
    }

    .hover\\:mb-1\\.5:hover {
      margin-bottom: .375rem
    }

    .hover\\:mb-14:hover {
      margin-bottom: 3.5rem
    }

    .hover\\:mb-16:hover {
      margin-bottom: 4rem
    }

    .hover\\:mb-2:hover {
      margin-bottom: .5rem
    }

    .hover\\:mb-2\\.5:hover {
      margin-bottom: .625rem
    }

    .hover\\:mb-20:hover {
      margin-bottom: 5rem
    }

    .hover\\:mb-24:hover {
      margin-bottom: 6rem
    }

    .hover\\:mb-28:hover {
      margin-bottom: 7rem
    }

    .hover\\:mb-3:hover {
      margin-bottom: .75rem
    }

    .hover\\:mb-3\\.5:hover {
      margin-bottom: .875rem
    }

    .hover\\:mb-32:hover {
      margin-bottom: 8rem
    }

    .hover\\:mb-36:hover {
      margin-bottom: 9rem
    }

    .hover\\:mb-40:hover {
      margin-bottom: 10rem
    }

    .hover\\:mb-44:hover {
      margin-bottom: 11rem
    }

    .hover\\:mb-48:hover {
      margin-bottom: 12rem
    }

    .hover\\:mb-52:hover {
      margin-bottom: 13rem
    }

    .hover\\:mb-56:hover {
      margin-bottom: 14rem
    }

    .hover\\:mb-60:hover {
      margin-bottom: 15rem
    }

    .hover\\:mb-64:hover {
      margin-bottom: 16rem
    }

    .hover\\:mb-72:hover {
      margin-bottom: 18rem
    }

    .hover\\:mb-80:hover {
      margin-bottom: 20rem
    }

    .hover\\:mb-96:hover {
      margin-bottom: 24rem
    }

    .hover\\:mb-auto:hover {
      margin-bottom: auto
    }

    .hover\\:mb-px:hover {
      margin-bottom: 1px
    }

    .hover\\:ml-0:hover {
      margin-left: 0
    }

    .hover\\:ml-0\\.5:hover {
      margin-left: .125rem
    }

    .hover\\:ml-1:hover {
      margin-left: .25rem
    }

    .hover\\:ml-1\\.5:hover {
      margin-left: .375rem
    }

    .hover\\:ml-14:hover {
      margin-left: 3.5rem
    }

    .hover\\:ml-16:hover {
      margin-left: 4rem
    }

    .hover\\:ml-2:hover {
      margin-left: .5rem
    }

    .hover\\:ml-2\\.5:hover {
      margin-left: .625rem
    }

    .hover\\:ml-20:hover {
      margin-left: 5rem
    }

    .hover\\:ml-24:hover {
      margin-left: 6rem
    }

    .hover\\:ml-28:hover {
      margin-left: 7rem
    }

    .hover\\:ml-3:hover {
      margin-left: .75rem
    }

    .hover\\:ml-3\\.5:hover {
      margin-left: .875rem
    }

    .hover\\:ml-32:hover {
      margin-left: 8rem
    }

    .hover\\:ml-36:hover {
      margin-left: 9rem
    }

    .hover\\:ml-40:hover {
      margin-left: 10rem
    }

    .hover\\:ml-44:hover {
      margin-left: 11rem
    }

    .hover\\:ml-48:hover {
      margin-left: 12rem
    }

    .hover\\:ml-52:hover {
      margin-left: 13rem
    }

    .hover\\:ml-56:hover {
      margin-left: 14rem
    }

    .hover\\:ml-60:hover {
      margin-left: 15rem
    }

    .hover\\:ml-64:hover {
      margin-left: 16rem
    }

    .hover\\:ml-72:hover {
      margin-left: 18rem
    }

    .hover\\:ml-80:hover {
      margin-left: 20rem
    }

    .hover\\:ml-96:hover {
      margin-left: 24rem
    }

    .hover\\:ml-auto:hover {
      margin-left: auto
    }

    .hover\\:ml-px:hover {
      margin-left: 1px
    }

    .hover\\:mr-0:hover {
      margin-right: 0
    }

    .hover\\:mr-0\\.5:hover {
      margin-right: .125rem
    }

    .hover\\:mr-1:hover {
      margin-right: .25rem
    }

    .hover\\:mr-1\\.5:hover {
      margin-right: .375rem
    }

    .hover\\:mr-14:hover {
      margin-right: 3.5rem
    }

    .hover\\:mr-16:hover {
      margin-right: 4rem
    }

    .hover\\:mr-2:hover {
      margin-right: .5rem
    }

    .hover\\:mr-2\\.5:hover {
      margin-right: .625rem
    }

    .hover\\:mr-20:hover {
      margin-right: 5rem
    }

    .hover\\:mr-24:hover {
      margin-right: 6rem
    }

    .hover\\:mr-28:hover {
      margin-right: 7rem
    }

    .hover\\:mr-3:hover {
      margin-right: .75rem
    }

    .hover\\:mr-3\\.5:hover {
      margin-right: .875rem
    }

    .hover\\:mr-32:hover {
      margin-right: 8rem
    }

    .hover\\:mr-36:hover {
      margin-right: 9rem
    }

    .hover\\:mr-40:hover {
      margin-right: 10rem
    }

    .hover\\:mr-44:hover {
      margin-right: 11rem
    }

    .hover\\:mr-48:hover {
      margin-right: 12rem
    }

    .hover\\:mr-52:hover {
      margin-right: 13rem
    }

    .hover\\:mr-56:hover {
      margin-right: 14rem
    }

    .hover\\:mr-60:hover {
      margin-right: 15rem
    }

    .hover\\:mr-64:hover {
      margin-right: 16rem
    }

    .hover\\:mr-72:hover {
      margin-right: 18rem
    }

    .hover\\:mr-80:hover {
      margin-right: 20rem
    }

    .hover\\:mr-96:hover {
      margin-right: 24rem
    }

    .hover\\:mr-auto:hover {
      margin-right: auto
    }

    .hover\\:mr-px:hover {
      margin-right: 1px
    }

    .hover\\:mt-0:hover {
      margin-top: 0
    }

    .hover\\:mt-0\\.5:hover {
      margin-top: .125rem
    }

    .hover\\:mt-1:hover {
      margin-top: .25rem
    }

    .hover\\:mt-1\\.5:hover {
      margin-top: .375rem
    }

    .hover\\:mt-14:hover {
      margin-top: 3.5rem
    }

    .hover\\:mt-16:hover {
      margin-top: 4rem
    }

    .hover\\:mt-2:hover {
      margin-top: .5rem
    }

    .hover\\:mt-2\\.5:hover {
      margin-top: .625rem
    }

    .hover\\:mt-20:hover {
      margin-top: 5rem
    }

    .hover\\:mt-24:hover {
      margin-top: 6rem
    }

    .hover\\:mt-28:hover {
      margin-top: 7rem
    }

    .hover\\:mt-3:hover {
      margin-top: .75rem
    }

    .hover\\:mt-3\\.5:hover {
      margin-top: .875rem
    }

    .hover\\:mt-32:hover {
      margin-top: 8rem
    }

    .hover\\:mt-36:hover {
      margin-top: 9rem
    }

    .hover\\:mt-40:hover {
      margin-top: 10rem
    }

    .hover\\:mt-44:hover {
      margin-top: 11rem
    }

    .hover\\:mt-48:hover {
      margin-top: 12rem
    }

    .hover\\:mt-52:hover {
      margin-top: 13rem
    }

    .hover\\:mt-56:hover {
      margin-top: 14rem
    }

    .hover\\:mt-60:hover {
      margin-top: 15rem
    }

    .hover\\:mt-64:hover {
      margin-top: 16rem
    }

    .hover\\:mt-72:hover {
      margin-top: 18rem
    }

    .hover\\:mt-80:hover {
      margin-top: 20rem
    }

    .hover\\:mt-96:hover {
      margin-top: 24rem
    }

    .hover\\:mt-auto:hover {
      margin-top: auto
    }

    .hover\\:mt-px:hover {
      margin-top: 1px
    }

    .hover\\:h-0:hover {
      height: 0
    }

    .hover\\:h-0\\.5:hover {
      height: .125rem
    }

    .hover\\:h-1:hover {
      height: .25rem
    }

    .hover\\:h-1\\.5:hover {
      height: .375rem
    }

    .hover\\:h-1\\/5:hover {
      height: 20%
    }

    .hover\\:h-14:hover {
      height: 3.5rem
    }

    .hover\\:h-16:hover {
      height: 4rem
    }

    .hover\\:h-2:hover {
      height: .5rem
    }

    .hover\\:h-2\\.5:hover {
      height: .625rem
    }

    .hover\\:h-2\\/5:hover {
      height: 40%
    }

    .hover\\:h-20:hover {
      height: 5rem
    }

    .hover\\:h-24:hover {
      height: 6rem
    }

    .hover\\:h-28:hover {
      height: 7rem
    }

    .hover\\:h-3:hover {
      height: .75rem
    }

    .hover\\:h-3\\.5:hover {
      height: .875rem
    }

    .hover\\:h-3\\/5:hover {
      height: 60%
    }

    .hover\\:h-32:hover {
      height: 8rem
    }

    .hover\\:h-36:hover {
      height: 9rem
    }

    .hover\\:h-40:hover {
      height: 10rem
    }

    .hover\\:h-44:hover {
      height: 11rem
    }

    .hover\\:h-48:hover {
      height: 12rem
    }

    .hover\\:h-52:hover {
      height: 13rem
    }

    .hover\\:h-56:hover {
      height: 14rem
    }

    .hover\\:h-60:hover {
      height: 15rem
    }

    .hover\\:h-64:hover {
      height: 16rem
    }

    .hover\\:h-72:hover {
      height: 18rem
    }

    .hover\\:h-80:hover {
      height: 20rem
    }

    .hover\\:h-96:hover {
      height: 24rem
    }

    .hover\\:h-auto:hover {
      height: auto
    }

    .hover\\:h-full:hover {
      height: 100%
    }

    .hover\\:h-max:hover {
      height: -moz-max-content;
      height: max-content
    }

    .hover\\:h-min:hover {
      height: -moz-min-content;
      height: min-content
    }

    .hover\\:h-px:hover {
      height: 1px
    }

    .hover\\:h-screen:hover {
      height: 100vh
    }

    .hover\\:max-h-0:hover {
      max-height: 0
    }

    .hover\\:max-h-0\\.5:hover {
      max-height: .125rem
    }

    .hover\\:max-h-1:hover {
      max-height: .25rem
    }

    .hover\\:max-h-1\\.5:hover {
      max-height: .375rem
    }

    .hover\\:max-h-14:hover {
      max-height: 3.5rem
    }

    .hover\\:max-h-16:hover {
      max-height: 4rem
    }

    .hover\\:max-h-2:hover {
      max-height: .5rem
    }

    .hover\\:max-h-2\\.5:hover {
      max-height: .625rem
    }

    .hover\\:max-h-20:hover {
      max-height: 5rem
    }

    .hover\\:max-h-24:hover {
      max-height: 6rem
    }

    .hover\\:max-h-28:hover {
      max-height: 7rem
    }

    .hover\\:max-h-3:hover {
      max-height: .75rem
    }

    .hover\\:max-h-3\\.5:hover {
      max-height: .875rem
    }

    .hover\\:max-h-32:hover {
      max-height: 8rem
    }

    .hover\\:max-h-36:hover {
      max-height: 9rem
    }

    .hover\\:max-h-40:hover {
      max-height: 10rem
    }

    .hover\\:max-h-44:hover {
      max-height: 11rem
    }

    .hover\\:max-h-48:hover {
      max-height: 12rem
    }

    .hover\\:max-h-52:hover {
      max-height: 13rem
    }

    .hover\\:max-h-56:hover {
      max-height: 14rem
    }

    .hover\\:max-h-60:hover {
      max-height: 15rem
    }

    .hover\\:max-h-64:hover {
      max-height: 16rem
    }

    .hover\\:max-h-72:hover {
      max-height: 18rem
    }

    .hover\\:max-h-80:hover {
      max-height: 20rem
    }

    .hover\\:max-h-96:hover {
      max-height: 24rem
    }

    .hover\\:max-h-full:hover {
      max-height: 100%
    }

    .hover\\:max-h-max:hover {
      max-height: -moz-max-content;
      max-height: max-content
    }

    .hover\\:max-h-min:hover {
      max-height: -moz-min-content;
      max-height: min-content
    }

    .hover\\:max-h-px:hover {
      max-height: 1px
    }

    .hover\\:max-h-screen:hover {
      max-height: 100vh
    }

    .hover\\:min-h-0:hover {
      min-height: 0
    }

    .hover\\:min-h-full:hover {
      min-height: 100%
    }

    .hover\\:min-h-max:hover {
      min-height: -moz-max-content;
      min-height: max-content
    }

    .hover\\:min-h-min:hover {
      min-height: -moz-min-content;
      min-height: min-content
    }

    .hover\\:min-h-screen:hover {
      min-height: 100vh
    }

    .hover\\:w-0:hover {
      width: 0
    }

    .hover\\:w-0\\.5:hover {
      width: .125rem
    }

    .hover\\:w-1:hover {
      width: .25rem
    }

    .hover\\:w-1\\.5:hover {
      width: .375rem
    }

    .hover\\:w-1\\/5:hover {
      width: 20%
    }

    .hover\\:w-14:hover {
      width: 3.5rem
    }

    .hover\\:w-16:hover {
      width: 4rem
    }

    .hover\\:w-2:hover {
      width: .5rem
    }

    .hover\\:w-2\\.5:hover {
      width: .625rem
    }

    .hover\\:w-2\\/5:hover {
      width: 40%
    }

    .hover\\:w-20:hover {
      width: 5rem
    }

    .hover\\:w-24:hover {
      width: 6rem
    }

    .hover\\:w-28:hover {
      width: 7rem
    }

    .hover\\:w-3:hover {
      width: .75rem
    }

    .hover\\:w-3\\.5:hover {
      width: .875rem
    }

    .hover\\:w-3\\/5:hover {
      width: 60%
    }

    .hover\\:w-32:hover {
      width: 8rem
    }

    .hover\\:w-36:hover {
      width: 9rem
    }

    .hover\\:w-40:hover {
      width: 10rem
    }

    .hover\\:w-44:hover {
      width: 11rem
    }

    .hover\\:w-48:hover {
      width: 12rem
    }

    .hover\\:w-52:hover {
      width: 13rem
    }

    .hover\\:w-56:hover {
      width: 14rem
    }

    .hover\\:w-60:hover {
      width: 15rem
    }

    .hover\\:w-64:hover {
      width: 16rem
    }

    .hover\\:w-72:hover {
      width: 18rem
    }

    .hover\\:w-80:hover {
      width: 20rem
    }

    .hover\\:w-96:hover {
      width: 24rem
    }

    .hover\\:w-auto:hover {
      width: auto
    }

    .hover\\:w-full:hover {
      width: 100%
    }

    .hover\\:w-max:hover {
      width: -moz-max-content;
      width: max-content
    }

    .hover\\:w-min:hover {
      width: -moz-min-content;
      width: min-content
    }

    .hover\\:w-px:hover {
      width: 1px
    }

    .hover\\:w-screen:hover {
      width: 100vw
    }

    .hover\\:min-w-0:hover {
      min-width: 0
    }

    .hover\\:min-w-full:hover {
      min-width: 100%
    }

    .hover\\:min-w-max:hover {
      min-width: -moz-max-content;
      min-width: max-content
    }

    .hover\\:min-w-min:hover {
      min-width: -moz-min-content;
      min-width: min-content
    }

    .hover\\:max-w-0:hover {
      max-width: 0
    }

    .hover\\:max-w-full:hover {
      max-width: 100%
    }

    .hover\\:max-w-max:hover {
      max-width: -moz-max-content;
      max-width: max-content
    }

    .hover\\:max-w-min:hover {
      max-width: -moz-min-content;
      max-width: min-content
    }

    .hover\\:border-amber-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(254 243 199/var(--tw-border-opacity))
    }

    .hover\\:border-amber-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(253 230 138/var(--tw-border-opacity))
    }

    .hover\\:border-amber-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(252 211 77/var(--tw-border-opacity))
    }

    .hover\\:border-amber-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(251 191 36/var(--tw-border-opacity))
    }

    .hover\\:border-amber-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(255 251 235/var(--tw-border-opacity))
    }

    .hover\\:border-amber-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(245 158 11/var(--tw-border-opacity))
    }

    .hover\\:border-amber-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(217 119 6/var(--tw-border-opacity))
    }

    .hover\\:border-amber-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(180 83 9/var(--tw-border-opacity))
    }

    .hover\\:border-amber-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(146 64 14/var(--tw-border-opacity))
    }

    .hover\\:border-amber-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(120 53 15/var(--tw-border-opacity))
    }

    .hover\\:border-blue-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(219 234 254/var(--tw-border-opacity))
    }

    .hover\\:border-blue-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(191 219 254/var(--tw-border-opacity))
    }

    .hover\\:border-blue-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(147 197 253/var(--tw-border-opacity))
    }

    .hover\\:border-blue-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(96 165 250/var(--tw-border-opacity))
    }

    .hover\\:border-blue-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(239 246 255/var(--tw-border-opacity))
    }

    .hover\\:border-blue-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(59 130 246/var(--tw-border-opacity))
    }

    .hover\\:border-blue-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(37 99 235/var(--tw-border-opacity))
    }

    .hover\\:border-blue-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(29 78 216/var(--tw-border-opacity))
    }

    .hover\\:border-blue-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(30 64 175/var(--tw-border-opacity))
    }

    .hover\\:border-blue-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(30 58 138/var(--tw-border-opacity))
    }

    .hover\\:border-cyan-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(207 250 254/var(--tw-border-opacity))
    }

    .hover\\:border-cyan-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(165 243 252/var(--tw-border-opacity))
    }

    .hover\\:border-cyan-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(103 232 249/var(--tw-border-opacity))
    }

    .hover\\:border-cyan-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(34 211 238/var(--tw-border-opacity))
    }

    .hover\\:border-cyan-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(236 254 255/var(--tw-border-opacity))
    }

    .hover\\:border-cyan-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(6 182 212/var(--tw-border-opacity))
    }

    .hover\\:border-cyan-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(8 145 178/var(--tw-border-opacity))
    }

    .hover\\:border-cyan-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(14 116 144/var(--tw-border-opacity))
    }

    .hover\\:border-cyan-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(21 94 117/var(--tw-border-opacity))
    }

    .hover\\:border-cyan-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(22 78 99/var(--tw-border-opacity))
    }

    .hover\\:border-emerald-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(209 250 229/var(--tw-border-opacity))
    }

    .hover\\:border-emerald-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(167 243 208/var(--tw-border-opacity))
    }

    .hover\\:border-emerald-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(110 231 183/var(--tw-border-opacity))
    }

    .hover\\:border-emerald-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(52 211 153/var(--tw-border-opacity))
    }

    .hover\\:border-emerald-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(236 253 245/var(--tw-border-opacity))
    }

    .hover\\:border-emerald-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(16 185 129/var(--tw-border-opacity))
    }

    .hover\\:border-emerald-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(5 150 105/var(--tw-border-opacity))
    }

    .hover\\:border-emerald-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(4 120 87/var(--tw-border-opacity))
    }

    .hover\\:border-emerald-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(6 95 70/var(--tw-border-opacity))
    }

    .hover\\:border-emerald-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(6 78 59/var(--tw-border-opacity))
    }

    .hover\\:border-fuchsia-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(250 232 255/var(--tw-border-opacity))
    }

    .hover\\:border-fuchsia-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(245 208 254/var(--tw-border-opacity))
    }

    .hover\\:border-fuchsia-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(240 171 252/var(--tw-border-opacity))
    }

    .hover\\:border-fuchsia-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(232 121 249/var(--tw-border-opacity))
    }

    .hover\\:border-fuchsia-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(253 244 255/var(--tw-border-opacity))
    }

    .hover\\:border-fuchsia-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(217 70 239/var(--tw-border-opacity))
    }

    .hover\\:border-fuchsia-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(192 38 211/var(--tw-border-opacity))
    }

    .hover\\:border-fuchsia-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(162 28 175/var(--tw-border-opacity))
    }

    .hover\\:border-fuchsia-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(134 25 143/var(--tw-border-opacity))
    }

    .hover\\:border-fuchsia-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(112 26 117/var(--tw-border-opacity))
    }

    .hover\\:border-gray-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(243 244 246/var(--tw-border-opacity))
    }

    .hover\\:border-gray-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(229 231 235/var(--tw-border-opacity))
    }

    .hover\\:border-gray-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(209 213 219/var(--tw-border-opacity))
    }

    .hover\\:border-gray-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(156 163 175/var(--tw-border-opacity))
    }

    .hover\\:border-gray-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(249 250 251/var(--tw-border-opacity))
    }

    .hover\\:border-gray-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(107 114 128/var(--tw-border-opacity))
    }

    .hover\\:border-gray-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(75 85 99/var(--tw-border-opacity))
    }

    .hover\\:border-gray-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(55 65 81/var(--tw-border-opacity))
    }

    .hover\\:border-gray-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(31 41 55/var(--tw-border-opacity))
    }

    .hover\\:border-gray-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(17 24 39/var(--tw-border-opacity))
    }

    .hover\\:border-green-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(220 252 231/var(--tw-border-opacity))
    }

    .hover\\:border-green-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(187 247 208/var(--tw-border-opacity))
    }

    .hover\\:border-green-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(134 239 172/var(--tw-border-opacity))
    }

    .hover\\:border-green-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(74 222 128/var(--tw-border-opacity))
    }

    .hover\\:border-green-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(240 253 244/var(--tw-border-opacity))
    }

    .hover\\:border-green-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(34 197 94/var(--tw-border-opacity))
    }

    .hover\\:border-green-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(22 163 74/var(--tw-border-opacity))
    }

    .hover\\:border-green-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(21 128 61/var(--tw-border-opacity))
    }

    .hover\\:border-green-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(22 101 52/var(--tw-border-opacity))
    }

    .hover\\:border-green-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(20 83 45/var(--tw-border-opacity))
    }

    .hover\\:border-indigo-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(224 231 255/var(--tw-border-opacity))
    }

    .hover\\:border-indigo-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(199 210 254/var(--tw-border-opacity))
    }

    .hover\\:border-indigo-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(165 180 252/var(--tw-border-opacity))
    }

    .hover\\:border-indigo-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(129 140 248/var(--tw-border-opacity))
    }

    .hover\\:border-indigo-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(238 242 255/var(--tw-border-opacity))
    }

    .hover\\:border-indigo-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(99 102 241/var(--tw-border-opacity))
    }

    .hover\\:border-indigo-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(79 70 229/var(--tw-border-opacity))
    }

    .hover\\:border-indigo-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(67 56 202/var(--tw-border-opacity))
    }

    .hover\\:border-indigo-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(55 48 163/var(--tw-border-opacity))
    }

    .hover\\:border-indigo-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(49 46 129/var(--tw-border-opacity))
    }

    .hover\\:border-lime-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(236 252 203/var(--tw-border-opacity))
    }

    .hover\\:border-lime-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(217 249 157/var(--tw-border-opacity))
    }

    .hover\\:border-lime-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(190 242 100/var(--tw-border-opacity))
    }

    .hover\\:border-lime-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(163 230 53/var(--tw-border-opacity))
    }

    .hover\\:border-lime-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(247 254 231/var(--tw-border-opacity))
    }

    .hover\\:border-lime-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(132 204 22/var(--tw-border-opacity))
    }

    .hover\\:border-lime-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(101 163 13/var(--tw-border-opacity))
    }

    .hover\\:border-lime-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(77 124 15/var(--tw-border-opacity))
    }

    .hover\\:border-lime-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(63 98 18/var(--tw-border-opacity))
    }

    .hover\\:border-lime-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(54 83 20/var(--tw-border-opacity))
    }

    .hover\\:border-neutral-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(245 245 245/var(--tw-border-opacity))
    }

    .hover\\:border-neutral-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(229 229 229/var(--tw-border-opacity))
    }

    .hover\\:border-neutral-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(212 212 212/var(--tw-border-opacity))
    }

    .hover\\:border-neutral-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(163 163 163/var(--tw-border-opacity))
    }

    .hover\\:border-neutral-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 250/var(--tw-border-opacity))
    }

    .hover\\:border-neutral-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(115 115 115/var(--tw-border-opacity))
    }

    .hover\\:border-neutral-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(82 82 82/var(--tw-border-opacity))
    }

    .hover\\:border-neutral-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64/var(--tw-border-opacity))
    }

    .hover\\:border-neutral-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(38 38 38/var(--tw-border-opacity))
    }

    .hover\\:border-neutral-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(23 23 23/var(--tw-border-opacity))
    }

    .hover\\:border-orange-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(255 237 213/var(--tw-border-opacity))
    }

    .hover\\:border-orange-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(254 215 170/var(--tw-border-opacity))
    }

    .hover\\:border-orange-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(253 186 116/var(--tw-border-opacity))
    }

    .hover\\:border-orange-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(251 146 60/var(--tw-border-opacity))
    }

    .hover\\:border-orange-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(255 247 237/var(--tw-border-opacity))
    }

    .hover\\:border-orange-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(249 115 22/var(--tw-border-opacity))
    }

    .hover\\:border-orange-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(234 88 12/var(--tw-border-opacity))
    }

    .hover\\:border-orange-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(194 65 12/var(--tw-border-opacity))
    }

    .hover\\:border-orange-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(154 52 18/var(--tw-border-opacity))
    }

    .hover\\:border-orange-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(124 45 18/var(--tw-border-opacity))
    }

    .hover\\:border-pink-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(252 231 243/var(--tw-border-opacity))
    }

    .hover\\:border-pink-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(251 207 232/var(--tw-border-opacity))
    }

    .hover\\:border-pink-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(249 168 212/var(--tw-border-opacity))
    }

    .hover\\:border-pink-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(244 114 182/var(--tw-border-opacity))
    }

    .hover\\:border-pink-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(253 242 248/var(--tw-border-opacity))
    }

    .hover\\:border-pink-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(236 72 153/var(--tw-border-opacity))
    }

    .hover\\:border-pink-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(219 39 119/var(--tw-border-opacity))
    }

    .hover\\:border-pink-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(190 24 93/var(--tw-border-opacity))
    }

    .hover\\:border-pink-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(157 23 77/var(--tw-border-opacity))
    }

    .hover\\:border-pink-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(131 24 67/var(--tw-border-opacity))
    }

    .hover\\:border-purple-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(243 232 255/var(--tw-border-opacity))
    }

    .hover\\:border-purple-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(233 213 255/var(--tw-border-opacity))
    }

    .hover\\:border-purple-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(216 180 254/var(--tw-border-opacity))
    }

    .hover\\:border-purple-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(192 132 252/var(--tw-border-opacity))
    }

    .hover\\:border-purple-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(250 245 255/var(--tw-border-opacity))
    }

    .hover\\:border-purple-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(168 85 247/var(--tw-border-opacity))
    }

    .hover\\:border-purple-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(147 51 234/var(--tw-border-opacity))
    }

    .hover\\:border-purple-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(126 34 206/var(--tw-border-opacity))
    }

    .hover\\:border-purple-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(107 33 168/var(--tw-border-opacity))
    }

    .hover\\:border-purple-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(88 28 135/var(--tw-border-opacity))
    }

    .hover\\:border-red-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(254 226 226/var(--tw-border-opacity))
    }

    .hover\\:border-red-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(254 202 202/var(--tw-border-opacity))
    }

    .hover\\:border-red-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(252 165 165/var(--tw-border-opacity))
    }

    .hover\\:border-red-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(248 113 113/var(--tw-border-opacity))
    }

    .hover\\:border-red-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(254 242 242/var(--tw-border-opacity))
    }

    .hover\\:border-red-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(239 68 68/var(--tw-border-opacity))
    }

    .hover\\:border-red-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(220 38 38/var(--tw-border-opacity))
    }

    .hover\\:border-red-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(185 28 28/var(--tw-border-opacity))
    }

    .hover\\:border-red-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(153 27 27/var(--tw-border-opacity))
    }

    .hover\\:border-red-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(127 29 29/var(--tw-border-opacity))
    }

    .hover\\:border-rose-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(255 228 230/var(--tw-border-opacity))
    }

    .hover\\:border-rose-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(254 205 211/var(--tw-border-opacity))
    }

    .hover\\:border-rose-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(253 164 175/var(--tw-border-opacity))
    }

    .hover\\:border-rose-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(251 113 133/var(--tw-border-opacity))
    }

    .hover\\:border-rose-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(255 241 242/var(--tw-border-opacity))
    }

    .hover\\:border-rose-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(244 63 94/var(--tw-border-opacity))
    }

    .hover\\:border-rose-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(225 29 72/var(--tw-border-opacity))
    }

    .hover\\:border-rose-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(190 18 60/var(--tw-border-opacity))
    }

    .hover\\:border-rose-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(159 18 57/var(--tw-border-opacity))
    }

    .hover\\:border-rose-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(136 19 55/var(--tw-border-opacity))
    }

    .hover\\:border-sky-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(224 242 254/var(--tw-border-opacity))
    }

    .hover\\:border-sky-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(186 230 253/var(--tw-border-opacity))
    }

    .hover\\:border-sky-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(125 211 252/var(--tw-border-opacity))
    }

    .hover\\:border-sky-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(56 189 248/var(--tw-border-opacity))
    }

    .hover\\:border-sky-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(240 249 255/var(--tw-border-opacity))
    }

    .hover\\:border-sky-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(14 165 233/var(--tw-border-opacity))
    }

    .hover\\:border-sky-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(2 132 199/var(--tw-border-opacity))
    }

    .hover\\:border-sky-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(3 105 161/var(--tw-border-opacity))
    }

    .hover\\:border-sky-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(7 89 133/var(--tw-border-opacity))
    }

    .hover\\:border-sky-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(12 74 110/var(--tw-border-opacity))
    }

    .hover\\:border-slate-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(241 245 249/var(--tw-border-opacity))
    }

    .hover\\:border-slate-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(226 232 240/var(--tw-border-opacity))
    }

    .hover\\:border-slate-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(203 213 225/var(--tw-border-opacity))
    }

    .hover\\:border-slate-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(148 163 184/var(--tw-border-opacity))
    }

    .hover\\:border-slate-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(248 250 252/var(--tw-border-opacity))
    }

    .hover\\:border-slate-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(100 116 139/var(--tw-border-opacity))
    }

    .hover\\:border-slate-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(71 85 105/var(--tw-border-opacity))
    }

    .hover\\:border-slate-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(51 65 85/var(--tw-border-opacity))
    }

    .hover\\:border-slate-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(30 41 59/var(--tw-border-opacity))
    }

    .hover\\:border-slate-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(15 23 42/var(--tw-border-opacity))
    }

    .hover\\:border-stone-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(245 245 244/var(--tw-border-opacity))
    }

    .hover\\:border-stone-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(231 229 228/var(--tw-border-opacity))
    }

    .hover\\:border-stone-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(214 211 209/var(--tw-border-opacity))
    }

    .hover\\:border-stone-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(168 162 158/var(--tw-border-opacity))
    }

    .hover\\:border-stone-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 249/var(--tw-border-opacity))
    }

    .hover\\:border-stone-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(120 113 108/var(--tw-border-opacity))
    }

    .hover\\:border-stone-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(87 83 78/var(--tw-border-opacity))
    }

    .hover\\:border-stone-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(68 64 60/var(--tw-border-opacity))
    }

    .hover\\:border-stone-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(41 37 36/var(--tw-border-opacity))
    }

    .hover\\:border-stone-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(28 25 23/var(--tw-border-opacity))
    }

    .hover\\:border-teal-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(204 251 241/var(--tw-border-opacity))
    }

    .hover\\:border-teal-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(153 246 228/var(--tw-border-opacity))
    }

    .hover\\:border-teal-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(94 234 212/var(--tw-border-opacity))
    }

    .hover\\:border-teal-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(45 212 191/var(--tw-border-opacity))
    }

    .hover\\:border-teal-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(240 253 250/var(--tw-border-opacity))
    }

    .hover\\:border-teal-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(20 184 166/var(--tw-border-opacity))
    }

    .hover\\:border-teal-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(13 148 136/var(--tw-border-opacity))
    }

    .hover\\:border-teal-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(15 118 110/var(--tw-border-opacity))
    }

    .hover\\:border-teal-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(17 94 89/var(--tw-border-opacity))
    }

    .hover\\:border-teal-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(19 78 74/var(--tw-border-opacity))
    }

    .hover\\:border-violet-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(237 233 254/var(--tw-border-opacity))
    }

    .hover\\:border-violet-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(221 214 254/var(--tw-border-opacity))
    }

    .hover\\:border-violet-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(196 181 253/var(--tw-border-opacity))
    }

    .hover\\:border-violet-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(167 139 250/var(--tw-border-opacity))
    }

    .hover\\:border-violet-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(245 243 255/var(--tw-border-opacity))
    }

    .hover\\:border-violet-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(139 92 246/var(--tw-border-opacity))
    }

    .hover\\:border-violet-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(124 58 237/var(--tw-border-opacity))
    }

    .hover\\:border-violet-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(109 40 217/var(--tw-border-opacity))
    }

    .hover\\:border-violet-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(91 33 182/var(--tw-border-opacity))
    }

    .hover\\:border-violet-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(76 29 149/var(--tw-border-opacity))
    }

    .hover\\:border-yellow-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(254 249 195/var(--tw-border-opacity))
    }

    .hover\\:border-yellow-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(254 240 138/var(--tw-border-opacity))
    }

    .hover\\:border-yellow-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(253 224 71/var(--tw-border-opacity))
    }

    .hover\\:border-yellow-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(250 204 21/var(--tw-border-opacity))
    }

    .hover\\:border-yellow-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(254 252 232/var(--tw-border-opacity))
    }

    .hover\\:border-yellow-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(234 179 8/var(--tw-border-opacity))
    }

    .hover\\:border-yellow-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(202 138 4/var(--tw-border-opacity))
    }

    .hover\\:border-yellow-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(161 98 7/var(--tw-border-opacity))
    }

    .hover\\:border-yellow-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(133 77 14/var(--tw-border-opacity))
    }

    .hover\\:border-yellow-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(113 63 18/var(--tw-border-opacity))
    }

    .hover\\:border-zinc-100:hover {
      --tw-border-opacity: 1;
      border-color: rgb(244 244 245/var(--tw-border-opacity))
    }

    .hover\\:border-zinc-200:hover {
      --tw-border-opacity: 1;
      border-color: rgb(228 228 231/var(--tw-border-opacity))
    }

    .hover\\:border-zinc-300:hover {
      --tw-border-opacity: 1;
      border-color: rgb(212 212 216/var(--tw-border-opacity))
    }

    .hover\\:border-zinc-400:hover {
      --tw-border-opacity: 1;
      border-color: rgb(161 161 170/var(--tw-border-opacity))
    }

    .hover\\:border-zinc-50:hover {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 250/var(--tw-border-opacity))
    }

    .hover\\:border-zinc-500:hover {
      --tw-border-opacity: 1;
      border-color: rgb(113 113 122/var(--tw-border-opacity))
    }

    .hover\\:border-zinc-600:hover {
      --tw-border-opacity: 1;
      border-color: rgb(82 82 91/var(--tw-border-opacity))
    }

    .hover\\:border-zinc-700:hover {
      --tw-border-opacity: 1;
      border-color: rgb(63 63 70/var(--tw-border-opacity))
    }

    .hover\\:border-zinc-800:hover {
      --tw-border-opacity: 1;
      border-color: rgb(39 39 42/var(--tw-border-opacity))
    }

    .hover\\:border-zinc-900:hover {
      --tw-border-opacity: 1;
      border-color: rgb(24 24 27/var(--tw-border-opacity))
    }

    .hover\\:bg-amber-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(254 243 199/var(--tw-bg-opacity))
    }

    .hover\\:bg-amber-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(253 230 138/var(--tw-bg-opacity))
    }

    .hover\\:bg-amber-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(252 211 77/var(--tw-bg-opacity))
    }

    .hover\\:bg-amber-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(251 191 36/var(--tw-bg-opacity))
    }

    .hover\\:bg-amber-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(255 251 235/var(--tw-bg-opacity))
    }

    .hover\\:bg-amber-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(245 158 11/var(--tw-bg-opacity))
    }

    .hover\\:bg-amber-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(217 119 6/var(--tw-bg-opacity))
    }

    .hover\\:bg-amber-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(180 83 9/var(--tw-bg-opacity))
    }

    .hover\\:bg-amber-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(146 64 14/var(--tw-bg-opacity))
    }

    .hover\\:bg-amber-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(120 53 15/var(--tw-bg-opacity))
    }

    .hover\\:bg-blue-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(219 234 254/var(--tw-bg-opacity))
    }

    .hover\\:bg-blue-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(191 219 254/var(--tw-bg-opacity))
    }

    .hover\\:bg-blue-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(147 197 253/var(--tw-bg-opacity))
    }

    .hover\\:bg-blue-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(96 165 250/var(--tw-bg-opacity))
    }

    .hover\\:bg-blue-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(239 246 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-blue-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(59 130 246/var(--tw-bg-opacity))
    }

    .hover\\:bg-blue-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(37 99 235/var(--tw-bg-opacity))
    }

    .hover\\:bg-blue-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(29 78 216/var(--tw-bg-opacity))
    }

    .hover\\:bg-blue-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(30 64 175/var(--tw-bg-opacity))
    }

    .hover\\:bg-blue-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(30 58 138/var(--tw-bg-opacity))
    }

    .hover\\:bg-cyan-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(207 250 254/var(--tw-bg-opacity))
    }

    .hover\\:bg-cyan-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(165 243 252/var(--tw-bg-opacity))
    }

    .hover\\:bg-cyan-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(103 232 249/var(--tw-bg-opacity))
    }

    .hover\\:bg-cyan-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(34 211 238/var(--tw-bg-opacity))
    }

    .hover\\:bg-cyan-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(236 254 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-cyan-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(6 182 212/var(--tw-bg-opacity))
    }

    .hover\\:bg-cyan-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(8 145 178/var(--tw-bg-opacity))
    }

    .hover\\:bg-cyan-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(14 116 144/var(--tw-bg-opacity))
    }

    .hover\\:bg-cyan-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(21 94 117/var(--tw-bg-opacity))
    }

    .hover\\:bg-cyan-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(22 78 99/var(--tw-bg-opacity))
    }

    .hover\\:bg-emerald-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(209 250 229/var(--tw-bg-opacity))
    }

    .hover\\:bg-emerald-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(167 243 208/var(--tw-bg-opacity))
    }

    .hover\\:bg-emerald-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(110 231 183/var(--tw-bg-opacity))
    }

    .hover\\:bg-emerald-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(52 211 153/var(--tw-bg-opacity))
    }

    .hover\\:bg-emerald-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(236 253 245/var(--tw-bg-opacity))
    }

    .hover\\:bg-emerald-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(16 185 129/var(--tw-bg-opacity))
    }

    .hover\\:bg-emerald-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(5 150 105/var(--tw-bg-opacity))
    }

    .hover\\:bg-emerald-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(4 120 87/var(--tw-bg-opacity))
    }

    .hover\\:bg-emerald-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(6 95 70/var(--tw-bg-opacity))
    }

    .hover\\:bg-emerald-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(6 78 59/var(--tw-bg-opacity))
    }

    .hover\\:bg-fuchsia-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(250 232 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-fuchsia-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(245 208 254/var(--tw-bg-opacity))
    }

    .hover\\:bg-fuchsia-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(240 171 252/var(--tw-bg-opacity))
    }

    .hover\\:bg-fuchsia-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(232 121 249/var(--tw-bg-opacity))
    }

    .hover\\:bg-fuchsia-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(253 244 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-fuchsia-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(217 70 239/var(--tw-bg-opacity))
    }

    .hover\\:bg-fuchsia-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(192 38 211/var(--tw-bg-opacity))
    }

    .hover\\:bg-fuchsia-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(162 28 175/var(--tw-bg-opacity))
    }

    .hover\\:bg-fuchsia-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(134 25 143/var(--tw-bg-opacity))
    }

    .hover\\:bg-fuchsia-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(112 26 117/var(--tw-bg-opacity))
    }

    .hover\\:bg-gray-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246/var(--tw-bg-opacity))
    }

    .hover\\:bg-gray-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(229 231 235/var(--tw-bg-opacity))
    }

    .hover\\:bg-gray-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(209 213 219/var(--tw-bg-opacity))
    }

    .hover\\:bg-gray-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(156 163 175/var(--tw-bg-opacity))
    }

    .hover\\:bg-gray-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251/var(--tw-bg-opacity))
    }

    .hover\\:bg-gray-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(107 114 128/var(--tw-bg-opacity))
    }

    .hover\\:bg-gray-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(75 85 99/var(--tw-bg-opacity))
    }

    .hover\\:bg-gray-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(55 65 81/var(--tw-bg-opacity))
    }

    .hover\\:bg-gray-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(31 41 55/var(--tw-bg-opacity))
    }

    .hover\\:bg-gray-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(17 24 39/var(--tw-bg-opacity))
    }

    .hover\\:bg-green-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(220 252 231/var(--tw-bg-opacity))
    }

    .hover\\:bg-green-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(187 247 208/var(--tw-bg-opacity))
    }

    .hover\\:bg-green-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(134 239 172/var(--tw-bg-opacity))
    }

    .hover\\:bg-green-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(74 222 128/var(--tw-bg-opacity))
    }

    .hover\\:bg-green-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(240 253 244/var(--tw-bg-opacity))
    }

    .hover\\:bg-green-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(34 197 94/var(--tw-bg-opacity))
    }

    .hover\\:bg-green-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(22 163 74/var(--tw-bg-opacity))
    }

    .hover\\:bg-green-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(21 128 61/var(--tw-bg-opacity))
    }

    .hover\\:bg-green-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(22 101 52/var(--tw-bg-opacity))
    }

    .hover\\:bg-green-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(20 83 45/var(--tw-bg-opacity))
    }

    .hover\\:bg-indigo-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(224 231 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-indigo-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(199 210 254/var(--tw-bg-opacity))
    }

    .hover\\:bg-indigo-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(165 180 252/var(--tw-bg-opacity))
    }

    .hover\\:bg-indigo-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(129 140 248/var(--tw-bg-opacity))
    }

    .hover\\:bg-indigo-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(238 242 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-indigo-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(99 102 241/var(--tw-bg-opacity))
    }

    .hover\\:bg-indigo-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(79 70 229/var(--tw-bg-opacity))
    }

    .hover\\:bg-indigo-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(67 56 202/var(--tw-bg-opacity))
    }

    .hover\\:bg-indigo-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(55 48 163/var(--tw-bg-opacity))
    }

    .hover\\:bg-indigo-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(49 46 129/var(--tw-bg-opacity))
    }

    .hover\\:bg-lime-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(236 252 203/var(--tw-bg-opacity))
    }

    .hover\\:bg-lime-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(217 249 157/var(--tw-bg-opacity))
    }

    .hover\\:bg-lime-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(190 242 100/var(--tw-bg-opacity))
    }

    .hover\\:bg-lime-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(163 230 53/var(--tw-bg-opacity))
    }

    .hover\\:bg-lime-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(247 254 231/var(--tw-bg-opacity))
    }

    .hover\\:bg-lime-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(132 204 22/var(--tw-bg-opacity))
    }

    .hover\\:bg-lime-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(101 163 13/var(--tw-bg-opacity))
    }

    .hover\\:bg-lime-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(77 124 15/var(--tw-bg-opacity))
    }

    .hover\\:bg-lime-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(63 98 18/var(--tw-bg-opacity))
    }

    .hover\\:bg-lime-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(54 83 20/var(--tw-bg-opacity))
    }

    .hover\\:bg-neutral-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(245 245 245/var(--tw-bg-opacity))
    }

    .hover\\:bg-neutral-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(229 229 229/var(--tw-bg-opacity))
    }

    .hover\\:bg-neutral-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(212 212 212/var(--tw-bg-opacity))
    }

    .hover\\:bg-neutral-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(163 163 163/var(--tw-bg-opacity))
    }

    .hover\\:bg-neutral-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 250/var(--tw-bg-opacity))
    }

    .hover\\:bg-neutral-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(115 115 115/var(--tw-bg-opacity))
    }

    .hover\\:bg-neutral-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(82 82 82/var(--tw-bg-opacity))
    }

    .hover\\:bg-neutral-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(64 64 64/var(--tw-bg-opacity))
    }

    .hover\\:bg-neutral-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(38 38 38/var(--tw-bg-opacity))
    }

    .hover\\:bg-neutral-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(23 23 23/var(--tw-bg-opacity))
    }

    .hover\\:bg-orange-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(255 237 213/var(--tw-bg-opacity))
    }

    .hover\\:bg-orange-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(254 215 170/var(--tw-bg-opacity))
    }

    .hover\\:bg-orange-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(253 186 116/var(--tw-bg-opacity))
    }

    .hover\\:bg-orange-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(251 146 60/var(--tw-bg-opacity))
    }

    .hover\\:bg-orange-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(255 247 237/var(--tw-bg-opacity))
    }

    .hover\\:bg-orange-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(249 115 22/var(--tw-bg-opacity))
    }

    .hover\\:bg-orange-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(234 88 12/var(--tw-bg-opacity))
    }

    .hover\\:bg-orange-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(194 65 12/var(--tw-bg-opacity))
    }

    .hover\\:bg-orange-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(154 52 18/var(--tw-bg-opacity))
    }

    .hover\\:bg-orange-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(124 45 18/var(--tw-bg-opacity))
    }

    .hover\\:bg-pink-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(252 231 243/var(--tw-bg-opacity))
    }

    .hover\\:bg-pink-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(251 207 232/var(--tw-bg-opacity))
    }

    .hover\\:bg-pink-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(249 168 212/var(--tw-bg-opacity))
    }

    .hover\\:bg-pink-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(244 114 182/var(--tw-bg-opacity))
    }

    .hover\\:bg-pink-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(253 242 248/var(--tw-bg-opacity))
    }

    .hover\\:bg-pink-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(236 72 153/var(--tw-bg-opacity))
    }

    .hover\\:bg-pink-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(219 39 119/var(--tw-bg-opacity))
    }

    .hover\\:bg-pink-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(190 24 93/var(--tw-bg-opacity))
    }

    .hover\\:bg-pink-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(157 23 77/var(--tw-bg-opacity))
    }

    .hover\\:bg-pink-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(131 24 67/var(--tw-bg-opacity))
    }

    .hover\\:bg-purple-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(243 232 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-purple-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(233 213 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-purple-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(216 180 254/var(--tw-bg-opacity))
    }

    .hover\\:bg-purple-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(192 132 252/var(--tw-bg-opacity))
    }

    .hover\\:bg-purple-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(250 245 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-purple-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(168 85 247/var(--tw-bg-opacity))
    }

    .hover\\:bg-purple-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(147 51 234/var(--tw-bg-opacity))
    }

    .hover\\:bg-purple-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(126 34 206/var(--tw-bg-opacity))
    }

    .hover\\:bg-purple-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(107 33 168/var(--tw-bg-opacity))
    }

    .hover\\:bg-purple-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(88 28 135/var(--tw-bg-opacity))
    }

    .hover\\:bg-red-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(254 226 226/var(--tw-bg-opacity))
    }

    .hover\\:bg-red-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(254 202 202/var(--tw-bg-opacity))
    }

    .hover\\:bg-red-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(252 165 165/var(--tw-bg-opacity))
    }

    .hover\\:bg-red-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(248 113 113/var(--tw-bg-opacity))
    }

    .hover\\:bg-red-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(254 242 242/var(--tw-bg-opacity))
    }

    .hover\\:bg-red-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(239 68 68/var(--tw-bg-opacity))
    }

    .hover\\:bg-red-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(220 38 38/var(--tw-bg-opacity))
    }

    .hover\\:bg-red-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(185 28 28/var(--tw-bg-opacity))
    }

    .hover\\:bg-red-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(153 27 27/var(--tw-bg-opacity))
    }

    .hover\\:bg-red-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(127 29 29/var(--tw-bg-opacity))
    }

    .hover\\:bg-rose-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(255 228 230/var(--tw-bg-opacity))
    }

    .hover\\:bg-rose-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(254 205 211/var(--tw-bg-opacity))
    }

    .hover\\:bg-rose-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(253 164 175/var(--tw-bg-opacity))
    }

    .hover\\:bg-rose-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(251 113 133/var(--tw-bg-opacity))
    }

    .hover\\:bg-rose-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(255 241 242/var(--tw-bg-opacity))
    }

    .hover\\:bg-rose-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(244 63 94/var(--tw-bg-opacity))
    }

    .hover\\:bg-rose-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(225 29 72/var(--tw-bg-opacity))
    }

    .hover\\:bg-rose-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(190 18 60/var(--tw-bg-opacity))
    }

    .hover\\:bg-rose-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(159 18 57/var(--tw-bg-opacity))
    }

    .hover\\:bg-rose-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(136 19 55/var(--tw-bg-opacity))
    }

    .hover\\:bg-sky-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(224 242 254/var(--tw-bg-opacity))
    }

    .hover\\:bg-sky-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(186 230 253/var(--tw-bg-opacity))
    }

    .hover\\:bg-sky-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(125 211 252/var(--tw-bg-opacity))
    }

    .hover\\:bg-sky-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(56 189 248/var(--tw-bg-opacity))
    }

    .hover\\:bg-sky-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(240 249 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-sky-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(14 165 233/var(--tw-bg-opacity))
    }

    .hover\\:bg-sky-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(2 132 199/var(--tw-bg-opacity))
    }

    .hover\\:bg-sky-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(3 105 161/var(--tw-bg-opacity))
    }

    .hover\\:bg-sky-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(7 89 133/var(--tw-bg-opacity))
    }

    .hover\\:bg-sky-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(12 74 110/var(--tw-bg-opacity))
    }

    .hover\\:bg-slate-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(241 245 249/var(--tw-bg-opacity))
    }

    .hover\\:bg-slate-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(226 232 240/var(--tw-bg-opacity))
    }

    .hover\\:bg-slate-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(203 213 225/var(--tw-bg-opacity))
    }

    .hover\\:bg-slate-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(148 163 184/var(--tw-bg-opacity))
    }

    .hover\\:bg-slate-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(248 250 252/var(--tw-bg-opacity))
    }

    .hover\\:bg-slate-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(100 116 139/var(--tw-bg-opacity))
    }

    .hover\\:bg-slate-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(71 85 105/var(--tw-bg-opacity))
    }

    .hover\\:bg-slate-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(51 65 85/var(--tw-bg-opacity))
    }

    .hover\\:bg-slate-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(30 41 59/var(--tw-bg-opacity))
    }

    .hover\\:bg-slate-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(15 23 42/var(--tw-bg-opacity))
    }

    .hover\\:bg-stone-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(245 245 244/var(--tw-bg-opacity))
    }

    .hover\\:bg-stone-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(231 229 228/var(--tw-bg-opacity))
    }

    .hover\\:bg-stone-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(214 211 209/var(--tw-bg-opacity))
    }

    .hover\\:bg-stone-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(168 162 158/var(--tw-bg-opacity))
    }

    .hover\\:bg-stone-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 249/var(--tw-bg-opacity))
    }

    .hover\\:bg-stone-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(120 113 108/var(--tw-bg-opacity))
    }

    .hover\\:bg-stone-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(87 83 78/var(--tw-bg-opacity))
    }

    .hover\\:bg-stone-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(68 64 60/var(--tw-bg-opacity))
    }

    .hover\\:bg-stone-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(41 37 36/var(--tw-bg-opacity))
    }

    .hover\\:bg-stone-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(28 25 23/var(--tw-bg-opacity))
    }

    .hover\\:bg-teal-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(204 251 241/var(--tw-bg-opacity))
    }

    .hover\\:bg-teal-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(153 246 228/var(--tw-bg-opacity))
    }

    .hover\\:bg-teal-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(94 234 212/var(--tw-bg-opacity))
    }

    .hover\\:bg-teal-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(45 212 191/var(--tw-bg-opacity))
    }

    .hover\\:bg-teal-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(240 253 250/var(--tw-bg-opacity))
    }

    .hover\\:bg-teal-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(20 184 166/var(--tw-bg-opacity))
    }

    .hover\\:bg-teal-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(13 148 136/var(--tw-bg-opacity))
    }

    .hover\\:bg-teal-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(15 118 110/var(--tw-bg-opacity))
    }

    .hover\\:bg-teal-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(17 94 89/var(--tw-bg-opacity))
    }

    .hover\\:bg-teal-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(19 78 74/var(--tw-bg-opacity))
    }

    .hover\\:bg-violet-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(237 233 254/var(--tw-bg-opacity))
    }

    .hover\\:bg-violet-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(221 214 254/var(--tw-bg-opacity))
    }

    .hover\\:bg-violet-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(196 181 253/var(--tw-bg-opacity))
    }

    .hover\\:bg-violet-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(167 139 250/var(--tw-bg-opacity))
    }

    .hover\\:bg-violet-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(245 243 255/var(--tw-bg-opacity))
    }

    .hover\\:bg-violet-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(139 92 246/var(--tw-bg-opacity))
    }

    .hover\\:bg-violet-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(124 58 237/var(--tw-bg-opacity))
    }

    .hover\\:bg-violet-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(109 40 217/var(--tw-bg-opacity))
    }

    .hover\\:bg-violet-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(91 33 182/var(--tw-bg-opacity))
    }

    .hover\\:bg-violet-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(76 29 149/var(--tw-bg-opacity))
    }

    .hover\\:bg-yellow-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(254 249 195/var(--tw-bg-opacity))
    }

    .hover\\:bg-yellow-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(254 240 138/var(--tw-bg-opacity))
    }

    .hover\\:bg-yellow-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(253 224 71/var(--tw-bg-opacity))
    }

    .hover\\:bg-yellow-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(250 204 21/var(--tw-bg-opacity))
    }

    .hover\\:bg-yellow-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(254 252 232/var(--tw-bg-opacity))
    }

    .hover\\:bg-yellow-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(234 179 8/var(--tw-bg-opacity))
    }

    .hover\\:bg-yellow-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(202 138 4/var(--tw-bg-opacity))
    }

    .hover\\:bg-yellow-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(161 98 7/var(--tw-bg-opacity))
    }

    .hover\\:bg-yellow-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(133 77 14/var(--tw-bg-opacity))
    }

    .hover\\:bg-yellow-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(113 63 18/var(--tw-bg-opacity))
    }

    .hover\\:bg-zinc-100:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(244 244 245/var(--tw-bg-opacity))
    }

    .hover\\:bg-zinc-200:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(228 228 231/var(--tw-bg-opacity))
    }

    .hover\\:bg-zinc-300:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(212 212 216/var(--tw-bg-opacity))
    }

    .hover\\:bg-zinc-400:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(161 161 170/var(--tw-bg-opacity))
    }

    .hover\\:bg-zinc-50:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 250/var(--tw-bg-opacity))
    }

    .hover\\:bg-zinc-500:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(113 113 122/var(--tw-bg-opacity))
    }

    .hover\\:bg-zinc-600:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(82 82 91/var(--tw-bg-opacity))
    }

    .hover\\:bg-zinc-700:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(63 63 70/var(--tw-bg-opacity))
    }

    .hover\\:bg-zinc-800:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(39 39 42/var(--tw-bg-opacity))
    }

    .hover\\:bg-zinc-900:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(24 24 27/var(--tw-bg-opacity))
    }

    .hover\\:p-0:hover {
      padding: 0
    }

    .hover\\:p-0\\.5:hover {
      padding: .125rem
    }

    .hover\\:p-1:hover {
      padding: .25rem
    }

    .hover\\:p-1\\.5:hover {
      padding: .375rem
    }

    .hover\\:p-14:hover {
      padding: 3.5rem
    }

    .hover\\:p-16:hover {
      padding: 4rem
    }

    .hover\\:p-2:hover {
      padding: .5rem
    }

    .hover\\:p-2\\.5:hover {
      padding: .625rem
    }

    .hover\\:p-20:hover {
      padding: 5rem
    }

    .hover\\:p-24:hover {
      padding: 6rem
    }

    .hover\\:p-28:hover {
      padding: 7rem
    }

    .hover\\:p-3:hover {
      padding: .75rem
    }

    .hover\\:p-3\\.5:hover {
      padding: .875rem
    }

    .hover\\:p-32:hover {
      padding: 8rem
    }

    .hover\\:p-36:hover {
      padding: 9rem
    }

    .hover\\:p-40:hover {
      padding: 10rem
    }

    .hover\\:p-44:hover {
      padding: 11rem
    }

    .hover\\:p-48:hover {
      padding: 12rem
    }

    .hover\\:p-52:hover {
      padding: 13rem
    }

    .hover\\:p-56:hover {
      padding: 14rem
    }

    .hover\\:p-60:hover {
      padding: 15rem
    }

    .hover\\:p-64:hover {
      padding: 16rem
    }

    .hover\\:p-72:hover {
      padding: 18rem
    }

    .hover\\:p-80:hover {
      padding: 20rem
    }

    .hover\\:p-96:hover {
      padding: 24rem
    }

    .hover\\:p-px:hover {
      padding: 1px
    }

    .hover\\:px-0:hover {
      padding-left: 0;
      padding-right: 0
    }

    .hover\\:px-0\\.5:hover {
      padding-left: .125rem;
      padding-right: .125rem
    }

    .hover\\:px-1:hover {
      padding-left: .25rem;
      padding-right: .25rem
    }

    .hover\\:px-1\\.5:hover {
      padding-left: .375rem;
      padding-right: .375rem
    }

    .hover\\:px-14:hover {
      padding-left: 3.5rem;
      padding-right: 3.5rem
    }

    .hover\\:px-16:hover {
      padding-left: 4rem;
      padding-right: 4rem
    }

    .hover\\:px-2:hover {
      padding-left: .5rem;
      padding-right: .5rem
    }

    .hover\\:px-2\\.5:hover {
      padding-left: .625rem;
      padding-right: .625rem
    }

    .hover\\:px-20:hover {
      padding-left: 5rem;
      padding-right: 5rem
    }

    .hover\\:px-24:hover {
      padding-left: 6rem;
      padding-right: 6rem
    }

    .hover\\:px-28:hover {
      padding-left: 7rem;
      padding-right: 7rem
    }

    .hover\\:px-3:hover {
      padding-left: .75rem;
      padding-right: .75rem
    }

    .hover\\:px-3\\.5:hover {
      padding-left: .875rem;
      padding-right: .875rem
    }

    .hover\\:px-32:hover {
      padding-left: 8rem;
      padding-right: 8rem
    }

    .hover\\:px-36:hover {
      padding-left: 9rem;
      padding-right: 9rem
    }

    .hover\\:px-40:hover {
      padding-left: 10rem;
      padding-right: 10rem
    }

    .hover\\:px-44:hover {
      padding-left: 11rem;
      padding-right: 11rem
    }

    .hover\\:px-48:hover {
      padding-left: 12rem;
      padding-right: 12rem
    }

    .hover\\:px-52:hover {
      padding-left: 13rem;
      padding-right: 13rem
    }

    .hover\\:px-56:hover {
      padding-left: 14rem;
      padding-right: 14rem
    }

    .hover\\:px-60:hover {
      padding-left: 15rem;
      padding-right: 15rem
    }

    .hover\\:px-64:hover {
      padding-left: 16rem;
      padding-right: 16rem
    }

    .hover\\:px-72:hover {
      padding-left: 18rem;
      padding-right: 18rem
    }

    .hover\\:px-80:hover {
      padding-left: 20rem;
      padding-right: 20rem
    }

    .hover\\:px-96:hover {
      padding-left: 24rem;
      padding-right: 24rem
    }

    .hover\\:px-px:hover {
      padding-left: 1px;
      padding-right: 1px
    }

    .hover\\:py-0:hover {
      padding-top: 0;
      padding-bottom: 0
    }

    .hover\\:py-0\\.5:hover {
      padding-top: .125rem;
      padding-bottom: .125rem
    }

    .hover\\:py-1:hover {
      padding-top: .25rem;
      padding-bottom: .25rem
    }

    .hover\\:py-1\\.5:hover {
      padding-top: .375rem;
      padding-bottom: .375rem
    }

    .hover\\:py-14:hover {
      padding-top: 3.5rem;
      padding-bottom: 3.5rem
    }

    .hover\\:py-16:hover {
      padding-top: 4rem;
      padding-bottom: 4rem
    }

    .hover\\:py-2:hover {
      padding-top: .5rem;
      padding-bottom: .5rem
    }

    .hover\\:py-2\\.5:hover {
      padding-top: .625rem;
      padding-bottom: .625rem
    }

    .hover\\:py-20:hover {
      padding-top: 5rem;
      padding-bottom: 5rem
    }

    .hover\\:py-24:hover {
      padding-top: 6rem;
      padding-bottom: 6rem
    }

    .hover\\:py-28:hover {
      padding-top: 7rem;
      padding-bottom: 7rem
    }

    .hover\\:py-3:hover {
      padding-top: .75rem;
      padding-bottom: .75rem
    }

    .hover\\:py-3\\.5:hover {
      padding-top: .875rem;
      padding-bottom: .875rem
    }

    .hover\\:py-32:hover {
      padding-top: 8rem;
      padding-bottom: 8rem
    }

    .hover\\:py-36:hover {
      padding-top: 9rem;
      padding-bottom: 9rem
    }

    .hover\\:py-40:hover {
      padding-top: 10rem;
      padding-bottom: 10rem
    }

    .hover\\:py-44:hover {
      padding-top: 11rem;
      padding-bottom: 11rem
    }

    .hover\\:py-48:hover {
      padding-top: 12rem;
      padding-bottom: 12rem
    }

    .hover\\:py-52:hover {
      padding-top: 13rem;
      padding-bottom: 13rem
    }

    .hover\\:py-56:hover {
      padding-top: 14rem;
      padding-bottom: 14rem
    }

    .hover\\:py-60:hover {
      padding-top: 15rem;
      padding-bottom: 15rem
    }

    .hover\\:py-64:hover {
      padding-top: 16rem;
      padding-bottom: 16rem
    }

    .hover\\:py-72:hover {
      padding-top: 18rem;
      padding-bottom: 18rem
    }

    .hover\\:py-80:hover {
      padding-top: 20rem;
      padding-bottom: 20rem
    }

    .hover\\:py-96:hover {
      padding-top: 24rem;
      padding-bottom: 24rem
    }

    .hover\\:py-px:hover {
      padding-top: 1px;
      padding-bottom: 1px
    }

    .hover\\:pb-0:hover {
      padding-bottom: 0
    }

    .hover\\:pb-0\\.5:hover {
      padding-bottom: .125rem
    }

    .hover\\:pb-1:hover {
      padding-bottom: .25rem
    }

    .hover\\:pb-1\\.5:hover {
      padding-bottom: .375rem
    }

    .hover\\:pb-14:hover {
      padding-bottom: 3.5rem
    }

    .hover\\:pb-16:hover {
      padding-bottom: 4rem
    }

    .hover\\:pb-2:hover {
      padding-bottom: .5rem
    }

    .hover\\:pb-2\\.5:hover {
      padding-bottom: .625rem
    }

    .hover\\:pb-20:hover {
      padding-bottom: 5rem
    }

    .hover\\:pb-24:hover {
      padding-bottom: 6rem
    }

    .hover\\:pb-28:hover {
      padding-bottom: 7rem
    }

    .hover\\:pb-3:hover {
      padding-bottom: .75rem
    }

    .hover\\:pb-3\\.5:hover {
      padding-bottom: .875rem
    }

    .hover\\:pb-32:hover {
      padding-bottom: 8rem
    }

    .hover\\:pb-36:hover {
      padding-bottom: 9rem
    }

    .hover\\:pb-40:hover {
      padding-bottom: 10rem
    }

    .hover\\:pb-44:hover {
      padding-bottom: 11rem
    }

    .hover\\:pb-48:hover {
      padding-bottom: 12rem
    }

    .hover\\:pb-52:hover {
      padding-bottom: 13rem
    }

    .hover\\:pb-56:hover {
      padding-bottom: 14rem
    }

    .hover\\:pb-60:hover {
      padding-bottom: 15rem
    }

    .hover\\:pb-64:hover {
      padding-bottom: 16rem
    }

    .hover\\:pb-72:hover {
      padding-bottom: 18rem
    }

    .hover\\:pb-80:hover {
      padding-bottom: 20rem
    }

    .hover\\:pb-96:hover {
      padding-bottom: 24rem
    }

    .hover\\:pb-px:hover {
      padding-bottom: 1px
    }

    .hover\\:pl-0:hover {
      padding-left: 0
    }

    .hover\\:pl-0\\.5:hover {
      padding-left: .125rem
    }

    .hover\\:pl-1:hover {
      padding-left: .25rem
    }

    .hover\\:pl-1\\.5:hover {
      padding-left: .375rem
    }

    .hover\\:pl-14:hover {
      padding-left: 3.5rem
    }

    .hover\\:pl-16:hover {
      padding-left: 4rem
    }

    .hover\\:pl-2:hover {
      padding-left: .5rem
    }

    .hover\\:pl-2\\.5:hover {
      padding-left: .625rem
    }

    .hover\\:pl-20:hover {
      padding-left: 5rem
    }

    .hover\\:pl-24:hover {
      padding-left: 6rem
    }

    .hover\\:pl-28:hover {
      padding-left: 7rem
    }

    .hover\\:pl-3:hover {
      padding-left: .75rem
    }

    .hover\\:pl-3\\.5:hover {
      padding-left: .875rem
    }

    .hover\\:pl-32:hover {
      padding-left: 8rem
    }

    .hover\\:pl-36:hover {
      padding-left: 9rem
    }

    .hover\\:pl-40:hover {
      padding-left: 10rem
    }

    .hover\\:pl-44:hover {
      padding-left: 11rem
    }

    .hover\\:pl-48:hover {
      padding-left: 12rem
    }

    .hover\\:pl-52:hover {
      padding-left: 13rem
    }

    .hover\\:pl-56:hover {
      padding-left: 14rem
    }

    .hover\\:pl-60:hover {
      padding-left: 15rem
    }

    .hover\\:pl-64:hover {
      padding-left: 16rem
    }

    .hover\\:pl-72:hover {
      padding-left: 18rem
    }

    .hover\\:pl-80:hover {
      padding-left: 20rem
    }

    .hover\\:pl-96:hover {
      padding-left: 24rem
    }

    .hover\\:pl-px:hover {
      padding-left: 1px
    }

    .hover\\:pr-0:hover {
      padding-right: 0
    }

    .hover\\:pr-0\\.5:hover {
      padding-right: .125rem
    }

    .hover\\:pr-1:hover {
      padding-right: .25rem
    }

    .hover\\:pr-1\\.5:hover {
      padding-right: .375rem
    }

    .hover\\:pr-14:hover {
      padding-right: 3.5rem
    }

    .hover\\:pr-16:hover {
      padding-right: 4rem
    }

    .hover\\:pr-2:hover {
      padding-right: .5rem
    }

    .hover\\:pr-2\\.5:hover {
      padding-right: .625rem
    }

    .hover\\:pr-20:hover {
      padding-right: 5rem
    }

    .hover\\:pr-24:hover {
      padding-right: 6rem
    }

    .hover\\:pr-28:hover {
      padding-right: 7rem
    }

    .hover\\:pr-3:hover {
      padding-right: .75rem
    }

    .hover\\:pr-3\\.5:hover {
      padding-right: .875rem
    }

    .hover\\:pr-32:hover {
      padding-right: 8rem
    }

    .hover\\:pr-36:hover {
      padding-right: 9rem
    }

    .hover\\:pr-40:hover {
      padding-right: 10rem
    }

    .hover\\:pr-44:hover {
      padding-right: 11rem
    }

    .hover\\:pr-48:hover {
      padding-right: 12rem
    }

    .hover\\:pr-52:hover {
      padding-right: 13rem
    }

    .hover\\:pr-56:hover {
      padding-right: 14rem
    }

    .hover\\:pr-60:hover {
      padding-right: 15rem
    }

    .hover\\:pr-64:hover {
      padding-right: 16rem
    }

    .hover\\:pr-72:hover {
      padding-right: 18rem
    }

    .hover\\:pr-80:hover {
      padding-right: 20rem
    }

    .hover\\:pr-96:hover {
      padding-right: 24rem
    }

    .hover\\:pr-px:hover {
      padding-right: 1px
    }

    .hover\\:pt-0:hover {
      padding-top: 0
    }

    .hover\\:pt-0\\.5:hover {
      padding-top: .125rem
    }

    .hover\\:pt-1:hover {
      padding-top: .25rem
    }

    .hover\\:pt-1\\.5:hover {
      padding-top: .375rem
    }

    .hover\\:pt-14:hover {
      padding-top: 3.5rem
    }

    .hover\\:pt-16:hover {
      padding-top: 4rem
    }

    .hover\\:pt-2:hover {
      padding-top: .5rem
    }

    .hover\\:pt-2\\.5:hover {
      padding-top: .625rem
    }

    .hover\\:pt-20:hover {
      padding-top: 5rem
    }

    .hover\\:pt-24:hover {
      padding-top: 6rem
    }

    .hover\\:pt-28:hover {
      padding-top: 7rem
    }

    .hover\\:pt-3:hover {
      padding-top: .75rem
    }

    .hover\\:pt-3\\.5:hover {
      padding-top: .875rem
    }

    .hover\\:pt-32:hover {
      padding-top: 8rem
    }

    .hover\\:pt-36:hover {
      padding-top: 9rem
    }

    .hover\\:pt-40:hover {
      padding-top: 10rem
    }

    .hover\\:pt-44:hover {
      padding-top: 11rem
    }

    .hover\\:pt-48:hover {
      padding-top: 12rem
    }

    .hover\\:pt-52:hover {
      padding-top: 13rem
    }

    .hover\\:pt-56:hover {
      padding-top: 14rem
    }

    .hover\\:pt-60:hover {
      padding-top: 15rem
    }

    .hover\\:pt-64:hover {
      padding-top: 16rem
    }

    .hover\\:pt-72:hover {
      padding-top: 18rem
    }

    .hover\\:pt-80:hover {
      padding-top: 20rem
    }

    .hover\\:pt-96:hover {
      padding-top: 24rem
    }

    .hover\\:pt-px:hover {
      padding-top: 1px
    }

    .hover\\:text-2xl:hover {
      font-size: 1.5rem;
      line-height: 2rem
    }

    .hover\\:text-3xl:hover {
      font-size: 1.875rem;
      line-height: 2.25rem
    }

    .hover\\:text-4xl:hover {
      font-size: 2.25rem;
      line-height: 2.5rem
    }

    .hover\\:text-5xl:hover {
      font-size: 3rem;
      line-height: 1
    }

    .hover\\:text-6xl:hover {
      font-size: 3.75rem;
      line-height: 1
    }

    .hover\\:text-7xl:hover {
      font-size: 4.5rem;
      line-height: 1
    }

    .hover\\:text-8xl:hover {
      font-size: 6rem;
      line-height: 1
    }

    .hover\\:text-9xl:hover {
      font-size: 8rem;
      line-height: 1
    }

    .hover\\:text-base:hover {
      font-size: 1rem;
      line-height: 1.5rem
    }

    .hover\\:text-lg:hover {
      font-size: 1.125rem;
      line-height: 1.75rem
    }

    .hover\\:text-sm:hover {
      font-size: .875rem;
      line-height: 1.25rem
    }

    .hover\\:text-xl:hover {
      font-size: 1.25rem;
      line-height: 1.75rem
    }

    .hover\\:text-xs:hover {
      font-size: .75rem;
      line-height: 1rem
    }

    .hover\\:text-amber-100:hover {
      --tw-text-opacity: 1;
      color: rgb(254 243 199/var(--tw-text-opacity))
    }

    .hover\\:text-amber-200:hover {
      --tw-text-opacity: 1;
      color: rgb(253 230 138/var(--tw-text-opacity))
    }

    .hover\\:text-amber-300:hover {
      --tw-text-opacity: 1;
      color: rgb(252 211 77/var(--tw-text-opacity))
    }

    .hover\\:text-amber-400:hover {
      --tw-text-opacity: 1;
      color: rgb(251 191 36/var(--tw-text-opacity))
    }

    .hover\\:text-amber-50:hover {
      --tw-text-opacity: 1;
      color: rgb(255 251 235/var(--tw-text-opacity))
    }

    .hover\\:text-amber-500:hover {
      --tw-text-opacity: 1;
      color: rgb(245 158 11/var(--tw-text-opacity))
    }

    .hover\\:text-amber-600:hover {
      --tw-text-opacity: 1;
      color: rgb(217 119 6/var(--tw-text-opacity))
    }

    .hover\\:text-amber-700:hover {
      --tw-text-opacity: 1;
      color: rgb(180 83 9/var(--tw-text-opacity))
    }

    .hover\\:text-amber-800:hover {
      --tw-text-opacity: 1;
      color: rgb(146 64 14/var(--tw-text-opacity))
    }

    .hover\\:text-amber-900:hover {
      --tw-text-opacity: 1;
      color: rgb(120 53 15/var(--tw-text-opacity))
    }

    .hover\\:text-blue-100:hover {
      --tw-text-opacity: 1;
      color: rgb(219 234 254/var(--tw-text-opacity))
    }

    .hover\\:text-blue-200:hover {
      --tw-text-opacity: 1;
      color: rgb(191 219 254/var(--tw-text-opacity))
    }

    .hover\\:text-blue-300:hover {
      --tw-text-opacity: 1;
      color: rgb(147 197 253/var(--tw-text-opacity))
    }

    .hover\\:text-blue-400:hover {
      --tw-text-opacity: 1;
      color: rgb(96 165 250/var(--tw-text-opacity))
    }

    .hover\\:text-blue-50:hover {
      --tw-text-opacity: 1;
      color: rgb(239 246 255/var(--tw-text-opacity))
    }

    .hover\\:text-blue-500:hover {
      --tw-text-opacity: 1;
      color: rgb(59 130 246/var(--tw-text-opacity))
    }

    .hover\\:text-blue-600:hover {
      --tw-text-opacity: 1;
      color: rgb(37 99 235/var(--tw-text-opacity))
    }

    .hover\\:text-blue-700:hover {
      --tw-text-opacity: 1;
      color: rgb(29 78 216/var(--tw-text-opacity))
    }

    .hover\\:text-blue-800:hover {
      --tw-text-opacity: 1;
      color: rgb(30 64 175/var(--tw-text-opacity))
    }

    .hover\\:text-blue-900:hover {
      --tw-text-opacity: 1;
      color: rgb(30 58 138/var(--tw-text-opacity))
    }

    .hover\\:text-cyan-100:hover {
      --tw-text-opacity: 1;
      color: rgb(207 250 254/var(--tw-text-opacity))
    }

    .hover\\:text-cyan-200:hover {
      --tw-text-opacity: 1;
      color: rgb(165 243 252/var(--tw-text-opacity))
    }

    .hover\\:text-cyan-300:hover {
      --tw-text-opacity: 1;
      color: rgb(103 232 249/var(--tw-text-opacity))
    }

    .hover\\:text-cyan-400:hover {
      --tw-text-opacity: 1;
      color: rgb(34 211 238/var(--tw-text-opacity))
    }

    .hover\\:text-cyan-50:hover {
      --tw-text-opacity: 1;
      color: rgb(236 254 255/var(--tw-text-opacity))
    }

    .hover\\:text-cyan-500:hover {
      --tw-text-opacity: 1;
      color: rgb(6 182 212/var(--tw-text-opacity))
    }

    .hover\\:text-cyan-600:hover {
      --tw-text-opacity: 1;
      color: rgb(8 145 178/var(--tw-text-opacity))
    }

    .hover\\:text-cyan-700:hover {
      --tw-text-opacity: 1;
      color: rgb(14 116 144/var(--tw-text-opacity))
    }

    .hover\\:text-cyan-800:hover {
      --tw-text-opacity: 1;
      color: rgb(21 94 117/var(--tw-text-opacity))
    }

    .hover\\:text-cyan-900:hover {
      --tw-text-opacity: 1;
      color: rgb(22 78 99/var(--tw-text-opacity))
    }

    .hover\\:text-emerald-100:hover {
      --tw-text-opacity: 1;
      color: rgb(209 250 229/var(--tw-text-opacity))
    }

    .hover\\:text-emerald-200:hover {
      --tw-text-opacity: 1;
      color: rgb(167 243 208/var(--tw-text-opacity))
    }

    .hover\\:text-emerald-300:hover {
      --tw-text-opacity: 1;
      color: rgb(110 231 183/var(--tw-text-opacity))
    }

    .hover\\:text-emerald-400:hover {
      --tw-text-opacity: 1;
      color: rgb(52 211 153/var(--tw-text-opacity))
    }

    .hover\\:text-emerald-50:hover {
      --tw-text-opacity: 1;
      color: rgb(236 253 245/var(--tw-text-opacity))
    }

    .hover\\:text-emerald-500:hover {
      --tw-text-opacity: 1;
      color: rgb(16 185 129/var(--tw-text-opacity))
    }

    .hover\\:text-emerald-600:hover {
      --tw-text-opacity: 1;
      color: rgb(5 150 105/var(--tw-text-opacity))
    }

    .hover\\:text-emerald-700:hover {
      --tw-text-opacity: 1;
      color: rgb(4 120 87/var(--tw-text-opacity))
    }

    .hover\\:text-emerald-800:hover {
      --tw-text-opacity: 1;
      color: rgb(6 95 70/var(--tw-text-opacity))
    }

    .hover\\:text-emerald-900:hover {
      --tw-text-opacity: 1;
      color: rgb(6 78 59/var(--tw-text-opacity))
    }

    .hover\\:text-fuchsia-100:hover {
      --tw-text-opacity: 1;
      color: rgb(250 232 255/var(--tw-text-opacity))
    }

    .hover\\:text-fuchsia-200:hover {
      --tw-text-opacity: 1;
      color: rgb(245 208 254/var(--tw-text-opacity))
    }

    .hover\\:text-fuchsia-300:hover {
      --tw-text-opacity: 1;
      color: rgb(240 171 252/var(--tw-text-opacity))
    }

    .hover\\:text-fuchsia-400:hover {
      --tw-text-opacity: 1;
      color: rgb(232 121 249/var(--tw-text-opacity))
    }

    .hover\\:text-fuchsia-50:hover {
      --tw-text-opacity: 1;
      color: rgb(253 244 255/var(--tw-text-opacity))
    }

    .hover\\:text-fuchsia-500:hover {
      --tw-text-opacity: 1;
      color: rgb(217 70 239/var(--tw-text-opacity))
    }

    .hover\\:text-fuchsia-600:hover {
      --tw-text-opacity: 1;
      color: rgb(192 38 211/var(--tw-text-opacity))
    }

    .hover\\:text-fuchsia-700:hover {
      --tw-text-opacity: 1;
      color: rgb(162 28 175/var(--tw-text-opacity))
    }

    .hover\\:text-fuchsia-800:hover {
      --tw-text-opacity: 1;
      color: rgb(134 25 143/var(--tw-text-opacity))
    }

    .hover\\:text-fuchsia-900:hover {
      --tw-text-opacity: 1;
      color: rgb(112 26 117/var(--tw-text-opacity))
    }

    .hover\\:text-gray-100:hover {
      --tw-text-opacity: 1;
      color: rgb(243 244 246/var(--tw-text-opacity))
    }

    .hover\\:text-gray-200:hover {
      --tw-text-opacity: 1;
      color: rgb(229 231 235/var(--tw-text-opacity))
    }

    .hover\\:text-gray-300:hover {
      --tw-text-opacity: 1;
      color: rgb(209 213 219/var(--tw-text-opacity))
    }

    .hover\\:text-gray-400:hover {
      --tw-text-opacity: 1;
      color: rgb(156 163 175/var(--tw-text-opacity))
    }

    .hover\\:text-gray-50:hover {
      --tw-text-opacity: 1;
      color: rgb(249 250 251/var(--tw-text-opacity))
    }

    .hover\\:text-gray-500:hover {
      --tw-text-opacity: 1;
      color: rgb(107 114 128/var(--tw-text-opacity))
    }

    .hover\\:text-gray-600:hover {
      --tw-text-opacity: 1;
      color: rgb(75 85 99/var(--tw-text-opacity))
    }

    .hover\\:text-gray-700:hover {
      --tw-text-opacity: 1;
      color: rgb(55 65 81/var(--tw-text-opacity))
    }

    .hover\\:text-gray-800:hover {
      --tw-text-opacity: 1;
      color: rgb(31 41 55/var(--tw-text-opacity))
    }

    .hover\\:text-gray-900:hover {
      --tw-text-opacity: 1;
      color: rgb(17 24 39/var(--tw-text-opacity))
    }

    .hover\\:text-green-100:hover {
      --tw-text-opacity: 1;
      color: rgb(220 252 231/var(--tw-text-opacity))
    }

    .hover\\:text-green-200:hover {
      --tw-text-opacity: 1;
      color: rgb(187 247 208/var(--tw-text-opacity))
    }

    .hover\\:text-green-300:hover {
      --tw-text-opacity: 1;
      color: rgb(134 239 172/var(--tw-text-opacity))
    }

    .hover\\:text-green-400:hover {
      --tw-text-opacity: 1;
      color: rgb(74 222 128/var(--tw-text-opacity))
    }

    .hover\\:text-green-50:hover {
      --tw-text-opacity: 1;
      color: rgb(240 253 244/var(--tw-text-opacity))
    }

    .hover\\:text-green-500:hover {
      --tw-text-opacity: 1;
      color: rgb(34 197 94/var(--tw-text-opacity))
    }

    .hover\\:text-green-600:hover {
      --tw-text-opacity: 1;
      color: rgb(22 163 74/var(--tw-text-opacity))
    }

    .hover\\:text-green-700:hover {
      --tw-text-opacity: 1;
      color: rgb(21 128 61/var(--tw-text-opacity))
    }

    .hover\\:text-green-800:hover {
      --tw-text-opacity: 1;
      color: rgb(22 101 52/var(--tw-text-opacity))
    }

    .hover\\:text-green-900:hover {
      --tw-text-opacity: 1;
      color: rgb(20 83 45/var(--tw-text-opacity))
    }

    .hover\\:text-indigo-100:hover {
      --tw-text-opacity: 1;
      color: rgb(224 231 255/var(--tw-text-opacity))
    }

    .hover\\:text-indigo-200:hover {
      --tw-text-opacity: 1;
      color: rgb(199 210 254/var(--tw-text-opacity))
    }

    .hover\\:text-indigo-300:hover {
      --tw-text-opacity: 1;
      color: rgb(165 180 252/var(--tw-text-opacity))
    }

    .hover\\:text-indigo-400:hover {
      --tw-text-opacity: 1;
      color: rgb(129 140 248/var(--tw-text-opacity))
    }

    .hover\\:text-indigo-50:hover {
      --tw-text-opacity: 1;
      color: rgb(238 242 255/var(--tw-text-opacity))
    }

    .hover\\:text-indigo-500:hover {
      --tw-text-opacity: 1;
      color: rgb(99 102 241/var(--tw-text-opacity))
    }

    .hover\\:text-indigo-600:hover {
      --tw-text-opacity: 1;
      color: rgb(79 70 229/var(--tw-text-opacity))
    }

    .hover\\:text-indigo-700:hover {
      --tw-text-opacity: 1;
      color: rgb(67 56 202/var(--tw-text-opacity))
    }

    .hover\\:text-indigo-800:hover {
      --tw-text-opacity: 1;
      color: rgb(55 48 163/var(--tw-text-opacity))
    }

    .hover\\:text-indigo-900:hover {
      --tw-text-opacity: 1;
      color: rgb(49 46 129/var(--tw-text-opacity))
    }

    .hover\\:text-lime-100:hover {
      --tw-text-opacity: 1;
      color: rgb(236 252 203/var(--tw-text-opacity))
    }

    .hover\\:text-lime-200:hover {
      --tw-text-opacity: 1;
      color: rgb(217 249 157/var(--tw-text-opacity))
    }

    .hover\\:text-lime-300:hover {
      --tw-text-opacity: 1;
      color: rgb(190 242 100/var(--tw-text-opacity))
    }

    .hover\\:text-lime-400:hover {
      --tw-text-opacity: 1;
      color: rgb(163 230 53/var(--tw-text-opacity))
    }

    .hover\\:text-lime-50:hover {
      --tw-text-opacity: 1;
      color: rgb(247 254 231/var(--tw-text-opacity))
    }

    .hover\\:text-lime-500:hover {
      --tw-text-opacity: 1;
      color: rgb(132 204 22/var(--tw-text-opacity))
    }

    .hover\\:text-lime-600:hover {
      --tw-text-opacity: 1;
      color: rgb(101 163 13/var(--tw-text-opacity))
    }

    .hover\\:text-lime-700:hover {
      --tw-text-opacity: 1;
      color: rgb(77 124 15/var(--tw-text-opacity))
    }

    .hover\\:text-lime-800:hover {
      --tw-text-opacity: 1;
      color: rgb(63 98 18/var(--tw-text-opacity))
    }

    .hover\\:text-lime-900:hover {
      --tw-text-opacity: 1;
      color: rgb(54 83 20/var(--tw-text-opacity))
    }

    .hover\\:text-neutral-100:hover {
      --tw-text-opacity: 1;
      color: rgb(245 245 245/var(--tw-text-opacity))
    }

    .hover\\:text-neutral-200:hover {
      --tw-text-opacity: 1;
      color: rgb(229 229 229/var(--tw-text-opacity))
    }

    .hover\\:text-neutral-300:hover {
      --tw-text-opacity: 1;
      color: rgb(212 212 212/var(--tw-text-opacity))
    }

    .hover\\:text-neutral-400:hover {
      --tw-text-opacity: 1;
      color: rgb(163 163 163/var(--tw-text-opacity))
    }

    .hover\\:text-neutral-50:hover {
      --tw-text-opacity: 1;
      color: rgb(250 250 250/var(--tw-text-opacity))
    }

    .hover\\:text-neutral-500:hover {
      --tw-text-opacity: 1;
      color: rgb(115 115 115/var(--tw-text-opacity))
    }

    .hover\\:text-neutral-600:hover {
      --tw-text-opacity: 1;
      color: rgb(82 82 82/var(--tw-text-opacity))
    }

    .hover\\:text-neutral-700:hover {
      --tw-text-opacity: 1;
      color: rgb(64 64 64/var(--tw-text-opacity))
    }

    .hover\\:text-neutral-800:hover {
      --tw-text-opacity: 1;
      color: rgb(38 38 38/var(--tw-text-opacity))
    }

    .hover\\:text-neutral-900:hover {
      --tw-text-opacity: 1;
      color: rgb(23 23 23/var(--tw-text-opacity))
    }

    .hover\\:text-orange-100:hover {
      --tw-text-opacity: 1;
      color: rgb(255 237 213/var(--tw-text-opacity))
    }

    .hover\\:text-orange-200:hover {
      --tw-text-opacity: 1;
      color: rgb(254 215 170/var(--tw-text-opacity))
    }

    .hover\\:text-orange-300:hover {
      --tw-text-opacity: 1;
      color: rgb(253 186 116/var(--tw-text-opacity))
    }

    .hover\\:text-orange-400:hover {
      --tw-text-opacity: 1;
      color: rgb(251 146 60/var(--tw-text-opacity))
    }

    .hover\\:text-orange-50:hover {
      --tw-text-opacity: 1;
      color: rgb(255 247 237/var(--tw-text-opacity))
    }

    .hover\\:text-orange-500:hover {
      --tw-text-opacity: 1;
      color: rgb(249 115 22/var(--tw-text-opacity))
    }

    .hover\\:text-orange-600:hover {
      --tw-text-opacity: 1;
      color: rgb(234 88 12/var(--tw-text-opacity))
    }

    .hover\\:text-orange-700:hover {
      --tw-text-opacity: 1;
      color: rgb(194 65 12/var(--tw-text-opacity))
    }

    .hover\\:text-orange-800:hover {
      --tw-text-opacity: 1;
      color: rgb(154 52 18/var(--tw-text-opacity))
    }

    .hover\\:text-orange-900:hover {
      --tw-text-opacity: 1;
      color: rgb(124 45 18/var(--tw-text-opacity))
    }

    .hover\\:text-pink-100:hover {
      --tw-text-opacity: 1;
      color: rgb(252 231 243/var(--tw-text-opacity))
    }

    .hover\\:text-pink-200:hover {
      --tw-text-opacity: 1;
      color: rgb(251 207 232/var(--tw-text-opacity))
    }

    .hover\\:text-pink-300:hover {
      --tw-text-opacity: 1;
      color: rgb(249 168 212/var(--tw-text-opacity))
    }

    .hover\\:text-pink-400:hover {
      --tw-text-opacity: 1;
      color: rgb(244 114 182/var(--tw-text-opacity))
    }

    .hover\\:text-pink-50:hover {
      --tw-text-opacity: 1;
      color: rgb(253 242 248/var(--tw-text-opacity))
    }

    .hover\\:text-pink-500:hover {
      --tw-text-opacity: 1;
      color: rgb(236 72 153/var(--tw-text-opacity))
    }

    .hover\\:text-pink-600:hover {
      --tw-text-opacity: 1;
      color: rgb(219 39 119/var(--tw-text-opacity))
    }

    .hover\\:text-pink-700:hover {
      --tw-text-opacity: 1;
      color: rgb(190 24 93/var(--tw-text-opacity))
    }

    .hover\\:text-pink-800:hover {
      --tw-text-opacity: 1;
      color: rgb(157 23 77/var(--tw-text-opacity))
    }

    .hover\\:text-pink-900:hover {
      --tw-text-opacity: 1;
      color: rgb(131 24 67/var(--tw-text-opacity))
    }

    .hover\\:text-purple-100:hover {
      --tw-text-opacity: 1;
      color: rgb(243 232 255/var(--tw-text-opacity))
    }

    .hover\\:text-purple-200:hover {
      --tw-text-opacity: 1;
      color: rgb(233 213 255/var(--tw-text-opacity))
    }

    .hover\\:text-purple-300:hover {
      --tw-text-opacity: 1;
      color: rgb(216 180 254/var(--tw-text-opacity))
    }

    .hover\\:text-purple-400:hover {
      --tw-text-opacity: 1;
      color: rgb(192 132 252/var(--tw-text-opacity))
    }

    .hover\\:text-purple-50:hover {
      --tw-text-opacity: 1;
      color: rgb(250 245 255/var(--tw-text-opacity))
    }

    .hover\\:text-purple-500:hover {
      --tw-text-opacity: 1;
      color: rgb(168 85 247/var(--tw-text-opacity))
    }

    .hover\\:text-purple-600:hover {
      --tw-text-opacity: 1;
      color: rgb(147 51 234/var(--tw-text-opacity))
    }

    .hover\\:text-purple-700:hover {
      --tw-text-opacity: 1;
      color: rgb(126 34 206/var(--tw-text-opacity))
    }

    .hover\\:text-purple-800:hover {
      --tw-text-opacity: 1;
      color: rgb(107 33 168/var(--tw-text-opacity))
    }

    .hover\\:text-purple-900:hover {
      --tw-text-opacity: 1;
      color: rgb(88 28 135/var(--tw-text-opacity))
    }

    .hover\\:text-red-100:hover {
      --tw-text-opacity: 1;
      color: rgb(254 226 226/var(--tw-text-opacity))
    }

    .hover\\:text-red-200:hover {
      --tw-text-opacity: 1;
      color: rgb(254 202 202/var(--tw-text-opacity))
    }

    .hover\\:text-red-300:hover {
      --tw-text-opacity: 1;
      color: rgb(252 165 165/var(--tw-text-opacity))
    }

    .hover\\:text-red-400:hover {
      --tw-text-opacity: 1;
      color: rgb(248 113 113/var(--tw-text-opacity))
    }

    .hover\\:text-red-50:hover {
      --tw-text-opacity: 1;
      color: rgb(254 242 242/var(--tw-text-opacity))
    }

    .hover\\:text-red-500:hover {
      --tw-text-opacity: 1;
      color: rgb(239 68 68/var(--tw-text-opacity))
    }

    .hover\\:text-red-600:hover {
      --tw-text-opacity: 1;
      color: rgb(220 38 38/var(--tw-text-opacity))
    }

    .hover\\:text-red-700:hover {
      --tw-text-opacity: 1;
      color: rgb(185 28 28/var(--tw-text-opacity))
    }

    .hover\\:text-red-800:hover {
      --tw-text-opacity: 1;
      color: rgb(153 27 27/var(--tw-text-opacity))
    }

    .hover\\:text-red-900:hover {
      --tw-text-opacity: 1;
      color: rgb(127 29 29/var(--tw-text-opacity))
    }

    .hover\\:text-rose-100:hover {
      --tw-text-opacity: 1;
      color: rgb(255 228 230/var(--tw-text-opacity))
    }

    .hover\\:text-rose-200:hover {
      --tw-text-opacity: 1;
      color: rgb(254 205 211/var(--tw-text-opacity))
    }

    .hover\\:text-rose-300:hover {
      --tw-text-opacity: 1;
      color: rgb(253 164 175/var(--tw-text-opacity))
    }

    .hover\\:text-rose-400:hover {
      --tw-text-opacity: 1;
      color: rgb(251 113 133/var(--tw-text-opacity))
    }

    .hover\\:text-rose-50:hover {
      --tw-text-opacity: 1;
      color: rgb(255 241 242/var(--tw-text-opacity))
    }

    .hover\\:text-rose-500:hover {
      --tw-text-opacity: 1;
      color: rgb(244 63 94/var(--tw-text-opacity))
    }

    .hover\\:text-rose-600:hover {
      --tw-text-opacity: 1;
      color: rgb(225 29 72/var(--tw-text-opacity))
    }

    .hover\\:text-rose-700:hover {
      --tw-text-opacity: 1;
      color: rgb(190 18 60/var(--tw-text-opacity))
    }

    .hover\\:text-rose-800:hover {
      --tw-text-opacity: 1;
      color: rgb(159 18 57/var(--tw-text-opacity))
    }

    .hover\\:text-rose-900:hover {
      --tw-text-opacity: 1;
      color: rgb(136 19 55/var(--tw-text-opacity))
    }

    .hover\\:text-sky-100:hover {
      --tw-text-opacity: 1;
      color: rgb(224 242 254/var(--tw-text-opacity))
    }

    .hover\\:text-sky-200:hover {
      --tw-text-opacity: 1;
      color: rgb(186 230 253/var(--tw-text-opacity))
    }

    .hover\\:text-sky-300:hover {
      --tw-text-opacity: 1;
      color: rgb(125 211 252/var(--tw-text-opacity))
    }

    .hover\\:text-sky-400:hover {
      --tw-text-opacity: 1;
      color: rgb(56 189 248/var(--tw-text-opacity))
    }

    .hover\\:text-sky-50:hover {
      --tw-text-opacity: 1;
      color: rgb(240 249 255/var(--tw-text-opacity))
    }

    .hover\\:text-sky-500:hover {
      --tw-text-opacity: 1;
      color: rgb(14 165 233/var(--tw-text-opacity))
    }

    .hover\\:text-sky-600:hover {
      --tw-text-opacity: 1;
      color: rgb(2 132 199/var(--tw-text-opacity))
    }

    .hover\\:text-sky-700:hover {
      --tw-text-opacity: 1;
      color: rgb(3 105 161/var(--tw-text-opacity))
    }

    .hover\\:text-sky-800:hover {
      --tw-text-opacity: 1;
      color: rgb(7 89 133/var(--tw-text-opacity))
    }

    .hover\\:text-sky-900:hover {
      --tw-text-opacity: 1;
      color: rgb(12 74 110/var(--tw-text-opacity))
    }

    .hover\\:text-slate-100:hover {
      --tw-text-opacity: 1;
      color: rgb(241 245 249/var(--tw-text-opacity))
    }

    .hover\\:text-slate-200:hover {
      --tw-text-opacity: 1;
      color: rgb(226 232 240/var(--tw-text-opacity))
    }

    .hover\\:text-slate-300:hover {
      --tw-text-opacity: 1;
      color: rgb(203 213 225/var(--tw-text-opacity))
    }

    .hover\\:text-slate-400:hover {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    .hover\\:text-slate-50:hover {
      --tw-text-opacity: 1;
      color: rgb(248 250 252/var(--tw-text-opacity))
    }

    .hover\\:text-slate-500:hover {
      --tw-text-opacity: 1;
      color: rgb(100 116 139/var(--tw-text-opacity))
    }

    .hover\\:text-slate-600:hover {
      --tw-text-opacity: 1;
      color: rgb(71 85 105/var(--tw-text-opacity))
    }

    .hover\\:text-slate-700:hover {
      --tw-text-opacity: 1;
      color: rgb(51 65 85/var(--tw-text-opacity))
    }

    .hover\\:text-slate-800:hover {
      --tw-text-opacity: 1;
      color: rgb(30 41 59/var(--tw-text-opacity))
    }

    .hover\\:text-slate-900:hover {
      --tw-text-opacity: 1;
      color: rgb(15 23 42/var(--tw-text-opacity))
    }

    .hover\\:text-stone-100:hover {
      --tw-text-opacity: 1;
      color: rgb(245 245 244/var(--tw-text-opacity))
    }

    .hover\\:text-stone-200:hover {
      --tw-text-opacity: 1;
      color: rgb(231 229 228/var(--tw-text-opacity))
    }

    .hover\\:text-stone-300:hover {
      --tw-text-opacity: 1;
      color: rgb(214 211 209/var(--tw-text-opacity))
    }

    .hover\\:text-stone-400:hover {
      --tw-text-opacity: 1;
      color: rgb(168 162 158/var(--tw-text-opacity))
    }

    .hover\\:text-stone-50:hover {
      --tw-text-opacity: 1;
      color: rgb(250 250 249/var(--tw-text-opacity))
    }

    .hover\\:text-stone-500:hover {
      --tw-text-opacity: 1;
      color: rgb(120 113 108/var(--tw-text-opacity))
    }

    .hover\\:text-stone-600:hover {
      --tw-text-opacity: 1;
      color: rgb(87 83 78/var(--tw-text-opacity))
    }

    .hover\\:text-stone-700:hover {
      --tw-text-opacity: 1;
      color: rgb(68 64 60/var(--tw-text-opacity))
    }

    .hover\\:text-stone-800:hover {
      --tw-text-opacity: 1;
      color: rgb(41 37 36/var(--tw-text-opacity))
    }

    .hover\\:text-stone-900:hover {
      --tw-text-opacity: 1;
      color: rgb(28 25 23/var(--tw-text-opacity))
    }

    .hover\\:text-teal-100:hover {
      --tw-text-opacity: 1;
      color: rgb(204 251 241/var(--tw-text-opacity))
    }

    .hover\\:text-teal-200:hover {
      --tw-text-opacity: 1;
      color: rgb(153 246 228/var(--tw-text-opacity))
    }

    .hover\\:text-teal-300:hover {
      --tw-text-opacity: 1;
      color: rgb(94 234 212/var(--tw-text-opacity))
    }

    .hover\\:text-teal-400:hover {
      --tw-text-opacity: 1;
      color: rgb(45 212 191/var(--tw-text-opacity))
    }

    .hover\\:text-teal-50:hover {
      --tw-text-opacity: 1;
      color: rgb(240 253 250/var(--tw-text-opacity))
    }

    .hover\\:text-teal-500:hover {
      --tw-text-opacity: 1;
      color: rgb(20 184 166/var(--tw-text-opacity))
    }

    .hover\\:text-teal-600:hover {
      --tw-text-opacity: 1;
      color: rgb(13 148 136/var(--tw-text-opacity))
    }

    .hover\\:text-teal-700:hover {
      --tw-text-opacity: 1;
      color: rgb(15 118 110/var(--tw-text-opacity))
    }

    .hover\\:text-teal-800:hover {
      --tw-text-opacity: 1;
      color: rgb(17 94 89/var(--tw-text-opacity))
    }

    .hover\\:text-teal-900:hover {
      --tw-text-opacity: 1;
      color: rgb(19 78 74/var(--tw-text-opacity))
    }

    .hover\\:text-violet-100:hover {
      --tw-text-opacity: 1;
      color: rgb(237 233 254/var(--tw-text-opacity))
    }

    .hover\\:text-violet-200:hover {
      --tw-text-opacity: 1;
      color: rgb(221 214 254/var(--tw-text-opacity))
    }

    .hover\\:text-violet-300:hover {
      --tw-text-opacity: 1;
      color: rgb(196 181 253/var(--tw-text-opacity))
    }

    .hover\\:text-violet-400:hover {
      --tw-text-opacity: 1;
      color: rgb(167 139 250/var(--tw-text-opacity))
    }

    .hover\\:text-violet-50:hover {
      --tw-text-opacity: 1;
      color: rgb(245 243 255/var(--tw-text-opacity))
    }

    .hover\\:text-violet-500:hover {
      --tw-text-opacity: 1;
      color: rgb(139 92 246/var(--tw-text-opacity))
    }

    .hover\\:text-violet-600:hover {
      --tw-text-opacity: 1;
      color: rgb(124 58 237/var(--tw-text-opacity))
    }

    .hover\\:text-violet-700:hover {
      --tw-text-opacity: 1;
      color: rgb(109 40 217/var(--tw-text-opacity))
    }

    .hover\\:text-violet-800:hover {
      --tw-text-opacity: 1;
      color: rgb(91 33 182/var(--tw-text-opacity))
    }

    .hover\\:text-violet-900:hover {
      --tw-text-opacity: 1;
      color: rgb(76 29 149/var(--tw-text-opacity))
    }

    .hover\\:text-yellow-100:hover {
      --tw-text-opacity: 1;
      color: rgb(254 249 195/var(--tw-text-opacity))
    }

    .hover\\:text-yellow-200:hover {
      --tw-text-opacity: 1;
      color: rgb(254 240 138/var(--tw-text-opacity))
    }

    .hover\\:text-yellow-300:hover {
      --tw-text-opacity: 1;
      color: rgb(253 224 71/var(--tw-text-opacity))
    }

    .hover\\:text-yellow-400:hover {
      --tw-text-opacity: 1;
      color: rgb(250 204 21/var(--tw-text-opacity))
    }

    .hover\\:text-yellow-50:hover {
      --tw-text-opacity: 1;
      color: rgb(254 252 232/var(--tw-text-opacity))
    }

    .hover\\:text-yellow-500:hover {
      --tw-text-opacity: 1;
      color: rgb(234 179 8/var(--tw-text-opacity))
    }

    .hover\\:text-yellow-600:hover {
      --tw-text-opacity: 1;
      color: rgb(202 138 4/var(--tw-text-opacity))
    }

    .hover\\:text-yellow-700:hover {
      --tw-text-opacity: 1;
      color: rgb(161 98 7/var(--tw-text-opacity))
    }

    .hover\\:text-yellow-800:hover {
      --tw-text-opacity: 1;
      color: rgb(133 77 14/var(--tw-text-opacity))
    }

    .hover\\:text-yellow-900:hover {
      --tw-text-opacity: 1;
      color: rgb(113 63 18/var(--tw-text-opacity))
    }

    .hover\\:text-zinc-100:hover {
      --tw-text-opacity: 1;
      color: rgb(244 244 245/var(--tw-text-opacity))
    }

    .hover\\:text-zinc-200:hover {
      --tw-text-opacity: 1;
      color: rgb(228 228 231/var(--tw-text-opacity))
    }

    .hover\\:text-zinc-300:hover {
      --tw-text-opacity: 1;
      color: rgb(212 212 216/var(--tw-text-opacity))
    }

    .hover\\:text-zinc-400:hover {
      --tw-text-opacity: 1;
      color: rgb(161 161 170/var(--tw-text-opacity))
    }

    .hover\\:text-zinc-50:hover {
      --tw-text-opacity: 1;
      color: rgb(250 250 250/var(--tw-text-opacity))
    }

    .hover\\:text-zinc-500:hover {
      --tw-text-opacity: 1;
      color: rgb(113 113 122/var(--tw-text-opacity))
    }

    .hover\\:text-zinc-600:hover {
      --tw-text-opacity: 1;
      color: rgb(82 82 91/var(--tw-text-opacity))
    }

    .hover\\:text-zinc-700:hover {
      --tw-text-opacity: 1;
      color: rgb(63 63 70/var(--tw-text-opacity))
    }

    .hover\\:text-zinc-800:hover {
      --tw-text-opacity: 1;
      color: rgb(39 39 42/var(--tw-text-opacity))
    }

    .hover\\:text-zinc-900:hover {
      --tw-text-opacity: 1;
      color: rgb(24 24 27/var(--tw-text-opacity))
    }

    .hover\\:ring-amber-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 243 199/var(--tw-ring-opacity))
    }

    .hover\\:ring-amber-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 230 138/var(--tw-ring-opacity))
    }

    .hover\\:ring-amber-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 211 77/var(--tw-ring-opacity))
    }

    .hover\\:ring-amber-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 191 36/var(--tw-ring-opacity))
    }

    .hover\\:ring-amber-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 251 235/var(--tw-ring-opacity))
    }

    .hover\\:ring-amber-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 158 11/var(--tw-ring-opacity))
    }

    .hover\\:ring-amber-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 119 6/var(--tw-ring-opacity))
    }

    .hover\\:ring-amber-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(180 83 9/var(--tw-ring-opacity))
    }

    .hover\\:ring-amber-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(146 64 14/var(--tw-ring-opacity))
    }

    .hover\\:ring-amber-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(120 53 15/var(--tw-ring-opacity))
    }

    .hover\\:ring-blue-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(219 234 254/var(--tw-ring-opacity))
    }

    .hover\\:ring-blue-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(191 219 254/var(--tw-ring-opacity))
    }

    .hover\\:ring-blue-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(147 197 253/var(--tw-ring-opacity))
    }

    .hover\\:ring-blue-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(96 165 250/var(--tw-ring-opacity))
    }

    .hover\\:ring-blue-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(239 246 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-blue-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(59 130 246/var(--tw-ring-opacity))
    }

    .hover\\:ring-blue-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(37 99 235/var(--tw-ring-opacity))
    }

    .hover\\:ring-blue-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(29 78 216/var(--tw-ring-opacity))
    }

    .hover\\:ring-blue-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 64 175/var(--tw-ring-opacity))
    }

    .hover\\:ring-blue-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 58 138/var(--tw-ring-opacity))
    }

    .hover\\:ring-cyan-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(207 250 254/var(--tw-ring-opacity))
    }

    .hover\\:ring-cyan-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(165 243 252/var(--tw-ring-opacity))
    }

    .hover\\:ring-cyan-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(103 232 249/var(--tw-ring-opacity))
    }

    .hover\\:ring-cyan-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(34 211 238/var(--tw-ring-opacity))
    }

    .hover\\:ring-cyan-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 254 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-cyan-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 182 212/var(--tw-ring-opacity))
    }

    .hover\\:ring-cyan-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(8 145 178/var(--tw-ring-opacity))
    }

    .hover\\:ring-cyan-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(14 116 144/var(--tw-ring-opacity))
    }

    .hover\\:ring-cyan-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(21 94 117/var(--tw-ring-opacity))
    }

    .hover\\:ring-cyan-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 78 99/var(--tw-ring-opacity))
    }

    .hover\\:ring-emerald-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(209 250 229/var(--tw-ring-opacity))
    }

    .hover\\:ring-emerald-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(167 243 208/var(--tw-ring-opacity))
    }

    .hover\\:ring-emerald-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(110 231 183/var(--tw-ring-opacity))
    }

    .hover\\:ring-emerald-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(52 211 153/var(--tw-ring-opacity))
    }

    .hover\\:ring-emerald-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 253 245/var(--tw-ring-opacity))
    }

    .hover\\:ring-emerald-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(16 185 129/var(--tw-ring-opacity))
    }

    .hover\\:ring-emerald-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(5 150 105/var(--tw-ring-opacity))
    }

    .hover\\:ring-emerald-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(4 120 87/var(--tw-ring-opacity))
    }

    .hover\\:ring-emerald-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 95 70/var(--tw-ring-opacity))
    }

    .hover\\:ring-emerald-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 78 59/var(--tw-ring-opacity))
    }

    .hover\\:ring-fuchsia-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 232 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-fuchsia-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 208 254/var(--tw-ring-opacity))
    }

    .hover\\:ring-fuchsia-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 171 252/var(--tw-ring-opacity))
    }

    .hover\\:ring-fuchsia-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(232 121 249/var(--tw-ring-opacity))
    }

    .hover\\:ring-fuchsia-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 244 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-fuchsia-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 70 239/var(--tw-ring-opacity))
    }

    .hover\\:ring-fuchsia-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(192 38 211/var(--tw-ring-opacity))
    }

    .hover\\:ring-fuchsia-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(162 28 175/var(--tw-ring-opacity))
    }

    .hover\\:ring-fuchsia-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(134 25 143/var(--tw-ring-opacity))
    }

    .hover\\:ring-fuchsia-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(112 26 117/var(--tw-ring-opacity))
    }

    .hover\\:ring-gray-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(243 244 246/var(--tw-ring-opacity))
    }

    .hover\\:ring-gray-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(229 231 235/var(--tw-ring-opacity))
    }

    .hover\\:ring-gray-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(209 213 219/var(--tw-ring-opacity))
    }

    .hover\\:ring-gray-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(156 163 175/var(--tw-ring-opacity))
    }

    .hover\\:ring-gray-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 250 251/var(--tw-ring-opacity))
    }

    .hover\\:ring-gray-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(107 114 128/var(--tw-ring-opacity))
    }

    .hover\\:ring-gray-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(75 85 99/var(--tw-ring-opacity))
    }

    .hover\\:ring-gray-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(55 65 81/var(--tw-ring-opacity))
    }

    .hover\\:ring-gray-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(31 41 55/var(--tw-ring-opacity))
    }

    .hover\\:ring-gray-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(17 24 39/var(--tw-ring-opacity))
    }

    .hover\\:ring-green-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(220 252 231/var(--tw-ring-opacity))
    }

    .hover\\:ring-green-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(187 247 208/var(--tw-ring-opacity))
    }

    .hover\\:ring-green-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(134 239 172/var(--tw-ring-opacity))
    }

    .hover\\:ring-green-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(74 222 128/var(--tw-ring-opacity))
    }

    .hover\\:ring-green-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 253 244/var(--tw-ring-opacity))
    }

    .hover\\:ring-green-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(34 197 94/var(--tw-ring-opacity))
    }

    .hover\\:ring-green-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 163 74/var(--tw-ring-opacity))
    }

    .hover\\:ring-green-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(21 128 61/var(--tw-ring-opacity))
    }

    .hover\\:ring-green-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 101 52/var(--tw-ring-opacity))
    }

    .hover\\:ring-green-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(20 83 45/var(--tw-ring-opacity))
    }

    .hover\\:ring-indigo-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(224 231 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-indigo-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(199 210 254/var(--tw-ring-opacity))
    }

    .hover\\:ring-indigo-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(165 180 252/var(--tw-ring-opacity))
    }

    .hover\\:ring-indigo-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(129 140 248/var(--tw-ring-opacity))
    }

    .hover\\:ring-indigo-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(238 242 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-indigo-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(99 102 241/var(--tw-ring-opacity))
    }

    .hover\\:ring-indigo-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(79 70 229/var(--tw-ring-opacity))
    }

    .hover\\:ring-indigo-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(67 56 202/var(--tw-ring-opacity))
    }

    .hover\\:ring-indigo-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(55 48 163/var(--tw-ring-opacity))
    }

    .hover\\:ring-indigo-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(49 46 129/var(--tw-ring-opacity))
    }

    .hover\\:ring-lime-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 252 203/var(--tw-ring-opacity))
    }

    .hover\\:ring-lime-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 249 157/var(--tw-ring-opacity))
    }

    .hover\\:ring-lime-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 242 100/var(--tw-ring-opacity))
    }

    .hover\\:ring-lime-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(163 230 53/var(--tw-ring-opacity))
    }

    .hover\\:ring-lime-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(247 254 231/var(--tw-ring-opacity))
    }

    .hover\\:ring-lime-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(132 204 22/var(--tw-ring-opacity))
    }

    .hover\\:ring-lime-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(101 163 13/var(--tw-ring-opacity))
    }

    .hover\\:ring-lime-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(77 124 15/var(--tw-ring-opacity))
    }

    .hover\\:ring-lime-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(63 98 18/var(--tw-ring-opacity))
    }

    .hover\\:ring-lime-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(54 83 20/var(--tw-ring-opacity))
    }

    .hover\\:ring-neutral-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 245 245/var(--tw-ring-opacity))
    }

    .hover\\:ring-neutral-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(229 229 229/var(--tw-ring-opacity))
    }

    .hover\\:ring-neutral-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(212 212 212/var(--tw-ring-opacity))
    }

    .hover\\:ring-neutral-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(163 163 163/var(--tw-ring-opacity))
    }

    .hover\\:ring-neutral-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 250/var(--tw-ring-opacity))
    }

    .hover\\:ring-neutral-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(115 115 115/var(--tw-ring-opacity))
    }

    .hover\\:ring-neutral-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(82 82 82/var(--tw-ring-opacity))
    }

    .hover\\:ring-neutral-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(64 64 64/var(--tw-ring-opacity))
    }

    .hover\\:ring-neutral-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(38 38 38/var(--tw-ring-opacity))
    }

    .hover\\:ring-neutral-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(23 23 23/var(--tw-ring-opacity))
    }

    .hover\\:ring-orange-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 237 213/var(--tw-ring-opacity))
    }

    .hover\\:ring-orange-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 215 170/var(--tw-ring-opacity))
    }

    .hover\\:ring-orange-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 186 116/var(--tw-ring-opacity))
    }

    .hover\\:ring-orange-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 146 60/var(--tw-ring-opacity))
    }

    .hover\\:ring-orange-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 247 237/var(--tw-ring-opacity))
    }

    .hover\\:ring-orange-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 115 22/var(--tw-ring-opacity))
    }

    .hover\\:ring-orange-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(234 88 12/var(--tw-ring-opacity))
    }

    .hover\\:ring-orange-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(194 65 12/var(--tw-ring-opacity))
    }

    .hover\\:ring-orange-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(154 52 18/var(--tw-ring-opacity))
    }

    .hover\\:ring-orange-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(124 45 18/var(--tw-ring-opacity))
    }

    .hover\\:ring-pink-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 231 243/var(--tw-ring-opacity))
    }

    .hover\\:ring-pink-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 207 232/var(--tw-ring-opacity))
    }

    .hover\\:ring-pink-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 168 212/var(--tw-ring-opacity))
    }

    .hover\\:ring-pink-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 114 182/var(--tw-ring-opacity))
    }

    .hover\\:ring-pink-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 242 248/var(--tw-ring-opacity))
    }

    .hover\\:ring-pink-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 72 153/var(--tw-ring-opacity))
    }

    .hover\\:ring-pink-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(219 39 119/var(--tw-ring-opacity))
    }

    .hover\\:ring-pink-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 24 93/var(--tw-ring-opacity))
    }

    .hover\\:ring-pink-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(157 23 77/var(--tw-ring-opacity))
    }

    .hover\\:ring-pink-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(131 24 67/var(--tw-ring-opacity))
    }

    .hover\\:ring-purple-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(243 232 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-purple-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(233 213 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-purple-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(216 180 254/var(--tw-ring-opacity))
    }

    .hover\\:ring-purple-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(192 132 252/var(--tw-ring-opacity))
    }

    .hover\\:ring-purple-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 245 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-purple-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(168 85 247/var(--tw-ring-opacity))
    }

    .hover\\:ring-purple-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(147 51 234/var(--tw-ring-opacity))
    }

    .hover\\:ring-purple-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(126 34 206/var(--tw-ring-opacity))
    }

    .hover\\:ring-purple-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(107 33 168/var(--tw-ring-opacity))
    }

    .hover\\:ring-purple-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(88 28 135/var(--tw-ring-opacity))
    }

    .hover\\:ring-red-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 226 226/var(--tw-ring-opacity))
    }

    .hover\\:ring-red-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 202 202/var(--tw-ring-opacity))
    }

    .hover\\:ring-red-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 165 165/var(--tw-ring-opacity))
    }

    .hover\\:ring-red-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(248 113 113/var(--tw-ring-opacity))
    }

    .hover\\:ring-red-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 242 242/var(--tw-ring-opacity))
    }

    .hover\\:ring-red-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(239 68 68/var(--tw-ring-opacity))
    }

    .hover\\:ring-red-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(220 38 38/var(--tw-ring-opacity))
    }

    .hover\\:ring-red-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(185 28 28/var(--tw-ring-opacity))
    }

    .hover\\:ring-red-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(153 27 27/var(--tw-ring-opacity))
    }

    .hover\\:ring-red-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(127 29 29/var(--tw-ring-opacity))
    }

    .hover\\:ring-rose-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 228 230/var(--tw-ring-opacity))
    }

    .hover\\:ring-rose-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 205 211/var(--tw-ring-opacity))
    }

    .hover\\:ring-rose-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 164 175/var(--tw-ring-opacity))
    }

    .hover\\:ring-rose-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 113 133/var(--tw-ring-opacity))
    }

    .hover\\:ring-rose-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 241 242/var(--tw-ring-opacity))
    }

    .hover\\:ring-rose-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 63 94/var(--tw-ring-opacity))
    }

    .hover\\:ring-rose-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(225 29 72/var(--tw-ring-opacity))
    }

    .hover\\:ring-rose-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 18 60/var(--tw-ring-opacity))
    }

    .hover\\:ring-rose-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(159 18 57/var(--tw-ring-opacity))
    }

    .hover\\:ring-rose-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(136 19 55/var(--tw-ring-opacity))
    }

    .hover\\:ring-sky-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(224 242 254/var(--tw-ring-opacity))
    }

    .hover\\:ring-sky-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(186 230 253/var(--tw-ring-opacity))
    }

    .hover\\:ring-sky-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(125 211 252/var(--tw-ring-opacity))
    }

    .hover\\:ring-sky-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(56 189 248/var(--tw-ring-opacity))
    }

    .hover\\:ring-sky-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 249 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-sky-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(14 165 233/var(--tw-ring-opacity))
    }

    .hover\\:ring-sky-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(2 132 199/var(--tw-ring-opacity))
    }

    .hover\\:ring-sky-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(3 105 161/var(--tw-ring-opacity))
    }

    .hover\\:ring-sky-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(7 89 133/var(--tw-ring-opacity))
    }

    .hover\\:ring-sky-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(12 74 110/var(--tw-ring-opacity))
    }

    .hover\\:ring-slate-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(241 245 249/var(--tw-ring-opacity))
    }

    .hover\\:ring-slate-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(226 232 240/var(--tw-ring-opacity))
    }

    .hover\\:ring-slate-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(203 213 225/var(--tw-ring-opacity))
    }

    .hover\\:ring-slate-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(148 163 184/var(--tw-ring-opacity))
    }

    .hover\\:ring-slate-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(248 250 252/var(--tw-ring-opacity))
    }

    .hover\\:ring-slate-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(100 116 139/var(--tw-ring-opacity))
    }

    .hover\\:ring-slate-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(71 85 105/var(--tw-ring-opacity))
    }

    .hover\\:ring-slate-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(51 65 85/var(--tw-ring-opacity))
    }

    .hover\\:ring-slate-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 41 59/var(--tw-ring-opacity))
    }

    .hover\\:ring-slate-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(15 23 42/var(--tw-ring-opacity))
    }

    .hover\\:ring-stone-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 245 244/var(--tw-ring-opacity))
    }

    .hover\\:ring-stone-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(231 229 228/var(--tw-ring-opacity))
    }

    .hover\\:ring-stone-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(214 211 209/var(--tw-ring-opacity))
    }

    .hover\\:ring-stone-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(168 162 158/var(--tw-ring-opacity))
    }

    .hover\\:ring-stone-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 249/var(--tw-ring-opacity))
    }

    .hover\\:ring-stone-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(120 113 108/var(--tw-ring-opacity))
    }

    .hover\\:ring-stone-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(87 83 78/var(--tw-ring-opacity))
    }

    .hover\\:ring-stone-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(68 64 60/var(--tw-ring-opacity))
    }

    .hover\\:ring-stone-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(41 37 36/var(--tw-ring-opacity))
    }

    .hover\\:ring-stone-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(28 25 23/var(--tw-ring-opacity))
    }

    .hover\\:ring-teal-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(204 251 241/var(--tw-ring-opacity))
    }

    .hover\\:ring-teal-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(153 246 228/var(--tw-ring-opacity))
    }

    .hover\\:ring-teal-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(94 234 212/var(--tw-ring-opacity))
    }

    .hover\\:ring-teal-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(45 212 191/var(--tw-ring-opacity))
    }

    .hover\\:ring-teal-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 253 250/var(--tw-ring-opacity))
    }

    .hover\\:ring-teal-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(20 184 166/var(--tw-ring-opacity))
    }

    .hover\\:ring-teal-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(13 148 136/var(--tw-ring-opacity))
    }

    .hover\\:ring-teal-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(15 118 110/var(--tw-ring-opacity))
    }

    .hover\\:ring-teal-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(17 94 89/var(--tw-ring-opacity))
    }

    .hover\\:ring-teal-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(19 78 74/var(--tw-ring-opacity))
    }

    .hover\\:ring-violet-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(237 233 254/var(--tw-ring-opacity))
    }

    .hover\\:ring-violet-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(221 214 254/var(--tw-ring-opacity))
    }

    .hover\\:ring-violet-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(196 181 253/var(--tw-ring-opacity))
    }

    .hover\\:ring-violet-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(167 139 250/var(--tw-ring-opacity))
    }

    .hover\\:ring-violet-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 243 255/var(--tw-ring-opacity))
    }

    .hover\\:ring-violet-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(139 92 246/var(--tw-ring-opacity))
    }

    .hover\\:ring-violet-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(124 58 237/var(--tw-ring-opacity))
    }

    .hover\\:ring-violet-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(109 40 217/var(--tw-ring-opacity))
    }

    .hover\\:ring-violet-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(91 33 182/var(--tw-ring-opacity))
    }

    .hover\\:ring-violet-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(76 29 149/var(--tw-ring-opacity))
    }

    .hover\\:ring-yellow-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 249 195/var(--tw-ring-opacity))
    }

    .hover\\:ring-yellow-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 240 138/var(--tw-ring-opacity))
    }

    .hover\\:ring-yellow-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 224 71/var(--tw-ring-opacity))
    }

    .hover\\:ring-yellow-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 204 21/var(--tw-ring-opacity))
    }

    .hover\\:ring-yellow-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 252 232/var(--tw-ring-opacity))
    }

    .hover\\:ring-yellow-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(234 179 8/var(--tw-ring-opacity))
    }

    .hover\\:ring-yellow-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(202 138 4/var(--tw-ring-opacity))
    }

    .hover\\:ring-yellow-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(161 98 7/var(--tw-ring-opacity))
    }

    .hover\\:ring-yellow-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(133 77 14/var(--tw-ring-opacity))
    }

    .hover\\:ring-yellow-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(113 63 18/var(--tw-ring-opacity))
    }

    .hover\\:ring-zinc-100:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 244 245/var(--tw-ring-opacity))
    }

    .hover\\:ring-zinc-200:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(228 228 231/var(--tw-ring-opacity))
    }

    .hover\\:ring-zinc-300:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(212 212 216/var(--tw-ring-opacity))
    }

    .hover\\:ring-zinc-400:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(161 161 170/var(--tw-ring-opacity))
    }

    .hover\\:ring-zinc-50:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 250/var(--tw-ring-opacity))
    }

    .hover\\:ring-zinc-500:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(113 113 122/var(--tw-ring-opacity))
    }

    .hover\\:ring-zinc-600:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(82 82 91/var(--tw-ring-opacity))
    }

    .hover\\:ring-zinc-700:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(63 63 70/var(--tw-ring-opacity))
    }

    .hover\\:ring-zinc-800:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(39 39 42/var(--tw-ring-opacity))
    }

    .hover\\:ring-zinc-900:hover {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(24 24 27/var(--tw-ring-opacity))
    }

    .focus\\:m-0:focus {
      margin: 0
    }

    .focus\\:m-0\\.5:focus {
      margin: .125rem
    }

    .focus\\:m-1:focus {
      margin: .25rem
    }

    .focus\\:m-1\\.5:focus {
      margin: .375rem
    }

    .focus\\:m-14:focus {
      margin: 3.5rem
    }

    .focus\\:m-16:focus {
      margin: 4rem
    }

    .focus\\:m-2:focus {
      margin: .5rem
    }

    .focus\\:m-2\\.5:focus {
      margin: .625rem
    }

    .focus\\:m-20:focus {
      margin: 5rem
    }

    .focus\\:m-24:focus {
      margin: 6rem
    }

    .focus\\:m-28:focus {
      margin: 7rem
    }

    .focus\\:m-3:focus {
      margin: .75rem
    }

    .focus\\:m-3\\.5:focus {
      margin: .875rem
    }

    .focus\\:m-32:focus {
      margin: 8rem
    }

    .focus\\:m-36:focus {
      margin: 9rem
    }

    .focus\\:m-40:focus {
      margin: 10rem
    }

    .focus\\:m-44:focus {
      margin: 11rem
    }

    .focus\\:m-48:focus {
      margin: 12rem
    }

    .focus\\:m-52:focus {
      margin: 13rem
    }

    .focus\\:m-56:focus {
      margin: 14rem
    }

    .focus\\:m-60:focus {
      margin: 15rem
    }

    .focus\\:m-64:focus {
      margin: 16rem
    }

    .focus\\:m-72:focus {
      margin: 18rem
    }

    .focus\\:m-80:focus {
      margin: 20rem
    }

    .focus\\:m-96:focus {
      margin: 24rem
    }

    .focus\\:m-auto:focus {
      margin: auto
    }

    .focus\\:m-px:focus {
      margin: 1px
    }

    .focus\\:mx-0:focus {
      margin-left: 0;
      margin-right: 0
    }

    .focus\\:mx-0\\.5:focus {
      margin-left: .125rem;
      margin-right: .125rem
    }

    .focus\\:mx-1:focus {
      margin-left: .25rem;
      margin-right: .25rem
    }

    .focus\\:mx-1\\.5:focus {
      margin-left: .375rem;
      margin-right: .375rem
    }

    .focus\\:mx-14:focus {
      margin-left: 3.5rem;
      margin-right: 3.5rem
    }

    .focus\\:mx-16:focus {
      margin-left: 4rem;
      margin-right: 4rem
    }

    .focus\\:mx-2:focus {
      margin-left: .5rem;
      margin-right: .5rem
    }

    .focus\\:mx-2\\.5:focus {
      margin-left: .625rem;
      margin-right: .625rem
    }

    .focus\\:mx-20:focus {
      margin-left: 5rem;
      margin-right: 5rem
    }

    .focus\\:mx-24:focus {
      margin-left: 6rem;
      margin-right: 6rem
    }

    .focus\\:mx-28:focus {
      margin-left: 7rem;
      margin-right: 7rem
    }

    .focus\\:mx-3:focus {
      margin-left: .75rem;
      margin-right: .75rem
    }

    .focus\\:mx-3\\.5:focus {
      margin-left: .875rem;
      margin-right: .875rem
    }

    .focus\\:mx-32:focus {
      margin-left: 8rem;
      margin-right: 8rem
    }

    .focus\\:mx-36:focus {
      margin-left: 9rem;
      margin-right: 9rem
    }

    .focus\\:mx-40:focus {
      margin-left: 10rem;
      margin-right: 10rem
    }

    .focus\\:mx-44:focus {
      margin-left: 11rem;
      margin-right: 11rem
    }

    .focus\\:mx-48:focus {
      margin-left: 12rem;
      margin-right: 12rem
    }

    .focus\\:mx-52:focus {
      margin-left: 13rem;
      margin-right: 13rem
    }

    .focus\\:mx-56:focus {
      margin-left: 14rem;
      margin-right: 14rem
    }

    .focus\\:mx-60:focus {
      margin-left: 15rem;
      margin-right: 15rem
    }

    .focus\\:mx-64:focus {
      margin-left: 16rem;
      margin-right: 16rem
    }

    .focus\\:mx-72:focus {
      margin-left: 18rem;
      margin-right: 18rem
    }

    .focus\\:mx-80:focus {
      margin-left: 20rem;
      margin-right: 20rem
    }

    .focus\\:mx-96:focus {
      margin-left: 24rem;
      margin-right: 24rem
    }

    .focus\\:mx-auto:focus {
      margin-left: auto;
      margin-right: auto
    }

    .focus\\:mx-px:focus {
      margin-left: 1px;
      margin-right: 1px
    }

    .focus\\:my-0:focus {
      margin-top: 0;
      margin-bottom: 0
    }

    .focus\\:my-0\\.5:focus {
      margin-top: .125rem;
      margin-bottom: .125rem
    }

    .focus\\:my-1:focus {
      margin-top: .25rem;
      margin-bottom: .25rem
    }

    .focus\\:my-1\\.5:focus {
      margin-top: .375rem;
      margin-bottom: .375rem
    }

    .focus\\:my-14:focus {
      margin-top: 3.5rem;
      margin-bottom: 3.5rem
    }

    .focus\\:my-16:focus {
      margin-top: 4rem;
      margin-bottom: 4rem
    }

    .focus\\:my-2:focus {
      margin-top: .5rem;
      margin-bottom: .5rem
    }

    .focus\\:my-2\\.5:focus {
      margin-top: .625rem;
      margin-bottom: .625rem
    }

    .focus\\:my-20:focus {
      margin-top: 5rem;
      margin-bottom: 5rem
    }

    .focus\\:my-24:focus {
      margin-top: 6rem;
      margin-bottom: 6rem
    }

    .focus\\:my-28:focus {
      margin-top: 7rem;
      margin-bottom: 7rem
    }

    .focus\\:my-3:focus {
      margin-top: .75rem;
      margin-bottom: .75rem
    }

    .focus\\:my-3\\.5:focus {
      margin-top: .875rem;
      margin-bottom: .875rem
    }

    .focus\\:my-32:focus {
      margin-top: 8rem;
      margin-bottom: 8rem
    }

    .focus\\:my-36:focus {
      margin-top: 9rem;
      margin-bottom: 9rem
    }

    .focus\\:my-40:focus {
      margin-top: 10rem;
      margin-bottom: 10rem
    }

    .focus\\:my-44:focus {
      margin-top: 11rem;
      margin-bottom: 11rem
    }

    .focus\\:my-48:focus {
      margin-top: 12rem;
      margin-bottom: 12rem
    }

    .focus\\:my-52:focus {
      margin-top: 13rem;
      margin-bottom: 13rem
    }

    .focus\\:my-56:focus {
      margin-top: 14rem;
      margin-bottom: 14rem
    }

    .focus\\:my-60:focus {
      margin-top: 15rem;
      margin-bottom: 15rem
    }

    .focus\\:my-64:focus {
      margin-top: 16rem;
      margin-bottom: 16rem
    }

    .focus\\:my-72:focus {
      margin-top: 18rem;
      margin-bottom: 18rem
    }

    .focus\\:my-80:focus {
      margin-top: 20rem;
      margin-bottom: 20rem
    }

    .focus\\:my-96:focus {
      margin-top: 24rem;
      margin-bottom: 24rem
    }

    .focus\\:my-auto:focus {
      margin-top: auto;
      margin-bottom: auto
    }

    .focus\\:my-px:focus {
      margin-top: 1px;
      margin-bottom: 1px
    }

    .focus\\:mb-0:focus {
      margin-bottom: 0
    }

    .focus\\:mb-0\\.5:focus {
      margin-bottom: .125rem
    }

    .focus\\:mb-1:focus {
      margin-bottom: .25rem
    }

    .focus\\:mb-1\\.5:focus {
      margin-bottom: .375rem
    }

    .focus\\:mb-14:focus {
      margin-bottom: 3.5rem
    }

    .focus\\:mb-16:focus {
      margin-bottom: 4rem
    }

    .focus\\:mb-2:focus {
      margin-bottom: .5rem
    }

    .focus\\:mb-2\\.5:focus {
      margin-bottom: .625rem
    }

    .focus\\:mb-20:focus {
      margin-bottom: 5rem
    }

    .focus\\:mb-24:focus {
      margin-bottom: 6rem
    }

    .focus\\:mb-28:focus {
      margin-bottom: 7rem
    }

    .focus\\:mb-3:focus {
      margin-bottom: .75rem
    }

    .focus\\:mb-3\\.5:focus {
      margin-bottom: .875rem
    }

    .focus\\:mb-32:focus {
      margin-bottom: 8rem
    }

    .focus\\:mb-36:focus {
      margin-bottom: 9rem
    }

    .focus\\:mb-40:focus {
      margin-bottom: 10rem
    }

    .focus\\:mb-44:focus {
      margin-bottom: 11rem
    }

    .focus\\:mb-48:focus {
      margin-bottom: 12rem
    }

    .focus\\:mb-52:focus {
      margin-bottom: 13rem
    }

    .focus\\:mb-56:focus {
      margin-bottom: 14rem
    }

    .focus\\:mb-60:focus {
      margin-bottom: 15rem
    }

    .focus\\:mb-64:focus {
      margin-bottom: 16rem
    }

    .focus\\:mb-72:focus {
      margin-bottom: 18rem
    }

    .focus\\:mb-80:focus {
      margin-bottom: 20rem
    }

    .focus\\:mb-96:focus {
      margin-bottom: 24rem
    }

    .focus\\:mb-auto:focus {
      margin-bottom: auto
    }

    .focus\\:mb-px:focus {
      margin-bottom: 1px
    }

    .focus\\:ml-0:focus {
      margin-left: 0
    }

    .focus\\:ml-0\\.5:focus {
      margin-left: .125rem
    }

    .focus\\:ml-1:focus {
      margin-left: .25rem
    }

    .focus\\:ml-1\\.5:focus {
      margin-left: .375rem
    }

    .focus\\:ml-14:focus {
      margin-left: 3.5rem
    }

    .focus\\:ml-16:focus {
      margin-left: 4rem
    }

    .focus\\:ml-2:focus {
      margin-left: .5rem
    }

    .focus\\:ml-2\\.5:focus {
      margin-left: .625rem
    }

    .focus\\:ml-20:focus {
      margin-left: 5rem
    }

    .focus\\:ml-24:focus {
      margin-left: 6rem
    }

    .focus\\:ml-28:focus {
      margin-left: 7rem
    }

    .focus\\:ml-3:focus {
      margin-left: .75rem
    }

    .focus\\:ml-3\\.5:focus {
      margin-left: .875rem
    }

    .focus\\:ml-32:focus {
      margin-left: 8rem
    }

    .focus\\:ml-36:focus {
      margin-left: 9rem
    }

    .focus\\:ml-40:focus {
      margin-left: 10rem
    }

    .focus\\:ml-44:focus {
      margin-left: 11rem
    }

    .focus\\:ml-48:focus {
      margin-left: 12rem
    }

    .focus\\:ml-52:focus {
      margin-left: 13rem
    }

    .focus\\:ml-56:focus {
      margin-left: 14rem
    }

    .focus\\:ml-60:focus {
      margin-left: 15rem
    }

    .focus\\:ml-64:focus {
      margin-left: 16rem
    }

    .focus\\:ml-72:focus {
      margin-left: 18rem
    }

    .focus\\:ml-80:focus {
      margin-left: 20rem
    }

    .focus\\:ml-96:focus {
      margin-left: 24rem
    }

    .focus\\:ml-auto:focus {
      margin-left: auto
    }

    .focus\\:ml-px:focus {
      margin-left: 1px
    }

    .focus\\:mr-0:focus {
      margin-right: 0
    }

    .focus\\:mr-0\\.5:focus {
      margin-right: .125rem
    }

    .focus\\:mr-1:focus {
      margin-right: .25rem
    }

    .focus\\:mr-1\\.5:focus {
      margin-right: .375rem
    }

    .focus\\:mr-14:focus {
      margin-right: 3.5rem
    }

    .focus\\:mr-16:focus {
      margin-right: 4rem
    }

    .focus\\:mr-2:focus {
      margin-right: .5rem
    }

    .focus\\:mr-2\\.5:focus {
      margin-right: .625rem
    }

    .focus\\:mr-20:focus {
      margin-right: 5rem
    }

    .focus\\:mr-24:focus {
      margin-right: 6rem
    }

    .focus\\:mr-28:focus {
      margin-right: 7rem
    }

    .focus\\:mr-3:focus {
      margin-right: .75rem
    }

    .focus\\:mr-3\\.5:focus {
      margin-right: .875rem
    }

    .focus\\:mr-32:focus {
      margin-right: 8rem
    }

    .focus\\:mr-36:focus {
      margin-right: 9rem
    }

    .focus\\:mr-40:focus {
      margin-right: 10rem
    }

    .focus\\:mr-44:focus {
      margin-right: 11rem
    }

    .focus\\:mr-48:focus {
      margin-right: 12rem
    }

    .focus\\:mr-52:focus {
      margin-right: 13rem
    }

    .focus\\:mr-56:focus {
      margin-right: 14rem
    }

    .focus\\:mr-60:focus {
      margin-right: 15rem
    }

    .focus\\:mr-64:focus {
      margin-right: 16rem
    }

    .focus\\:mr-72:focus {
      margin-right: 18rem
    }

    .focus\\:mr-80:focus {
      margin-right: 20rem
    }

    .focus\\:mr-96:focus {
      margin-right: 24rem
    }

    .focus\\:mr-auto:focus {
      margin-right: auto
    }

    .focus\\:mr-px:focus {
      margin-right: 1px
    }

    .focus\\:mt-0:focus {
      margin-top: 0
    }

    .focus\\:mt-0\\.5:focus {
      margin-top: .125rem
    }

    .focus\\:mt-1:focus {
      margin-top: .25rem
    }

    .focus\\:mt-1\\.5:focus {
      margin-top: .375rem
    }

    .focus\\:mt-14:focus {
      margin-top: 3.5rem
    }

    .focus\\:mt-16:focus {
      margin-top: 4rem
    }

    .focus\\:mt-2:focus {
      margin-top: .5rem
    }

    .focus\\:mt-2\\.5:focus {
      margin-top: .625rem
    }

    .focus\\:mt-20:focus {
      margin-top: 5rem
    }

    .focus\\:mt-24:focus {
      margin-top: 6rem
    }

    .focus\\:mt-28:focus {
      margin-top: 7rem
    }

    .focus\\:mt-3:focus {
      margin-top: .75rem
    }

    .focus\\:mt-3\\.5:focus {
      margin-top: .875rem
    }

    .focus\\:mt-32:focus {
      margin-top: 8rem
    }

    .focus\\:mt-36:focus {
      margin-top: 9rem
    }

    .focus\\:mt-40:focus {
      margin-top: 10rem
    }

    .focus\\:mt-44:focus {
      margin-top: 11rem
    }

    .focus\\:mt-48:focus {
      margin-top: 12rem
    }

    .focus\\:mt-52:focus {
      margin-top: 13rem
    }

    .focus\\:mt-56:focus {
      margin-top: 14rem
    }

    .focus\\:mt-60:focus {
      margin-top: 15rem
    }

    .focus\\:mt-64:focus {
      margin-top: 16rem
    }

    .focus\\:mt-72:focus {
      margin-top: 18rem
    }

    .focus\\:mt-80:focus {
      margin-top: 20rem
    }

    .focus\\:mt-96:focus {
      margin-top: 24rem
    }

    .focus\\:mt-auto:focus {
      margin-top: auto
    }

    .focus\\:mt-px:focus {
      margin-top: 1px
    }

    .focus\\:h-0:focus {
      height: 0
    }

    .focus\\:h-0\\.5:focus {
      height: .125rem
    }

    .focus\\:h-1:focus {
      height: .25rem
    }

    .focus\\:h-1\\.5:focus {
      height: .375rem
    }

    .focus\\:h-1\\/5:focus {
      height: 20%
    }

    .focus\\:h-14:focus {
      height: 3.5rem
    }

    .focus\\:h-16:focus {
      height: 4rem
    }

    .focus\\:h-2:focus {
      height: .5rem
    }

    .focus\\:h-2\\.5:focus {
      height: .625rem
    }

    .focus\\:h-2\\/5:focus {
      height: 40%
    }

    .focus\\:h-20:focus {
      height: 5rem
    }

    .focus\\:h-24:focus {
      height: 6rem
    }

    .focus\\:h-28:focus {
      height: 7rem
    }

    .focus\\:h-3:focus {
      height: .75rem
    }

    .focus\\:h-3\\.5:focus {
      height: .875rem
    }

    .focus\\:h-3\\/5:focus {
      height: 60%
    }

    .focus\\:h-32:focus {
      height: 8rem
    }

    .focus\\:h-36:focus {
      height: 9rem
    }

    .focus\\:h-40:focus {
      height: 10rem
    }

    .focus\\:h-44:focus {
      height: 11rem
    }

    .focus\\:h-48:focus {
      height: 12rem
    }

    .focus\\:h-52:focus {
      height: 13rem
    }

    .focus\\:h-56:focus {
      height: 14rem
    }

    .focus\\:h-60:focus {
      height: 15rem
    }

    .focus\\:h-64:focus {
      height: 16rem
    }

    .focus\\:h-72:focus {
      height: 18rem
    }

    .focus\\:h-80:focus {
      height: 20rem
    }

    .focus\\:h-96:focus {
      height: 24rem
    }

    .focus\\:h-auto:focus {
      height: auto
    }

    .focus\\:h-full:focus {
      height: 100%
    }

    .focus\\:h-max:focus {
      height: -moz-max-content;
      height: max-content
    }

    .focus\\:h-min:focus {
      height: -moz-min-content;
      height: min-content
    }

    .focus\\:h-px:focus {
      height: 1px
    }

    .focus\\:h-screen:focus {
      height: 100vh
    }

    .focus\\:max-h-0:focus {
      max-height: 0
    }

    .focus\\:max-h-0\\.5:focus {
      max-height: .125rem
    }

    .focus\\:max-h-1:focus {
      max-height: .25rem
    }

    .focus\\:max-h-1\\.5:focus {
      max-height: .375rem
    }

    .focus\\:max-h-14:focus {
      max-height: 3.5rem
    }

    .focus\\:max-h-16:focus {
      max-height: 4rem
    }

    .focus\\:max-h-2:focus {
      max-height: .5rem
    }

    .focus\\:max-h-2\\.5:focus {
      max-height: .625rem
    }

    .focus\\:max-h-20:focus {
      max-height: 5rem
    }

    .focus\\:max-h-24:focus {
      max-height: 6rem
    }

    .focus\\:max-h-28:focus {
      max-height: 7rem
    }

    .focus\\:max-h-3:focus {
      max-height: .75rem
    }

    .focus\\:max-h-3\\.5:focus {
      max-height: .875rem
    }

    .focus\\:max-h-32:focus {
      max-height: 8rem
    }

    .focus\\:max-h-36:focus {
      max-height: 9rem
    }

    .focus\\:max-h-40:focus {
      max-height: 10rem
    }

    .focus\\:max-h-44:focus {
      max-height: 11rem
    }

    .focus\\:max-h-48:focus {
      max-height: 12rem
    }

    .focus\\:max-h-52:focus {
      max-height: 13rem
    }

    .focus\\:max-h-56:focus {
      max-height: 14rem
    }

    .focus\\:max-h-60:focus {
      max-height: 15rem
    }

    .focus\\:max-h-64:focus {
      max-height: 16rem
    }

    .focus\\:max-h-72:focus {
      max-height: 18rem
    }

    .focus\\:max-h-80:focus {
      max-height: 20rem
    }

    .focus\\:max-h-96:focus {
      max-height: 24rem
    }

    .focus\\:max-h-full:focus {
      max-height: 100%
    }

    .focus\\:max-h-max:focus {
      max-height: -moz-max-content;
      max-height: max-content
    }

    .focus\\:max-h-min:focus {
      max-height: -moz-min-content;
      max-height: min-content
    }

    .focus\\:max-h-px:focus {
      max-height: 1px
    }

    .focus\\:max-h-screen:focus {
      max-height: 100vh
    }

    .focus\\:min-h-0:focus {
      min-height: 0
    }

    .focus\\:min-h-full:focus {
      min-height: 100%
    }

    .focus\\:min-h-max:focus {
      min-height: -moz-max-content;
      min-height: max-content
    }

    .focus\\:min-h-min:focus {
      min-height: -moz-min-content;
      min-height: min-content
    }

    .focus\\:min-h-screen:focus {
      min-height: 100vh
    }

    .focus\\:w-0:focus {
      width: 0
    }

    .focus\\:w-0\\.5:focus {
      width: .125rem
    }

    .focus\\:w-1:focus {
      width: .25rem
    }

    .focus\\:w-1\\.5:focus {
      width: .375rem
    }

    .focus\\:w-1\\/5:focus {
      width: 20%
    }

    .focus\\:w-14:focus {
      width: 3.5rem
    }

    .focus\\:w-16:focus {
      width: 4rem
    }

    .focus\\:w-2:focus {
      width: .5rem
    }

    .focus\\:w-2\\.5:focus {
      width: .625rem
    }

    .focus\\:w-2\\/5:focus {
      width: 40%
    }

    .focus\\:w-20:focus {
      width: 5rem
    }

    .focus\\:w-24:focus {
      width: 6rem
    }

    .focus\\:w-28:focus {
      width: 7rem
    }

    .focus\\:w-3:focus {
      width: .75rem
    }

    .focus\\:w-3\\.5:focus {
      width: .875rem
    }

    .focus\\:w-3\\/5:focus {
      width: 60%
    }

    .focus\\:w-32:focus {
      width: 8rem
    }

    .focus\\:w-36:focus {
      width: 9rem
    }

    .focus\\:w-40:focus {
      width: 10rem
    }

    .focus\\:w-44:focus {
      width: 11rem
    }

    .focus\\:w-48:focus {
      width: 12rem
    }

    .focus\\:w-52:focus {
      width: 13rem
    }

    .focus\\:w-56:focus {
      width: 14rem
    }

    .focus\\:w-60:focus {
      width: 15rem
    }

    .focus\\:w-64:focus {
      width: 16rem
    }

    .focus\\:w-72:focus {
      width: 18rem
    }

    .focus\\:w-80:focus {
      width: 20rem
    }

    .focus\\:w-96:focus {
      width: 24rem
    }

    .focus\\:w-auto:focus {
      width: auto
    }

    .focus\\:w-full:focus {
      width: 100%
    }

    .focus\\:w-max:focus {
      width: -moz-max-content;
      width: max-content
    }

    .focus\\:w-min:focus {
      width: -moz-min-content;
      width: min-content
    }

    .focus\\:w-px:focus {
      width: 1px
    }

    .focus\\:w-screen:focus {
      width: 100vw
    }

    .focus\\:min-w-0:focus {
      min-width: 0
    }

    .focus\\:min-w-full:focus {
      min-width: 100%
    }

    .focus\\:min-w-max:focus {
      min-width: -moz-max-content;
      min-width: max-content
    }

    .focus\\:min-w-min:focus {
      min-width: -moz-min-content;
      min-width: min-content
    }

    .focus\\:max-w-0:focus {
      max-width: 0
    }

    .focus\\:max-w-full:focus {
      max-width: 100%
    }

    .focus\\:max-w-max:focus {
      max-width: -moz-max-content;
      max-width: max-content
    }

    .focus\\:max-w-min:focus {
      max-width: -moz-min-content;
      max-width: min-content
    }

    .focus\\:border-amber-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(254 243 199/var(--tw-border-opacity))
    }

    .focus\\:border-amber-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(253 230 138/var(--tw-border-opacity))
    }

    .focus\\:border-amber-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(252 211 77/var(--tw-border-opacity))
    }

    .focus\\:border-amber-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(251 191 36/var(--tw-border-opacity))
    }

    .focus\\:border-amber-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(255 251 235/var(--tw-border-opacity))
    }

    .focus\\:border-amber-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(245 158 11/var(--tw-border-opacity))
    }

    .focus\\:border-amber-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(217 119 6/var(--tw-border-opacity))
    }

    .focus\\:border-amber-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(180 83 9/var(--tw-border-opacity))
    }

    .focus\\:border-amber-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(146 64 14/var(--tw-border-opacity))
    }

    .focus\\:border-amber-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(120 53 15/var(--tw-border-opacity))
    }

    .focus\\:border-blue-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(219 234 254/var(--tw-border-opacity))
    }

    .focus\\:border-blue-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(191 219 254/var(--tw-border-opacity))
    }

    .focus\\:border-blue-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(147 197 253/var(--tw-border-opacity))
    }

    .focus\\:border-blue-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(96 165 250/var(--tw-border-opacity))
    }

    .focus\\:border-blue-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(239 246 255/var(--tw-border-opacity))
    }

    .focus\\:border-blue-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(59 130 246/var(--tw-border-opacity))
    }

    .focus\\:border-blue-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(37 99 235/var(--tw-border-opacity))
    }

    .focus\\:border-blue-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(29 78 216/var(--tw-border-opacity))
    }

    .focus\\:border-blue-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(30 64 175/var(--tw-border-opacity))
    }

    .focus\\:border-blue-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(30 58 138/var(--tw-border-opacity))
    }

    .focus\\:border-cyan-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(207 250 254/var(--tw-border-opacity))
    }

    .focus\\:border-cyan-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(165 243 252/var(--tw-border-opacity))
    }

    .focus\\:border-cyan-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(103 232 249/var(--tw-border-opacity))
    }

    .focus\\:border-cyan-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(34 211 238/var(--tw-border-opacity))
    }

    .focus\\:border-cyan-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(236 254 255/var(--tw-border-opacity))
    }

    .focus\\:border-cyan-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(6 182 212/var(--tw-border-opacity))
    }

    .focus\\:border-cyan-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(8 145 178/var(--tw-border-opacity))
    }

    .focus\\:border-cyan-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(14 116 144/var(--tw-border-opacity))
    }

    .focus\\:border-cyan-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(21 94 117/var(--tw-border-opacity))
    }

    .focus\\:border-cyan-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(22 78 99/var(--tw-border-opacity))
    }

    .focus\\:border-emerald-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(209 250 229/var(--tw-border-opacity))
    }

    .focus\\:border-emerald-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(167 243 208/var(--tw-border-opacity))
    }

    .focus\\:border-emerald-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(110 231 183/var(--tw-border-opacity))
    }

    .focus\\:border-emerald-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(52 211 153/var(--tw-border-opacity))
    }

    .focus\\:border-emerald-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(236 253 245/var(--tw-border-opacity))
    }

    .focus\\:border-emerald-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(16 185 129/var(--tw-border-opacity))
    }

    .focus\\:border-emerald-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(5 150 105/var(--tw-border-opacity))
    }

    .focus\\:border-emerald-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(4 120 87/var(--tw-border-opacity))
    }

    .focus\\:border-emerald-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(6 95 70/var(--tw-border-opacity))
    }

    .focus\\:border-emerald-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(6 78 59/var(--tw-border-opacity))
    }

    .focus\\:border-fuchsia-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(250 232 255/var(--tw-border-opacity))
    }

    .focus\\:border-fuchsia-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(245 208 254/var(--tw-border-opacity))
    }

    .focus\\:border-fuchsia-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(240 171 252/var(--tw-border-opacity))
    }

    .focus\\:border-fuchsia-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(232 121 249/var(--tw-border-opacity))
    }

    .focus\\:border-fuchsia-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(253 244 255/var(--tw-border-opacity))
    }

    .focus\\:border-fuchsia-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(217 70 239/var(--tw-border-opacity))
    }

    .focus\\:border-fuchsia-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(192 38 211/var(--tw-border-opacity))
    }

    .focus\\:border-fuchsia-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(162 28 175/var(--tw-border-opacity))
    }

    .focus\\:border-fuchsia-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(134 25 143/var(--tw-border-opacity))
    }

    .focus\\:border-fuchsia-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(112 26 117/var(--tw-border-opacity))
    }

    .focus\\:border-gray-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(243 244 246/var(--tw-border-opacity))
    }

    .focus\\:border-gray-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(229 231 235/var(--tw-border-opacity))
    }

    .focus\\:border-gray-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(209 213 219/var(--tw-border-opacity))
    }

    .focus\\:border-gray-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(156 163 175/var(--tw-border-opacity))
    }

    .focus\\:border-gray-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(249 250 251/var(--tw-border-opacity))
    }

    .focus\\:border-gray-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(107 114 128/var(--tw-border-opacity))
    }

    .focus\\:border-gray-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(75 85 99/var(--tw-border-opacity))
    }

    .focus\\:border-gray-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(55 65 81/var(--tw-border-opacity))
    }

    .focus\\:border-gray-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(31 41 55/var(--tw-border-opacity))
    }

    .focus\\:border-gray-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(17 24 39/var(--tw-border-opacity))
    }

    .focus\\:border-green-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(220 252 231/var(--tw-border-opacity))
    }

    .focus\\:border-green-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(187 247 208/var(--tw-border-opacity))
    }

    .focus\\:border-green-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(134 239 172/var(--tw-border-opacity))
    }

    .focus\\:border-green-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(74 222 128/var(--tw-border-opacity))
    }

    .focus\\:border-green-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(240 253 244/var(--tw-border-opacity))
    }

    .focus\\:border-green-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(34 197 94/var(--tw-border-opacity))
    }

    .focus\\:border-green-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(22 163 74/var(--tw-border-opacity))
    }

    .focus\\:border-green-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(21 128 61/var(--tw-border-opacity))
    }

    .focus\\:border-green-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(22 101 52/var(--tw-border-opacity))
    }

    .focus\\:border-green-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(20 83 45/var(--tw-border-opacity))
    }

    .focus\\:border-indigo-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(224 231 255/var(--tw-border-opacity))
    }

    .focus\\:border-indigo-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(199 210 254/var(--tw-border-opacity))
    }

    .focus\\:border-indigo-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(165 180 252/var(--tw-border-opacity))
    }

    .focus\\:border-indigo-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(129 140 248/var(--tw-border-opacity))
    }

    .focus\\:border-indigo-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(238 242 255/var(--tw-border-opacity))
    }

    .focus\\:border-indigo-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(99 102 241/var(--tw-border-opacity))
    }

    .focus\\:border-indigo-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(79 70 229/var(--tw-border-opacity))
    }

    .focus\\:border-indigo-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(67 56 202/var(--tw-border-opacity))
    }

    .focus\\:border-indigo-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(55 48 163/var(--tw-border-opacity))
    }

    .focus\\:border-indigo-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(49 46 129/var(--tw-border-opacity))
    }

    .focus\\:border-lime-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(236 252 203/var(--tw-border-opacity))
    }

    .focus\\:border-lime-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(217 249 157/var(--tw-border-opacity))
    }

    .focus\\:border-lime-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(190 242 100/var(--tw-border-opacity))
    }

    .focus\\:border-lime-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(163 230 53/var(--tw-border-opacity))
    }

    .focus\\:border-lime-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(247 254 231/var(--tw-border-opacity))
    }

    .focus\\:border-lime-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(132 204 22/var(--tw-border-opacity))
    }

    .focus\\:border-lime-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(101 163 13/var(--tw-border-opacity))
    }

    .focus\\:border-lime-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(77 124 15/var(--tw-border-opacity))
    }

    .focus\\:border-lime-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(63 98 18/var(--tw-border-opacity))
    }

    .focus\\:border-lime-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(54 83 20/var(--tw-border-opacity))
    }

    .focus\\:border-neutral-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(245 245 245/var(--tw-border-opacity))
    }

    .focus\\:border-neutral-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(229 229 229/var(--tw-border-opacity))
    }

    .focus\\:border-neutral-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(212 212 212/var(--tw-border-opacity))
    }

    .focus\\:border-neutral-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(163 163 163/var(--tw-border-opacity))
    }

    .focus\\:border-neutral-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 250/var(--tw-border-opacity))
    }

    .focus\\:border-neutral-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(115 115 115/var(--tw-border-opacity))
    }

    .focus\\:border-neutral-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(82 82 82/var(--tw-border-opacity))
    }

    .focus\\:border-neutral-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64/var(--tw-border-opacity))
    }

    .focus\\:border-neutral-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(38 38 38/var(--tw-border-opacity))
    }

    .focus\\:border-neutral-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(23 23 23/var(--tw-border-opacity))
    }

    .focus\\:border-orange-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(255 237 213/var(--tw-border-opacity))
    }

    .focus\\:border-orange-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(254 215 170/var(--tw-border-opacity))
    }

    .focus\\:border-orange-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(253 186 116/var(--tw-border-opacity))
    }

    .focus\\:border-orange-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(251 146 60/var(--tw-border-opacity))
    }

    .focus\\:border-orange-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(255 247 237/var(--tw-border-opacity))
    }

    .focus\\:border-orange-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(249 115 22/var(--tw-border-opacity))
    }

    .focus\\:border-orange-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(234 88 12/var(--tw-border-opacity))
    }

    .focus\\:border-orange-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(194 65 12/var(--tw-border-opacity))
    }

    .focus\\:border-orange-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(154 52 18/var(--tw-border-opacity))
    }

    .focus\\:border-orange-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(124 45 18/var(--tw-border-opacity))
    }

    .focus\\:border-pink-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(252 231 243/var(--tw-border-opacity))
    }

    .focus\\:border-pink-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(251 207 232/var(--tw-border-opacity))
    }

    .focus\\:border-pink-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(249 168 212/var(--tw-border-opacity))
    }

    .focus\\:border-pink-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(244 114 182/var(--tw-border-opacity))
    }

    .focus\\:border-pink-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(253 242 248/var(--tw-border-opacity))
    }

    .focus\\:border-pink-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(236 72 153/var(--tw-border-opacity))
    }

    .focus\\:border-pink-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(219 39 119/var(--tw-border-opacity))
    }

    .focus\\:border-pink-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(190 24 93/var(--tw-border-opacity))
    }

    .focus\\:border-pink-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(157 23 77/var(--tw-border-opacity))
    }

    .focus\\:border-pink-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(131 24 67/var(--tw-border-opacity))
    }

    .focus\\:border-purple-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(243 232 255/var(--tw-border-opacity))
    }

    .focus\\:border-purple-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(233 213 255/var(--tw-border-opacity))
    }

    .focus\\:border-purple-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(216 180 254/var(--tw-border-opacity))
    }

    .focus\\:border-purple-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(192 132 252/var(--tw-border-opacity))
    }

    .focus\\:border-purple-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(250 245 255/var(--tw-border-opacity))
    }

    .focus\\:border-purple-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(168 85 247/var(--tw-border-opacity))
    }

    .focus\\:border-purple-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(147 51 234/var(--tw-border-opacity))
    }

    .focus\\:border-purple-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(126 34 206/var(--tw-border-opacity))
    }

    .focus\\:border-purple-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(107 33 168/var(--tw-border-opacity))
    }

    .focus\\:border-purple-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(88 28 135/var(--tw-border-opacity))
    }

    .focus\\:border-red-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(254 226 226/var(--tw-border-opacity))
    }

    .focus\\:border-red-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(254 202 202/var(--tw-border-opacity))
    }

    .focus\\:border-red-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(252 165 165/var(--tw-border-opacity))
    }

    .focus\\:border-red-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(248 113 113/var(--tw-border-opacity))
    }

    .focus\\:border-red-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(254 242 242/var(--tw-border-opacity))
    }

    .focus\\:border-red-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(239 68 68/var(--tw-border-opacity))
    }

    .focus\\:border-red-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(220 38 38/var(--tw-border-opacity))
    }

    .focus\\:border-red-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(185 28 28/var(--tw-border-opacity))
    }

    .focus\\:border-red-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(153 27 27/var(--tw-border-opacity))
    }

    .focus\\:border-red-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(127 29 29/var(--tw-border-opacity))
    }

    .focus\\:border-rose-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(255 228 230/var(--tw-border-opacity))
    }

    .focus\\:border-rose-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(254 205 211/var(--tw-border-opacity))
    }

    .focus\\:border-rose-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(253 164 175/var(--tw-border-opacity))
    }

    .focus\\:border-rose-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(251 113 133/var(--tw-border-opacity))
    }

    .focus\\:border-rose-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(255 241 242/var(--tw-border-opacity))
    }

    .focus\\:border-rose-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(244 63 94/var(--tw-border-opacity))
    }

    .focus\\:border-rose-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(225 29 72/var(--tw-border-opacity))
    }

    .focus\\:border-rose-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(190 18 60/var(--tw-border-opacity))
    }

    .focus\\:border-rose-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(159 18 57/var(--tw-border-opacity))
    }

    .focus\\:border-rose-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(136 19 55/var(--tw-border-opacity))
    }

    .focus\\:border-sky-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(224 242 254/var(--tw-border-opacity))
    }

    .focus\\:border-sky-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(186 230 253/var(--tw-border-opacity))
    }

    .focus\\:border-sky-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(125 211 252/var(--tw-border-opacity))
    }

    .focus\\:border-sky-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(56 189 248/var(--tw-border-opacity))
    }

    .focus\\:border-sky-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(240 249 255/var(--tw-border-opacity))
    }

    .focus\\:border-sky-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(14 165 233/var(--tw-border-opacity))
    }

    .focus\\:border-sky-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(2 132 199/var(--tw-border-opacity))
    }

    .focus\\:border-sky-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(3 105 161/var(--tw-border-opacity))
    }

    .focus\\:border-sky-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(7 89 133/var(--tw-border-opacity))
    }

    .focus\\:border-sky-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(12 74 110/var(--tw-border-opacity))
    }

    .focus\\:border-slate-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(241 245 249/var(--tw-border-opacity))
    }

    .focus\\:border-slate-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(226 232 240/var(--tw-border-opacity))
    }

    .focus\\:border-slate-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(203 213 225/var(--tw-border-opacity))
    }

    .focus\\:border-slate-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(148 163 184/var(--tw-border-opacity))
    }

    .focus\\:border-slate-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(248 250 252/var(--tw-border-opacity))
    }

    .focus\\:border-slate-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(100 116 139/var(--tw-border-opacity))
    }

    .focus\\:border-slate-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(71 85 105/var(--tw-border-opacity))
    }

    .focus\\:border-slate-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(51 65 85/var(--tw-border-opacity))
    }

    .focus\\:border-slate-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(30 41 59/var(--tw-border-opacity))
    }

    .focus\\:border-slate-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(15 23 42/var(--tw-border-opacity))
    }

    .focus\\:border-stone-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(245 245 244/var(--tw-border-opacity))
    }

    .focus\\:border-stone-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(231 229 228/var(--tw-border-opacity))
    }

    .focus\\:border-stone-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(214 211 209/var(--tw-border-opacity))
    }

    .focus\\:border-stone-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(168 162 158/var(--tw-border-opacity))
    }

    .focus\\:border-stone-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 249/var(--tw-border-opacity))
    }

    .focus\\:border-stone-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(120 113 108/var(--tw-border-opacity))
    }

    .focus\\:border-stone-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(87 83 78/var(--tw-border-opacity))
    }

    .focus\\:border-stone-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(68 64 60/var(--tw-border-opacity))
    }

    .focus\\:border-stone-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(41 37 36/var(--tw-border-opacity))
    }

    .focus\\:border-stone-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(28 25 23/var(--tw-border-opacity))
    }

    .focus\\:border-teal-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(204 251 241/var(--tw-border-opacity))
    }

    .focus\\:border-teal-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(153 246 228/var(--tw-border-opacity))
    }

    .focus\\:border-teal-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(94 234 212/var(--tw-border-opacity))
    }

    .focus\\:border-teal-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(45 212 191/var(--tw-border-opacity))
    }

    .focus\\:border-teal-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(240 253 250/var(--tw-border-opacity))
    }

    .focus\\:border-teal-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(20 184 166/var(--tw-border-opacity))
    }

    .focus\\:border-teal-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(13 148 136/var(--tw-border-opacity))
    }

    .focus\\:border-teal-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(15 118 110/var(--tw-border-opacity))
    }

    .focus\\:border-teal-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(17 94 89/var(--tw-border-opacity))
    }

    .focus\\:border-teal-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(19 78 74/var(--tw-border-opacity))
    }

    .focus\\:border-violet-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(237 233 254/var(--tw-border-opacity))
    }

    .focus\\:border-violet-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(221 214 254/var(--tw-border-opacity))
    }

    .focus\\:border-violet-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(196 181 253/var(--tw-border-opacity))
    }

    .focus\\:border-violet-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(167 139 250/var(--tw-border-opacity))
    }

    .focus\\:border-violet-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(245 243 255/var(--tw-border-opacity))
    }

    .focus\\:border-violet-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(139 92 246/var(--tw-border-opacity))
    }

    .focus\\:border-violet-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(124 58 237/var(--tw-border-opacity))
    }

    .focus\\:border-violet-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(109 40 217/var(--tw-border-opacity))
    }

    .focus\\:border-violet-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(91 33 182/var(--tw-border-opacity))
    }

    .focus\\:border-violet-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(76 29 149/var(--tw-border-opacity))
    }

    .focus\\:border-yellow-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(254 249 195/var(--tw-border-opacity))
    }

    .focus\\:border-yellow-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(254 240 138/var(--tw-border-opacity))
    }

    .focus\\:border-yellow-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(253 224 71/var(--tw-border-opacity))
    }

    .focus\\:border-yellow-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(250 204 21/var(--tw-border-opacity))
    }

    .focus\\:border-yellow-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(254 252 232/var(--tw-border-opacity))
    }

    .focus\\:border-yellow-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(234 179 8/var(--tw-border-opacity))
    }

    .focus\\:border-yellow-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(202 138 4/var(--tw-border-opacity))
    }

    .focus\\:border-yellow-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(161 98 7/var(--tw-border-opacity))
    }

    .focus\\:border-yellow-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(133 77 14/var(--tw-border-opacity))
    }

    .focus\\:border-yellow-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(113 63 18/var(--tw-border-opacity))
    }

    .focus\\:border-zinc-100:focus {
      --tw-border-opacity: 1;
      border-color: rgb(244 244 245/var(--tw-border-opacity))
    }

    .focus\\:border-zinc-200:focus {
      --tw-border-opacity: 1;
      border-color: rgb(228 228 231/var(--tw-border-opacity))
    }

    .focus\\:border-zinc-300:focus {
      --tw-border-opacity: 1;
      border-color: rgb(212 212 216/var(--tw-border-opacity))
    }

    .focus\\:border-zinc-400:focus {
      --tw-border-opacity: 1;
      border-color: rgb(161 161 170/var(--tw-border-opacity))
    }

    .focus\\:border-zinc-50:focus {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 250/var(--tw-border-opacity))
    }

    .focus\\:border-zinc-500:focus {
      --tw-border-opacity: 1;
      border-color: rgb(113 113 122/var(--tw-border-opacity))
    }

    .focus\\:border-zinc-600:focus {
      --tw-border-opacity: 1;
      border-color: rgb(82 82 91/var(--tw-border-opacity))
    }

    .focus\\:border-zinc-700:focus {
      --tw-border-opacity: 1;
      border-color: rgb(63 63 70/var(--tw-border-opacity))
    }

    .focus\\:border-zinc-800:focus {
      --tw-border-opacity: 1;
      border-color: rgb(39 39 42/var(--tw-border-opacity))
    }

    .focus\\:border-zinc-900:focus {
      --tw-border-opacity: 1;
      border-color: rgb(24 24 27/var(--tw-border-opacity))
    }

    .focus\\:bg-amber-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(254 243 199/var(--tw-bg-opacity))
    }

    .focus\\:bg-amber-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(253 230 138/var(--tw-bg-opacity))
    }

    .focus\\:bg-amber-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(252 211 77/var(--tw-bg-opacity))
    }

    .focus\\:bg-amber-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(251 191 36/var(--tw-bg-opacity))
    }

    .focus\\:bg-amber-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(255 251 235/var(--tw-bg-opacity))
    }

    .focus\\:bg-amber-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(245 158 11/var(--tw-bg-opacity))
    }

    .focus\\:bg-amber-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(217 119 6/var(--tw-bg-opacity))
    }

    .focus\\:bg-amber-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(180 83 9/var(--tw-bg-opacity))
    }

    .focus\\:bg-amber-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(146 64 14/var(--tw-bg-opacity))
    }

    .focus\\:bg-amber-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(120 53 15/var(--tw-bg-opacity))
    }

    .focus\\:bg-blue-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(219 234 254/var(--tw-bg-opacity))
    }

    .focus\\:bg-blue-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(191 219 254/var(--tw-bg-opacity))
    }

    .focus\\:bg-blue-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(147 197 253/var(--tw-bg-opacity))
    }

    .focus\\:bg-blue-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(96 165 250/var(--tw-bg-opacity))
    }

    .focus\\:bg-blue-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(239 246 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-blue-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(59 130 246/var(--tw-bg-opacity))
    }

    .focus\\:bg-blue-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(37 99 235/var(--tw-bg-opacity))
    }

    .focus\\:bg-blue-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(29 78 216/var(--tw-bg-opacity))
    }

    .focus\\:bg-blue-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(30 64 175/var(--tw-bg-opacity))
    }

    .focus\\:bg-blue-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(30 58 138/var(--tw-bg-opacity))
    }

    .focus\\:bg-cyan-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(207 250 254/var(--tw-bg-opacity))
    }

    .focus\\:bg-cyan-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(165 243 252/var(--tw-bg-opacity))
    }

    .focus\\:bg-cyan-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(103 232 249/var(--tw-bg-opacity))
    }

    .focus\\:bg-cyan-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(34 211 238/var(--tw-bg-opacity))
    }

    .focus\\:bg-cyan-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(236 254 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-cyan-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(6 182 212/var(--tw-bg-opacity))
    }

    .focus\\:bg-cyan-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(8 145 178/var(--tw-bg-opacity))
    }

    .focus\\:bg-cyan-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(14 116 144/var(--tw-bg-opacity))
    }

    .focus\\:bg-cyan-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(21 94 117/var(--tw-bg-opacity))
    }

    .focus\\:bg-cyan-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(22 78 99/var(--tw-bg-opacity))
    }

    .focus\\:bg-emerald-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(209 250 229/var(--tw-bg-opacity))
    }

    .focus\\:bg-emerald-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(167 243 208/var(--tw-bg-opacity))
    }

    .focus\\:bg-emerald-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(110 231 183/var(--tw-bg-opacity))
    }

    .focus\\:bg-emerald-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(52 211 153/var(--tw-bg-opacity))
    }

    .focus\\:bg-emerald-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(236 253 245/var(--tw-bg-opacity))
    }

    .focus\\:bg-emerald-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(16 185 129/var(--tw-bg-opacity))
    }

    .focus\\:bg-emerald-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(5 150 105/var(--tw-bg-opacity))
    }

    .focus\\:bg-emerald-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(4 120 87/var(--tw-bg-opacity))
    }

    .focus\\:bg-emerald-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(6 95 70/var(--tw-bg-opacity))
    }

    .focus\\:bg-emerald-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(6 78 59/var(--tw-bg-opacity))
    }

    .focus\\:bg-fuchsia-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(250 232 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-fuchsia-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(245 208 254/var(--tw-bg-opacity))
    }

    .focus\\:bg-fuchsia-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(240 171 252/var(--tw-bg-opacity))
    }

    .focus\\:bg-fuchsia-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(232 121 249/var(--tw-bg-opacity))
    }

    .focus\\:bg-fuchsia-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(253 244 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-fuchsia-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(217 70 239/var(--tw-bg-opacity))
    }

    .focus\\:bg-fuchsia-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(192 38 211/var(--tw-bg-opacity))
    }

    .focus\\:bg-fuchsia-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(162 28 175/var(--tw-bg-opacity))
    }

    .focus\\:bg-fuchsia-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(134 25 143/var(--tw-bg-opacity))
    }

    .focus\\:bg-fuchsia-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(112 26 117/var(--tw-bg-opacity))
    }

    .focus\\:bg-gray-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246/var(--tw-bg-opacity))
    }

    .focus\\:bg-gray-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(229 231 235/var(--tw-bg-opacity))
    }

    .focus\\:bg-gray-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(209 213 219/var(--tw-bg-opacity))
    }

    .focus\\:bg-gray-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(156 163 175/var(--tw-bg-opacity))
    }

    .focus\\:bg-gray-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251/var(--tw-bg-opacity))
    }

    .focus\\:bg-gray-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(107 114 128/var(--tw-bg-opacity))
    }

    .focus\\:bg-gray-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(75 85 99/var(--tw-bg-opacity))
    }

    .focus\\:bg-gray-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(55 65 81/var(--tw-bg-opacity))
    }

    .focus\\:bg-gray-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(31 41 55/var(--tw-bg-opacity))
    }

    .focus\\:bg-gray-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(17 24 39/var(--tw-bg-opacity))
    }

    .focus\\:bg-green-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(220 252 231/var(--tw-bg-opacity))
    }

    .focus\\:bg-green-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(187 247 208/var(--tw-bg-opacity))
    }

    .focus\\:bg-green-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(134 239 172/var(--tw-bg-opacity))
    }

    .focus\\:bg-green-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(74 222 128/var(--tw-bg-opacity))
    }

    .focus\\:bg-green-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(240 253 244/var(--tw-bg-opacity))
    }

    .focus\\:bg-green-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(34 197 94/var(--tw-bg-opacity))
    }

    .focus\\:bg-green-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(22 163 74/var(--tw-bg-opacity))
    }

    .focus\\:bg-green-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(21 128 61/var(--tw-bg-opacity))
    }

    .focus\\:bg-green-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(22 101 52/var(--tw-bg-opacity))
    }

    .focus\\:bg-green-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(20 83 45/var(--tw-bg-opacity))
    }

    .focus\\:bg-indigo-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(224 231 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-indigo-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(199 210 254/var(--tw-bg-opacity))
    }

    .focus\\:bg-indigo-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(165 180 252/var(--tw-bg-opacity))
    }

    .focus\\:bg-indigo-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(129 140 248/var(--tw-bg-opacity))
    }

    .focus\\:bg-indigo-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(238 242 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-indigo-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(99 102 241/var(--tw-bg-opacity))
    }

    .focus\\:bg-indigo-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(79 70 229/var(--tw-bg-opacity))
    }

    .focus\\:bg-indigo-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(67 56 202/var(--tw-bg-opacity))
    }

    .focus\\:bg-indigo-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(55 48 163/var(--tw-bg-opacity))
    }

    .focus\\:bg-indigo-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(49 46 129/var(--tw-bg-opacity))
    }

    .focus\\:bg-lime-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(236 252 203/var(--tw-bg-opacity))
    }

    .focus\\:bg-lime-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(217 249 157/var(--tw-bg-opacity))
    }

    .focus\\:bg-lime-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(190 242 100/var(--tw-bg-opacity))
    }

    .focus\\:bg-lime-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(163 230 53/var(--tw-bg-opacity))
    }

    .focus\\:bg-lime-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(247 254 231/var(--tw-bg-opacity))
    }

    .focus\\:bg-lime-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(132 204 22/var(--tw-bg-opacity))
    }

    .focus\\:bg-lime-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(101 163 13/var(--tw-bg-opacity))
    }

    .focus\\:bg-lime-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(77 124 15/var(--tw-bg-opacity))
    }

    .focus\\:bg-lime-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(63 98 18/var(--tw-bg-opacity))
    }

    .focus\\:bg-lime-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(54 83 20/var(--tw-bg-opacity))
    }

    .focus\\:bg-neutral-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(245 245 245/var(--tw-bg-opacity))
    }

    .focus\\:bg-neutral-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(229 229 229/var(--tw-bg-opacity))
    }

    .focus\\:bg-neutral-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(212 212 212/var(--tw-bg-opacity))
    }

    .focus\\:bg-neutral-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(163 163 163/var(--tw-bg-opacity))
    }

    .focus\\:bg-neutral-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 250/var(--tw-bg-opacity))
    }

    .focus\\:bg-neutral-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(115 115 115/var(--tw-bg-opacity))
    }

    .focus\\:bg-neutral-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(82 82 82/var(--tw-bg-opacity))
    }

    .focus\\:bg-neutral-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(64 64 64/var(--tw-bg-opacity))
    }

    .focus\\:bg-neutral-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(38 38 38/var(--tw-bg-opacity))
    }

    .focus\\:bg-neutral-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(23 23 23/var(--tw-bg-opacity))
    }

    .focus\\:bg-orange-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(255 237 213/var(--tw-bg-opacity))
    }

    .focus\\:bg-orange-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(254 215 170/var(--tw-bg-opacity))
    }

    .focus\\:bg-orange-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(253 186 116/var(--tw-bg-opacity))
    }

    .focus\\:bg-orange-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(251 146 60/var(--tw-bg-opacity))
    }

    .focus\\:bg-orange-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(255 247 237/var(--tw-bg-opacity))
    }

    .focus\\:bg-orange-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(249 115 22/var(--tw-bg-opacity))
    }

    .focus\\:bg-orange-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(234 88 12/var(--tw-bg-opacity))
    }

    .focus\\:bg-orange-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(194 65 12/var(--tw-bg-opacity))
    }

    .focus\\:bg-orange-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(154 52 18/var(--tw-bg-opacity))
    }

    .focus\\:bg-orange-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(124 45 18/var(--tw-bg-opacity))
    }

    .focus\\:bg-pink-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(252 231 243/var(--tw-bg-opacity))
    }

    .focus\\:bg-pink-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(251 207 232/var(--tw-bg-opacity))
    }

    .focus\\:bg-pink-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(249 168 212/var(--tw-bg-opacity))
    }

    .focus\\:bg-pink-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(244 114 182/var(--tw-bg-opacity))
    }

    .focus\\:bg-pink-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(253 242 248/var(--tw-bg-opacity))
    }

    .focus\\:bg-pink-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(236 72 153/var(--tw-bg-opacity))
    }

    .focus\\:bg-pink-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(219 39 119/var(--tw-bg-opacity))
    }

    .focus\\:bg-pink-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(190 24 93/var(--tw-bg-opacity))
    }

    .focus\\:bg-pink-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(157 23 77/var(--tw-bg-opacity))
    }

    .focus\\:bg-pink-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(131 24 67/var(--tw-bg-opacity))
    }

    .focus\\:bg-purple-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(243 232 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-purple-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(233 213 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-purple-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(216 180 254/var(--tw-bg-opacity))
    }

    .focus\\:bg-purple-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(192 132 252/var(--tw-bg-opacity))
    }

    .focus\\:bg-purple-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(250 245 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-purple-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(168 85 247/var(--tw-bg-opacity))
    }

    .focus\\:bg-purple-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(147 51 234/var(--tw-bg-opacity))
    }

    .focus\\:bg-purple-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(126 34 206/var(--tw-bg-opacity))
    }

    .focus\\:bg-purple-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(107 33 168/var(--tw-bg-opacity))
    }

    .focus\\:bg-purple-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(88 28 135/var(--tw-bg-opacity))
    }

    .focus\\:bg-red-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(254 226 226/var(--tw-bg-opacity))
    }

    .focus\\:bg-red-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(254 202 202/var(--tw-bg-opacity))
    }

    .focus\\:bg-red-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(252 165 165/var(--tw-bg-opacity))
    }

    .focus\\:bg-red-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(248 113 113/var(--tw-bg-opacity))
    }

    .focus\\:bg-red-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(254 242 242/var(--tw-bg-opacity))
    }

    .focus\\:bg-red-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(239 68 68/var(--tw-bg-opacity))
    }

    .focus\\:bg-red-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(220 38 38/var(--tw-bg-opacity))
    }

    .focus\\:bg-red-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(185 28 28/var(--tw-bg-opacity))
    }

    .focus\\:bg-red-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(153 27 27/var(--tw-bg-opacity))
    }

    .focus\\:bg-red-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(127 29 29/var(--tw-bg-opacity))
    }

    .focus\\:bg-rose-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(255 228 230/var(--tw-bg-opacity))
    }

    .focus\\:bg-rose-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(254 205 211/var(--tw-bg-opacity))
    }

    .focus\\:bg-rose-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(253 164 175/var(--tw-bg-opacity))
    }

    .focus\\:bg-rose-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(251 113 133/var(--tw-bg-opacity))
    }

    .focus\\:bg-rose-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(255 241 242/var(--tw-bg-opacity))
    }

    .focus\\:bg-rose-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(244 63 94/var(--tw-bg-opacity))
    }

    .focus\\:bg-rose-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(225 29 72/var(--tw-bg-opacity))
    }

    .focus\\:bg-rose-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(190 18 60/var(--tw-bg-opacity))
    }

    .focus\\:bg-rose-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(159 18 57/var(--tw-bg-opacity))
    }

    .focus\\:bg-rose-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(136 19 55/var(--tw-bg-opacity))
    }

    .focus\\:bg-sky-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(224 242 254/var(--tw-bg-opacity))
    }

    .focus\\:bg-sky-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(186 230 253/var(--tw-bg-opacity))
    }

    .focus\\:bg-sky-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(125 211 252/var(--tw-bg-opacity))
    }

    .focus\\:bg-sky-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(56 189 248/var(--tw-bg-opacity))
    }

    .focus\\:bg-sky-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(240 249 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-sky-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(14 165 233/var(--tw-bg-opacity))
    }

    .focus\\:bg-sky-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(2 132 199/var(--tw-bg-opacity))
    }

    .focus\\:bg-sky-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(3 105 161/var(--tw-bg-opacity))
    }

    .focus\\:bg-sky-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(7 89 133/var(--tw-bg-opacity))
    }

    .focus\\:bg-sky-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(12 74 110/var(--tw-bg-opacity))
    }

    .focus\\:bg-slate-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(241 245 249/var(--tw-bg-opacity))
    }

    .focus\\:bg-slate-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(226 232 240/var(--tw-bg-opacity))
    }

    .focus\\:bg-slate-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(203 213 225/var(--tw-bg-opacity))
    }

    .focus\\:bg-slate-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(148 163 184/var(--tw-bg-opacity))
    }

    .focus\\:bg-slate-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(248 250 252/var(--tw-bg-opacity))
    }

    .focus\\:bg-slate-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(100 116 139/var(--tw-bg-opacity))
    }

    .focus\\:bg-slate-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(71 85 105/var(--tw-bg-opacity))
    }

    .focus\\:bg-slate-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(51 65 85/var(--tw-bg-opacity))
    }

    .focus\\:bg-slate-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(30 41 59/var(--tw-bg-opacity))
    }

    .focus\\:bg-slate-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(15 23 42/var(--tw-bg-opacity))
    }

    .focus\\:bg-stone-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(245 245 244/var(--tw-bg-opacity))
    }

    .focus\\:bg-stone-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(231 229 228/var(--tw-bg-opacity))
    }

    .focus\\:bg-stone-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(214 211 209/var(--tw-bg-opacity))
    }

    .focus\\:bg-stone-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(168 162 158/var(--tw-bg-opacity))
    }

    .focus\\:bg-stone-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 249/var(--tw-bg-opacity))
    }

    .focus\\:bg-stone-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(120 113 108/var(--tw-bg-opacity))
    }

    .focus\\:bg-stone-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(87 83 78/var(--tw-bg-opacity))
    }

    .focus\\:bg-stone-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(68 64 60/var(--tw-bg-opacity))
    }

    .focus\\:bg-stone-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(41 37 36/var(--tw-bg-opacity))
    }

    .focus\\:bg-stone-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(28 25 23/var(--tw-bg-opacity))
    }

    .focus\\:bg-teal-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(204 251 241/var(--tw-bg-opacity))
    }

    .focus\\:bg-teal-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(153 246 228/var(--tw-bg-opacity))
    }

    .focus\\:bg-teal-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(94 234 212/var(--tw-bg-opacity))
    }

    .focus\\:bg-teal-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(45 212 191/var(--tw-bg-opacity))
    }

    .focus\\:bg-teal-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(240 253 250/var(--tw-bg-opacity))
    }

    .focus\\:bg-teal-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(20 184 166/var(--tw-bg-opacity))
    }

    .focus\\:bg-teal-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(13 148 136/var(--tw-bg-opacity))
    }

    .focus\\:bg-teal-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(15 118 110/var(--tw-bg-opacity))
    }

    .focus\\:bg-teal-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(17 94 89/var(--tw-bg-opacity))
    }

    .focus\\:bg-teal-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(19 78 74/var(--tw-bg-opacity))
    }

    .focus\\:bg-violet-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(237 233 254/var(--tw-bg-opacity))
    }

    .focus\\:bg-violet-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(221 214 254/var(--tw-bg-opacity))
    }

    .focus\\:bg-violet-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(196 181 253/var(--tw-bg-opacity))
    }

    .focus\\:bg-violet-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(167 139 250/var(--tw-bg-opacity))
    }

    .focus\\:bg-violet-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(245 243 255/var(--tw-bg-opacity))
    }

    .focus\\:bg-violet-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(139 92 246/var(--tw-bg-opacity))
    }

    .focus\\:bg-violet-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(124 58 237/var(--tw-bg-opacity))
    }

    .focus\\:bg-violet-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(109 40 217/var(--tw-bg-opacity))
    }

    .focus\\:bg-violet-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(91 33 182/var(--tw-bg-opacity))
    }

    .focus\\:bg-violet-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(76 29 149/var(--tw-bg-opacity))
    }

    .focus\\:bg-yellow-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(254 249 195/var(--tw-bg-opacity))
    }

    .focus\\:bg-yellow-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(254 240 138/var(--tw-bg-opacity))
    }

    .focus\\:bg-yellow-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(253 224 71/var(--tw-bg-opacity))
    }

    .focus\\:bg-yellow-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(250 204 21/var(--tw-bg-opacity))
    }

    .focus\\:bg-yellow-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(254 252 232/var(--tw-bg-opacity))
    }

    .focus\\:bg-yellow-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(234 179 8/var(--tw-bg-opacity))
    }

    .focus\\:bg-yellow-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(202 138 4/var(--tw-bg-opacity))
    }

    .focus\\:bg-yellow-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(161 98 7/var(--tw-bg-opacity))
    }

    .focus\\:bg-yellow-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(133 77 14/var(--tw-bg-opacity))
    }

    .focus\\:bg-yellow-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(113 63 18/var(--tw-bg-opacity))
    }

    .focus\\:bg-zinc-100:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(244 244 245/var(--tw-bg-opacity))
    }

    .focus\\:bg-zinc-200:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(228 228 231/var(--tw-bg-opacity))
    }

    .focus\\:bg-zinc-300:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(212 212 216/var(--tw-bg-opacity))
    }

    .focus\\:bg-zinc-400:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(161 161 170/var(--tw-bg-opacity))
    }

    .focus\\:bg-zinc-50:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 250/var(--tw-bg-opacity))
    }

    .focus\\:bg-zinc-500:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(113 113 122/var(--tw-bg-opacity))
    }

    .focus\\:bg-zinc-600:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(82 82 91/var(--tw-bg-opacity))
    }

    .focus\\:bg-zinc-700:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(63 63 70/var(--tw-bg-opacity))
    }

    .focus\\:bg-zinc-800:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(39 39 42/var(--tw-bg-opacity))
    }

    .focus\\:bg-zinc-900:focus {
      --tw-bg-opacity: 1;
      background-color: rgb(24 24 27/var(--tw-bg-opacity))
    }

    .focus\\:p-0:focus {
      padding: 0
    }

    .focus\\:p-0\\.5:focus {
      padding: .125rem
    }

    .focus\\:p-1:focus {
      padding: .25rem
    }

    .focus\\:p-1\\.5:focus {
      padding: .375rem
    }

    .focus\\:p-14:focus {
      padding: 3.5rem
    }

    .focus\\:p-16:focus {
      padding: 4rem
    }

    .focus\\:p-2:focus {
      padding: .5rem
    }

    .focus\\:p-2\\.5:focus {
      padding: .625rem
    }

    .focus\\:p-20:focus {
      padding: 5rem
    }

    .focus\\:p-24:focus {
      padding: 6rem
    }

    .focus\\:p-28:focus {
      padding: 7rem
    }

    .focus\\:p-3:focus {
      padding: .75rem
    }

    .focus\\:p-3\\.5:focus {
      padding: .875rem
    }

    .focus\\:p-32:focus {
      padding: 8rem
    }

    .focus\\:p-36:focus {
      padding: 9rem
    }

    .focus\\:p-40:focus {
      padding: 10rem
    }

    .focus\\:p-44:focus {
      padding: 11rem
    }

    .focus\\:p-48:focus {
      padding: 12rem
    }

    .focus\\:p-52:focus {
      padding: 13rem
    }

    .focus\\:p-56:focus {
      padding: 14rem
    }

    .focus\\:p-60:focus {
      padding: 15rem
    }

    .focus\\:p-64:focus {
      padding: 16rem
    }

    .focus\\:p-72:focus {
      padding: 18rem
    }

    .focus\\:p-80:focus {
      padding: 20rem
    }

    .focus\\:p-96:focus {
      padding: 24rem
    }

    .focus\\:p-px:focus {
      padding: 1px
    }

    .focus\\:px-0:focus {
      padding-left: 0;
      padding-right: 0
    }

    .focus\\:px-0\\.5:focus {
      padding-left: .125rem;
      padding-right: .125rem
    }

    .focus\\:px-1:focus {
      padding-left: .25rem;
      padding-right: .25rem
    }

    .focus\\:px-1\\.5:focus {
      padding-left: .375rem;
      padding-right: .375rem
    }

    .focus\\:px-14:focus {
      padding-left: 3.5rem;
      padding-right: 3.5rem
    }

    .focus\\:px-16:focus {
      padding-left: 4rem;
      padding-right: 4rem
    }

    .focus\\:px-2:focus {
      padding-left: .5rem;
      padding-right: .5rem
    }

    .focus\\:px-2\\.5:focus {
      padding-left: .625rem;
      padding-right: .625rem
    }

    .focus\\:px-20:focus {
      padding-left: 5rem;
      padding-right: 5rem
    }

    .focus\\:px-24:focus {
      padding-left: 6rem;
      padding-right: 6rem
    }

    .focus\\:px-28:focus {
      padding-left: 7rem;
      padding-right: 7rem
    }

    .focus\\:px-3:focus {
      padding-left: .75rem;
      padding-right: .75rem
    }

    .focus\\:px-3\\.5:focus {
      padding-left: .875rem;
      padding-right: .875rem
    }

    .focus\\:px-32:focus {
      padding-left: 8rem;
      padding-right: 8rem
    }

    .focus\\:px-36:focus {
      padding-left: 9rem;
      padding-right: 9rem
    }

    .focus\\:px-40:focus {
      padding-left: 10rem;
      padding-right: 10rem
    }

    .focus\\:px-44:focus {
      padding-left: 11rem;
      padding-right: 11rem
    }

    .focus\\:px-48:focus {
      padding-left: 12rem;
      padding-right: 12rem
    }

    .focus\\:px-52:focus {
      padding-left: 13rem;
      padding-right: 13rem
    }

    .focus\\:px-56:focus {
      padding-left: 14rem;
      padding-right: 14rem
    }

    .focus\\:px-60:focus {
      padding-left: 15rem;
      padding-right: 15rem
    }

    .focus\\:px-64:focus {
      padding-left: 16rem;
      padding-right: 16rem
    }

    .focus\\:px-72:focus {
      padding-left: 18rem;
      padding-right: 18rem
    }

    .focus\\:px-80:focus {
      padding-left: 20rem;
      padding-right: 20rem
    }

    .focus\\:px-96:focus {
      padding-left: 24rem;
      padding-right: 24rem
    }

    .focus\\:px-px:focus {
      padding-left: 1px;
      padding-right: 1px
    }

    .focus\\:py-0:focus {
      padding-top: 0;
      padding-bottom: 0
    }

    .focus\\:py-0\\.5:focus {
      padding-top: .125rem;
      padding-bottom: .125rem
    }

    .focus\\:py-1:focus {
      padding-top: .25rem;
      padding-bottom: .25rem
    }

    .focus\\:py-1\\.5:focus {
      padding-top: .375rem;
      padding-bottom: .375rem
    }

    .focus\\:py-14:focus {
      padding-top: 3.5rem;
      padding-bottom: 3.5rem
    }

    .focus\\:py-16:focus {
      padding-top: 4rem;
      padding-bottom: 4rem
    }

    .focus\\:py-2:focus {
      padding-top: .5rem;
      padding-bottom: .5rem
    }

    .focus\\:py-2\\.5:focus {
      padding-top: .625rem;
      padding-bottom: .625rem
    }

    .focus\\:py-20:focus {
      padding-top: 5rem;
      padding-bottom: 5rem
    }

    .focus\\:py-24:focus {
      padding-top: 6rem;
      padding-bottom: 6rem
    }

    .focus\\:py-28:focus {
      padding-top: 7rem;
      padding-bottom: 7rem
    }

    .focus\\:py-3:focus {
      padding-top: .75rem;
      padding-bottom: .75rem
    }

    .focus\\:py-3\\.5:focus {
      padding-top: .875rem;
      padding-bottom: .875rem
    }

    .focus\\:py-32:focus {
      padding-top: 8rem;
      padding-bottom: 8rem
    }

    .focus\\:py-36:focus {
      padding-top: 9rem;
      padding-bottom: 9rem
    }

    .focus\\:py-40:focus {
      padding-top: 10rem;
      padding-bottom: 10rem
    }

    .focus\\:py-44:focus {
      padding-top: 11rem;
      padding-bottom: 11rem
    }

    .focus\\:py-48:focus {
      padding-top: 12rem;
      padding-bottom: 12rem
    }

    .focus\\:py-52:focus {
      padding-top: 13rem;
      padding-bottom: 13rem
    }

    .focus\\:py-56:focus {
      padding-top: 14rem;
      padding-bottom: 14rem
    }

    .focus\\:py-60:focus {
      padding-top: 15rem;
      padding-bottom: 15rem
    }

    .focus\\:py-64:focus {
      padding-top: 16rem;
      padding-bottom: 16rem
    }

    .focus\\:py-72:focus {
      padding-top: 18rem;
      padding-bottom: 18rem
    }

    .focus\\:py-80:focus {
      padding-top: 20rem;
      padding-bottom: 20rem
    }

    .focus\\:py-96:focus {
      padding-top: 24rem;
      padding-bottom: 24rem
    }

    .focus\\:py-px:focus {
      padding-top: 1px;
      padding-bottom: 1px
    }

    .focus\\:pb-0:focus {
      padding-bottom: 0
    }

    .focus\\:pb-0\\.5:focus {
      padding-bottom: .125rem
    }

    .focus\\:pb-1:focus {
      padding-bottom: .25rem
    }

    .focus\\:pb-1\\.5:focus {
      padding-bottom: .375rem
    }

    .focus\\:pb-14:focus {
      padding-bottom: 3.5rem
    }

    .focus\\:pb-16:focus {
      padding-bottom: 4rem
    }

    .focus\\:pb-2:focus {
      padding-bottom: .5rem
    }

    .focus\\:pb-2\\.5:focus {
      padding-bottom: .625rem
    }

    .focus\\:pb-20:focus {
      padding-bottom: 5rem
    }

    .focus\\:pb-24:focus {
      padding-bottom: 6rem
    }

    .focus\\:pb-28:focus {
      padding-bottom: 7rem
    }

    .focus\\:pb-3:focus {
      padding-bottom: .75rem
    }

    .focus\\:pb-3\\.5:focus {
      padding-bottom: .875rem
    }

    .focus\\:pb-32:focus {
      padding-bottom: 8rem
    }

    .focus\\:pb-36:focus {
      padding-bottom: 9rem
    }

    .focus\\:pb-40:focus {
      padding-bottom: 10rem
    }

    .focus\\:pb-44:focus {
      padding-bottom: 11rem
    }

    .focus\\:pb-48:focus {
      padding-bottom: 12rem
    }

    .focus\\:pb-52:focus {
      padding-bottom: 13rem
    }

    .focus\\:pb-56:focus {
      padding-bottom: 14rem
    }

    .focus\\:pb-60:focus {
      padding-bottom: 15rem
    }

    .focus\\:pb-64:focus {
      padding-bottom: 16rem
    }

    .focus\\:pb-72:focus {
      padding-bottom: 18rem
    }

    .focus\\:pb-80:focus {
      padding-bottom: 20rem
    }

    .focus\\:pb-96:focus {
      padding-bottom: 24rem
    }

    .focus\\:pb-px:focus {
      padding-bottom: 1px
    }

    .focus\\:pl-0:focus {
      padding-left: 0
    }

    .focus\\:pl-0\\.5:focus {
      padding-left: .125rem
    }

    .focus\\:pl-1:focus {
      padding-left: .25rem
    }

    .focus\\:pl-1\\.5:focus {
      padding-left: .375rem
    }

    .focus\\:pl-14:focus {
      padding-left: 3.5rem
    }

    .focus\\:pl-16:focus {
      padding-left: 4rem
    }

    .focus\\:pl-2:focus {
      padding-left: .5rem
    }

    .focus\\:pl-2\\.5:focus {
      padding-left: .625rem
    }

    .focus\\:pl-20:focus {
      padding-left: 5rem
    }

    .focus\\:pl-24:focus {
      padding-left: 6rem
    }

    .focus\\:pl-28:focus {
      padding-left: 7rem
    }

    .focus\\:pl-3:focus {
      padding-left: .75rem
    }

    .focus\\:pl-3\\.5:focus {
      padding-left: .875rem
    }

    .focus\\:pl-32:focus {
      padding-left: 8rem
    }

    .focus\\:pl-36:focus {
      padding-left: 9rem
    }

    .focus\\:pl-40:focus {
      padding-left: 10rem
    }

    .focus\\:pl-44:focus {
      padding-left: 11rem
    }

    .focus\\:pl-48:focus {
      padding-left: 12rem
    }

    .focus\\:pl-52:focus {
      padding-left: 13rem
    }

    .focus\\:pl-56:focus {
      padding-left: 14rem
    }

    .focus\\:pl-60:focus {
      padding-left: 15rem
    }

    .focus\\:pl-64:focus {
      padding-left: 16rem
    }

    .focus\\:pl-72:focus {
      padding-left: 18rem
    }

    .focus\\:pl-80:focus {
      padding-left: 20rem
    }

    .focus\\:pl-96:focus {
      padding-left: 24rem
    }

    .focus\\:pl-px:focus {
      padding-left: 1px
    }

    .focus\\:pr-0:focus {
      padding-right: 0
    }

    .focus\\:pr-0\\.5:focus {
      padding-right: .125rem
    }

    .focus\\:pr-1:focus {
      padding-right: .25rem
    }

    .focus\\:pr-1\\.5:focus {
      padding-right: .375rem
    }

    .focus\\:pr-14:focus {
      padding-right: 3.5rem
    }

    .focus\\:pr-16:focus {
      padding-right: 4rem
    }

    .focus\\:pr-2:focus {
      padding-right: .5rem
    }

    .focus\\:pr-2\\.5:focus {
      padding-right: .625rem
    }

    .focus\\:pr-20:focus {
      padding-right: 5rem
    }

    .focus\\:pr-24:focus {
      padding-right: 6rem
    }

    .focus\\:pr-28:focus {
      padding-right: 7rem
    }

    .focus\\:pr-3:focus {
      padding-right: .75rem
    }

    .focus\\:pr-3\\.5:focus {
      padding-right: .875rem
    }

    .focus\\:pr-32:focus {
      padding-right: 8rem
    }

    .focus\\:pr-36:focus {
      padding-right: 9rem
    }

    .focus\\:pr-40:focus {
      padding-right: 10rem
    }

    .focus\\:pr-44:focus {
      padding-right: 11rem
    }

    .focus\\:pr-48:focus {
      padding-right: 12rem
    }

    .focus\\:pr-52:focus {
      padding-right: 13rem
    }

    .focus\\:pr-56:focus {
      padding-right: 14rem
    }

    .focus\\:pr-60:focus {
      padding-right: 15rem
    }

    .focus\\:pr-64:focus {
      padding-right: 16rem
    }

    .focus\\:pr-72:focus {
      padding-right: 18rem
    }

    .focus\\:pr-80:focus {
      padding-right: 20rem
    }

    .focus\\:pr-96:focus {
      padding-right: 24rem
    }

    .focus\\:pr-px:focus {
      padding-right: 1px
    }

    .focus\\:pt-0:focus {
      padding-top: 0
    }

    .focus\\:pt-0\\.5:focus {
      padding-top: .125rem
    }

    .focus\\:pt-1:focus {
      padding-top: .25rem
    }

    .focus\\:pt-1\\.5:focus {
      padding-top: .375rem
    }

    .focus\\:pt-14:focus {
      padding-top: 3.5rem
    }

    .focus\\:pt-16:focus {
      padding-top: 4rem
    }

    .focus\\:pt-2:focus {
      padding-top: .5rem
    }

    .focus\\:pt-2\\.5:focus {
      padding-top: .625rem
    }

    .focus\\:pt-20:focus {
      padding-top: 5rem
    }

    .focus\\:pt-24:focus {
      padding-top: 6rem
    }

    .focus\\:pt-28:focus {
      padding-top: 7rem
    }

    .focus\\:pt-3:focus {
      padding-top: .75rem
    }

    .focus\\:pt-3\\.5:focus {
      padding-top: .875rem
    }

    .focus\\:pt-32:focus {
      padding-top: 8rem
    }

    .focus\\:pt-36:focus {
      padding-top: 9rem
    }

    .focus\\:pt-40:focus {
      padding-top: 10rem
    }

    .focus\\:pt-44:focus {
      padding-top: 11rem
    }

    .focus\\:pt-48:focus {
      padding-top: 12rem
    }

    .focus\\:pt-52:focus {
      padding-top: 13rem
    }

    .focus\\:pt-56:focus {
      padding-top: 14rem
    }

    .focus\\:pt-60:focus {
      padding-top: 15rem
    }

    .focus\\:pt-64:focus {
      padding-top: 16rem
    }

    .focus\\:pt-72:focus {
      padding-top: 18rem
    }

    .focus\\:pt-80:focus {
      padding-top: 20rem
    }

    .focus\\:pt-96:focus {
      padding-top: 24rem
    }

    .focus\\:pt-px:focus {
      padding-top: 1px
    }

    .focus\\:text-2xl:focus {
      font-size: 1.5rem;
      line-height: 2rem
    }

    .focus\\:text-3xl:focus {
      font-size: 1.875rem;
      line-height: 2.25rem
    }

    .focus\\:text-4xl:focus {
      font-size: 2.25rem;
      line-height: 2.5rem
    }

    .focus\\:text-5xl:focus {
      font-size: 3rem;
      line-height: 1
    }

    .focus\\:text-6xl:focus {
      font-size: 3.75rem;
      line-height: 1
    }

    .focus\\:text-7xl:focus {
      font-size: 4.5rem;
      line-height: 1
    }

    .focus\\:text-8xl:focus {
      font-size: 6rem;
      line-height: 1
    }

    .focus\\:text-9xl:focus {
      font-size: 8rem;
      line-height: 1
    }

    .focus\\:text-base:focus {
      font-size: 1rem;
      line-height: 1.5rem
    }

    .focus\\:text-lg:focus {
      font-size: 1.125rem;
      line-height: 1.75rem
    }

    .focus\\:text-sm:focus {
      font-size: .875rem;
      line-height: 1.25rem
    }

    .focus\\:text-xl:focus {
      font-size: 1.25rem;
      line-height: 1.75rem
    }

    .focus\\:text-xs:focus {
      font-size: .75rem;
      line-height: 1rem
    }

    .focus\\:text-amber-100:focus {
      --tw-text-opacity: 1;
      color: rgb(254 243 199/var(--tw-text-opacity))
    }

    .focus\\:text-amber-200:focus {
      --tw-text-opacity: 1;
      color: rgb(253 230 138/var(--tw-text-opacity))
    }

    .focus\\:text-amber-300:focus {
      --tw-text-opacity: 1;
      color: rgb(252 211 77/var(--tw-text-opacity))
    }

    .focus\\:text-amber-400:focus {
      --tw-text-opacity: 1;
      color: rgb(251 191 36/var(--tw-text-opacity))
    }

    .focus\\:text-amber-50:focus {
      --tw-text-opacity: 1;
      color: rgb(255 251 235/var(--tw-text-opacity))
    }

    .focus\\:text-amber-500:focus {
      --tw-text-opacity: 1;
      color: rgb(245 158 11/var(--tw-text-opacity))
    }

    .focus\\:text-amber-600:focus {
      --tw-text-opacity: 1;
      color: rgb(217 119 6/var(--tw-text-opacity))
    }

    .focus\\:text-amber-700:focus {
      --tw-text-opacity: 1;
      color: rgb(180 83 9/var(--tw-text-opacity))
    }

    .focus\\:text-amber-800:focus {
      --tw-text-opacity: 1;
      color: rgb(146 64 14/var(--tw-text-opacity))
    }

    .focus\\:text-amber-900:focus {
      --tw-text-opacity: 1;
      color: rgb(120 53 15/var(--tw-text-opacity))
    }

    .focus\\:text-blue-100:focus {
      --tw-text-opacity: 1;
      color: rgb(219 234 254/var(--tw-text-opacity))
    }

    .focus\\:text-blue-200:focus {
      --tw-text-opacity: 1;
      color: rgb(191 219 254/var(--tw-text-opacity))
    }

    .focus\\:text-blue-300:focus {
      --tw-text-opacity: 1;
      color: rgb(147 197 253/var(--tw-text-opacity))
    }

    .focus\\:text-blue-400:focus {
      --tw-text-opacity: 1;
      color: rgb(96 165 250/var(--tw-text-opacity))
    }

    .focus\\:text-blue-50:focus {
      --tw-text-opacity: 1;
      color: rgb(239 246 255/var(--tw-text-opacity))
    }

    .focus\\:text-blue-500:focus {
      --tw-text-opacity: 1;
      color: rgb(59 130 246/var(--tw-text-opacity))
    }

    .focus\\:text-blue-600:focus {
      --tw-text-opacity: 1;
      color: rgb(37 99 235/var(--tw-text-opacity))
    }

    .focus\\:text-blue-700:focus {
      --tw-text-opacity: 1;
      color: rgb(29 78 216/var(--tw-text-opacity))
    }

    .focus\\:text-blue-800:focus {
      --tw-text-opacity: 1;
      color: rgb(30 64 175/var(--tw-text-opacity))
    }

    .focus\\:text-blue-900:focus {
      --tw-text-opacity: 1;
      color: rgb(30 58 138/var(--tw-text-opacity))
    }

    .focus\\:text-cyan-100:focus {
      --tw-text-opacity: 1;
      color: rgb(207 250 254/var(--tw-text-opacity))
    }

    .focus\\:text-cyan-200:focus {
      --tw-text-opacity: 1;
      color: rgb(165 243 252/var(--tw-text-opacity))
    }

    .focus\\:text-cyan-300:focus {
      --tw-text-opacity: 1;
      color: rgb(103 232 249/var(--tw-text-opacity))
    }

    .focus\\:text-cyan-400:focus {
      --tw-text-opacity: 1;
      color: rgb(34 211 238/var(--tw-text-opacity))
    }

    .focus\\:text-cyan-50:focus {
      --tw-text-opacity: 1;
      color: rgb(236 254 255/var(--tw-text-opacity))
    }

    .focus\\:text-cyan-500:focus {
      --tw-text-opacity: 1;
      color: rgb(6 182 212/var(--tw-text-opacity))
    }

    .focus\\:text-cyan-600:focus {
      --tw-text-opacity: 1;
      color: rgb(8 145 178/var(--tw-text-opacity))
    }

    .focus\\:text-cyan-700:focus {
      --tw-text-opacity: 1;
      color: rgb(14 116 144/var(--tw-text-opacity))
    }

    .focus\\:text-cyan-800:focus {
      --tw-text-opacity: 1;
      color: rgb(21 94 117/var(--tw-text-opacity))
    }

    .focus\\:text-cyan-900:focus {
      --tw-text-opacity: 1;
      color: rgb(22 78 99/var(--tw-text-opacity))
    }

    .focus\\:text-emerald-100:focus {
      --tw-text-opacity: 1;
      color: rgb(209 250 229/var(--tw-text-opacity))
    }

    .focus\\:text-emerald-200:focus {
      --tw-text-opacity: 1;
      color: rgb(167 243 208/var(--tw-text-opacity))
    }

    .focus\\:text-emerald-300:focus {
      --tw-text-opacity: 1;
      color: rgb(110 231 183/var(--tw-text-opacity))
    }

    .focus\\:text-emerald-400:focus {
      --tw-text-opacity: 1;
      color: rgb(52 211 153/var(--tw-text-opacity))
    }

    .focus\\:text-emerald-50:focus {
      --tw-text-opacity: 1;
      color: rgb(236 253 245/var(--tw-text-opacity))
    }

    .focus\\:text-emerald-500:focus {
      --tw-text-opacity: 1;
      color: rgb(16 185 129/var(--tw-text-opacity))
    }

    .focus\\:text-emerald-600:focus {
      --tw-text-opacity: 1;
      color: rgb(5 150 105/var(--tw-text-opacity))
    }

    .focus\\:text-emerald-700:focus {
      --tw-text-opacity: 1;
      color: rgb(4 120 87/var(--tw-text-opacity))
    }

    .focus\\:text-emerald-800:focus {
      --tw-text-opacity: 1;
      color: rgb(6 95 70/var(--tw-text-opacity))
    }

    .focus\\:text-emerald-900:focus {
      --tw-text-opacity: 1;
      color: rgb(6 78 59/var(--tw-text-opacity))
    }

    .focus\\:text-fuchsia-100:focus {
      --tw-text-opacity: 1;
      color: rgb(250 232 255/var(--tw-text-opacity))
    }

    .focus\\:text-fuchsia-200:focus {
      --tw-text-opacity: 1;
      color: rgb(245 208 254/var(--tw-text-opacity))
    }

    .focus\\:text-fuchsia-300:focus {
      --tw-text-opacity: 1;
      color: rgb(240 171 252/var(--tw-text-opacity))
    }

    .focus\\:text-fuchsia-400:focus {
      --tw-text-opacity: 1;
      color: rgb(232 121 249/var(--tw-text-opacity))
    }

    .focus\\:text-fuchsia-50:focus {
      --tw-text-opacity: 1;
      color: rgb(253 244 255/var(--tw-text-opacity))
    }

    .focus\\:text-fuchsia-500:focus {
      --tw-text-opacity: 1;
      color: rgb(217 70 239/var(--tw-text-opacity))
    }

    .focus\\:text-fuchsia-600:focus {
      --tw-text-opacity: 1;
      color: rgb(192 38 211/var(--tw-text-opacity))
    }

    .focus\\:text-fuchsia-700:focus {
      --tw-text-opacity: 1;
      color: rgb(162 28 175/var(--tw-text-opacity))
    }

    .focus\\:text-fuchsia-800:focus {
      --tw-text-opacity: 1;
      color: rgb(134 25 143/var(--tw-text-opacity))
    }

    .focus\\:text-fuchsia-900:focus {
      --tw-text-opacity: 1;
      color: rgb(112 26 117/var(--tw-text-opacity))
    }

    .focus\\:text-gray-100:focus {
      --tw-text-opacity: 1;
      color: rgb(243 244 246/var(--tw-text-opacity))
    }

    .focus\\:text-gray-200:focus {
      --tw-text-opacity: 1;
      color: rgb(229 231 235/var(--tw-text-opacity))
    }

    .focus\\:text-gray-300:focus {
      --tw-text-opacity: 1;
      color: rgb(209 213 219/var(--tw-text-opacity))
    }

    .focus\\:text-gray-400:focus {
      --tw-text-opacity: 1;
      color: rgb(156 163 175/var(--tw-text-opacity))
    }

    .focus\\:text-gray-50:focus {
      --tw-text-opacity: 1;
      color: rgb(249 250 251/var(--tw-text-opacity))
    }

    .focus\\:text-gray-500:focus {
      --tw-text-opacity: 1;
      color: rgb(107 114 128/var(--tw-text-opacity))
    }

    .focus\\:text-gray-600:focus {
      --tw-text-opacity: 1;
      color: rgb(75 85 99/var(--tw-text-opacity))
    }

    .focus\\:text-gray-700:focus {
      --tw-text-opacity: 1;
      color: rgb(55 65 81/var(--tw-text-opacity))
    }

    .focus\\:text-gray-800:focus {
      --tw-text-opacity: 1;
      color: rgb(31 41 55/var(--tw-text-opacity))
    }

    .focus\\:text-gray-900:focus {
      --tw-text-opacity: 1;
      color: rgb(17 24 39/var(--tw-text-opacity))
    }

    .focus\\:text-green-100:focus {
      --tw-text-opacity: 1;
      color: rgb(220 252 231/var(--tw-text-opacity))
    }

    .focus\\:text-green-200:focus {
      --tw-text-opacity: 1;
      color: rgb(187 247 208/var(--tw-text-opacity))
    }

    .focus\\:text-green-300:focus {
      --tw-text-opacity: 1;
      color: rgb(134 239 172/var(--tw-text-opacity))
    }

    .focus\\:text-green-400:focus {
      --tw-text-opacity: 1;
      color: rgb(74 222 128/var(--tw-text-opacity))
    }

    .focus\\:text-green-50:focus {
      --tw-text-opacity: 1;
      color: rgb(240 253 244/var(--tw-text-opacity))
    }

    .focus\\:text-green-500:focus {
      --tw-text-opacity: 1;
      color: rgb(34 197 94/var(--tw-text-opacity))
    }

    .focus\\:text-green-600:focus {
      --tw-text-opacity: 1;
      color: rgb(22 163 74/var(--tw-text-opacity))
    }

    .focus\\:text-green-700:focus {
      --tw-text-opacity: 1;
      color: rgb(21 128 61/var(--tw-text-opacity))
    }

    .focus\\:text-green-800:focus {
      --tw-text-opacity: 1;
      color: rgb(22 101 52/var(--tw-text-opacity))
    }

    .focus\\:text-green-900:focus {
      --tw-text-opacity: 1;
      color: rgb(20 83 45/var(--tw-text-opacity))
    }

    .focus\\:text-indigo-100:focus {
      --tw-text-opacity: 1;
      color: rgb(224 231 255/var(--tw-text-opacity))
    }

    .focus\\:text-indigo-200:focus {
      --tw-text-opacity: 1;
      color: rgb(199 210 254/var(--tw-text-opacity))
    }

    .focus\\:text-indigo-300:focus {
      --tw-text-opacity: 1;
      color: rgb(165 180 252/var(--tw-text-opacity))
    }

    .focus\\:text-indigo-400:focus {
      --tw-text-opacity: 1;
      color: rgb(129 140 248/var(--tw-text-opacity))
    }

    .focus\\:text-indigo-50:focus {
      --tw-text-opacity: 1;
      color: rgb(238 242 255/var(--tw-text-opacity))
    }

    .focus\\:text-indigo-500:focus {
      --tw-text-opacity: 1;
      color: rgb(99 102 241/var(--tw-text-opacity))
    }

    .focus\\:text-indigo-600:focus {
      --tw-text-opacity: 1;
      color: rgb(79 70 229/var(--tw-text-opacity))
    }

    .focus\\:text-indigo-700:focus {
      --tw-text-opacity: 1;
      color: rgb(67 56 202/var(--tw-text-opacity))
    }

    .focus\\:text-indigo-800:focus {
      --tw-text-opacity: 1;
      color: rgb(55 48 163/var(--tw-text-opacity))
    }

    .focus\\:text-indigo-900:focus {
      --tw-text-opacity: 1;
      color: rgb(49 46 129/var(--tw-text-opacity))
    }

    .focus\\:text-lime-100:focus {
      --tw-text-opacity: 1;
      color: rgb(236 252 203/var(--tw-text-opacity))
    }

    .focus\\:text-lime-200:focus {
      --tw-text-opacity: 1;
      color: rgb(217 249 157/var(--tw-text-opacity))
    }

    .focus\\:text-lime-300:focus {
      --tw-text-opacity: 1;
      color: rgb(190 242 100/var(--tw-text-opacity))
    }

    .focus\\:text-lime-400:focus {
      --tw-text-opacity: 1;
      color: rgb(163 230 53/var(--tw-text-opacity))
    }

    .focus\\:text-lime-50:focus {
      --tw-text-opacity: 1;
      color: rgb(247 254 231/var(--tw-text-opacity))
    }

    .focus\\:text-lime-500:focus {
      --tw-text-opacity: 1;
      color: rgb(132 204 22/var(--tw-text-opacity))
    }

    .focus\\:text-lime-600:focus {
      --tw-text-opacity: 1;
      color: rgb(101 163 13/var(--tw-text-opacity))
    }

    .focus\\:text-lime-700:focus {
      --tw-text-opacity: 1;
      color: rgb(77 124 15/var(--tw-text-opacity))
    }

    .focus\\:text-lime-800:focus {
      --tw-text-opacity: 1;
      color: rgb(63 98 18/var(--tw-text-opacity))
    }

    .focus\\:text-lime-900:focus {
      --tw-text-opacity: 1;
      color: rgb(54 83 20/var(--tw-text-opacity))
    }

    .focus\\:text-neutral-100:focus {
      --tw-text-opacity: 1;
      color: rgb(245 245 245/var(--tw-text-opacity))
    }

    .focus\\:text-neutral-200:focus {
      --tw-text-opacity: 1;
      color: rgb(229 229 229/var(--tw-text-opacity))
    }

    .focus\\:text-neutral-300:focus {
      --tw-text-opacity: 1;
      color: rgb(212 212 212/var(--tw-text-opacity))
    }

    .focus\\:text-neutral-400:focus {
      --tw-text-opacity: 1;
      color: rgb(163 163 163/var(--tw-text-opacity))
    }

    .focus\\:text-neutral-50:focus {
      --tw-text-opacity: 1;
      color: rgb(250 250 250/var(--tw-text-opacity))
    }

    .focus\\:text-neutral-500:focus {
      --tw-text-opacity: 1;
      color: rgb(115 115 115/var(--tw-text-opacity))
    }

    .focus\\:text-neutral-600:focus {
      --tw-text-opacity: 1;
      color: rgb(82 82 82/var(--tw-text-opacity))
    }

    .focus\\:text-neutral-700:focus {
      --tw-text-opacity: 1;
      color: rgb(64 64 64/var(--tw-text-opacity))
    }

    .focus\\:text-neutral-800:focus {
      --tw-text-opacity: 1;
      color: rgb(38 38 38/var(--tw-text-opacity))
    }

    .focus\\:text-neutral-900:focus {
      --tw-text-opacity: 1;
      color: rgb(23 23 23/var(--tw-text-opacity))
    }

    .focus\\:text-orange-100:focus {
      --tw-text-opacity: 1;
      color: rgb(255 237 213/var(--tw-text-opacity))
    }

    .focus\\:text-orange-200:focus {
      --tw-text-opacity: 1;
      color: rgb(254 215 170/var(--tw-text-opacity))
    }

    .focus\\:text-orange-300:focus {
      --tw-text-opacity: 1;
      color: rgb(253 186 116/var(--tw-text-opacity))
    }

    .focus\\:text-orange-400:focus {
      --tw-text-opacity: 1;
      color: rgb(251 146 60/var(--tw-text-opacity))
    }

    .focus\\:text-orange-50:focus {
      --tw-text-opacity: 1;
      color: rgb(255 247 237/var(--tw-text-opacity))
    }

    .focus\\:text-orange-500:focus {
      --tw-text-opacity: 1;
      color: rgb(249 115 22/var(--tw-text-opacity))
    }

    .focus\\:text-orange-600:focus {
      --tw-text-opacity: 1;
      color: rgb(234 88 12/var(--tw-text-opacity))
    }

    .focus\\:text-orange-700:focus {
      --tw-text-opacity: 1;
      color: rgb(194 65 12/var(--tw-text-opacity))
    }

    .focus\\:text-orange-800:focus {
      --tw-text-opacity: 1;
      color: rgb(154 52 18/var(--tw-text-opacity))
    }

    .focus\\:text-orange-900:focus {
      --tw-text-opacity: 1;
      color: rgb(124 45 18/var(--tw-text-opacity))
    }

    .focus\\:text-pink-100:focus {
      --tw-text-opacity: 1;
      color: rgb(252 231 243/var(--tw-text-opacity))
    }

    .focus\\:text-pink-200:focus {
      --tw-text-opacity: 1;
      color: rgb(251 207 232/var(--tw-text-opacity))
    }

    .focus\\:text-pink-300:focus {
      --tw-text-opacity: 1;
      color: rgb(249 168 212/var(--tw-text-opacity))
    }

    .focus\\:text-pink-400:focus {
      --tw-text-opacity: 1;
      color: rgb(244 114 182/var(--tw-text-opacity))
    }

    .focus\\:text-pink-50:focus {
      --tw-text-opacity: 1;
      color: rgb(253 242 248/var(--tw-text-opacity))
    }

    .focus\\:text-pink-500:focus {
      --tw-text-opacity: 1;
      color: rgb(236 72 153/var(--tw-text-opacity))
    }

    .focus\\:text-pink-600:focus {
      --tw-text-opacity: 1;
      color: rgb(219 39 119/var(--tw-text-opacity))
    }

    .focus\\:text-pink-700:focus {
      --tw-text-opacity: 1;
      color: rgb(190 24 93/var(--tw-text-opacity))
    }

    .focus\\:text-pink-800:focus {
      --tw-text-opacity: 1;
      color: rgb(157 23 77/var(--tw-text-opacity))
    }

    .focus\\:text-pink-900:focus {
      --tw-text-opacity: 1;
      color: rgb(131 24 67/var(--tw-text-opacity))
    }

    .focus\\:text-purple-100:focus {
      --tw-text-opacity: 1;
      color: rgb(243 232 255/var(--tw-text-opacity))
    }

    .focus\\:text-purple-200:focus {
      --tw-text-opacity: 1;
      color: rgb(233 213 255/var(--tw-text-opacity))
    }

    .focus\\:text-purple-300:focus {
      --tw-text-opacity: 1;
      color: rgb(216 180 254/var(--tw-text-opacity))
    }

    .focus\\:text-purple-400:focus {
      --tw-text-opacity: 1;
      color: rgb(192 132 252/var(--tw-text-opacity))
    }

    .focus\\:text-purple-50:focus {
      --tw-text-opacity: 1;
      color: rgb(250 245 255/var(--tw-text-opacity))
    }

    .focus\\:text-purple-500:focus {
      --tw-text-opacity: 1;
      color: rgb(168 85 247/var(--tw-text-opacity))
    }

    .focus\\:text-purple-600:focus {
      --tw-text-opacity: 1;
      color: rgb(147 51 234/var(--tw-text-opacity))
    }

    .focus\\:text-purple-700:focus {
      --tw-text-opacity: 1;
      color: rgb(126 34 206/var(--tw-text-opacity))
    }

    .focus\\:text-purple-800:focus {
      --tw-text-opacity: 1;
      color: rgb(107 33 168/var(--tw-text-opacity))
    }

    .focus\\:text-purple-900:focus {
      --tw-text-opacity: 1;
      color: rgb(88 28 135/var(--tw-text-opacity))
    }

    .focus\\:text-red-100:focus {
      --tw-text-opacity: 1;
      color: rgb(254 226 226/var(--tw-text-opacity))
    }

    .focus\\:text-red-200:focus {
      --tw-text-opacity: 1;
      color: rgb(254 202 202/var(--tw-text-opacity))
    }

    .focus\\:text-red-300:focus {
      --tw-text-opacity: 1;
      color: rgb(252 165 165/var(--tw-text-opacity))
    }

    .focus\\:text-red-400:focus {
      --tw-text-opacity: 1;
      color: rgb(248 113 113/var(--tw-text-opacity))
    }

    .focus\\:text-red-50:focus {
      --tw-text-opacity: 1;
      color: rgb(254 242 242/var(--tw-text-opacity))
    }

    .focus\\:text-red-500:focus {
      --tw-text-opacity: 1;
      color: rgb(239 68 68/var(--tw-text-opacity))
    }

    .focus\\:text-red-600:focus {
      --tw-text-opacity: 1;
      color: rgb(220 38 38/var(--tw-text-opacity))
    }

    .focus\\:text-red-700:focus {
      --tw-text-opacity: 1;
      color: rgb(185 28 28/var(--tw-text-opacity))
    }

    .focus\\:text-red-800:focus {
      --tw-text-opacity: 1;
      color: rgb(153 27 27/var(--tw-text-opacity))
    }

    .focus\\:text-red-900:focus {
      --tw-text-opacity: 1;
      color: rgb(127 29 29/var(--tw-text-opacity))
    }

    .focus\\:text-rose-100:focus {
      --tw-text-opacity: 1;
      color: rgb(255 228 230/var(--tw-text-opacity))
    }

    .focus\\:text-rose-200:focus {
      --tw-text-opacity: 1;
      color: rgb(254 205 211/var(--tw-text-opacity))
    }

    .focus\\:text-rose-300:focus {
      --tw-text-opacity: 1;
      color: rgb(253 164 175/var(--tw-text-opacity))
    }

    .focus\\:text-rose-400:focus {
      --tw-text-opacity: 1;
      color: rgb(251 113 133/var(--tw-text-opacity))
    }

    .focus\\:text-rose-50:focus {
      --tw-text-opacity: 1;
      color: rgb(255 241 242/var(--tw-text-opacity))
    }

    .focus\\:text-rose-500:focus {
      --tw-text-opacity: 1;
      color: rgb(244 63 94/var(--tw-text-opacity))
    }

    .focus\\:text-rose-600:focus {
      --tw-text-opacity: 1;
      color: rgb(225 29 72/var(--tw-text-opacity))
    }

    .focus\\:text-rose-700:focus {
      --tw-text-opacity: 1;
      color: rgb(190 18 60/var(--tw-text-opacity))
    }

    .focus\\:text-rose-800:focus {
      --tw-text-opacity: 1;
      color: rgb(159 18 57/var(--tw-text-opacity))
    }

    .focus\\:text-rose-900:focus {
      --tw-text-opacity: 1;
      color: rgb(136 19 55/var(--tw-text-opacity))
    }

    .focus\\:text-sky-100:focus {
      --tw-text-opacity: 1;
      color: rgb(224 242 254/var(--tw-text-opacity))
    }

    .focus\\:text-sky-200:focus {
      --tw-text-opacity: 1;
      color: rgb(186 230 253/var(--tw-text-opacity))
    }

    .focus\\:text-sky-300:focus {
      --tw-text-opacity: 1;
      color: rgb(125 211 252/var(--tw-text-opacity))
    }

    .focus\\:text-sky-400:focus {
      --tw-text-opacity: 1;
      color: rgb(56 189 248/var(--tw-text-opacity))
    }

    .focus\\:text-sky-50:focus {
      --tw-text-opacity: 1;
      color: rgb(240 249 255/var(--tw-text-opacity))
    }

    .focus\\:text-sky-500:focus {
      --tw-text-opacity: 1;
      color: rgb(14 165 233/var(--tw-text-opacity))
    }

    .focus\\:text-sky-600:focus {
      --tw-text-opacity: 1;
      color: rgb(2 132 199/var(--tw-text-opacity))
    }

    .focus\\:text-sky-700:focus {
      --tw-text-opacity: 1;
      color: rgb(3 105 161/var(--tw-text-opacity))
    }

    .focus\\:text-sky-800:focus {
      --tw-text-opacity: 1;
      color: rgb(7 89 133/var(--tw-text-opacity))
    }

    .focus\\:text-sky-900:focus {
      --tw-text-opacity: 1;
      color: rgb(12 74 110/var(--tw-text-opacity))
    }

    .focus\\:text-slate-100:focus {
      --tw-text-opacity: 1;
      color: rgb(241 245 249/var(--tw-text-opacity))
    }

    .focus\\:text-slate-200:focus {
      --tw-text-opacity: 1;
      color: rgb(226 232 240/var(--tw-text-opacity))
    }

    .focus\\:text-slate-300:focus {
      --tw-text-opacity: 1;
      color: rgb(203 213 225/var(--tw-text-opacity))
    }

    .focus\\:text-slate-400:focus {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    .focus\\:text-slate-50:focus {
      --tw-text-opacity: 1;
      color: rgb(248 250 252/var(--tw-text-opacity))
    }

    .focus\\:text-slate-500:focus {
      --tw-text-opacity: 1;
      color: rgb(100 116 139/var(--tw-text-opacity))
    }

    .focus\\:text-slate-600:focus {
      --tw-text-opacity: 1;
      color: rgb(71 85 105/var(--tw-text-opacity))
    }

    .focus\\:text-slate-700:focus {
      --tw-text-opacity: 1;
      color: rgb(51 65 85/var(--tw-text-opacity))
    }

    .focus\\:text-slate-800:focus {
      --tw-text-opacity: 1;
      color: rgb(30 41 59/var(--tw-text-opacity))
    }

    .focus\\:text-slate-900:focus {
      --tw-text-opacity: 1;
      color: rgb(15 23 42/var(--tw-text-opacity))
    }

    .focus\\:text-stone-100:focus {
      --tw-text-opacity: 1;
      color: rgb(245 245 244/var(--tw-text-opacity))
    }

    .focus\\:text-stone-200:focus {
      --tw-text-opacity: 1;
      color: rgb(231 229 228/var(--tw-text-opacity))
    }

    .focus\\:text-stone-300:focus {
      --tw-text-opacity: 1;
      color: rgb(214 211 209/var(--tw-text-opacity))
    }

    .focus\\:text-stone-400:focus {
      --tw-text-opacity: 1;
      color: rgb(168 162 158/var(--tw-text-opacity))
    }

    .focus\\:text-stone-50:focus {
      --tw-text-opacity: 1;
      color: rgb(250 250 249/var(--tw-text-opacity))
    }

    .focus\\:text-stone-500:focus {
      --tw-text-opacity: 1;
      color: rgb(120 113 108/var(--tw-text-opacity))
    }

    .focus\\:text-stone-600:focus {
      --tw-text-opacity: 1;
      color: rgb(87 83 78/var(--tw-text-opacity))
    }

    .focus\\:text-stone-700:focus {
      --tw-text-opacity: 1;
      color: rgb(68 64 60/var(--tw-text-opacity))
    }

    .focus\\:text-stone-800:focus {
      --tw-text-opacity: 1;
      color: rgb(41 37 36/var(--tw-text-opacity))
    }

    .focus\\:text-stone-900:focus {
      --tw-text-opacity: 1;
      color: rgb(28 25 23/var(--tw-text-opacity))
    }

    .focus\\:text-teal-100:focus {
      --tw-text-opacity: 1;
      color: rgb(204 251 241/var(--tw-text-opacity))
    }

    .focus\\:text-teal-200:focus {
      --tw-text-opacity: 1;
      color: rgb(153 246 228/var(--tw-text-opacity))
    }

    .focus\\:text-teal-300:focus {
      --tw-text-opacity: 1;
      color: rgb(94 234 212/var(--tw-text-opacity))
    }

    .focus\\:text-teal-400:focus {
      --tw-text-opacity: 1;
      color: rgb(45 212 191/var(--tw-text-opacity))
    }

    .focus\\:text-teal-50:focus {
      --tw-text-opacity: 1;
      color: rgb(240 253 250/var(--tw-text-opacity))
    }

    .focus\\:text-teal-500:focus {
      --tw-text-opacity: 1;
      color: rgb(20 184 166/var(--tw-text-opacity))
    }

    .focus\\:text-teal-600:focus {
      --tw-text-opacity: 1;
      color: rgb(13 148 136/var(--tw-text-opacity))
    }

    .focus\\:text-teal-700:focus {
      --tw-text-opacity: 1;
      color: rgb(15 118 110/var(--tw-text-opacity))
    }

    .focus\\:text-teal-800:focus {
      --tw-text-opacity: 1;
      color: rgb(17 94 89/var(--tw-text-opacity))
    }

    .focus\\:text-teal-900:focus {
      --tw-text-opacity: 1;
      color: rgb(19 78 74/var(--tw-text-opacity))
    }

    .focus\\:text-violet-100:focus {
      --tw-text-opacity: 1;
      color: rgb(237 233 254/var(--tw-text-opacity))
    }

    .focus\\:text-violet-200:focus {
      --tw-text-opacity: 1;
      color: rgb(221 214 254/var(--tw-text-opacity))
    }

    .focus\\:text-violet-300:focus {
      --tw-text-opacity: 1;
      color: rgb(196 181 253/var(--tw-text-opacity))
    }

    .focus\\:text-violet-400:focus {
      --tw-text-opacity: 1;
      color: rgb(167 139 250/var(--tw-text-opacity))
    }

    .focus\\:text-violet-50:focus {
      --tw-text-opacity: 1;
      color: rgb(245 243 255/var(--tw-text-opacity))
    }

    .focus\\:text-violet-500:focus {
      --tw-text-opacity: 1;
      color: rgb(139 92 246/var(--tw-text-opacity))
    }

    .focus\\:text-violet-600:focus {
      --tw-text-opacity: 1;
      color: rgb(124 58 237/var(--tw-text-opacity))
    }

    .focus\\:text-violet-700:focus {
      --tw-text-opacity: 1;
      color: rgb(109 40 217/var(--tw-text-opacity))
    }

    .focus\\:text-violet-800:focus {
      --tw-text-opacity: 1;
      color: rgb(91 33 182/var(--tw-text-opacity))
    }

    .focus\\:text-violet-900:focus {
      --tw-text-opacity: 1;
      color: rgb(76 29 149/var(--tw-text-opacity))
    }

    .focus\\:text-yellow-100:focus {
      --tw-text-opacity: 1;
      color: rgb(254 249 195/var(--tw-text-opacity))
    }

    .focus\\:text-yellow-200:focus {
      --tw-text-opacity: 1;
      color: rgb(254 240 138/var(--tw-text-opacity))
    }

    .focus\\:text-yellow-300:focus {
      --tw-text-opacity: 1;
      color: rgb(253 224 71/var(--tw-text-opacity))
    }

    .focus\\:text-yellow-400:focus {
      --tw-text-opacity: 1;
      color: rgb(250 204 21/var(--tw-text-opacity))
    }

    .focus\\:text-yellow-50:focus {
      --tw-text-opacity: 1;
      color: rgb(254 252 232/var(--tw-text-opacity))
    }

    .focus\\:text-yellow-500:focus {
      --tw-text-opacity: 1;
      color: rgb(234 179 8/var(--tw-text-opacity))
    }

    .focus\\:text-yellow-600:focus {
      --tw-text-opacity: 1;
      color: rgb(202 138 4/var(--tw-text-opacity))
    }

    .focus\\:text-yellow-700:focus {
      --tw-text-opacity: 1;
      color: rgb(161 98 7/var(--tw-text-opacity))
    }

    .focus\\:text-yellow-800:focus {
      --tw-text-opacity: 1;
      color: rgb(133 77 14/var(--tw-text-opacity))
    }

    .focus\\:text-yellow-900:focus {
      --tw-text-opacity: 1;
      color: rgb(113 63 18/var(--tw-text-opacity))
    }

    .focus\\:text-zinc-100:focus {
      --tw-text-opacity: 1;
      color: rgb(244 244 245/var(--tw-text-opacity))
    }

    .focus\\:text-zinc-200:focus {
      --tw-text-opacity: 1;
      color: rgb(228 228 231/var(--tw-text-opacity))
    }

    .focus\\:text-zinc-300:focus {
      --tw-text-opacity: 1;
      color: rgb(212 212 216/var(--tw-text-opacity))
    }

    .focus\\:text-zinc-400:focus {
      --tw-text-opacity: 1;
      color: rgb(161 161 170/var(--tw-text-opacity))
    }

    .focus\\:text-zinc-50:focus {
      --tw-text-opacity: 1;
      color: rgb(250 250 250/var(--tw-text-opacity))
    }

    .focus\\:text-zinc-500:focus {
      --tw-text-opacity: 1;
      color: rgb(113 113 122/var(--tw-text-opacity))
    }

    .focus\\:text-zinc-600:focus {
      --tw-text-opacity: 1;
      color: rgb(82 82 91/var(--tw-text-opacity))
    }

    .focus\\:text-zinc-700:focus {
      --tw-text-opacity: 1;
      color: rgb(63 63 70/var(--tw-text-opacity))
    }

    .focus\\:text-zinc-800:focus {
      --tw-text-opacity: 1;
      color: rgb(39 39 42/var(--tw-text-opacity))
    }

    .focus\\:text-zinc-900:focus {
      --tw-text-opacity: 1;
      color: rgb(24 24 27/var(--tw-text-opacity))
    }

    .focus\\:ring-amber-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 243 199/var(--tw-ring-opacity))
    }

    .focus\\:ring-amber-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 230 138/var(--tw-ring-opacity))
    }

    .focus\\:ring-amber-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 211 77/var(--tw-ring-opacity))
    }

    .focus\\:ring-amber-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 191 36/var(--tw-ring-opacity))
    }

    .focus\\:ring-amber-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 251 235/var(--tw-ring-opacity))
    }

    .focus\\:ring-amber-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 158 11/var(--tw-ring-opacity))
    }

    .focus\\:ring-amber-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 119 6/var(--tw-ring-opacity))
    }

    .focus\\:ring-amber-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(180 83 9/var(--tw-ring-opacity))
    }

    .focus\\:ring-amber-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(146 64 14/var(--tw-ring-opacity))
    }

    .focus\\:ring-amber-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(120 53 15/var(--tw-ring-opacity))
    }

    .focus\\:ring-blue-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(219 234 254/var(--tw-ring-opacity))
    }

    .focus\\:ring-blue-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(191 219 254/var(--tw-ring-opacity))
    }

    .focus\\:ring-blue-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(147 197 253/var(--tw-ring-opacity))
    }

    .focus\\:ring-blue-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(96 165 250/var(--tw-ring-opacity))
    }

    .focus\\:ring-blue-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(239 246 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-blue-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(59 130 246/var(--tw-ring-opacity))
    }

    .focus\\:ring-blue-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(37 99 235/var(--tw-ring-opacity))
    }

    .focus\\:ring-blue-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(29 78 216/var(--tw-ring-opacity))
    }

    .focus\\:ring-blue-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 64 175/var(--tw-ring-opacity))
    }

    .focus\\:ring-blue-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 58 138/var(--tw-ring-opacity))
    }

    .focus\\:ring-cyan-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(207 250 254/var(--tw-ring-opacity))
    }

    .focus\\:ring-cyan-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(165 243 252/var(--tw-ring-opacity))
    }

    .focus\\:ring-cyan-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(103 232 249/var(--tw-ring-opacity))
    }

    .focus\\:ring-cyan-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(34 211 238/var(--tw-ring-opacity))
    }

    .focus\\:ring-cyan-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 254 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-cyan-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 182 212/var(--tw-ring-opacity))
    }

    .focus\\:ring-cyan-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(8 145 178/var(--tw-ring-opacity))
    }

    .focus\\:ring-cyan-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(14 116 144/var(--tw-ring-opacity))
    }

    .focus\\:ring-cyan-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(21 94 117/var(--tw-ring-opacity))
    }

    .focus\\:ring-cyan-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 78 99/var(--tw-ring-opacity))
    }

    .focus\\:ring-emerald-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(209 250 229/var(--tw-ring-opacity))
    }

    .focus\\:ring-emerald-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(167 243 208/var(--tw-ring-opacity))
    }

    .focus\\:ring-emerald-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(110 231 183/var(--tw-ring-opacity))
    }

    .focus\\:ring-emerald-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(52 211 153/var(--tw-ring-opacity))
    }

    .focus\\:ring-emerald-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 253 245/var(--tw-ring-opacity))
    }

    .focus\\:ring-emerald-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(16 185 129/var(--tw-ring-opacity))
    }

    .focus\\:ring-emerald-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(5 150 105/var(--tw-ring-opacity))
    }

    .focus\\:ring-emerald-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(4 120 87/var(--tw-ring-opacity))
    }

    .focus\\:ring-emerald-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 95 70/var(--tw-ring-opacity))
    }

    .focus\\:ring-emerald-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 78 59/var(--tw-ring-opacity))
    }

    .focus\\:ring-fuchsia-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 232 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-fuchsia-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 208 254/var(--tw-ring-opacity))
    }

    .focus\\:ring-fuchsia-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 171 252/var(--tw-ring-opacity))
    }

    .focus\\:ring-fuchsia-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(232 121 249/var(--tw-ring-opacity))
    }

    .focus\\:ring-fuchsia-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 244 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-fuchsia-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 70 239/var(--tw-ring-opacity))
    }

    .focus\\:ring-fuchsia-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(192 38 211/var(--tw-ring-opacity))
    }

    .focus\\:ring-fuchsia-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(162 28 175/var(--tw-ring-opacity))
    }

    .focus\\:ring-fuchsia-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(134 25 143/var(--tw-ring-opacity))
    }

    .focus\\:ring-fuchsia-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(112 26 117/var(--tw-ring-opacity))
    }

    .focus\\:ring-gray-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(243 244 246/var(--tw-ring-opacity))
    }

    .focus\\:ring-gray-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(229 231 235/var(--tw-ring-opacity))
    }

    .focus\\:ring-gray-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(209 213 219/var(--tw-ring-opacity))
    }

    .focus\\:ring-gray-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(156 163 175/var(--tw-ring-opacity))
    }

    .focus\\:ring-gray-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 250 251/var(--tw-ring-opacity))
    }

    .focus\\:ring-gray-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(107 114 128/var(--tw-ring-opacity))
    }

    .focus\\:ring-gray-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(75 85 99/var(--tw-ring-opacity))
    }

    .focus\\:ring-gray-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(55 65 81/var(--tw-ring-opacity))
    }

    .focus\\:ring-gray-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(31 41 55/var(--tw-ring-opacity))
    }

    .focus\\:ring-gray-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(17 24 39/var(--tw-ring-opacity))
    }

    .focus\\:ring-green-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(220 252 231/var(--tw-ring-opacity))
    }

    .focus\\:ring-green-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(187 247 208/var(--tw-ring-opacity))
    }

    .focus\\:ring-green-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(134 239 172/var(--tw-ring-opacity))
    }

    .focus\\:ring-green-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(74 222 128/var(--tw-ring-opacity))
    }

    .focus\\:ring-green-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 253 244/var(--tw-ring-opacity))
    }

    .focus\\:ring-green-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(34 197 94/var(--tw-ring-opacity))
    }

    .focus\\:ring-green-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 163 74/var(--tw-ring-opacity))
    }

    .focus\\:ring-green-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(21 128 61/var(--tw-ring-opacity))
    }

    .focus\\:ring-green-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 101 52/var(--tw-ring-opacity))
    }

    .focus\\:ring-green-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(20 83 45/var(--tw-ring-opacity))
    }

    .focus\\:ring-indigo-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(224 231 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-indigo-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(199 210 254/var(--tw-ring-opacity))
    }

    .focus\\:ring-indigo-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(165 180 252/var(--tw-ring-opacity))
    }

    .focus\\:ring-indigo-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(129 140 248/var(--tw-ring-opacity))
    }

    .focus\\:ring-indigo-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(238 242 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-indigo-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(99 102 241/var(--tw-ring-opacity))
    }

    .focus\\:ring-indigo-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(79 70 229/var(--tw-ring-opacity))
    }

    .focus\\:ring-indigo-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(67 56 202/var(--tw-ring-opacity))
    }

    .focus\\:ring-indigo-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(55 48 163/var(--tw-ring-opacity))
    }

    .focus\\:ring-indigo-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(49 46 129/var(--tw-ring-opacity))
    }

    .focus\\:ring-lime-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 252 203/var(--tw-ring-opacity))
    }

    .focus\\:ring-lime-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 249 157/var(--tw-ring-opacity))
    }

    .focus\\:ring-lime-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 242 100/var(--tw-ring-opacity))
    }

    .focus\\:ring-lime-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(163 230 53/var(--tw-ring-opacity))
    }

    .focus\\:ring-lime-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(247 254 231/var(--tw-ring-opacity))
    }

    .focus\\:ring-lime-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(132 204 22/var(--tw-ring-opacity))
    }

    .focus\\:ring-lime-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(101 163 13/var(--tw-ring-opacity))
    }

    .focus\\:ring-lime-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(77 124 15/var(--tw-ring-opacity))
    }

    .focus\\:ring-lime-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(63 98 18/var(--tw-ring-opacity))
    }

    .focus\\:ring-lime-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(54 83 20/var(--tw-ring-opacity))
    }

    .focus\\:ring-neutral-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 245 245/var(--tw-ring-opacity))
    }

    .focus\\:ring-neutral-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(229 229 229/var(--tw-ring-opacity))
    }

    .focus\\:ring-neutral-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(212 212 212/var(--tw-ring-opacity))
    }

    .focus\\:ring-neutral-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(163 163 163/var(--tw-ring-opacity))
    }

    .focus\\:ring-neutral-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 250/var(--tw-ring-opacity))
    }

    .focus\\:ring-neutral-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(115 115 115/var(--tw-ring-opacity))
    }

    .focus\\:ring-neutral-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(82 82 82/var(--tw-ring-opacity))
    }

    .focus\\:ring-neutral-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(64 64 64/var(--tw-ring-opacity))
    }

    .focus\\:ring-neutral-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(38 38 38/var(--tw-ring-opacity))
    }

    .focus\\:ring-neutral-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(23 23 23/var(--tw-ring-opacity))
    }

    .focus\\:ring-orange-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 237 213/var(--tw-ring-opacity))
    }

    .focus\\:ring-orange-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 215 170/var(--tw-ring-opacity))
    }

    .focus\\:ring-orange-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 186 116/var(--tw-ring-opacity))
    }

    .focus\\:ring-orange-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 146 60/var(--tw-ring-opacity))
    }

    .focus\\:ring-orange-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 247 237/var(--tw-ring-opacity))
    }

    .focus\\:ring-orange-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 115 22/var(--tw-ring-opacity))
    }

    .focus\\:ring-orange-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(234 88 12/var(--tw-ring-opacity))
    }

    .focus\\:ring-orange-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(194 65 12/var(--tw-ring-opacity))
    }

    .focus\\:ring-orange-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(154 52 18/var(--tw-ring-opacity))
    }

    .focus\\:ring-orange-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(124 45 18/var(--tw-ring-opacity))
    }

    .focus\\:ring-pink-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 231 243/var(--tw-ring-opacity))
    }

    .focus\\:ring-pink-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 207 232/var(--tw-ring-opacity))
    }

    .focus\\:ring-pink-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 168 212/var(--tw-ring-opacity))
    }

    .focus\\:ring-pink-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 114 182/var(--tw-ring-opacity))
    }

    .focus\\:ring-pink-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 242 248/var(--tw-ring-opacity))
    }

    .focus\\:ring-pink-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 72 153/var(--tw-ring-opacity))
    }

    .focus\\:ring-pink-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(219 39 119/var(--tw-ring-opacity))
    }

    .focus\\:ring-pink-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 24 93/var(--tw-ring-opacity))
    }

    .focus\\:ring-pink-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(157 23 77/var(--tw-ring-opacity))
    }

    .focus\\:ring-pink-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(131 24 67/var(--tw-ring-opacity))
    }

    .focus\\:ring-purple-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(243 232 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-purple-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(233 213 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-purple-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(216 180 254/var(--tw-ring-opacity))
    }

    .focus\\:ring-purple-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(192 132 252/var(--tw-ring-opacity))
    }

    .focus\\:ring-purple-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 245 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-purple-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(168 85 247/var(--tw-ring-opacity))
    }

    .focus\\:ring-purple-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(147 51 234/var(--tw-ring-opacity))
    }

    .focus\\:ring-purple-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(126 34 206/var(--tw-ring-opacity))
    }

    .focus\\:ring-purple-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(107 33 168/var(--tw-ring-opacity))
    }

    .focus\\:ring-purple-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(88 28 135/var(--tw-ring-opacity))
    }

    .focus\\:ring-red-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 226 226/var(--tw-ring-opacity))
    }

    .focus\\:ring-red-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 202 202/var(--tw-ring-opacity))
    }

    .focus\\:ring-red-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 165 165/var(--tw-ring-opacity))
    }

    .focus\\:ring-red-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(248 113 113/var(--tw-ring-opacity))
    }

    .focus\\:ring-red-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 242 242/var(--tw-ring-opacity))
    }

    .focus\\:ring-red-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(239 68 68/var(--tw-ring-opacity))
    }

    .focus\\:ring-red-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(220 38 38/var(--tw-ring-opacity))
    }

    .focus\\:ring-red-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(185 28 28/var(--tw-ring-opacity))
    }

    .focus\\:ring-red-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(153 27 27/var(--tw-ring-opacity))
    }

    .focus\\:ring-red-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(127 29 29/var(--tw-ring-opacity))
    }

    .focus\\:ring-rose-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 228 230/var(--tw-ring-opacity))
    }

    .focus\\:ring-rose-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 205 211/var(--tw-ring-opacity))
    }

    .focus\\:ring-rose-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 164 175/var(--tw-ring-opacity))
    }

    .focus\\:ring-rose-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 113 133/var(--tw-ring-opacity))
    }

    .focus\\:ring-rose-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 241 242/var(--tw-ring-opacity))
    }

    .focus\\:ring-rose-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 63 94/var(--tw-ring-opacity))
    }

    .focus\\:ring-rose-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(225 29 72/var(--tw-ring-opacity))
    }

    .focus\\:ring-rose-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 18 60/var(--tw-ring-opacity))
    }

    .focus\\:ring-rose-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(159 18 57/var(--tw-ring-opacity))
    }

    .focus\\:ring-rose-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(136 19 55/var(--tw-ring-opacity))
    }

    .focus\\:ring-sky-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(224 242 254/var(--tw-ring-opacity))
    }

    .focus\\:ring-sky-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(186 230 253/var(--tw-ring-opacity))
    }

    .focus\\:ring-sky-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(125 211 252/var(--tw-ring-opacity))
    }

    .focus\\:ring-sky-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(56 189 248/var(--tw-ring-opacity))
    }

    .focus\\:ring-sky-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 249 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-sky-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(14 165 233/var(--tw-ring-opacity))
    }

    .focus\\:ring-sky-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(2 132 199/var(--tw-ring-opacity))
    }

    .focus\\:ring-sky-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(3 105 161/var(--tw-ring-opacity))
    }

    .focus\\:ring-sky-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(7 89 133/var(--tw-ring-opacity))
    }

    .focus\\:ring-sky-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(12 74 110/var(--tw-ring-opacity))
    }

    .focus\\:ring-slate-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(241 245 249/var(--tw-ring-opacity))
    }

    .focus\\:ring-slate-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(226 232 240/var(--tw-ring-opacity))
    }

    .focus\\:ring-slate-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(203 213 225/var(--tw-ring-opacity))
    }

    .focus\\:ring-slate-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(148 163 184/var(--tw-ring-opacity))
    }

    .focus\\:ring-slate-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(248 250 252/var(--tw-ring-opacity))
    }

    .focus\\:ring-slate-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(100 116 139/var(--tw-ring-opacity))
    }

    .focus\\:ring-slate-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(71 85 105/var(--tw-ring-opacity))
    }

    .focus\\:ring-slate-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(51 65 85/var(--tw-ring-opacity))
    }

    .focus\\:ring-slate-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 41 59/var(--tw-ring-opacity))
    }

    .focus\\:ring-slate-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(15 23 42/var(--tw-ring-opacity))
    }

    .focus\\:ring-stone-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 245 244/var(--tw-ring-opacity))
    }

    .focus\\:ring-stone-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(231 229 228/var(--tw-ring-opacity))
    }

    .focus\\:ring-stone-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(214 211 209/var(--tw-ring-opacity))
    }

    .focus\\:ring-stone-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(168 162 158/var(--tw-ring-opacity))
    }

    .focus\\:ring-stone-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 249/var(--tw-ring-opacity))
    }

    .focus\\:ring-stone-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(120 113 108/var(--tw-ring-opacity))
    }

    .focus\\:ring-stone-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(87 83 78/var(--tw-ring-opacity))
    }

    .focus\\:ring-stone-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(68 64 60/var(--tw-ring-opacity))
    }

    .focus\\:ring-stone-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(41 37 36/var(--tw-ring-opacity))
    }

    .focus\\:ring-stone-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(28 25 23/var(--tw-ring-opacity))
    }

    .focus\\:ring-teal-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(204 251 241/var(--tw-ring-opacity))
    }

    .focus\\:ring-teal-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(153 246 228/var(--tw-ring-opacity))
    }

    .focus\\:ring-teal-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(94 234 212/var(--tw-ring-opacity))
    }

    .focus\\:ring-teal-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(45 212 191/var(--tw-ring-opacity))
    }

    .focus\\:ring-teal-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 253 250/var(--tw-ring-opacity))
    }

    .focus\\:ring-teal-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(20 184 166/var(--tw-ring-opacity))
    }

    .focus\\:ring-teal-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(13 148 136/var(--tw-ring-opacity))
    }

    .focus\\:ring-teal-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(15 118 110/var(--tw-ring-opacity))
    }

    .focus\\:ring-teal-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(17 94 89/var(--tw-ring-opacity))
    }

    .focus\\:ring-teal-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(19 78 74/var(--tw-ring-opacity))
    }

    .focus\\:ring-violet-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(237 233 254/var(--tw-ring-opacity))
    }

    .focus\\:ring-violet-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(221 214 254/var(--tw-ring-opacity))
    }

    .focus\\:ring-violet-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(196 181 253/var(--tw-ring-opacity))
    }

    .focus\\:ring-violet-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(167 139 250/var(--tw-ring-opacity))
    }

    .focus\\:ring-violet-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 243 255/var(--tw-ring-opacity))
    }

    .focus\\:ring-violet-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(139 92 246/var(--tw-ring-opacity))
    }

    .focus\\:ring-violet-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(124 58 237/var(--tw-ring-opacity))
    }

    .focus\\:ring-violet-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(109 40 217/var(--tw-ring-opacity))
    }

    .focus\\:ring-violet-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(91 33 182/var(--tw-ring-opacity))
    }

    .focus\\:ring-violet-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(76 29 149/var(--tw-ring-opacity))
    }

    .focus\\:ring-yellow-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 249 195/var(--tw-ring-opacity))
    }

    .focus\\:ring-yellow-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 240 138/var(--tw-ring-opacity))
    }

    .focus\\:ring-yellow-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 224 71/var(--tw-ring-opacity))
    }

    .focus\\:ring-yellow-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 204 21/var(--tw-ring-opacity))
    }

    .focus\\:ring-yellow-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 252 232/var(--tw-ring-opacity))
    }

    .focus\\:ring-yellow-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(234 179 8/var(--tw-ring-opacity))
    }

    .focus\\:ring-yellow-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(202 138 4/var(--tw-ring-opacity))
    }

    .focus\\:ring-yellow-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(161 98 7/var(--tw-ring-opacity))
    }

    .focus\\:ring-yellow-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(133 77 14/var(--tw-ring-opacity))
    }

    .focus\\:ring-yellow-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(113 63 18/var(--tw-ring-opacity))
    }

    .focus\\:ring-zinc-100:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 244 245/var(--tw-ring-opacity))
    }

    .focus\\:ring-zinc-200:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(228 228 231/var(--tw-ring-opacity))
    }

    .focus\\:ring-zinc-300:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(212 212 216/var(--tw-ring-opacity))
    }

    .focus\\:ring-zinc-400:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(161 161 170/var(--tw-ring-opacity))
    }

    .focus\\:ring-zinc-50:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 250/var(--tw-ring-opacity))
    }

    .focus\\:ring-zinc-500:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(113 113 122/var(--tw-ring-opacity))
    }

    .focus\\:ring-zinc-600:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(82 82 91/var(--tw-ring-opacity))
    }

    .focus\\:ring-zinc-700:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(63 63 70/var(--tw-ring-opacity))
    }

    .focus\\:ring-zinc-800:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(39 39 42/var(--tw-ring-opacity))
    }

    .focus\\:ring-zinc-900:focus {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(24 24 27/var(--tw-ring-opacity))
    }

    .active\\:m-0:active {
      margin: 0
    }

    .active\\:m-0\\.5:active {
      margin: .125rem
    }

    .active\\:m-1:active {
      margin: .25rem
    }

    .active\\:m-1\\.5:active {
      margin: .375rem
    }

    .active\\:m-14:active {
      margin: 3.5rem
    }

    .active\\:m-16:active {
      margin: 4rem
    }

    .active\\:m-2:active {
      margin: .5rem
    }

    .active\\:m-2\\.5:active {
      margin: .625rem
    }

    .active\\:m-20:active {
      margin: 5rem
    }

    .active\\:m-24:active {
      margin: 6rem
    }

    .active\\:m-28:active {
      margin: 7rem
    }

    .active\\:m-3:active {
      margin: .75rem
    }

    .active\\:m-3\\.5:active {
      margin: .875rem
    }

    .active\\:m-32:active {
      margin: 8rem
    }

    .active\\:m-36:active {
      margin: 9rem
    }

    .active\\:m-40:active {
      margin: 10rem
    }

    .active\\:m-44:active {
      margin: 11rem
    }

    .active\\:m-48:active {
      margin: 12rem
    }

    .active\\:m-52:active {
      margin: 13rem
    }

    .active\\:m-56:active {
      margin: 14rem
    }

    .active\\:m-60:active {
      margin: 15rem
    }

    .active\\:m-64:active {
      margin: 16rem
    }

    .active\\:m-72:active {
      margin: 18rem
    }

    .active\\:m-80:active {
      margin: 20rem
    }

    .active\\:m-96:active {
      margin: 24rem
    }

    .active\\:m-auto:active {
      margin: auto
    }

    .active\\:m-px:active {
      margin: 1px
    }

    .active\\:mx-0:active {
      margin-left: 0;
      margin-right: 0
    }

    .active\\:mx-0\\.5:active {
      margin-left: .125rem;
      margin-right: .125rem
    }

    .active\\:mx-1:active {
      margin-left: .25rem;
      margin-right: .25rem
    }

    .active\\:mx-1\\.5:active {
      margin-left: .375rem;
      margin-right: .375rem
    }

    .active\\:mx-14:active {
      margin-left: 3.5rem;
      margin-right: 3.5rem
    }

    .active\\:mx-16:active {
      margin-left: 4rem;
      margin-right: 4rem
    }

    .active\\:mx-2:active {
      margin-left: .5rem;
      margin-right: .5rem
    }

    .active\\:mx-2\\.5:active {
      margin-left: .625rem;
      margin-right: .625rem
    }

    .active\\:mx-20:active {
      margin-left: 5rem;
      margin-right: 5rem
    }

    .active\\:mx-24:active {
      margin-left: 6rem;
      margin-right: 6rem
    }

    .active\\:mx-28:active {
      margin-left: 7rem;
      margin-right: 7rem
    }

    .active\\:mx-3:active {
      margin-left: .75rem;
      margin-right: .75rem
    }

    .active\\:mx-3\\.5:active {
      margin-left: .875rem;
      margin-right: .875rem
    }

    .active\\:mx-32:active {
      margin-left: 8rem;
      margin-right: 8rem
    }

    .active\\:mx-36:active {
      margin-left: 9rem;
      margin-right: 9rem
    }

    .active\\:mx-40:active {
      margin-left: 10rem;
      margin-right: 10rem
    }

    .active\\:mx-44:active {
      margin-left: 11rem;
      margin-right: 11rem
    }

    .active\\:mx-48:active {
      margin-left: 12rem;
      margin-right: 12rem
    }

    .active\\:mx-52:active {
      margin-left: 13rem;
      margin-right: 13rem
    }

    .active\\:mx-56:active {
      margin-left: 14rem;
      margin-right: 14rem
    }

    .active\\:mx-60:active {
      margin-left: 15rem;
      margin-right: 15rem
    }

    .active\\:mx-64:active {
      margin-left: 16rem;
      margin-right: 16rem
    }

    .active\\:mx-72:active {
      margin-left: 18rem;
      margin-right: 18rem
    }

    .active\\:mx-80:active {
      margin-left: 20rem;
      margin-right: 20rem
    }

    .active\\:mx-96:active {
      margin-left: 24rem;
      margin-right: 24rem
    }

    .active\\:mx-auto:active {
      margin-left: auto;
      margin-right: auto
    }

    .active\\:mx-px:active {
      margin-left: 1px;
      margin-right: 1px
    }

    .active\\:my-0:active {
      margin-top: 0;
      margin-bottom: 0
    }

    .active\\:my-0\\.5:active {
      margin-top: .125rem;
      margin-bottom: .125rem
    }

    .active\\:my-1:active {
      margin-top: .25rem;
      margin-bottom: .25rem
    }

    .active\\:my-1\\.5:active {
      margin-top: .375rem;
      margin-bottom: .375rem
    }

    .active\\:my-14:active {
      margin-top: 3.5rem;
      margin-bottom: 3.5rem
    }

    .active\\:my-16:active {
      margin-top: 4rem;
      margin-bottom: 4rem
    }

    .active\\:my-2:active {
      margin-top: .5rem;
      margin-bottom: .5rem
    }

    .active\\:my-2\\.5:active {
      margin-top: .625rem;
      margin-bottom: .625rem
    }

    .active\\:my-20:active {
      margin-top: 5rem;
      margin-bottom: 5rem
    }

    .active\\:my-24:active {
      margin-top: 6rem;
      margin-bottom: 6rem
    }

    .active\\:my-28:active {
      margin-top: 7rem;
      margin-bottom: 7rem
    }

    .active\\:my-3:active {
      margin-top: .75rem;
      margin-bottom: .75rem
    }

    .active\\:my-3\\.5:active {
      margin-top: .875rem;
      margin-bottom: .875rem
    }

    .active\\:my-32:active {
      margin-top: 8rem;
      margin-bottom: 8rem
    }

    .active\\:my-36:active {
      margin-top: 9rem;
      margin-bottom: 9rem
    }

    .active\\:my-40:active {
      margin-top: 10rem;
      margin-bottom: 10rem
    }

    .active\\:my-44:active {
      margin-top: 11rem;
      margin-bottom: 11rem
    }

    .active\\:my-48:active {
      margin-top: 12rem;
      margin-bottom: 12rem
    }

    .active\\:my-52:active {
      margin-top: 13rem;
      margin-bottom: 13rem
    }

    .active\\:my-56:active {
      margin-top: 14rem;
      margin-bottom: 14rem
    }

    .active\\:my-60:active {
      margin-top: 15rem;
      margin-bottom: 15rem
    }

    .active\\:my-64:active {
      margin-top: 16rem;
      margin-bottom: 16rem
    }

    .active\\:my-72:active {
      margin-top: 18rem;
      margin-bottom: 18rem
    }

    .active\\:my-80:active {
      margin-top: 20rem;
      margin-bottom: 20rem
    }

    .active\\:my-96:active {
      margin-top: 24rem;
      margin-bottom: 24rem
    }

    .active\\:my-auto:active {
      margin-top: auto;
      margin-bottom: auto
    }

    .active\\:my-px:active {
      margin-top: 1px;
      margin-bottom: 1px
    }

    .active\\:mb-0:active {
      margin-bottom: 0
    }

    .active\\:mb-0\\.5:active {
      margin-bottom: .125rem
    }

    .active\\:mb-1:active {
      margin-bottom: .25rem
    }

    .active\\:mb-1\\.5:active {
      margin-bottom: .375rem
    }

    .active\\:mb-14:active {
      margin-bottom: 3.5rem
    }

    .active\\:mb-16:active {
      margin-bottom: 4rem
    }

    .active\\:mb-2:active {
      margin-bottom: .5rem
    }

    .active\\:mb-2\\.5:active {
      margin-bottom: .625rem
    }

    .active\\:mb-20:active {
      margin-bottom: 5rem
    }

    .active\\:mb-24:active {
      margin-bottom: 6rem
    }

    .active\\:mb-28:active {
      margin-bottom: 7rem
    }

    .active\\:mb-3:active {
      margin-bottom: .75rem
    }

    .active\\:mb-3\\.5:active {
      margin-bottom: .875rem
    }

    .active\\:mb-32:active {
      margin-bottom: 8rem
    }

    .active\\:mb-36:active {
      margin-bottom: 9rem
    }

    .active\\:mb-40:active {
      margin-bottom: 10rem
    }

    .active\\:mb-44:active {
      margin-bottom: 11rem
    }

    .active\\:mb-48:active {
      margin-bottom: 12rem
    }

    .active\\:mb-52:active {
      margin-bottom: 13rem
    }

    .active\\:mb-56:active {
      margin-bottom: 14rem
    }

    .active\\:mb-60:active {
      margin-bottom: 15rem
    }

    .active\\:mb-64:active {
      margin-bottom: 16rem
    }

    .active\\:mb-72:active {
      margin-bottom: 18rem
    }

    .active\\:mb-80:active {
      margin-bottom: 20rem
    }

    .active\\:mb-96:active {
      margin-bottom: 24rem
    }

    .active\\:mb-auto:active {
      margin-bottom: auto
    }

    .active\\:mb-px:active {
      margin-bottom: 1px
    }

    .active\\:ml-0:active {
      margin-left: 0
    }

    .active\\:ml-0\\.5:active {
      margin-left: .125rem
    }

    .active\\:ml-1:active {
      margin-left: .25rem
    }

    .active\\:ml-1\\.5:active {
      margin-left: .375rem
    }

    .active\\:ml-14:active {
      margin-left: 3.5rem
    }

    .active\\:ml-16:active {
      margin-left: 4rem
    }

    .active\\:ml-2:active {
      margin-left: .5rem
    }

    .active\\:ml-2\\.5:active {
      margin-left: .625rem
    }

    .active\\:ml-20:active {
      margin-left: 5rem
    }

    .active\\:ml-24:active {
      margin-left: 6rem
    }

    .active\\:ml-28:active {
      margin-left: 7rem
    }

    .active\\:ml-3:active {
      margin-left: .75rem
    }

    .active\\:ml-3\\.5:active {
      margin-left: .875rem
    }

    .active\\:ml-32:active {
      margin-left: 8rem
    }

    .active\\:ml-36:active {
      margin-left: 9rem
    }

    .active\\:ml-40:active {
      margin-left: 10rem
    }

    .active\\:ml-44:active {
      margin-left: 11rem
    }

    .active\\:ml-48:active {
      margin-left: 12rem
    }

    .active\\:ml-52:active {
      margin-left: 13rem
    }

    .active\\:ml-56:active {
      margin-left: 14rem
    }

    .active\\:ml-60:active {
      margin-left: 15rem
    }

    .active\\:ml-64:active {
      margin-left: 16rem
    }

    .active\\:ml-72:active {
      margin-left: 18rem
    }

    .active\\:ml-80:active {
      margin-left: 20rem
    }

    .active\\:ml-96:active {
      margin-left: 24rem
    }

    .active\\:ml-auto:active {
      margin-left: auto
    }

    .active\\:ml-px:active {
      margin-left: 1px
    }

    .active\\:mr-0:active {
      margin-right: 0
    }

    .active\\:mr-0\\.5:active {
      margin-right: .125rem
    }

    .active\\:mr-1:active {
      margin-right: .25rem
    }

    .active\\:mr-1\\.5:active {
      margin-right: .375rem
    }

    .active\\:mr-14:active {
      margin-right: 3.5rem
    }

    .active\\:mr-16:active {
      margin-right: 4rem
    }

    .active\\:mr-2:active {
      margin-right: .5rem
    }

    .active\\:mr-2\\.5:active {
      margin-right: .625rem
    }

    .active\\:mr-20:active {
      margin-right: 5rem
    }

    .active\\:mr-24:active {
      margin-right: 6rem
    }

    .active\\:mr-28:active {
      margin-right: 7rem
    }

    .active\\:mr-3:active {
      margin-right: .75rem
    }

    .active\\:mr-3\\.5:active {
      margin-right: .875rem
    }

    .active\\:mr-32:active {
      margin-right: 8rem
    }

    .active\\:mr-36:active {
      margin-right: 9rem
    }

    .active\\:mr-40:active {
      margin-right: 10rem
    }

    .active\\:mr-44:active {
      margin-right: 11rem
    }

    .active\\:mr-48:active {
      margin-right: 12rem
    }

    .active\\:mr-52:active {
      margin-right: 13rem
    }

    .active\\:mr-56:active {
      margin-right: 14rem
    }

    .active\\:mr-60:active {
      margin-right: 15rem
    }

    .active\\:mr-64:active {
      margin-right: 16rem
    }

    .active\\:mr-72:active {
      margin-right: 18rem
    }

    .active\\:mr-80:active {
      margin-right: 20rem
    }

    .active\\:mr-96:active {
      margin-right: 24rem
    }

    .active\\:mr-auto:active {
      margin-right: auto
    }

    .active\\:mr-px:active {
      margin-right: 1px
    }

    .active\\:mt-0:active {
      margin-top: 0
    }

    .active\\:mt-0\\.5:active {
      margin-top: .125rem
    }

    .active\\:mt-1:active {
      margin-top: .25rem
    }

    .active\\:mt-1\\.5:active {
      margin-top: .375rem
    }

    .active\\:mt-14:active {
      margin-top: 3.5rem
    }

    .active\\:mt-16:active {
      margin-top: 4rem
    }

    .active\\:mt-2:active {
      margin-top: .5rem
    }

    .active\\:mt-2\\.5:active {
      margin-top: .625rem
    }

    .active\\:mt-20:active {
      margin-top: 5rem
    }

    .active\\:mt-24:active {
      margin-top: 6rem
    }

    .active\\:mt-28:active {
      margin-top: 7rem
    }

    .active\\:mt-3:active {
      margin-top: .75rem
    }

    .active\\:mt-3\\.5:active {
      margin-top: .875rem
    }

    .active\\:mt-32:active {
      margin-top: 8rem
    }

    .active\\:mt-36:active {
      margin-top: 9rem
    }

    .active\\:mt-40:active {
      margin-top: 10rem
    }

    .active\\:mt-44:active {
      margin-top: 11rem
    }

    .active\\:mt-48:active {
      margin-top: 12rem
    }

    .active\\:mt-52:active {
      margin-top: 13rem
    }

    .active\\:mt-56:active {
      margin-top: 14rem
    }

    .active\\:mt-60:active {
      margin-top: 15rem
    }

    .active\\:mt-64:active {
      margin-top: 16rem
    }

    .active\\:mt-72:active {
      margin-top: 18rem
    }

    .active\\:mt-80:active {
      margin-top: 20rem
    }

    .active\\:mt-96:active {
      margin-top: 24rem
    }

    .active\\:mt-auto:active {
      margin-top: auto
    }

    .active\\:mt-px:active {
      margin-top: 1px
    }

    .active\\:h-0:active {
      height: 0
    }

    .active\\:h-0\\.5:active {
      height: .125rem
    }

    .active\\:h-1:active {
      height: .25rem
    }

    .active\\:h-1\\.5:active {
      height: .375rem
    }

    .active\\:h-1\\/5:active {
      height: 20%
    }

    .active\\:h-14:active {
      height: 3.5rem
    }

    .active\\:h-16:active {
      height: 4rem
    }

    .active\\:h-2:active {
      height: .5rem
    }

    .active\\:h-2\\.5:active {
      height: .625rem
    }

    .active\\:h-2\\/5:active {
      height: 40%
    }

    .active\\:h-20:active {
      height: 5rem
    }

    .active\\:h-24:active {
      height: 6rem
    }

    .active\\:h-28:active {
      height: 7rem
    }

    .active\\:h-3:active {
      height: .75rem
    }

    .active\\:h-3\\.5:active {
      height: .875rem
    }

    .active\\:h-3\\/5:active {
      height: 60%
    }

    .active\\:h-32:active {
      height: 8rem
    }

    .active\\:h-36:active {
      height: 9rem
    }

    .active\\:h-40:active {
      height: 10rem
    }

    .active\\:h-44:active {
      height: 11rem
    }

    .active\\:h-48:active {
      height: 12rem
    }

    .active\\:h-52:active {
      height: 13rem
    }

    .active\\:h-56:active {
      height: 14rem
    }

    .active\\:h-60:active {
      height: 15rem
    }

    .active\\:h-64:active {
      height: 16rem
    }

    .active\\:h-72:active {
      height: 18rem
    }

    .active\\:h-80:active {
      height: 20rem
    }

    .active\\:h-96:active {
      height: 24rem
    }

    .active\\:h-auto:active {
      height: auto
    }

    .active\\:h-full:active {
      height: 100%
    }

    .active\\:h-max:active {
      height: -moz-max-content;
      height: max-content
    }

    .active\\:h-min:active {
      height: -moz-min-content;
      height: min-content
    }

    .active\\:h-px:active {
      height: 1px
    }

    .active\\:h-screen:active {
      height: 100vh
    }

    .active\\:max-h-0:active {
      max-height: 0
    }

    .active\\:max-h-0\\.5:active {
      max-height: .125rem
    }

    .active\\:max-h-1:active {
      max-height: .25rem
    }

    .active\\:max-h-1\\.5:active {
      max-height: .375rem
    }

    .active\\:max-h-14:active {
      max-height: 3.5rem
    }

    .active\\:max-h-16:active {
      max-height: 4rem
    }

    .active\\:max-h-2:active {
      max-height: .5rem
    }

    .active\\:max-h-2\\.5:active {
      max-height: .625rem
    }

    .active\\:max-h-20:active {
      max-height: 5rem
    }

    .active\\:max-h-24:active {
      max-height: 6rem
    }

    .active\\:max-h-28:active {
      max-height: 7rem
    }

    .active\\:max-h-3:active {
      max-height: .75rem
    }

    .active\\:max-h-3\\.5:active {
      max-height: .875rem
    }

    .active\\:max-h-32:active {
      max-height: 8rem
    }

    .active\\:max-h-36:active {
      max-height: 9rem
    }

    .active\\:max-h-40:active {
      max-height: 10rem
    }

    .active\\:max-h-44:active {
      max-height: 11rem
    }

    .active\\:max-h-48:active {
      max-height: 12rem
    }

    .active\\:max-h-52:active {
      max-height: 13rem
    }

    .active\\:max-h-56:active {
      max-height: 14rem
    }

    .active\\:max-h-60:active {
      max-height: 15rem
    }

    .active\\:max-h-64:active {
      max-height: 16rem
    }

    .active\\:max-h-72:active {
      max-height: 18rem
    }

    .active\\:max-h-80:active {
      max-height: 20rem
    }

    .active\\:max-h-96:active {
      max-height: 24rem
    }

    .active\\:max-h-full:active {
      max-height: 100%
    }

    .active\\:max-h-max:active {
      max-height: -moz-max-content;
      max-height: max-content
    }

    .active\\:max-h-min:active {
      max-height: -moz-min-content;
      max-height: min-content
    }

    .active\\:max-h-px:active {
      max-height: 1px
    }

    .active\\:max-h-screen:active {
      max-height: 100vh
    }

    .active\\:min-h-0:active {
      min-height: 0
    }

    .active\\:min-h-full:active {
      min-height: 100%
    }

    .active\\:min-h-max:active {
      min-height: -moz-max-content;
      min-height: max-content
    }

    .active\\:min-h-min:active {
      min-height: -moz-min-content;
      min-height: min-content
    }

    .active\\:min-h-screen:active {
      min-height: 100vh
    }

    .active\\:w-0:active {
      width: 0
    }

    .active\\:w-0\\.5:active {
      width: .125rem
    }

    .active\\:w-1:active {
      width: .25rem
    }

    .active\\:w-1\\.5:active {
      width: .375rem
    }

    .active\\:w-1\\/5:active {
      width: 20%
    }

    .active\\:w-14:active {
      width: 3.5rem
    }

    .active\\:w-16:active {
      width: 4rem
    }

    .active\\:w-2:active {
      width: .5rem
    }

    .active\\:w-2\\.5:active {
      width: .625rem
    }

    .active\\:w-2\\/5:active {
      width: 40%
    }

    .active\\:w-20:active {
      width: 5rem
    }

    .active\\:w-24:active {
      width: 6rem
    }

    .active\\:w-28:active {
      width: 7rem
    }

    .active\\:w-3:active {
      width: .75rem
    }

    .active\\:w-3\\.5:active {
      width: .875rem
    }

    .active\\:w-3\\/5:active {
      width: 60%
    }

    .active\\:w-32:active {
      width: 8rem
    }

    .active\\:w-36:active {
      width: 9rem
    }

    .active\\:w-40:active {
      width: 10rem
    }

    .active\\:w-44:active {
      width: 11rem
    }

    .active\\:w-48:active {
      width: 12rem
    }

    .active\\:w-52:active {
      width: 13rem
    }

    .active\\:w-56:active {
      width: 14rem
    }

    .active\\:w-60:active {
      width: 15rem
    }

    .active\\:w-64:active {
      width: 16rem
    }

    .active\\:w-72:active {
      width: 18rem
    }

    .active\\:w-80:active {
      width: 20rem
    }

    .active\\:w-96:active {
      width: 24rem
    }

    .active\\:w-auto:active {
      width: auto
    }

    .active\\:w-full:active {
      width: 100%
    }

    .active\\:w-max:active {
      width: -moz-max-content;
      width: max-content
    }

    .active\\:w-min:active {
      width: -moz-min-content;
      width: min-content
    }

    .active\\:w-px:active {
      width: 1px
    }

    .active\\:w-screen:active {
      width: 100vw
    }

    .active\\:min-w-0:active {
      min-width: 0
    }

    .active\\:min-w-full:active {
      min-width: 100%
    }

    .active\\:min-w-max:active {
      min-width: -moz-max-content;
      min-width: max-content
    }

    .active\\:min-w-min:active {
      min-width: -moz-min-content;
      min-width: min-content
    }

    .active\\:max-w-0:active {
      max-width: 0
    }

    .active\\:max-w-full:active {
      max-width: 100%
    }

    .active\\:max-w-max:active {
      max-width: -moz-max-content;
      max-width: max-content
    }

    .active\\:max-w-min:active {
      max-width: -moz-min-content;
      max-width: min-content
    }

    .active\\:border-amber-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(254 243 199/var(--tw-border-opacity))
    }

    .active\\:border-amber-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(253 230 138/var(--tw-border-opacity))
    }

    .active\\:border-amber-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(252 211 77/var(--tw-border-opacity))
    }

    .active\\:border-amber-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(251 191 36/var(--tw-border-opacity))
    }

    .active\\:border-amber-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(255 251 235/var(--tw-border-opacity))
    }

    .active\\:border-amber-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(245 158 11/var(--tw-border-opacity))
    }

    .active\\:border-amber-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(217 119 6/var(--tw-border-opacity))
    }

    .active\\:border-amber-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(180 83 9/var(--tw-border-opacity))
    }

    .active\\:border-amber-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(146 64 14/var(--tw-border-opacity))
    }

    .active\\:border-amber-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(120 53 15/var(--tw-border-opacity))
    }

    .active\\:border-blue-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(219 234 254/var(--tw-border-opacity))
    }

    .active\\:border-blue-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(191 219 254/var(--tw-border-opacity))
    }

    .active\\:border-blue-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(147 197 253/var(--tw-border-opacity))
    }

    .active\\:border-blue-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(96 165 250/var(--tw-border-opacity))
    }

    .active\\:border-blue-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(239 246 255/var(--tw-border-opacity))
    }

    .active\\:border-blue-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(59 130 246/var(--tw-border-opacity))
    }

    .active\\:border-blue-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(37 99 235/var(--tw-border-opacity))
    }

    .active\\:border-blue-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(29 78 216/var(--tw-border-opacity))
    }

    .active\\:border-blue-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(30 64 175/var(--tw-border-opacity))
    }

    .active\\:border-blue-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(30 58 138/var(--tw-border-opacity))
    }

    .active\\:border-cyan-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(207 250 254/var(--tw-border-opacity))
    }

    .active\\:border-cyan-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(165 243 252/var(--tw-border-opacity))
    }

    .active\\:border-cyan-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(103 232 249/var(--tw-border-opacity))
    }

    .active\\:border-cyan-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(34 211 238/var(--tw-border-opacity))
    }

    .active\\:border-cyan-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(236 254 255/var(--tw-border-opacity))
    }

    .active\\:border-cyan-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(6 182 212/var(--tw-border-opacity))
    }

    .active\\:border-cyan-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(8 145 178/var(--tw-border-opacity))
    }

    .active\\:border-cyan-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(14 116 144/var(--tw-border-opacity))
    }

    .active\\:border-cyan-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(21 94 117/var(--tw-border-opacity))
    }

    .active\\:border-cyan-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(22 78 99/var(--tw-border-opacity))
    }

    .active\\:border-emerald-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(209 250 229/var(--tw-border-opacity))
    }

    .active\\:border-emerald-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(167 243 208/var(--tw-border-opacity))
    }

    .active\\:border-emerald-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(110 231 183/var(--tw-border-opacity))
    }

    .active\\:border-emerald-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(52 211 153/var(--tw-border-opacity))
    }

    .active\\:border-emerald-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(236 253 245/var(--tw-border-opacity))
    }

    .active\\:border-emerald-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(16 185 129/var(--tw-border-opacity))
    }

    .active\\:border-emerald-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(5 150 105/var(--tw-border-opacity))
    }

    .active\\:border-emerald-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(4 120 87/var(--tw-border-opacity))
    }

    .active\\:border-emerald-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(6 95 70/var(--tw-border-opacity))
    }

    .active\\:border-emerald-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(6 78 59/var(--tw-border-opacity))
    }

    .active\\:border-fuchsia-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(250 232 255/var(--tw-border-opacity))
    }

    .active\\:border-fuchsia-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(245 208 254/var(--tw-border-opacity))
    }

    .active\\:border-fuchsia-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(240 171 252/var(--tw-border-opacity))
    }

    .active\\:border-fuchsia-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(232 121 249/var(--tw-border-opacity))
    }

    .active\\:border-fuchsia-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(253 244 255/var(--tw-border-opacity))
    }

    .active\\:border-fuchsia-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(217 70 239/var(--tw-border-opacity))
    }

    .active\\:border-fuchsia-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(192 38 211/var(--tw-border-opacity))
    }

    .active\\:border-fuchsia-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(162 28 175/var(--tw-border-opacity))
    }

    .active\\:border-fuchsia-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(134 25 143/var(--tw-border-opacity))
    }

    .active\\:border-fuchsia-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(112 26 117/var(--tw-border-opacity))
    }

    .active\\:border-gray-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(243 244 246/var(--tw-border-opacity))
    }

    .active\\:border-gray-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(229 231 235/var(--tw-border-opacity))
    }

    .active\\:border-gray-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(209 213 219/var(--tw-border-opacity))
    }

    .active\\:border-gray-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(156 163 175/var(--tw-border-opacity))
    }

    .active\\:border-gray-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(249 250 251/var(--tw-border-opacity))
    }

    .active\\:border-gray-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(107 114 128/var(--tw-border-opacity))
    }

    .active\\:border-gray-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(75 85 99/var(--tw-border-opacity))
    }

    .active\\:border-gray-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(55 65 81/var(--tw-border-opacity))
    }

    .active\\:border-gray-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(31 41 55/var(--tw-border-opacity))
    }

    .active\\:border-gray-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(17 24 39/var(--tw-border-opacity))
    }

    .active\\:border-green-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(220 252 231/var(--tw-border-opacity))
    }

    .active\\:border-green-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(187 247 208/var(--tw-border-opacity))
    }

    .active\\:border-green-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(134 239 172/var(--tw-border-opacity))
    }

    .active\\:border-green-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(74 222 128/var(--tw-border-opacity))
    }

    .active\\:border-green-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(240 253 244/var(--tw-border-opacity))
    }

    .active\\:border-green-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(34 197 94/var(--tw-border-opacity))
    }

    .active\\:border-green-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(22 163 74/var(--tw-border-opacity))
    }

    .active\\:border-green-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(21 128 61/var(--tw-border-opacity))
    }

    .active\\:border-green-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(22 101 52/var(--tw-border-opacity))
    }

    .active\\:border-green-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(20 83 45/var(--tw-border-opacity))
    }

    .active\\:border-indigo-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(224 231 255/var(--tw-border-opacity))
    }

    .active\\:border-indigo-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(199 210 254/var(--tw-border-opacity))
    }

    .active\\:border-indigo-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(165 180 252/var(--tw-border-opacity))
    }

    .active\\:border-indigo-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(129 140 248/var(--tw-border-opacity))
    }

    .active\\:border-indigo-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(238 242 255/var(--tw-border-opacity))
    }

    .active\\:border-indigo-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(99 102 241/var(--tw-border-opacity))
    }

    .active\\:border-indigo-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(79 70 229/var(--tw-border-opacity))
    }

    .active\\:border-indigo-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(67 56 202/var(--tw-border-opacity))
    }

    .active\\:border-indigo-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(55 48 163/var(--tw-border-opacity))
    }

    .active\\:border-indigo-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(49 46 129/var(--tw-border-opacity))
    }

    .active\\:border-lime-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(236 252 203/var(--tw-border-opacity))
    }

    .active\\:border-lime-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(217 249 157/var(--tw-border-opacity))
    }

    .active\\:border-lime-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(190 242 100/var(--tw-border-opacity))
    }

    .active\\:border-lime-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(163 230 53/var(--tw-border-opacity))
    }

    .active\\:border-lime-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(247 254 231/var(--tw-border-opacity))
    }

    .active\\:border-lime-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(132 204 22/var(--tw-border-opacity))
    }

    .active\\:border-lime-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(101 163 13/var(--tw-border-opacity))
    }

    .active\\:border-lime-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(77 124 15/var(--tw-border-opacity))
    }

    .active\\:border-lime-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(63 98 18/var(--tw-border-opacity))
    }

    .active\\:border-lime-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(54 83 20/var(--tw-border-opacity))
    }

    .active\\:border-neutral-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(245 245 245/var(--tw-border-opacity))
    }

    .active\\:border-neutral-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(229 229 229/var(--tw-border-opacity))
    }

    .active\\:border-neutral-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(212 212 212/var(--tw-border-opacity))
    }

    .active\\:border-neutral-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(163 163 163/var(--tw-border-opacity))
    }

    .active\\:border-neutral-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 250/var(--tw-border-opacity))
    }

    .active\\:border-neutral-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(115 115 115/var(--tw-border-opacity))
    }

    .active\\:border-neutral-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(82 82 82/var(--tw-border-opacity))
    }

    .active\\:border-neutral-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64/var(--tw-border-opacity))
    }

    .active\\:border-neutral-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(38 38 38/var(--tw-border-opacity))
    }

    .active\\:border-neutral-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(23 23 23/var(--tw-border-opacity))
    }

    .active\\:border-orange-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(255 237 213/var(--tw-border-opacity))
    }

    .active\\:border-orange-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(254 215 170/var(--tw-border-opacity))
    }

    .active\\:border-orange-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(253 186 116/var(--tw-border-opacity))
    }

    .active\\:border-orange-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(251 146 60/var(--tw-border-opacity))
    }

    .active\\:border-orange-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(255 247 237/var(--tw-border-opacity))
    }

    .active\\:border-orange-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(249 115 22/var(--tw-border-opacity))
    }

    .active\\:border-orange-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(234 88 12/var(--tw-border-opacity))
    }

    .active\\:border-orange-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(194 65 12/var(--tw-border-opacity))
    }

    .active\\:border-orange-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(154 52 18/var(--tw-border-opacity))
    }

    .active\\:border-orange-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(124 45 18/var(--tw-border-opacity))
    }

    .active\\:border-pink-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(252 231 243/var(--tw-border-opacity))
    }

    .active\\:border-pink-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(251 207 232/var(--tw-border-opacity))
    }

    .active\\:border-pink-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(249 168 212/var(--tw-border-opacity))
    }

    .active\\:border-pink-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(244 114 182/var(--tw-border-opacity))
    }

    .active\\:border-pink-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(253 242 248/var(--tw-border-opacity))
    }

    .active\\:border-pink-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(236 72 153/var(--tw-border-opacity))
    }

    .active\\:border-pink-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(219 39 119/var(--tw-border-opacity))
    }

    .active\\:border-pink-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(190 24 93/var(--tw-border-opacity))
    }

    .active\\:border-pink-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(157 23 77/var(--tw-border-opacity))
    }

    .active\\:border-pink-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(131 24 67/var(--tw-border-opacity))
    }

    .active\\:border-purple-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(243 232 255/var(--tw-border-opacity))
    }

    .active\\:border-purple-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(233 213 255/var(--tw-border-opacity))
    }

    .active\\:border-purple-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(216 180 254/var(--tw-border-opacity))
    }

    .active\\:border-purple-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(192 132 252/var(--tw-border-opacity))
    }

    .active\\:border-purple-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(250 245 255/var(--tw-border-opacity))
    }

    .active\\:border-purple-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(168 85 247/var(--tw-border-opacity))
    }

    .active\\:border-purple-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(147 51 234/var(--tw-border-opacity))
    }

    .active\\:border-purple-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(126 34 206/var(--tw-border-opacity))
    }

    .active\\:border-purple-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(107 33 168/var(--tw-border-opacity))
    }

    .active\\:border-purple-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(88 28 135/var(--tw-border-opacity))
    }

    .active\\:border-red-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(254 226 226/var(--tw-border-opacity))
    }

    .active\\:border-red-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(254 202 202/var(--tw-border-opacity))
    }

    .active\\:border-red-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(252 165 165/var(--tw-border-opacity))
    }

    .active\\:border-red-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(248 113 113/var(--tw-border-opacity))
    }

    .active\\:border-red-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(254 242 242/var(--tw-border-opacity))
    }

    .active\\:border-red-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(239 68 68/var(--tw-border-opacity))
    }

    .active\\:border-red-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(220 38 38/var(--tw-border-opacity))
    }

    .active\\:border-red-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(185 28 28/var(--tw-border-opacity))
    }

    .active\\:border-red-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(153 27 27/var(--tw-border-opacity))
    }

    .active\\:border-red-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(127 29 29/var(--tw-border-opacity))
    }

    .active\\:border-rose-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(255 228 230/var(--tw-border-opacity))
    }

    .active\\:border-rose-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(254 205 211/var(--tw-border-opacity))
    }

    .active\\:border-rose-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(253 164 175/var(--tw-border-opacity))
    }

    .active\\:border-rose-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(251 113 133/var(--tw-border-opacity))
    }

    .active\\:border-rose-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(255 241 242/var(--tw-border-opacity))
    }

    .active\\:border-rose-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(244 63 94/var(--tw-border-opacity))
    }

    .active\\:border-rose-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(225 29 72/var(--tw-border-opacity))
    }

    .active\\:border-rose-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(190 18 60/var(--tw-border-opacity))
    }

    .active\\:border-rose-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(159 18 57/var(--tw-border-opacity))
    }

    .active\\:border-rose-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(136 19 55/var(--tw-border-opacity))
    }

    .active\\:border-sky-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(224 242 254/var(--tw-border-opacity))
    }

    .active\\:border-sky-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(186 230 253/var(--tw-border-opacity))
    }

    .active\\:border-sky-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(125 211 252/var(--tw-border-opacity))
    }

    .active\\:border-sky-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(56 189 248/var(--tw-border-opacity))
    }

    .active\\:border-sky-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(240 249 255/var(--tw-border-opacity))
    }

    .active\\:border-sky-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(14 165 233/var(--tw-border-opacity))
    }

    .active\\:border-sky-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(2 132 199/var(--tw-border-opacity))
    }

    .active\\:border-sky-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(3 105 161/var(--tw-border-opacity))
    }

    .active\\:border-sky-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(7 89 133/var(--tw-border-opacity))
    }

    .active\\:border-sky-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(12 74 110/var(--tw-border-opacity))
    }

    .active\\:border-slate-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(241 245 249/var(--tw-border-opacity))
    }

    .active\\:border-slate-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(226 232 240/var(--tw-border-opacity))
    }

    .active\\:border-slate-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(203 213 225/var(--tw-border-opacity))
    }

    .active\\:border-slate-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(148 163 184/var(--tw-border-opacity))
    }

    .active\\:border-slate-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(248 250 252/var(--tw-border-opacity))
    }

    .active\\:border-slate-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(100 116 139/var(--tw-border-opacity))
    }

    .active\\:border-slate-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(71 85 105/var(--tw-border-opacity))
    }

    .active\\:border-slate-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(51 65 85/var(--tw-border-opacity))
    }

    .active\\:border-slate-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(30 41 59/var(--tw-border-opacity))
    }

    .active\\:border-slate-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(15 23 42/var(--tw-border-opacity))
    }

    .active\\:border-stone-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(245 245 244/var(--tw-border-opacity))
    }

    .active\\:border-stone-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(231 229 228/var(--tw-border-opacity))
    }

    .active\\:border-stone-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(214 211 209/var(--tw-border-opacity))
    }

    .active\\:border-stone-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(168 162 158/var(--tw-border-opacity))
    }

    .active\\:border-stone-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 249/var(--tw-border-opacity))
    }

    .active\\:border-stone-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(120 113 108/var(--tw-border-opacity))
    }

    .active\\:border-stone-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(87 83 78/var(--tw-border-opacity))
    }

    .active\\:border-stone-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(68 64 60/var(--tw-border-opacity))
    }

    .active\\:border-stone-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(41 37 36/var(--tw-border-opacity))
    }

    .active\\:border-stone-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(28 25 23/var(--tw-border-opacity))
    }

    .active\\:border-teal-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(204 251 241/var(--tw-border-opacity))
    }

    .active\\:border-teal-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(153 246 228/var(--tw-border-opacity))
    }

    .active\\:border-teal-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(94 234 212/var(--tw-border-opacity))
    }

    .active\\:border-teal-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(45 212 191/var(--tw-border-opacity))
    }

    .active\\:border-teal-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(240 253 250/var(--tw-border-opacity))
    }

    .active\\:border-teal-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(20 184 166/var(--tw-border-opacity))
    }

    .active\\:border-teal-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(13 148 136/var(--tw-border-opacity))
    }

    .active\\:border-teal-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(15 118 110/var(--tw-border-opacity))
    }

    .active\\:border-teal-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(17 94 89/var(--tw-border-opacity))
    }

    .active\\:border-teal-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(19 78 74/var(--tw-border-opacity))
    }

    .active\\:border-violet-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(237 233 254/var(--tw-border-opacity))
    }

    .active\\:border-violet-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(221 214 254/var(--tw-border-opacity))
    }

    .active\\:border-violet-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(196 181 253/var(--tw-border-opacity))
    }

    .active\\:border-violet-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(167 139 250/var(--tw-border-opacity))
    }

    .active\\:border-violet-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(245 243 255/var(--tw-border-opacity))
    }

    .active\\:border-violet-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(139 92 246/var(--tw-border-opacity))
    }

    .active\\:border-violet-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(124 58 237/var(--tw-border-opacity))
    }

    .active\\:border-violet-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(109 40 217/var(--tw-border-opacity))
    }

    .active\\:border-violet-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(91 33 182/var(--tw-border-opacity))
    }

    .active\\:border-violet-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(76 29 149/var(--tw-border-opacity))
    }

    .active\\:border-yellow-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(254 249 195/var(--tw-border-opacity))
    }

    .active\\:border-yellow-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(254 240 138/var(--tw-border-opacity))
    }

    .active\\:border-yellow-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(253 224 71/var(--tw-border-opacity))
    }

    .active\\:border-yellow-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(250 204 21/var(--tw-border-opacity))
    }

    .active\\:border-yellow-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(254 252 232/var(--tw-border-opacity))
    }

    .active\\:border-yellow-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(234 179 8/var(--tw-border-opacity))
    }

    .active\\:border-yellow-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(202 138 4/var(--tw-border-opacity))
    }

    .active\\:border-yellow-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(161 98 7/var(--tw-border-opacity))
    }

    .active\\:border-yellow-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(133 77 14/var(--tw-border-opacity))
    }

    .active\\:border-yellow-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(113 63 18/var(--tw-border-opacity))
    }

    .active\\:border-zinc-100:active {
      --tw-border-opacity: 1;
      border-color: rgb(244 244 245/var(--tw-border-opacity))
    }

    .active\\:border-zinc-200:active {
      --tw-border-opacity: 1;
      border-color: rgb(228 228 231/var(--tw-border-opacity))
    }

    .active\\:border-zinc-300:active {
      --tw-border-opacity: 1;
      border-color: rgb(212 212 216/var(--tw-border-opacity))
    }

    .active\\:border-zinc-400:active {
      --tw-border-opacity: 1;
      border-color: rgb(161 161 170/var(--tw-border-opacity))
    }

    .active\\:border-zinc-50:active {
      --tw-border-opacity: 1;
      border-color: rgb(250 250 250/var(--tw-border-opacity))
    }

    .active\\:border-zinc-500:active {
      --tw-border-opacity: 1;
      border-color: rgb(113 113 122/var(--tw-border-opacity))
    }

    .active\\:border-zinc-600:active {
      --tw-border-opacity: 1;
      border-color: rgb(82 82 91/var(--tw-border-opacity))
    }

    .active\\:border-zinc-700:active {
      --tw-border-opacity: 1;
      border-color: rgb(63 63 70/var(--tw-border-opacity))
    }

    .active\\:border-zinc-800:active {
      --tw-border-opacity: 1;
      border-color: rgb(39 39 42/var(--tw-border-opacity))
    }

    .active\\:border-zinc-900:active {
      --tw-border-opacity: 1;
      border-color: rgb(24 24 27/var(--tw-border-opacity))
    }

    .active\\:bg-amber-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(254 243 199/var(--tw-bg-opacity))
    }

    .active\\:bg-amber-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(253 230 138/var(--tw-bg-opacity))
    }

    .active\\:bg-amber-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(252 211 77/var(--tw-bg-opacity))
    }

    .active\\:bg-amber-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(251 191 36/var(--tw-bg-opacity))
    }

    .active\\:bg-amber-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(255 251 235/var(--tw-bg-opacity))
    }

    .active\\:bg-amber-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(245 158 11/var(--tw-bg-opacity))
    }

    .active\\:bg-amber-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(217 119 6/var(--tw-bg-opacity))
    }

    .active\\:bg-amber-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(180 83 9/var(--tw-bg-opacity))
    }

    .active\\:bg-amber-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(146 64 14/var(--tw-bg-opacity))
    }

    .active\\:bg-amber-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(120 53 15/var(--tw-bg-opacity))
    }

    .active\\:bg-blue-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(219 234 254/var(--tw-bg-opacity))
    }

    .active\\:bg-blue-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(191 219 254/var(--tw-bg-opacity))
    }

    .active\\:bg-blue-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(147 197 253/var(--tw-bg-opacity))
    }

    .active\\:bg-blue-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(96 165 250/var(--tw-bg-opacity))
    }

    .active\\:bg-blue-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(239 246 255/var(--tw-bg-opacity))
    }

    .active\\:bg-blue-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(59 130 246/var(--tw-bg-opacity))
    }

    .active\\:bg-blue-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(37 99 235/var(--tw-bg-opacity))
    }

    .active\\:bg-blue-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(29 78 216/var(--tw-bg-opacity))
    }

    .active\\:bg-blue-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(30 64 175/var(--tw-bg-opacity))
    }

    .active\\:bg-blue-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(30 58 138/var(--tw-bg-opacity))
    }

    .active\\:bg-cyan-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(207 250 254/var(--tw-bg-opacity))
    }

    .active\\:bg-cyan-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(165 243 252/var(--tw-bg-opacity))
    }

    .active\\:bg-cyan-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(103 232 249/var(--tw-bg-opacity))
    }

    .active\\:bg-cyan-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(34 211 238/var(--tw-bg-opacity))
    }

    .active\\:bg-cyan-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(236 254 255/var(--tw-bg-opacity))
    }

    .active\\:bg-cyan-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(6 182 212/var(--tw-bg-opacity))
    }

    .active\\:bg-cyan-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(8 145 178/var(--tw-bg-opacity))
    }

    .active\\:bg-cyan-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(14 116 144/var(--tw-bg-opacity))
    }

    .active\\:bg-cyan-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(21 94 117/var(--tw-bg-opacity))
    }

    .active\\:bg-cyan-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(22 78 99/var(--tw-bg-opacity))
    }

    .active\\:bg-emerald-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(209 250 229/var(--tw-bg-opacity))
    }

    .active\\:bg-emerald-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(167 243 208/var(--tw-bg-opacity))
    }

    .active\\:bg-emerald-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(110 231 183/var(--tw-bg-opacity))
    }

    .active\\:bg-emerald-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(52 211 153/var(--tw-bg-opacity))
    }

    .active\\:bg-emerald-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(236 253 245/var(--tw-bg-opacity))
    }

    .active\\:bg-emerald-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(16 185 129/var(--tw-bg-opacity))
    }

    .active\\:bg-emerald-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(5 150 105/var(--tw-bg-opacity))
    }

    .active\\:bg-emerald-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(4 120 87/var(--tw-bg-opacity))
    }

    .active\\:bg-emerald-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(6 95 70/var(--tw-bg-opacity))
    }

    .active\\:bg-emerald-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(6 78 59/var(--tw-bg-opacity))
    }

    .active\\:bg-fuchsia-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(250 232 255/var(--tw-bg-opacity))
    }

    .active\\:bg-fuchsia-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(245 208 254/var(--tw-bg-opacity))
    }

    .active\\:bg-fuchsia-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(240 171 252/var(--tw-bg-opacity))
    }

    .active\\:bg-fuchsia-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(232 121 249/var(--tw-bg-opacity))
    }

    .active\\:bg-fuchsia-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(253 244 255/var(--tw-bg-opacity))
    }

    .active\\:bg-fuchsia-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(217 70 239/var(--tw-bg-opacity))
    }

    .active\\:bg-fuchsia-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(192 38 211/var(--tw-bg-opacity))
    }

    .active\\:bg-fuchsia-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(162 28 175/var(--tw-bg-opacity))
    }

    .active\\:bg-fuchsia-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(134 25 143/var(--tw-bg-opacity))
    }

    .active\\:bg-fuchsia-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(112 26 117/var(--tw-bg-opacity))
    }

    .active\\:bg-gray-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(243 244 246/var(--tw-bg-opacity))
    }

    .active\\:bg-gray-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(229 231 235/var(--tw-bg-opacity))
    }

    .active\\:bg-gray-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(209 213 219/var(--tw-bg-opacity))
    }

    .active\\:bg-gray-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(156 163 175/var(--tw-bg-opacity))
    }

    .active\\:bg-gray-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(249 250 251/var(--tw-bg-opacity))
    }

    .active\\:bg-gray-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(107 114 128/var(--tw-bg-opacity))
    }

    .active\\:bg-gray-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(75 85 99/var(--tw-bg-opacity))
    }

    .active\\:bg-gray-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(55 65 81/var(--tw-bg-opacity))
    }

    .active\\:bg-gray-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(31 41 55/var(--tw-bg-opacity))
    }

    .active\\:bg-gray-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(17 24 39/var(--tw-bg-opacity))
    }

    .active\\:bg-green-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(220 252 231/var(--tw-bg-opacity))
    }

    .active\\:bg-green-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(187 247 208/var(--tw-bg-opacity))
    }

    .active\\:bg-green-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(134 239 172/var(--tw-bg-opacity))
    }

    .active\\:bg-green-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(74 222 128/var(--tw-bg-opacity))
    }

    .active\\:bg-green-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(240 253 244/var(--tw-bg-opacity))
    }

    .active\\:bg-green-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(34 197 94/var(--tw-bg-opacity))
    }

    .active\\:bg-green-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(22 163 74/var(--tw-bg-opacity))
    }

    .active\\:bg-green-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(21 128 61/var(--tw-bg-opacity))
    }

    .active\\:bg-green-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(22 101 52/var(--tw-bg-opacity))
    }

    .active\\:bg-green-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(20 83 45/var(--tw-bg-opacity))
    }

    .active\\:bg-indigo-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(224 231 255/var(--tw-bg-opacity))
    }

    .active\\:bg-indigo-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(199 210 254/var(--tw-bg-opacity))
    }

    .active\\:bg-indigo-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(165 180 252/var(--tw-bg-opacity))
    }

    .active\\:bg-indigo-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(129 140 248/var(--tw-bg-opacity))
    }

    .active\\:bg-indigo-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(238 242 255/var(--tw-bg-opacity))
    }

    .active\\:bg-indigo-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(99 102 241/var(--tw-bg-opacity))
    }

    .active\\:bg-indigo-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(79 70 229/var(--tw-bg-opacity))
    }

    .active\\:bg-indigo-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(67 56 202/var(--tw-bg-opacity))
    }

    .active\\:bg-indigo-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(55 48 163/var(--tw-bg-opacity))
    }

    .active\\:bg-indigo-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(49 46 129/var(--tw-bg-opacity))
    }

    .active\\:bg-lime-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(236 252 203/var(--tw-bg-opacity))
    }

    .active\\:bg-lime-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(217 249 157/var(--tw-bg-opacity))
    }

    .active\\:bg-lime-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(190 242 100/var(--tw-bg-opacity))
    }

    .active\\:bg-lime-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(163 230 53/var(--tw-bg-opacity))
    }

    .active\\:bg-lime-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(247 254 231/var(--tw-bg-opacity))
    }

    .active\\:bg-lime-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(132 204 22/var(--tw-bg-opacity))
    }

    .active\\:bg-lime-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(101 163 13/var(--tw-bg-opacity))
    }

    .active\\:bg-lime-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(77 124 15/var(--tw-bg-opacity))
    }

    .active\\:bg-lime-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(63 98 18/var(--tw-bg-opacity))
    }

    .active\\:bg-lime-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(54 83 20/var(--tw-bg-opacity))
    }

    .active\\:bg-neutral-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(245 245 245/var(--tw-bg-opacity))
    }

    .active\\:bg-neutral-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(229 229 229/var(--tw-bg-opacity))
    }

    .active\\:bg-neutral-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(212 212 212/var(--tw-bg-opacity))
    }

    .active\\:bg-neutral-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(163 163 163/var(--tw-bg-opacity))
    }

    .active\\:bg-neutral-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 250/var(--tw-bg-opacity))
    }

    .active\\:bg-neutral-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(115 115 115/var(--tw-bg-opacity))
    }

    .active\\:bg-neutral-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(82 82 82/var(--tw-bg-opacity))
    }

    .active\\:bg-neutral-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(64 64 64/var(--tw-bg-opacity))
    }

    .active\\:bg-neutral-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(38 38 38/var(--tw-bg-opacity))
    }

    .active\\:bg-neutral-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(23 23 23/var(--tw-bg-opacity))
    }

    .active\\:bg-orange-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(255 237 213/var(--tw-bg-opacity))
    }

    .active\\:bg-orange-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(254 215 170/var(--tw-bg-opacity))
    }

    .active\\:bg-orange-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(253 186 116/var(--tw-bg-opacity))
    }

    .active\\:bg-orange-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(251 146 60/var(--tw-bg-opacity))
    }

    .active\\:bg-orange-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(255 247 237/var(--tw-bg-opacity))
    }

    .active\\:bg-orange-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(249 115 22/var(--tw-bg-opacity))
    }

    .active\\:bg-orange-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(234 88 12/var(--tw-bg-opacity))
    }

    .active\\:bg-orange-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(194 65 12/var(--tw-bg-opacity))
    }

    .active\\:bg-orange-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(154 52 18/var(--tw-bg-opacity))
    }

    .active\\:bg-orange-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(124 45 18/var(--tw-bg-opacity))
    }

    .active\\:bg-pink-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(252 231 243/var(--tw-bg-opacity))
    }

    .active\\:bg-pink-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(251 207 232/var(--tw-bg-opacity))
    }

    .active\\:bg-pink-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(249 168 212/var(--tw-bg-opacity))
    }

    .active\\:bg-pink-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(244 114 182/var(--tw-bg-opacity))
    }

    .active\\:bg-pink-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(253 242 248/var(--tw-bg-opacity))
    }

    .active\\:bg-pink-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(236 72 153/var(--tw-bg-opacity))
    }

    .active\\:bg-pink-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(219 39 119/var(--tw-bg-opacity))
    }

    .active\\:bg-pink-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(190 24 93/var(--tw-bg-opacity))
    }

    .active\\:bg-pink-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(157 23 77/var(--tw-bg-opacity))
    }

    .active\\:bg-pink-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(131 24 67/var(--tw-bg-opacity))
    }

    .active\\:bg-purple-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(243 232 255/var(--tw-bg-opacity))
    }

    .active\\:bg-purple-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(233 213 255/var(--tw-bg-opacity))
    }

    .active\\:bg-purple-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(216 180 254/var(--tw-bg-opacity))
    }

    .active\\:bg-purple-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(192 132 252/var(--tw-bg-opacity))
    }

    .active\\:bg-purple-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(250 245 255/var(--tw-bg-opacity))
    }

    .active\\:bg-purple-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(168 85 247/var(--tw-bg-opacity))
    }

    .active\\:bg-purple-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(147 51 234/var(--tw-bg-opacity))
    }

    .active\\:bg-purple-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(126 34 206/var(--tw-bg-opacity))
    }

    .active\\:bg-purple-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(107 33 168/var(--tw-bg-opacity))
    }

    .active\\:bg-purple-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(88 28 135/var(--tw-bg-opacity))
    }

    .active\\:bg-red-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(254 226 226/var(--tw-bg-opacity))
    }

    .active\\:bg-red-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(254 202 202/var(--tw-bg-opacity))
    }

    .active\\:bg-red-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(252 165 165/var(--tw-bg-opacity))
    }

    .active\\:bg-red-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(248 113 113/var(--tw-bg-opacity))
    }

    .active\\:bg-red-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(254 242 242/var(--tw-bg-opacity))
    }

    .active\\:bg-red-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(239 68 68/var(--tw-bg-opacity))
    }

    .active\\:bg-red-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(220 38 38/var(--tw-bg-opacity))
    }

    .active\\:bg-red-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(185 28 28/var(--tw-bg-opacity))
    }

    .active\\:bg-red-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(153 27 27/var(--tw-bg-opacity))
    }

    .active\\:bg-red-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(127 29 29/var(--tw-bg-opacity))
    }

    .active\\:bg-rose-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(255 228 230/var(--tw-bg-opacity))
    }

    .active\\:bg-rose-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(254 205 211/var(--tw-bg-opacity))
    }

    .active\\:bg-rose-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(253 164 175/var(--tw-bg-opacity))
    }

    .active\\:bg-rose-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(251 113 133/var(--tw-bg-opacity))
    }

    .active\\:bg-rose-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(255 241 242/var(--tw-bg-opacity))
    }

    .active\\:bg-rose-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(244 63 94/var(--tw-bg-opacity))
    }

    .active\\:bg-rose-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(225 29 72/var(--tw-bg-opacity))
    }

    .active\\:bg-rose-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(190 18 60/var(--tw-bg-opacity))
    }

    .active\\:bg-rose-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(159 18 57/var(--tw-bg-opacity))
    }

    .active\\:bg-rose-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(136 19 55/var(--tw-bg-opacity))
    }

    .active\\:bg-sky-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(224 242 254/var(--tw-bg-opacity))
    }

    .active\\:bg-sky-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(186 230 253/var(--tw-bg-opacity))
    }

    .active\\:bg-sky-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(125 211 252/var(--tw-bg-opacity))
    }

    .active\\:bg-sky-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(56 189 248/var(--tw-bg-opacity))
    }

    .active\\:bg-sky-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(240 249 255/var(--tw-bg-opacity))
    }

    .active\\:bg-sky-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(14 165 233/var(--tw-bg-opacity))
    }

    .active\\:bg-sky-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(2 132 199/var(--tw-bg-opacity))
    }

    .active\\:bg-sky-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(3 105 161/var(--tw-bg-opacity))
    }

    .active\\:bg-sky-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(7 89 133/var(--tw-bg-opacity))
    }

    .active\\:bg-sky-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(12 74 110/var(--tw-bg-opacity))
    }

    .active\\:bg-slate-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(241 245 249/var(--tw-bg-opacity))
    }

    .active\\:bg-slate-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(226 232 240/var(--tw-bg-opacity))
    }

    .active\\:bg-slate-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(203 213 225/var(--tw-bg-opacity))
    }

    .active\\:bg-slate-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(148 163 184/var(--tw-bg-opacity))
    }

    .active\\:bg-slate-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(248 250 252/var(--tw-bg-opacity))
    }

    .active\\:bg-slate-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(100 116 139/var(--tw-bg-opacity))
    }

    .active\\:bg-slate-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(71 85 105/var(--tw-bg-opacity))
    }

    .active\\:bg-slate-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(51 65 85/var(--tw-bg-opacity))
    }

    .active\\:bg-slate-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(30 41 59/var(--tw-bg-opacity))
    }

    .active\\:bg-slate-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(15 23 42/var(--tw-bg-opacity))
    }

    .active\\:bg-stone-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(245 245 244/var(--tw-bg-opacity))
    }

    .active\\:bg-stone-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(231 229 228/var(--tw-bg-opacity))
    }

    .active\\:bg-stone-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(214 211 209/var(--tw-bg-opacity))
    }

    .active\\:bg-stone-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(168 162 158/var(--tw-bg-opacity))
    }

    .active\\:bg-stone-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 249/var(--tw-bg-opacity))
    }

    .active\\:bg-stone-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(120 113 108/var(--tw-bg-opacity))
    }

    .active\\:bg-stone-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(87 83 78/var(--tw-bg-opacity))
    }

    .active\\:bg-stone-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(68 64 60/var(--tw-bg-opacity))
    }

    .active\\:bg-stone-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(41 37 36/var(--tw-bg-opacity))
    }

    .active\\:bg-stone-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(28 25 23/var(--tw-bg-opacity))
    }

    .active\\:bg-teal-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(204 251 241/var(--tw-bg-opacity))
    }

    .active\\:bg-teal-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(153 246 228/var(--tw-bg-opacity))
    }

    .active\\:bg-teal-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(94 234 212/var(--tw-bg-opacity))
    }

    .active\\:bg-teal-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(45 212 191/var(--tw-bg-opacity))
    }

    .active\\:bg-teal-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(240 253 250/var(--tw-bg-opacity))
    }

    .active\\:bg-teal-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(20 184 166/var(--tw-bg-opacity))
    }

    .active\\:bg-teal-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(13 148 136/var(--tw-bg-opacity))
    }

    .active\\:bg-teal-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(15 118 110/var(--tw-bg-opacity))
    }

    .active\\:bg-teal-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(17 94 89/var(--tw-bg-opacity))
    }

    .active\\:bg-teal-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(19 78 74/var(--tw-bg-opacity))
    }

    .active\\:bg-violet-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(237 233 254/var(--tw-bg-opacity))
    }

    .active\\:bg-violet-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(221 214 254/var(--tw-bg-opacity))
    }

    .active\\:bg-violet-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(196 181 253/var(--tw-bg-opacity))
    }

    .active\\:bg-violet-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(167 139 250/var(--tw-bg-opacity))
    }

    .active\\:bg-violet-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(245 243 255/var(--tw-bg-opacity))
    }

    .active\\:bg-violet-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(139 92 246/var(--tw-bg-opacity))
    }

    .active\\:bg-violet-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(124 58 237/var(--tw-bg-opacity))
    }

    .active\\:bg-violet-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(109 40 217/var(--tw-bg-opacity))
    }

    .active\\:bg-violet-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(91 33 182/var(--tw-bg-opacity))
    }

    .active\\:bg-violet-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(76 29 149/var(--tw-bg-opacity))
    }

    .active\\:bg-yellow-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(254 249 195/var(--tw-bg-opacity))
    }

    .active\\:bg-yellow-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(254 240 138/var(--tw-bg-opacity))
    }

    .active\\:bg-yellow-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(253 224 71/var(--tw-bg-opacity))
    }

    .active\\:bg-yellow-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(250 204 21/var(--tw-bg-opacity))
    }

    .active\\:bg-yellow-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(254 252 232/var(--tw-bg-opacity))
    }

    .active\\:bg-yellow-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(234 179 8/var(--tw-bg-opacity))
    }

    .active\\:bg-yellow-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(202 138 4/var(--tw-bg-opacity))
    }

    .active\\:bg-yellow-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(161 98 7/var(--tw-bg-opacity))
    }

    .active\\:bg-yellow-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(133 77 14/var(--tw-bg-opacity))
    }

    .active\\:bg-yellow-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(113 63 18/var(--tw-bg-opacity))
    }

    .active\\:bg-zinc-100:active {
      --tw-bg-opacity: 1;
      background-color: rgb(244 244 245/var(--tw-bg-opacity))
    }

    .active\\:bg-zinc-200:active {
      --tw-bg-opacity: 1;
      background-color: rgb(228 228 231/var(--tw-bg-opacity))
    }

    .active\\:bg-zinc-300:active {
      --tw-bg-opacity: 1;
      background-color: rgb(212 212 216/var(--tw-bg-opacity))
    }

    .active\\:bg-zinc-400:active {
      --tw-bg-opacity: 1;
      background-color: rgb(161 161 170/var(--tw-bg-opacity))
    }

    .active\\:bg-zinc-50:active {
      --tw-bg-opacity: 1;
      background-color: rgb(250 250 250/var(--tw-bg-opacity))
    }

    .active\\:bg-zinc-500:active {
      --tw-bg-opacity: 1;
      background-color: rgb(113 113 122/var(--tw-bg-opacity))
    }

    .active\\:bg-zinc-600:active {
      --tw-bg-opacity: 1;
      background-color: rgb(82 82 91/var(--tw-bg-opacity))
    }

    .active\\:bg-zinc-700:active {
      --tw-bg-opacity: 1;
      background-color: rgb(63 63 70/var(--tw-bg-opacity))
    }

    .active\\:bg-zinc-800:active {
      --tw-bg-opacity: 1;
      background-color: rgb(39 39 42/var(--tw-bg-opacity))
    }

    .active\\:bg-zinc-900:active {
      --tw-bg-opacity: 1;
      background-color: rgb(24 24 27/var(--tw-bg-opacity))
    }

    .active\\:p-0:active {
      padding: 0
    }

    .active\\:p-0\\.5:active {
      padding: .125rem
    }

    .active\\:p-1:active {
      padding: .25rem
    }

    .active\\:p-1\\.5:active {
      padding: .375rem
    }

    .active\\:p-14:active {
      padding: 3.5rem
    }

    .active\\:p-16:active {
      padding: 4rem
    }

    .active\\:p-2:active {
      padding: .5rem
    }

    .active\\:p-2\\.5:active {
      padding: .625rem
    }

    .active\\:p-20:active {
      padding: 5rem
    }

    .active\\:p-24:active {
      padding: 6rem
    }

    .active\\:p-28:active {
      padding: 7rem
    }

    .active\\:p-3:active {
      padding: .75rem
    }

    .active\\:p-3\\.5:active {
      padding: .875rem
    }

    .active\\:p-32:active {
      padding: 8rem
    }

    .active\\:p-36:active {
      padding: 9rem
    }

    .active\\:p-40:active {
      padding: 10rem
    }

    .active\\:p-44:active {
      padding: 11rem
    }

    .active\\:p-48:active {
      padding: 12rem
    }

    .active\\:p-52:active {
      padding: 13rem
    }

    .active\\:p-56:active {
      padding: 14rem
    }

    .active\\:p-60:active {
      padding: 15rem
    }

    .active\\:p-64:active {
      padding: 16rem
    }

    .active\\:p-72:active {
      padding: 18rem
    }

    .active\\:p-80:active {
      padding: 20rem
    }

    .active\\:p-96:active {
      padding: 24rem
    }

    .active\\:p-px:active {
      padding: 1px
    }

    .active\\:px-0:active {
      padding-left: 0;
      padding-right: 0
    }

    .active\\:px-0\\.5:active {
      padding-left: .125rem;
      padding-right: .125rem
    }

    .active\\:px-1:active {
      padding-left: .25rem;
      padding-right: .25rem
    }

    .active\\:px-1\\.5:active {
      padding-left: .375rem;
      padding-right: .375rem
    }

    .active\\:px-14:active {
      padding-left: 3.5rem;
      padding-right: 3.5rem
    }

    .active\\:px-16:active {
      padding-left: 4rem;
      padding-right: 4rem
    }

    .active\\:px-2:active {
      padding-left: .5rem;
      padding-right: .5rem
    }

    .active\\:px-2\\.5:active {
      padding-left: .625rem;
      padding-right: .625rem
    }

    .active\\:px-20:active {
      padding-left: 5rem;
      padding-right: 5rem
    }

    .active\\:px-24:active {
      padding-left: 6rem;
      padding-right: 6rem
    }

    .active\\:px-28:active {
      padding-left: 7rem;
      padding-right: 7rem
    }

    .active\\:px-3:active {
      padding-left: .75rem;
      padding-right: .75rem
    }

    .active\\:px-3\\.5:active {
      padding-left: .875rem;
      padding-right: .875rem
    }

    .active\\:px-32:active {
      padding-left: 8rem;
      padding-right: 8rem
    }

    .active\\:px-36:active {
      padding-left: 9rem;
      padding-right: 9rem
    }

    .active\\:px-40:active {
      padding-left: 10rem;
      padding-right: 10rem
    }

    .active\\:px-44:active {
      padding-left: 11rem;
      padding-right: 11rem
    }

    .active\\:px-48:active {
      padding-left: 12rem;
      padding-right: 12rem
    }

    .active\\:px-52:active {
      padding-left: 13rem;
      padding-right: 13rem
    }

    .active\\:px-56:active {
      padding-left: 14rem;
      padding-right: 14rem
    }

    .active\\:px-60:active {
      padding-left: 15rem;
      padding-right: 15rem
    }

    .active\\:px-64:active {
      padding-left: 16rem;
      padding-right: 16rem
    }

    .active\\:px-72:active {
      padding-left: 18rem;
      padding-right: 18rem
    }

    .active\\:px-80:active {
      padding-left: 20rem;
      padding-right: 20rem
    }

    .active\\:px-96:active {
      padding-left: 24rem;
      padding-right: 24rem
    }

    .active\\:px-px:active {
      padding-left: 1px;
      padding-right: 1px
    }

    .active\\:py-0:active {
      padding-top: 0;
      padding-bottom: 0
    }

    .active\\:py-0\\.5:active {
      padding-top: .125rem;
      padding-bottom: .125rem
    }

    .active\\:py-1:active {
      padding-top: .25rem;
      padding-bottom: .25rem
    }

    .active\\:py-1\\.5:active {
      padding-top: .375rem;
      padding-bottom: .375rem
    }

    .active\\:py-14:active {
      padding-top: 3.5rem;
      padding-bottom: 3.5rem
    }

    .active\\:py-16:active {
      padding-top: 4rem;
      padding-bottom: 4rem
    }

    .active\\:py-2:active {
      padding-top: .5rem;
      padding-bottom: .5rem
    }

    .active\\:py-2\\.5:active {
      padding-top: .625rem;
      padding-bottom: .625rem
    }

    .active\\:py-20:active {
      padding-top: 5rem;
      padding-bottom: 5rem
    }

    .active\\:py-24:active {
      padding-top: 6rem;
      padding-bottom: 6rem
    }

    .active\\:py-28:active {
      padding-top: 7rem;
      padding-bottom: 7rem
    }

    .active\\:py-3:active {
      padding-top: .75rem;
      padding-bottom: .75rem
    }

    .active\\:py-3\\.5:active {
      padding-top: .875rem;
      padding-bottom: .875rem
    }

    .active\\:py-32:active {
      padding-top: 8rem;
      padding-bottom: 8rem
    }

    .active\\:py-36:active {
      padding-top: 9rem;
      padding-bottom: 9rem
    }

    .active\\:py-40:active {
      padding-top: 10rem;
      padding-bottom: 10rem
    }

    .active\\:py-44:active {
      padding-top: 11rem;
      padding-bottom: 11rem
    }

    .active\\:py-48:active {
      padding-top: 12rem;
      padding-bottom: 12rem
    }

    .active\\:py-52:active {
      padding-top: 13rem;
      padding-bottom: 13rem
    }

    .active\\:py-56:active {
      padding-top: 14rem;
      padding-bottom: 14rem
    }

    .active\\:py-60:active {
      padding-top: 15rem;
      padding-bottom: 15rem
    }

    .active\\:py-64:active {
      padding-top: 16rem;
      padding-bottom: 16rem
    }

    .active\\:py-72:active {
      padding-top: 18rem;
      padding-bottom: 18rem
    }

    .active\\:py-80:active {
      padding-top: 20rem;
      padding-bottom: 20rem
    }

    .active\\:py-96:active {
      padding-top: 24rem;
      padding-bottom: 24rem
    }

    .active\\:py-px:active {
      padding-top: 1px;
      padding-bottom: 1px
    }

    .active\\:pb-0:active {
      padding-bottom: 0
    }

    .active\\:pb-0\\.5:active {
      padding-bottom: .125rem
    }

    .active\\:pb-1:active {
      padding-bottom: .25rem
    }

    .active\\:pb-1\\.5:active {
      padding-bottom: .375rem
    }

    .active\\:pb-14:active {
      padding-bottom: 3.5rem
    }

    .active\\:pb-16:active {
      padding-bottom: 4rem
    }

    .active\\:pb-2:active {
      padding-bottom: .5rem
    }

    .active\\:pb-2\\.5:active {
      padding-bottom: .625rem
    }

    .active\\:pb-20:active {
      padding-bottom: 5rem
    }

    .active\\:pb-24:active {
      padding-bottom: 6rem
    }

    .active\\:pb-28:active {
      padding-bottom: 7rem
    }

    .active\\:pb-3:active {
      padding-bottom: .75rem
    }

    .active\\:pb-3\\.5:active {
      padding-bottom: .875rem
    }

    .active\\:pb-32:active {
      padding-bottom: 8rem
    }

    .active\\:pb-36:active {
      padding-bottom: 9rem
    }

    .active\\:pb-40:active {
      padding-bottom: 10rem
    }

    .active\\:pb-44:active {
      padding-bottom: 11rem
    }

    .active\\:pb-48:active {
      padding-bottom: 12rem
    }

    .active\\:pb-52:active {
      padding-bottom: 13rem
    }

    .active\\:pb-56:active {
      padding-bottom: 14rem
    }

    .active\\:pb-60:active {
      padding-bottom: 15rem
    }

    .active\\:pb-64:active {
      padding-bottom: 16rem
    }

    .active\\:pb-72:active {
      padding-bottom: 18rem
    }

    .active\\:pb-80:active {
      padding-bottom: 20rem
    }

    .active\\:pb-96:active {
      padding-bottom: 24rem
    }

    .active\\:pb-px:active {
      padding-bottom: 1px
    }

    .active\\:pl-0:active {
      padding-left: 0
    }

    .active\\:pl-0\\.5:active {
      padding-left: .125rem
    }

    .active\\:pl-1:active {
      padding-left: .25rem
    }

    .active\\:pl-1\\.5:active {
      padding-left: .375rem
    }

    .active\\:pl-14:active {
      padding-left: 3.5rem
    }

    .active\\:pl-16:active {
      padding-left: 4rem
    }

    .active\\:pl-2:active {
      padding-left: .5rem
    }

    .active\\:pl-2\\.5:active {
      padding-left: .625rem
    }

    .active\\:pl-20:active {
      padding-left: 5rem
    }

    .active\\:pl-24:active {
      padding-left: 6rem
    }

    .active\\:pl-28:active {
      padding-left: 7rem
    }

    .active\\:pl-3:active {
      padding-left: .75rem
    }

    .active\\:pl-3\\.5:active {
      padding-left: .875rem
    }

    .active\\:pl-32:active {
      padding-left: 8rem
    }

    .active\\:pl-36:active {
      padding-left: 9rem
    }

    .active\\:pl-40:active {
      padding-left: 10rem
    }

    .active\\:pl-44:active {
      padding-left: 11rem
    }

    .active\\:pl-48:active {
      padding-left: 12rem
    }

    .active\\:pl-52:active {
      padding-left: 13rem
    }

    .active\\:pl-56:active {
      padding-left: 14rem
    }

    .active\\:pl-60:active {
      padding-left: 15rem
    }

    .active\\:pl-64:active {
      padding-left: 16rem
    }

    .active\\:pl-72:active {
      padding-left: 18rem
    }

    .active\\:pl-80:active {
      padding-left: 20rem
    }

    .active\\:pl-96:active {
      padding-left: 24rem
    }

    .active\\:pl-px:active {
      padding-left: 1px
    }

    .active\\:pr-0:active {
      padding-right: 0
    }

    .active\\:pr-0\\.5:active {
      padding-right: .125rem
    }

    .active\\:pr-1:active {
      padding-right: .25rem
    }

    .active\\:pr-1\\.5:active {
      padding-right: .375rem
    }

    .active\\:pr-14:active {
      padding-right: 3.5rem
    }

    .active\\:pr-16:active {
      padding-right: 4rem
    }

    .active\\:pr-2:active {
      padding-right: .5rem
    }

    .active\\:pr-2\\.5:active {
      padding-right: .625rem
    }

    .active\\:pr-20:active {
      padding-right: 5rem
    }

    .active\\:pr-24:active {
      padding-right: 6rem
    }

    .active\\:pr-28:active {
      padding-right: 7rem
    }

    .active\\:pr-3:active {
      padding-right: .75rem
    }

    .active\\:pr-3\\.5:active {
      padding-right: .875rem
    }

    .active\\:pr-32:active {
      padding-right: 8rem
    }

    .active\\:pr-36:active {
      padding-right: 9rem
    }

    .active\\:pr-40:active {
      padding-right: 10rem
    }

    .active\\:pr-44:active {
      padding-right: 11rem
    }

    .active\\:pr-48:active {
      padding-right: 12rem
    }

    .active\\:pr-52:active {
      padding-right: 13rem
    }

    .active\\:pr-56:active {
      padding-right: 14rem
    }

    .active\\:pr-60:active {
      padding-right: 15rem
    }

    .active\\:pr-64:active {
      padding-right: 16rem
    }

    .active\\:pr-72:active {
      padding-right: 18rem
    }

    .active\\:pr-80:active {
      padding-right: 20rem
    }

    .active\\:pr-96:active {
      padding-right: 24rem
    }

    .active\\:pr-px:active {
      padding-right: 1px
    }

    .active\\:pt-0:active {
      padding-top: 0
    }

    .active\\:pt-0\\.5:active {
      padding-top: .125rem
    }

    .active\\:pt-1:active {
      padding-top: .25rem
    }

    .active\\:pt-1\\.5:active {
      padding-top: .375rem
    }

    .active\\:pt-14:active {
      padding-top: 3.5rem
    }

    .active\\:pt-16:active {
      padding-top: 4rem
    }

    .active\\:pt-2:active {
      padding-top: .5rem
    }

    .active\\:pt-2\\.5:active {
      padding-top: .625rem
    }

    .active\\:pt-20:active {
      padding-top: 5rem
    }

    .active\\:pt-24:active {
      padding-top: 6rem
    }

    .active\\:pt-28:active {
      padding-top: 7rem
    }

    .active\\:pt-3:active {
      padding-top: .75rem
    }

    .active\\:pt-3\\.5:active {
      padding-top: .875rem
    }

    .active\\:pt-32:active {
      padding-top: 8rem
    }

    .active\\:pt-36:active {
      padding-top: 9rem
    }

    .active\\:pt-40:active {
      padding-top: 10rem
    }

    .active\\:pt-44:active {
      padding-top: 11rem
    }

    .active\\:pt-48:active {
      padding-top: 12rem
    }

    .active\\:pt-52:active {
      padding-top: 13rem
    }

    .active\\:pt-56:active {
      padding-top: 14rem
    }

    .active\\:pt-60:active {
      padding-top: 15rem
    }

    .active\\:pt-64:active {
      padding-top: 16rem
    }

    .active\\:pt-72:active {
      padding-top: 18rem
    }

    .active\\:pt-80:active {
      padding-top: 20rem
    }

    .active\\:pt-96:active {
      padding-top: 24rem
    }

    .active\\:pt-px:active {
      padding-top: 1px
    }

    .active\\:text-2xl:active {
      font-size: 1.5rem;
      line-height: 2rem
    }

    .active\\:text-3xl:active {
      font-size: 1.875rem;
      line-height: 2.25rem
    }

    .active\\:text-4xl:active {
      font-size: 2.25rem;
      line-height: 2.5rem
    }

    .active\\:text-5xl:active {
      font-size: 3rem;
      line-height: 1
    }

    .active\\:text-6xl:active {
      font-size: 3.75rem;
      line-height: 1
    }

    .active\\:text-7xl:active {
      font-size: 4.5rem;
      line-height: 1
    }

    .active\\:text-8xl:active {
      font-size: 6rem;
      line-height: 1
    }

    .active\\:text-9xl:active {
      font-size: 8rem;
      line-height: 1
    }

    .active\\:text-base:active {
      font-size: 1rem;
      line-height: 1.5rem
    }

    .active\\:text-lg:active {
      font-size: 1.125rem;
      line-height: 1.75rem
    }

    .active\\:text-sm:active {
      font-size: .875rem;
      line-height: 1.25rem
    }

    .active\\:text-xl:active {
      font-size: 1.25rem;
      line-height: 1.75rem
    }

    .active\\:text-xs:active {
      font-size: .75rem;
      line-height: 1rem
    }

    .active\\:text-amber-100:active {
      --tw-text-opacity: 1;
      color: rgb(254 243 199/var(--tw-text-opacity))
    }

    .active\\:text-amber-200:active {
      --tw-text-opacity: 1;
      color: rgb(253 230 138/var(--tw-text-opacity))
    }

    .active\\:text-amber-300:active {
      --tw-text-opacity: 1;
      color: rgb(252 211 77/var(--tw-text-opacity))
    }

    .active\\:text-amber-400:active {
      --tw-text-opacity: 1;
      color: rgb(251 191 36/var(--tw-text-opacity))
    }

    .active\\:text-amber-50:active {
      --tw-text-opacity: 1;
      color: rgb(255 251 235/var(--tw-text-opacity))
    }

    .active\\:text-amber-500:active {
      --tw-text-opacity: 1;
      color: rgb(245 158 11/var(--tw-text-opacity))
    }

    .active\\:text-amber-600:active {
      --tw-text-opacity: 1;
      color: rgb(217 119 6/var(--tw-text-opacity))
    }

    .active\\:text-amber-700:active {
      --tw-text-opacity: 1;
      color: rgb(180 83 9/var(--tw-text-opacity))
    }

    .active\\:text-amber-800:active {
      --tw-text-opacity: 1;
      color: rgb(146 64 14/var(--tw-text-opacity))
    }

    .active\\:text-amber-900:active {
      --tw-text-opacity: 1;
      color: rgb(120 53 15/var(--tw-text-opacity))
    }

    .active\\:text-blue-100:active {
      --tw-text-opacity: 1;
      color: rgb(219 234 254/var(--tw-text-opacity))
    }

    .active\\:text-blue-200:active {
      --tw-text-opacity: 1;
      color: rgb(191 219 254/var(--tw-text-opacity))
    }

    .active\\:text-blue-300:active {
      --tw-text-opacity: 1;
      color: rgb(147 197 253/var(--tw-text-opacity))
    }

    .active\\:text-blue-400:active {
      --tw-text-opacity: 1;
      color: rgb(96 165 250/var(--tw-text-opacity))
    }

    .active\\:text-blue-50:active {
      --tw-text-opacity: 1;
      color: rgb(239 246 255/var(--tw-text-opacity))
    }

    .active\\:text-blue-500:active {
      --tw-text-opacity: 1;
      color: rgb(59 130 246/var(--tw-text-opacity))
    }

    .active\\:text-blue-600:active {
      --tw-text-opacity: 1;
      color: rgb(37 99 235/var(--tw-text-opacity))
    }

    .active\\:text-blue-700:active {
      --tw-text-opacity: 1;
      color: rgb(29 78 216/var(--tw-text-opacity))
    }

    .active\\:text-blue-800:active {
      --tw-text-opacity: 1;
      color: rgb(30 64 175/var(--tw-text-opacity))
    }

    .active\\:text-blue-900:active {
      --tw-text-opacity: 1;
      color: rgb(30 58 138/var(--tw-text-opacity))
    }

    .active\\:text-cyan-100:active {
      --tw-text-opacity: 1;
      color: rgb(207 250 254/var(--tw-text-opacity))
    }

    .active\\:text-cyan-200:active {
      --tw-text-opacity: 1;
      color: rgb(165 243 252/var(--tw-text-opacity))
    }

    .active\\:text-cyan-300:active {
      --tw-text-opacity: 1;
      color: rgb(103 232 249/var(--tw-text-opacity))
    }

    .active\\:text-cyan-400:active {
      --tw-text-opacity: 1;
      color: rgb(34 211 238/var(--tw-text-opacity))
    }

    .active\\:text-cyan-50:active {
      --tw-text-opacity: 1;
      color: rgb(236 254 255/var(--tw-text-opacity))
    }

    .active\\:text-cyan-500:active {
      --tw-text-opacity: 1;
      color: rgb(6 182 212/var(--tw-text-opacity))
    }

    .active\\:text-cyan-600:active {
      --tw-text-opacity: 1;
      color: rgb(8 145 178/var(--tw-text-opacity))
    }

    .active\\:text-cyan-700:active {
      --tw-text-opacity: 1;
      color: rgb(14 116 144/var(--tw-text-opacity))
    }

    .active\\:text-cyan-800:active {
      --tw-text-opacity: 1;
      color: rgb(21 94 117/var(--tw-text-opacity))
    }

    .active\\:text-cyan-900:active {
      --tw-text-opacity: 1;
      color: rgb(22 78 99/var(--tw-text-opacity))
    }

    .active\\:text-emerald-100:active {
      --tw-text-opacity: 1;
      color: rgb(209 250 229/var(--tw-text-opacity))
    }

    .active\\:text-emerald-200:active {
      --tw-text-opacity: 1;
      color: rgb(167 243 208/var(--tw-text-opacity))
    }

    .active\\:text-emerald-300:active {
      --tw-text-opacity: 1;
      color: rgb(110 231 183/var(--tw-text-opacity))
    }

    .active\\:text-emerald-400:active {
      --tw-text-opacity: 1;
      color: rgb(52 211 153/var(--tw-text-opacity))
    }

    .active\\:text-emerald-50:active {
      --tw-text-opacity: 1;
      color: rgb(236 253 245/var(--tw-text-opacity))
    }

    .active\\:text-emerald-500:active {
      --tw-text-opacity: 1;
      color: rgb(16 185 129/var(--tw-text-opacity))
    }

    .active\\:text-emerald-600:active {
      --tw-text-opacity: 1;
      color: rgb(5 150 105/var(--tw-text-opacity))
    }

    .active\\:text-emerald-700:active {
      --tw-text-opacity: 1;
      color: rgb(4 120 87/var(--tw-text-opacity))
    }

    .active\\:text-emerald-800:active {
      --tw-text-opacity: 1;
      color: rgb(6 95 70/var(--tw-text-opacity))
    }

    .active\\:text-emerald-900:active {
      --tw-text-opacity: 1;
      color: rgb(6 78 59/var(--tw-text-opacity))
    }

    .active\\:text-fuchsia-100:active {
      --tw-text-opacity: 1;
      color: rgb(250 232 255/var(--tw-text-opacity))
    }

    .active\\:text-fuchsia-200:active {
      --tw-text-opacity: 1;
      color: rgb(245 208 254/var(--tw-text-opacity))
    }

    .active\\:text-fuchsia-300:active {
      --tw-text-opacity: 1;
      color: rgb(240 171 252/var(--tw-text-opacity))
    }

    .active\\:text-fuchsia-400:active {
      --tw-text-opacity: 1;
      color: rgb(232 121 249/var(--tw-text-opacity))
    }

    .active\\:text-fuchsia-50:active {
      --tw-text-opacity: 1;
      color: rgb(253 244 255/var(--tw-text-opacity))
    }

    .active\\:text-fuchsia-500:active {
      --tw-text-opacity: 1;
      color: rgb(217 70 239/var(--tw-text-opacity))
    }

    .active\\:text-fuchsia-600:active {
      --tw-text-opacity: 1;
      color: rgb(192 38 211/var(--tw-text-opacity))
    }

    .active\\:text-fuchsia-700:active {
      --tw-text-opacity: 1;
      color: rgb(162 28 175/var(--tw-text-opacity))
    }

    .active\\:text-fuchsia-800:active {
      --tw-text-opacity: 1;
      color: rgb(134 25 143/var(--tw-text-opacity))
    }

    .active\\:text-fuchsia-900:active {
      --tw-text-opacity: 1;
      color: rgb(112 26 117/var(--tw-text-opacity))
    }

    .active\\:text-gray-100:active {
      --tw-text-opacity: 1;
      color: rgb(243 244 246/var(--tw-text-opacity))
    }

    .active\\:text-gray-200:active {
      --tw-text-opacity: 1;
      color: rgb(229 231 235/var(--tw-text-opacity))
    }

    .active\\:text-gray-300:active {
      --tw-text-opacity: 1;
      color: rgb(209 213 219/var(--tw-text-opacity))
    }

    .active\\:text-gray-400:active {
      --tw-text-opacity: 1;
      color: rgb(156 163 175/var(--tw-text-opacity))
    }

    .active\\:text-gray-50:active {
      --tw-text-opacity: 1;
      color: rgb(249 250 251/var(--tw-text-opacity))
    }

    .active\\:text-gray-500:active {
      --tw-text-opacity: 1;
      color: rgb(107 114 128/var(--tw-text-opacity))
    }

    .active\\:text-gray-600:active {
      --tw-text-opacity: 1;
      color: rgb(75 85 99/var(--tw-text-opacity))
    }

    .active\\:text-gray-700:active {
      --tw-text-opacity: 1;
      color: rgb(55 65 81/var(--tw-text-opacity))
    }

    .active\\:text-gray-800:active {
      --tw-text-opacity: 1;
      color: rgb(31 41 55/var(--tw-text-opacity))
    }

    .active\\:text-gray-900:active {
      --tw-text-opacity: 1;
      color: rgb(17 24 39/var(--tw-text-opacity))
    }

    .active\\:text-green-100:active {
      --tw-text-opacity: 1;
      color: rgb(220 252 231/var(--tw-text-opacity))
    }

    .active\\:text-green-200:active {
      --tw-text-opacity: 1;
      color: rgb(187 247 208/var(--tw-text-opacity))
    }

    .active\\:text-green-300:active {
      --tw-text-opacity: 1;
      color: rgb(134 239 172/var(--tw-text-opacity))
    }

    .active\\:text-green-400:active {
      --tw-text-opacity: 1;
      color: rgb(74 222 128/var(--tw-text-opacity))
    }

    .active\\:text-green-50:active {
      --tw-text-opacity: 1;
      color: rgb(240 253 244/var(--tw-text-opacity))
    }

    .active\\:text-green-500:active {
      --tw-text-opacity: 1;
      color: rgb(34 197 94/var(--tw-text-opacity))
    }

    .active\\:text-green-600:active {
      --tw-text-opacity: 1;
      color: rgb(22 163 74/var(--tw-text-opacity))
    }

    .active\\:text-green-700:active {
      --tw-text-opacity: 1;
      color: rgb(21 128 61/var(--tw-text-opacity))
    }

    .active\\:text-green-800:active {
      --tw-text-opacity: 1;
      color: rgb(22 101 52/var(--tw-text-opacity))
    }

    .active\\:text-green-900:active {
      --tw-text-opacity: 1;
      color: rgb(20 83 45/var(--tw-text-opacity))
    }

    .active\\:text-indigo-100:active {
      --tw-text-opacity: 1;
      color: rgb(224 231 255/var(--tw-text-opacity))
    }

    .active\\:text-indigo-200:active {
      --tw-text-opacity: 1;
      color: rgb(199 210 254/var(--tw-text-opacity))
    }

    .active\\:text-indigo-300:active {
      --tw-text-opacity: 1;
      color: rgb(165 180 252/var(--tw-text-opacity))
    }

    .active\\:text-indigo-400:active {
      --tw-text-opacity: 1;
      color: rgb(129 140 248/var(--tw-text-opacity))
    }

    .active\\:text-indigo-50:active {
      --tw-text-opacity: 1;
      color: rgb(238 242 255/var(--tw-text-opacity))
    }

    .active\\:text-indigo-500:active {
      --tw-text-opacity: 1;
      color: rgb(99 102 241/var(--tw-text-opacity))
    }

    .active\\:text-indigo-600:active {
      --tw-text-opacity: 1;
      color: rgb(79 70 229/var(--tw-text-opacity))
    }

    .active\\:text-indigo-700:active {
      --tw-text-opacity: 1;
      color: rgb(67 56 202/var(--tw-text-opacity))
    }

    .active\\:text-indigo-800:active {
      --tw-text-opacity: 1;
      color: rgb(55 48 163/var(--tw-text-opacity))
    }

    .active\\:text-indigo-900:active {
      --tw-text-opacity: 1;
      color: rgb(49 46 129/var(--tw-text-opacity))
    }

    .active\\:text-lime-100:active {
      --tw-text-opacity: 1;
      color: rgb(236 252 203/var(--tw-text-opacity))
    }

    .active\\:text-lime-200:active {
      --tw-text-opacity: 1;
      color: rgb(217 249 157/var(--tw-text-opacity))
    }

    .active\\:text-lime-300:active {
      --tw-text-opacity: 1;
      color: rgb(190 242 100/var(--tw-text-opacity))
    }

    .active\\:text-lime-400:active {
      --tw-text-opacity: 1;
      color: rgb(163 230 53/var(--tw-text-opacity))
    }

    .active\\:text-lime-50:active {
      --tw-text-opacity: 1;
      color: rgb(247 254 231/var(--tw-text-opacity))
    }

    .active\\:text-lime-500:active {
      --tw-text-opacity: 1;
      color: rgb(132 204 22/var(--tw-text-opacity))
    }

    .active\\:text-lime-600:active {
      --tw-text-opacity: 1;
      color: rgb(101 163 13/var(--tw-text-opacity))
    }

    .active\\:text-lime-700:active {
      --tw-text-opacity: 1;
      color: rgb(77 124 15/var(--tw-text-opacity))
    }

    .active\\:text-lime-800:active {
      --tw-text-opacity: 1;
      color: rgb(63 98 18/var(--tw-text-opacity))
    }

    .active\\:text-lime-900:active {
      --tw-text-opacity: 1;
      color: rgb(54 83 20/var(--tw-text-opacity))
    }

    .active\\:text-neutral-100:active {
      --tw-text-opacity: 1;
      color: rgb(245 245 245/var(--tw-text-opacity))
    }

    .active\\:text-neutral-200:active {
      --tw-text-opacity: 1;
      color: rgb(229 229 229/var(--tw-text-opacity))
    }

    .active\\:text-neutral-300:active {
      --tw-text-opacity: 1;
      color: rgb(212 212 212/var(--tw-text-opacity))
    }

    .active\\:text-neutral-400:active {
      --tw-text-opacity: 1;
      color: rgb(163 163 163/var(--tw-text-opacity))
    }

    .active\\:text-neutral-50:active {
      --tw-text-opacity: 1;
      color: rgb(250 250 250/var(--tw-text-opacity))
    }

    .active\\:text-neutral-500:active {
      --tw-text-opacity: 1;
      color: rgb(115 115 115/var(--tw-text-opacity))
    }

    .active\\:text-neutral-600:active {
      --tw-text-opacity: 1;
      color: rgb(82 82 82/var(--tw-text-opacity))
    }

    .active\\:text-neutral-700:active {
      --tw-text-opacity: 1;
      color: rgb(64 64 64/var(--tw-text-opacity))
    }

    .active\\:text-neutral-800:active {
      --tw-text-opacity: 1;
      color: rgb(38 38 38/var(--tw-text-opacity))
    }

    .active\\:text-neutral-900:active {
      --tw-text-opacity: 1;
      color: rgb(23 23 23/var(--tw-text-opacity))
    }

    .active\\:text-orange-100:active {
      --tw-text-opacity: 1;
      color: rgb(255 237 213/var(--tw-text-opacity))
    }

    .active\\:text-orange-200:active {
      --tw-text-opacity: 1;
      color: rgb(254 215 170/var(--tw-text-opacity))
    }

    .active\\:text-orange-300:active {
      --tw-text-opacity: 1;
      color: rgb(253 186 116/var(--tw-text-opacity))
    }

    .active\\:text-orange-400:active {
      --tw-text-opacity: 1;
      color: rgb(251 146 60/var(--tw-text-opacity))
    }

    .active\\:text-orange-50:active {
      --tw-text-opacity: 1;
      color: rgb(255 247 237/var(--tw-text-opacity))
    }

    .active\\:text-orange-500:active {
      --tw-text-opacity: 1;
      color: rgb(249 115 22/var(--tw-text-opacity))
    }

    .active\\:text-orange-600:active {
      --tw-text-opacity: 1;
      color: rgb(234 88 12/var(--tw-text-opacity))
    }

    .active\\:text-orange-700:active {
      --tw-text-opacity: 1;
      color: rgb(194 65 12/var(--tw-text-opacity))
    }

    .active\\:text-orange-800:active {
      --tw-text-opacity: 1;
      color: rgb(154 52 18/var(--tw-text-opacity))
    }

    .active\\:text-orange-900:active {
      --tw-text-opacity: 1;
      color: rgb(124 45 18/var(--tw-text-opacity))
    }

    .active\\:text-pink-100:active {
      --tw-text-opacity: 1;
      color: rgb(252 231 243/var(--tw-text-opacity))
    }

    .active\\:text-pink-200:active {
      --tw-text-opacity: 1;
      color: rgb(251 207 232/var(--tw-text-opacity))
    }

    .active\\:text-pink-300:active {
      --tw-text-opacity: 1;
      color: rgb(249 168 212/var(--tw-text-opacity))
    }

    .active\\:text-pink-400:active {
      --tw-text-opacity: 1;
      color: rgb(244 114 182/var(--tw-text-opacity))
    }

    .active\\:text-pink-50:active {
      --tw-text-opacity: 1;
      color: rgb(253 242 248/var(--tw-text-opacity))
    }

    .active\\:text-pink-500:active {
      --tw-text-opacity: 1;
      color: rgb(236 72 153/var(--tw-text-opacity))
    }

    .active\\:text-pink-600:active {
      --tw-text-opacity: 1;
      color: rgb(219 39 119/var(--tw-text-opacity))
    }

    .active\\:text-pink-700:active {
      --tw-text-opacity: 1;
      color: rgb(190 24 93/var(--tw-text-opacity))
    }

    .active\\:text-pink-800:active {
      --tw-text-opacity: 1;
      color: rgb(157 23 77/var(--tw-text-opacity))
    }

    .active\\:text-pink-900:active {
      --tw-text-opacity: 1;
      color: rgb(131 24 67/var(--tw-text-opacity))
    }

    .active\\:text-purple-100:active {
      --tw-text-opacity: 1;
      color: rgb(243 232 255/var(--tw-text-opacity))
    }

    .active\\:text-purple-200:active {
      --tw-text-opacity: 1;
      color: rgb(233 213 255/var(--tw-text-opacity))
    }

    .active\\:text-purple-300:active {
      --tw-text-opacity: 1;
      color: rgb(216 180 254/var(--tw-text-opacity))
    }

    .active\\:text-purple-400:active {
      --tw-text-opacity: 1;
      color: rgb(192 132 252/var(--tw-text-opacity))
    }

    .active\\:text-purple-50:active {
      --tw-text-opacity: 1;
      color: rgb(250 245 255/var(--tw-text-opacity))
    }

    .active\\:text-purple-500:active {
      --tw-text-opacity: 1;
      color: rgb(168 85 247/var(--tw-text-opacity))
    }

    .active\\:text-purple-600:active {
      --tw-text-opacity: 1;
      color: rgb(147 51 234/var(--tw-text-opacity))
    }

    .active\\:text-purple-700:active {
      --tw-text-opacity: 1;
      color: rgb(126 34 206/var(--tw-text-opacity))
    }

    .active\\:text-purple-800:active {
      --tw-text-opacity: 1;
      color: rgb(107 33 168/var(--tw-text-opacity))
    }

    .active\\:text-purple-900:active {
      --tw-text-opacity: 1;
      color: rgb(88 28 135/var(--tw-text-opacity))
    }

    .active\\:text-red-100:active {
      --tw-text-opacity: 1;
      color: rgb(254 226 226/var(--tw-text-opacity))
    }

    .active\\:text-red-200:active {
      --tw-text-opacity: 1;
      color: rgb(254 202 202/var(--tw-text-opacity))
    }

    .active\\:text-red-300:active {
      --tw-text-opacity: 1;
      color: rgb(252 165 165/var(--tw-text-opacity))
    }

    .active\\:text-red-400:active {
      --tw-text-opacity: 1;
      color: rgb(248 113 113/var(--tw-text-opacity))
    }

    .active\\:text-red-50:active {
      --tw-text-opacity: 1;
      color: rgb(254 242 242/var(--tw-text-opacity))
    }

    .active\\:text-red-500:active {
      --tw-text-opacity: 1;
      color: rgb(239 68 68/var(--tw-text-opacity))
    }

    .active\\:text-red-600:active {
      --tw-text-opacity: 1;
      color: rgb(220 38 38/var(--tw-text-opacity))
    }

    .active\\:text-red-700:active {
      --tw-text-opacity: 1;
      color: rgb(185 28 28/var(--tw-text-opacity))
    }

    .active\\:text-red-800:active {
      --tw-text-opacity: 1;
      color: rgb(153 27 27/var(--tw-text-opacity))
    }

    .active\\:text-red-900:active {
      --tw-text-opacity: 1;
      color: rgb(127 29 29/var(--tw-text-opacity))
    }

    .active\\:text-rose-100:active {
      --tw-text-opacity: 1;
      color: rgb(255 228 230/var(--tw-text-opacity))
    }

    .active\\:text-rose-200:active {
      --tw-text-opacity: 1;
      color: rgb(254 205 211/var(--tw-text-opacity))
    }

    .active\\:text-rose-300:active {
      --tw-text-opacity: 1;
      color: rgb(253 164 175/var(--tw-text-opacity))
    }

    .active\\:text-rose-400:active {
      --tw-text-opacity: 1;
      color: rgb(251 113 133/var(--tw-text-opacity))
    }

    .active\\:text-rose-50:active {
      --tw-text-opacity: 1;
      color: rgb(255 241 242/var(--tw-text-opacity))
    }

    .active\\:text-rose-500:active {
      --tw-text-opacity: 1;
      color: rgb(244 63 94/var(--tw-text-opacity))
    }

    .active\\:text-rose-600:active {
      --tw-text-opacity: 1;
      color: rgb(225 29 72/var(--tw-text-opacity))
    }

    .active\\:text-rose-700:active {
      --tw-text-opacity: 1;
      color: rgb(190 18 60/var(--tw-text-opacity))
    }

    .active\\:text-rose-800:active {
      --tw-text-opacity: 1;
      color: rgb(159 18 57/var(--tw-text-opacity))
    }

    .active\\:text-rose-900:active {
      --tw-text-opacity: 1;
      color: rgb(136 19 55/var(--tw-text-opacity))
    }

    .active\\:text-sky-100:active {
      --tw-text-opacity: 1;
      color: rgb(224 242 254/var(--tw-text-opacity))
    }

    .active\\:text-sky-200:active {
      --tw-text-opacity: 1;
      color: rgb(186 230 253/var(--tw-text-opacity))
    }

    .active\\:text-sky-300:active {
      --tw-text-opacity: 1;
      color: rgb(125 211 252/var(--tw-text-opacity))
    }

    .active\\:text-sky-400:active {
      --tw-text-opacity: 1;
      color: rgb(56 189 248/var(--tw-text-opacity))
    }

    .active\\:text-sky-50:active {
      --tw-text-opacity: 1;
      color: rgb(240 249 255/var(--tw-text-opacity))
    }

    .active\\:text-sky-500:active {
      --tw-text-opacity: 1;
      color: rgb(14 165 233/var(--tw-text-opacity))
    }

    .active\\:text-sky-600:active {
      --tw-text-opacity: 1;
      color: rgb(2 132 199/var(--tw-text-opacity))
    }

    .active\\:text-sky-700:active {
      --tw-text-opacity: 1;
      color: rgb(3 105 161/var(--tw-text-opacity))
    }

    .active\\:text-sky-800:active {
      --tw-text-opacity: 1;
      color: rgb(7 89 133/var(--tw-text-opacity))
    }

    .active\\:text-sky-900:active {
      --tw-text-opacity: 1;
      color: rgb(12 74 110/var(--tw-text-opacity))
    }

    .active\\:text-slate-100:active {
      --tw-text-opacity: 1;
      color: rgb(241 245 249/var(--tw-text-opacity))
    }

    .active\\:text-slate-200:active {
      --tw-text-opacity: 1;
      color: rgb(226 232 240/var(--tw-text-opacity))
    }

    .active\\:text-slate-300:active {
      --tw-text-opacity: 1;
      color: rgb(203 213 225/var(--tw-text-opacity))
    }

    .active\\:text-slate-400:active {
      --tw-text-opacity: 1;
      color: rgb(148 163 184/var(--tw-text-opacity))
    }

    .active\\:text-slate-50:active {
      --tw-text-opacity: 1;
      color: rgb(248 250 252/var(--tw-text-opacity))
    }

    .active\\:text-slate-500:active {
      --tw-text-opacity: 1;
      color: rgb(100 116 139/var(--tw-text-opacity))
    }

    .active\\:text-slate-600:active {
      --tw-text-opacity: 1;
      color: rgb(71 85 105/var(--tw-text-opacity))
    }

    .active\\:text-slate-700:active {
      --tw-text-opacity: 1;
      color: rgb(51 65 85/var(--tw-text-opacity))
    }

    .active\\:text-slate-800:active {
      --tw-text-opacity: 1;
      color: rgb(30 41 59/var(--tw-text-opacity))
    }

    .active\\:text-slate-900:active {
      --tw-text-opacity: 1;
      color: rgb(15 23 42/var(--tw-text-opacity))
    }

    .active\\:text-stone-100:active {
      --tw-text-opacity: 1;
      color: rgb(245 245 244/var(--tw-text-opacity))
    }

    .active\\:text-stone-200:active {
      --tw-text-opacity: 1;
      color: rgb(231 229 228/var(--tw-text-opacity))
    }

    .active\\:text-stone-300:active {
      --tw-text-opacity: 1;
      color: rgb(214 211 209/var(--tw-text-opacity))
    }

    .active\\:text-stone-400:active {
      --tw-text-opacity: 1;
      color: rgb(168 162 158/var(--tw-text-opacity))
    }

    .active\\:text-stone-50:active {
      --tw-text-opacity: 1;
      color: rgb(250 250 249/var(--tw-text-opacity))
    }

    .active\\:text-stone-500:active {
      --tw-text-opacity: 1;
      color: rgb(120 113 108/var(--tw-text-opacity))
    }

    .active\\:text-stone-600:active {
      --tw-text-opacity: 1;
      color: rgb(87 83 78/var(--tw-text-opacity))
    }

    .active\\:text-stone-700:active {
      --tw-text-opacity: 1;
      color: rgb(68 64 60/var(--tw-text-opacity))
    }

    .active\\:text-stone-800:active {
      --tw-text-opacity: 1;
      color: rgb(41 37 36/var(--tw-text-opacity))
    }

    .active\\:text-stone-900:active {
      --tw-text-opacity: 1;
      color: rgb(28 25 23/var(--tw-text-opacity))
    }

    .active\\:text-teal-100:active {
      --tw-text-opacity: 1;
      color: rgb(204 251 241/var(--tw-text-opacity))
    }

    .active\\:text-teal-200:active {
      --tw-text-opacity: 1;
      color: rgb(153 246 228/var(--tw-text-opacity))
    }

    .active\\:text-teal-300:active {
      --tw-text-opacity: 1;
      color: rgb(94 234 212/var(--tw-text-opacity))
    }

    .active\\:text-teal-400:active {
      --tw-text-opacity: 1;
      color: rgb(45 212 191/var(--tw-text-opacity))
    }

    .active\\:text-teal-50:active {
      --tw-text-opacity: 1;
      color: rgb(240 253 250/var(--tw-text-opacity))
    }

    .active\\:text-teal-500:active {
      --tw-text-opacity: 1;
      color: rgb(20 184 166/var(--tw-text-opacity))
    }

    .active\\:text-teal-600:active {
      --tw-text-opacity: 1;
      color: rgb(13 148 136/var(--tw-text-opacity))
    }

    .active\\:text-teal-700:active {
      --tw-text-opacity: 1;
      color: rgb(15 118 110/var(--tw-text-opacity))
    }

    .active\\:text-teal-800:active {
      --tw-text-opacity: 1;
      color: rgb(17 94 89/var(--tw-text-opacity))
    }

    .active\\:text-teal-900:active {
      --tw-text-opacity: 1;
      color: rgb(19 78 74/var(--tw-text-opacity))
    }

    .active\\:text-violet-100:active {
      --tw-text-opacity: 1;
      color: rgb(237 233 254/var(--tw-text-opacity))
    }

    .active\\:text-violet-200:active {
      --tw-text-opacity: 1;
      color: rgb(221 214 254/var(--tw-text-opacity))
    }

    .active\\:text-violet-300:active {
      --tw-text-opacity: 1;
      color: rgb(196 181 253/var(--tw-text-opacity))
    }

    .active\\:text-violet-400:active {
      --tw-text-opacity: 1;
      color: rgb(167 139 250/var(--tw-text-opacity))
    }

    .active\\:text-violet-50:active {
      --tw-text-opacity: 1;
      color: rgb(245 243 255/var(--tw-text-opacity))
    }

    .active\\:text-violet-500:active {
      --tw-text-opacity: 1;
      color: rgb(139 92 246/var(--tw-text-opacity))
    }

    .active\\:text-violet-600:active {
      --tw-text-opacity: 1;
      color: rgb(124 58 237/var(--tw-text-opacity))
    }

    .active\\:text-violet-700:active {
      --tw-text-opacity: 1;
      color: rgb(109 40 217/var(--tw-text-opacity))
    }

    .active\\:text-violet-800:active {
      --tw-text-opacity: 1;
      color: rgb(91 33 182/var(--tw-text-opacity))
    }

    .active\\:text-violet-900:active {
      --tw-text-opacity: 1;
      color: rgb(76 29 149/var(--tw-text-opacity))
    }

    .active\\:text-yellow-100:active {
      --tw-text-opacity: 1;
      color: rgb(254 249 195/var(--tw-text-opacity))
    }

    .active\\:text-yellow-200:active {
      --tw-text-opacity: 1;
      color: rgb(254 240 138/var(--tw-text-opacity))
    }

    .active\\:text-yellow-300:active {
      --tw-text-opacity: 1;
      color: rgb(253 224 71/var(--tw-text-opacity))
    }

    .active\\:text-yellow-400:active {
      --tw-text-opacity: 1;
      color: rgb(250 204 21/var(--tw-text-opacity))
    }

    .active\\:text-yellow-50:active {
      --tw-text-opacity: 1;
      color: rgb(254 252 232/var(--tw-text-opacity))
    }

    .active\\:text-yellow-500:active {
      --tw-text-opacity: 1;
      color: rgb(234 179 8/var(--tw-text-opacity))
    }

    .active\\:text-yellow-600:active {
      --tw-text-opacity: 1;
      color: rgb(202 138 4/var(--tw-text-opacity))
    }

    .active\\:text-yellow-700:active {
      --tw-text-opacity: 1;
      color: rgb(161 98 7/var(--tw-text-opacity))
    }

    .active\\:text-yellow-800:active {
      --tw-text-opacity: 1;
      color: rgb(133 77 14/var(--tw-text-opacity))
    }

    .active\\:text-yellow-900:active {
      --tw-text-opacity: 1;
      color: rgb(113 63 18/var(--tw-text-opacity))
    }

    .active\\:text-zinc-100:active {
      --tw-text-opacity: 1;
      color: rgb(244 244 245/var(--tw-text-opacity))
    }

    .active\\:text-zinc-200:active {
      --tw-text-opacity: 1;
      color: rgb(228 228 231/var(--tw-text-opacity))
    }

    .active\\:text-zinc-300:active {
      --tw-text-opacity: 1;
      color: rgb(212 212 216/var(--tw-text-opacity))
    }

    .active\\:text-zinc-400:active {
      --tw-text-opacity: 1;
      color: rgb(161 161 170/var(--tw-text-opacity))
    }

    .active\\:text-zinc-50:active {
      --tw-text-opacity: 1;
      color: rgb(250 250 250/var(--tw-text-opacity))
    }

    .active\\:text-zinc-500:active {
      --tw-text-opacity: 1;
      color: rgb(113 113 122/var(--tw-text-opacity))
    }

    .active\\:text-zinc-600:active {
      --tw-text-opacity: 1;
      color: rgb(82 82 91/var(--tw-text-opacity))
    }

    .active\\:text-zinc-700:active {
      --tw-text-opacity: 1;
      color: rgb(63 63 70/var(--tw-text-opacity))
    }

    .active\\:text-zinc-800:active {
      --tw-text-opacity: 1;
      color: rgb(39 39 42/var(--tw-text-opacity))
    }

    .active\\:text-zinc-900:active {
      --tw-text-opacity: 1;
      color: rgb(24 24 27/var(--tw-text-opacity))
    }

    .active\\:ring-amber-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 243 199/var(--tw-ring-opacity))
    }

    .active\\:ring-amber-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 230 138/var(--tw-ring-opacity))
    }

    .active\\:ring-amber-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 211 77/var(--tw-ring-opacity))
    }

    .active\\:ring-amber-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 191 36/var(--tw-ring-opacity))
    }

    .active\\:ring-amber-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 251 235/var(--tw-ring-opacity))
    }

    .active\\:ring-amber-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 158 11/var(--tw-ring-opacity))
    }

    .active\\:ring-amber-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 119 6/var(--tw-ring-opacity))
    }

    .active\\:ring-amber-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(180 83 9/var(--tw-ring-opacity))
    }

    .active\\:ring-amber-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(146 64 14/var(--tw-ring-opacity))
    }

    .active\\:ring-amber-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(120 53 15/var(--tw-ring-opacity))
    }

    .active\\:ring-blue-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(219 234 254/var(--tw-ring-opacity))
    }

    .active\\:ring-blue-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(191 219 254/var(--tw-ring-opacity))
    }

    .active\\:ring-blue-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(147 197 253/var(--tw-ring-opacity))
    }

    .active\\:ring-blue-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(96 165 250/var(--tw-ring-opacity))
    }

    .active\\:ring-blue-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(239 246 255/var(--tw-ring-opacity))
    }

    .active\\:ring-blue-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(59 130 246/var(--tw-ring-opacity))
    }

    .active\\:ring-blue-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(37 99 235/var(--tw-ring-opacity))
    }

    .active\\:ring-blue-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(29 78 216/var(--tw-ring-opacity))
    }

    .active\\:ring-blue-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 64 175/var(--tw-ring-opacity))
    }

    .active\\:ring-blue-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 58 138/var(--tw-ring-opacity))
    }

    .active\\:ring-cyan-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(207 250 254/var(--tw-ring-opacity))
    }

    .active\\:ring-cyan-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(165 243 252/var(--tw-ring-opacity))
    }

    .active\\:ring-cyan-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(103 232 249/var(--tw-ring-opacity))
    }

    .active\\:ring-cyan-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(34 211 238/var(--tw-ring-opacity))
    }

    .active\\:ring-cyan-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 254 255/var(--tw-ring-opacity))
    }

    .active\\:ring-cyan-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 182 212/var(--tw-ring-opacity))
    }

    .active\\:ring-cyan-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(8 145 178/var(--tw-ring-opacity))
    }

    .active\\:ring-cyan-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(14 116 144/var(--tw-ring-opacity))
    }

    .active\\:ring-cyan-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(21 94 117/var(--tw-ring-opacity))
    }

    .active\\:ring-cyan-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 78 99/var(--tw-ring-opacity))
    }

    .active\\:ring-emerald-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(209 250 229/var(--tw-ring-opacity))
    }

    .active\\:ring-emerald-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(167 243 208/var(--tw-ring-opacity))
    }

    .active\\:ring-emerald-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(110 231 183/var(--tw-ring-opacity))
    }

    .active\\:ring-emerald-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(52 211 153/var(--tw-ring-opacity))
    }

    .active\\:ring-emerald-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 253 245/var(--tw-ring-opacity))
    }

    .active\\:ring-emerald-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(16 185 129/var(--tw-ring-opacity))
    }

    .active\\:ring-emerald-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(5 150 105/var(--tw-ring-opacity))
    }

    .active\\:ring-emerald-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(4 120 87/var(--tw-ring-opacity))
    }

    .active\\:ring-emerald-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 95 70/var(--tw-ring-opacity))
    }

    .active\\:ring-emerald-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(6 78 59/var(--tw-ring-opacity))
    }

    .active\\:ring-fuchsia-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 232 255/var(--tw-ring-opacity))
    }

    .active\\:ring-fuchsia-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 208 254/var(--tw-ring-opacity))
    }

    .active\\:ring-fuchsia-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 171 252/var(--tw-ring-opacity))
    }

    .active\\:ring-fuchsia-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(232 121 249/var(--tw-ring-opacity))
    }

    .active\\:ring-fuchsia-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 244 255/var(--tw-ring-opacity))
    }

    .active\\:ring-fuchsia-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 70 239/var(--tw-ring-opacity))
    }

    .active\\:ring-fuchsia-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(192 38 211/var(--tw-ring-opacity))
    }

    .active\\:ring-fuchsia-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(162 28 175/var(--tw-ring-opacity))
    }

    .active\\:ring-fuchsia-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(134 25 143/var(--tw-ring-opacity))
    }

    .active\\:ring-fuchsia-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(112 26 117/var(--tw-ring-opacity))
    }

    .active\\:ring-gray-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(243 244 246/var(--tw-ring-opacity))
    }

    .active\\:ring-gray-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(229 231 235/var(--tw-ring-opacity))
    }

    .active\\:ring-gray-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(209 213 219/var(--tw-ring-opacity))
    }

    .active\\:ring-gray-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(156 163 175/var(--tw-ring-opacity))
    }

    .active\\:ring-gray-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 250 251/var(--tw-ring-opacity))
    }

    .active\\:ring-gray-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(107 114 128/var(--tw-ring-opacity))
    }

    .active\\:ring-gray-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(75 85 99/var(--tw-ring-opacity))
    }

    .active\\:ring-gray-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(55 65 81/var(--tw-ring-opacity))
    }

    .active\\:ring-gray-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(31 41 55/var(--tw-ring-opacity))
    }

    .active\\:ring-gray-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(17 24 39/var(--tw-ring-opacity))
    }

    .active\\:ring-green-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(220 252 231/var(--tw-ring-opacity))
    }

    .active\\:ring-green-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(187 247 208/var(--tw-ring-opacity))
    }

    .active\\:ring-green-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(134 239 172/var(--tw-ring-opacity))
    }

    .active\\:ring-green-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(74 222 128/var(--tw-ring-opacity))
    }

    .active\\:ring-green-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 253 244/var(--tw-ring-opacity))
    }

    .active\\:ring-green-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(34 197 94/var(--tw-ring-opacity))
    }

    .active\\:ring-green-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 163 74/var(--tw-ring-opacity))
    }

    .active\\:ring-green-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(21 128 61/var(--tw-ring-opacity))
    }

    .active\\:ring-green-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(22 101 52/var(--tw-ring-opacity))
    }

    .active\\:ring-green-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(20 83 45/var(--tw-ring-opacity))
    }

    .active\\:ring-indigo-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(224 231 255/var(--tw-ring-opacity))
    }

    .active\\:ring-indigo-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(199 210 254/var(--tw-ring-opacity))
    }

    .active\\:ring-indigo-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(165 180 252/var(--tw-ring-opacity))
    }

    .active\\:ring-indigo-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(129 140 248/var(--tw-ring-opacity))
    }

    .active\\:ring-indigo-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(238 242 255/var(--tw-ring-opacity))
    }

    .active\\:ring-indigo-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(99 102 241/var(--tw-ring-opacity))
    }

    .active\\:ring-indigo-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(79 70 229/var(--tw-ring-opacity))
    }

    .active\\:ring-indigo-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(67 56 202/var(--tw-ring-opacity))
    }

    .active\\:ring-indigo-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(55 48 163/var(--tw-ring-opacity))
    }

    .active\\:ring-indigo-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(49 46 129/var(--tw-ring-opacity))
    }

    .active\\:ring-lime-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 252 203/var(--tw-ring-opacity))
    }

    .active\\:ring-lime-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(217 249 157/var(--tw-ring-opacity))
    }

    .active\\:ring-lime-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 242 100/var(--tw-ring-opacity))
    }

    .active\\:ring-lime-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(163 230 53/var(--tw-ring-opacity))
    }

    .active\\:ring-lime-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(247 254 231/var(--tw-ring-opacity))
    }

    .active\\:ring-lime-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(132 204 22/var(--tw-ring-opacity))
    }

    .active\\:ring-lime-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(101 163 13/var(--tw-ring-opacity))
    }

    .active\\:ring-lime-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(77 124 15/var(--tw-ring-opacity))
    }

    .active\\:ring-lime-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(63 98 18/var(--tw-ring-opacity))
    }

    .active\\:ring-lime-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(54 83 20/var(--tw-ring-opacity))
    }

    .active\\:ring-neutral-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 245 245/var(--tw-ring-opacity))
    }

    .active\\:ring-neutral-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(229 229 229/var(--tw-ring-opacity))
    }

    .active\\:ring-neutral-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(212 212 212/var(--tw-ring-opacity))
    }

    .active\\:ring-neutral-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(163 163 163/var(--tw-ring-opacity))
    }

    .active\\:ring-neutral-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 250/var(--tw-ring-opacity))
    }

    .active\\:ring-neutral-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(115 115 115/var(--tw-ring-opacity))
    }

    .active\\:ring-neutral-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(82 82 82/var(--tw-ring-opacity))
    }

    .active\\:ring-neutral-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(64 64 64/var(--tw-ring-opacity))
    }

    .active\\:ring-neutral-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(38 38 38/var(--tw-ring-opacity))
    }

    .active\\:ring-neutral-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(23 23 23/var(--tw-ring-opacity))
    }

    .active\\:ring-orange-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 237 213/var(--tw-ring-opacity))
    }

    .active\\:ring-orange-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 215 170/var(--tw-ring-opacity))
    }

    .active\\:ring-orange-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 186 116/var(--tw-ring-opacity))
    }

    .active\\:ring-orange-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 146 60/var(--tw-ring-opacity))
    }

    .active\\:ring-orange-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 247 237/var(--tw-ring-opacity))
    }

    .active\\:ring-orange-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 115 22/var(--tw-ring-opacity))
    }

    .active\\:ring-orange-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(234 88 12/var(--tw-ring-opacity))
    }

    .active\\:ring-orange-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(194 65 12/var(--tw-ring-opacity))
    }

    .active\\:ring-orange-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(154 52 18/var(--tw-ring-opacity))
    }

    .active\\:ring-orange-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(124 45 18/var(--tw-ring-opacity))
    }

    .active\\:ring-pink-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 231 243/var(--tw-ring-opacity))
    }

    .active\\:ring-pink-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 207 232/var(--tw-ring-opacity))
    }

    .active\\:ring-pink-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(249 168 212/var(--tw-ring-opacity))
    }

    .active\\:ring-pink-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 114 182/var(--tw-ring-opacity))
    }

    .active\\:ring-pink-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 242 248/var(--tw-ring-opacity))
    }

    .active\\:ring-pink-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 72 153/var(--tw-ring-opacity))
    }

    .active\\:ring-pink-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(219 39 119/var(--tw-ring-opacity))
    }

    .active\\:ring-pink-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 24 93/var(--tw-ring-opacity))
    }

    .active\\:ring-pink-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(157 23 77/var(--tw-ring-opacity))
    }

    .active\\:ring-pink-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(131 24 67/var(--tw-ring-opacity))
    }

    .active\\:ring-purple-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(243 232 255/var(--tw-ring-opacity))
    }

    .active\\:ring-purple-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(233 213 255/var(--tw-ring-opacity))
    }

    .active\\:ring-purple-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(216 180 254/var(--tw-ring-opacity))
    }

    .active\\:ring-purple-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(192 132 252/var(--tw-ring-opacity))
    }

    .active\\:ring-purple-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 245 255/var(--tw-ring-opacity))
    }

    .active\\:ring-purple-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(168 85 247/var(--tw-ring-opacity))
    }

    .active\\:ring-purple-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(147 51 234/var(--tw-ring-opacity))
    }

    .active\\:ring-purple-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(126 34 206/var(--tw-ring-opacity))
    }

    .active\\:ring-purple-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(107 33 168/var(--tw-ring-opacity))
    }

    .active\\:ring-purple-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(88 28 135/var(--tw-ring-opacity))
    }

    .active\\:ring-red-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 226 226/var(--tw-ring-opacity))
    }

    .active\\:ring-red-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 202 202/var(--tw-ring-opacity))
    }

    .active\\:ring-red-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(252 165 165/var(--tw-ring-opacity))
    }

    .active\\:ring-red-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(248 113 113/var(--tw-ring-opacity))
    }

    .active\\:ring-red-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 242 242/var(--tw-ring-opacity))
    }

    .active\\:ring-red-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(239 68 68/var(--tw-ring-opacity))
    }

    .active\\:ring-red-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(220 38 38/var(--tw-ring-opacity))
    }

    .active\\:ring-red-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(185 28 28/var(--tw-ring-opacity))
    }

    .active\\:ring-red-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(153 27 27/var(--tw-ring-opacity))
    }

    .active\\:ring-red-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(127 29 29/var(--tw-ring-opacity))
    }

    .active\\:ring-rose-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 228 230/var(--tw-ring-opacity))
    }

    .active\\:ring-rose-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 205 211/var(--tw-ring-opacity))
    }

    .active\\:ring-rose-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 164 175/var(--tw-ring-opacity))
    }

    .active\\:ring-rose-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(251 113 133/var(--tw-ring-opacity))
    }

    .active\\:ring-rose-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(255 241 242/var(--tw-ring-opacity))
    }

    .active\\:ring-rose-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 63 94/var(--tw-ring-opacity))
    }

    .active\\:ring-rose-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(225 29 72/var(--tw-ring-opacity))
    }

    .active\\:ring-rose-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(190 18 60/var(--tw-ring-opacity))
    }

    .active\\:ring-rose-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(159 18 57/var(--tw-ring-opacity))
    }

    .active\\:ring-rose-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(136 19 55/var(--tw-ring-opacity))
    }

    .active\\:ring-sky-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(224 242 254/var(--tw-ring-opacity))
    }

    .active\\:ring-sky-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(186 230 253/var(--tw-ring-opacity))
    }

    .active\\:ring-sky-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(125 211 252/var(--tw-ring-opacity))
    }

    .active\\:ring-sky-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(56 189 248/var(--tw-ring-opacity))
    }

    .active\\:ring-sky-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 249 255/var(--tw-ring-opacity))
    }

    .active\\:ring-sky-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(14 165 233/var(--tw-ring-opacity))
    }

    .active\\:ring-sky-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(2 132 199/var(--tw-ring-opacity))
    }

    .active\\:ring-sky-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(3 105 161/var(--tw-ring-opacity))
    }

    .active\\:ring-sky-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(7 89 133/var(--tw-ring-opacity))
    }

    .active\\:ring-sky-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(12 74 110/var(--tw-ring-opacity))
    }

    .active\\:ring-slate-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(241 245 249/var(--tw-ring-opacity))
    }

    .active\\:ring-slate-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(226 232 240/var(--tw-ring-opacity))
    }

    .active\\:ring-slate-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(203 213 225/var(--tw-ring-opacity))
    }

    .active\\:ring-slate-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(148 163 184/var(--tw-ring-opacity))
    }

    .active\\:ring-slate-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(248 250 252/var(--tw-ring-opacity))
    }

    .active\\:ring-slate-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(100 116 139/var(--tw-ring-opacity))
    }

    .active\\:ring-slate-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(71 85 105/var(--tw-ring-opacity))
    }

    .active\\:ring-slate-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(51 65 85/var(--tw-ring-opacity))
    }

    .active\\:ring-slate-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(30 41 59/var(--tw-ring-opacity))
    }

    .active\\:ring-slate-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(15 23 42/var(--tw-ring-opacity))
    }

    .active\\:ring-stone-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 245 244/var(--tw-ring-opacity))
    }

    .active\\:ring-stone-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(231 229 228/var(--tw-ring-opacity))
    }

    .active\\:ring-stone-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(214 211 209/var(--tw-ring-opacity))
    }

    .active\\:ring-stone-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(168 162 158/var(--tw-ring-opacity))
    }

    .active\\:ring-stone-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 249/var(--tw-ring-opacity))
    }

    .active\\:ring-stone-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(120 113 108/var(--tw-ring-opacity))
    }

    .active\\:ring-stone-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(87 83 78/var(--tw-ring-opacity))
    }

    .active\\:ring-stone-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(68 64 60/var(--tw-ring-opacity))
    }

    .active\\:ring-stone-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(41 37 36/var(--tw-ring-opacity))
    }

    .active\\:ring-stone-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(28 25 23/var(--tw-ring-opacity))
    }

    .active\\:ring-teal-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(204 251 241/var(--tw-ring-opacity))
    }

    .active\\:ring-teal-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(153 246 228/var(--tw-ring-opacity))
    }

    .active\\:ring-teal-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(94 234 212/var(--tw-ring-opacity))
    }

    .active\\:ring-teal-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(45 212 191/var(--tw-ring-opacity))
    }

    .active\\:ring-teal-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(240 253 250/var(--tw-ring-opacity))
    }

    .active\\:ring-teal-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(20 184 166/var(--tw-ring-opacity))
    }

    .active\\:ring-teal-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(13 148 136/var(--tw-ring-opacity))
    }

    .active\\:ring-teal-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(15 118 110/var(--tw-ring-opacity))
    }

    .active\\:ring-teal-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(17 94 89/var(--tw-ring-opacity))
    }

    .active\\:ring-teal-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(19 78 74/var(--tw-ring-opacity))
    }

    .active\\:ring-violet-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(237 233 254/var(--tw-ring-opacity))
    }

    .active\\:ring-violet-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(221 214 254/var(--tw-ring-opacity))
    }

    .active\\:ring-violet-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(196 181 253/var(--tw-ring-opacity))
    }

    .active\\:ring-violet-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(167 139 250/var(--tw-ring-opacity))
    }

    .active\\:ring-violet-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(245 243 255/var(--tw-ring-opacity))
    }

    .active\\:ring-violet-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(139 92 246/var(--tw-ring-opacity))
    }

    .active\\:ring-violet-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(124 58 237/var(--tw-ring-opacity))
    }

    .active\\:ring-violet-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(109 40 217/var(--tw-ring-opacity))
    }

    .active\\:ring-violet-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(91 33 182/var(--tw-ring-opacity))
    }

    .active\\:ring-violet-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(76 29 149/var(--tw-ring-opacity))
    }

    .active\\:ring-yellow-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 249 195/var(--tw-ring-opacity))
    }

    .active\\:ring-yellow-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 240 138/var(--tw-ring-opacity))
    }

    .active\\:ring-yellow-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(253 224 71/var(--tw-ring-opacity))
    }

    .active\\:ring-yellow-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 204 21/var(--tw-ring-opacity))
    }

    .active\\:ring-yellow-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(254 252 232/var(--tw-ring-opacity))
    }

    .active\\:ring-yellow-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(234 179 8/var(--tw-ring-opacity))
    }

    .active\\:ring-yellow-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(202 138 4/var(--tw-ring-opacity))
    }

    .active\\:ring-yellow-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(161 98 7/var(--tw-ring-opacity))
    }

    .active\\:ring-yellow-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(133 77 14/var(--tw-ring-opacity))
    }

    .active\\:ring-yellow-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(113 63 18/var(--tw-ring-opacity))
    }

    .active\\:ring-zinc-100:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(244 244 245/var(--tw-ring-opacity))
    }

    .active\\:ring-zinc-200:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(228 228 231/var(--tw-ring-opacity))
    }

    .active\\:ring-zinc-300:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(212 212 216/var(--tw-ring-opacity))
    }

    .active\\:ring-zinc-400:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(161 161 170/var(--tw-ring-opacity))
    }

    .active\\:ring-zinc-50:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(250 250 250/var(--tw-ring-opacity))
    }

    .active\\:ring-zinc-500:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(113 113 122/var(--tw-ring-opacity))
    }

    .active\\:ring-zinc-600:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(82 82 91/var(--tw-ring-opacity))
    }

    .active\\:ring-zinc-700:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(63 63 70/var(--tw-ring-opacity))
    }

    .active\\:ring-zinc-800:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(39 39 42/var(--tw-ring-opacity))
    }

    .active\\:ring-zinc-900:active {
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(24 24 27/var(--tw-ring-opacity))
    }

    @media (prefers-color-scheme: dark) {
      .dark\\:border-amber-100 {
        --tw-border-opacity: 1;
        border-color: rgb(254 243 199/var(--tw-border-opacity))
      }

      .dark\\:border-amber-200 {
        --tw-border-opacity: 1;
        border-color: rgb(253 230 138/var(--tw-border-opacity))
      }

      .dark\\:border-amber-300 {
        --tw-border-opacity: 1;
        border-color: rgb(252 211 77/var(--tw-border-opacity))
      }

      .dark\\:border-amber-400 {
        --tw-border-opacity: 1;
        border-color: rgb(251 191 36/var(--tw-border-opacity))
      }

      .dark\\:border-amber-50 {
        --tw-border-opacity: 1;
        border-color: rgb(255 251 235/var(--tw-border-opacity))
      }

      .dark\\:border-amber-500 {
        --tw-border-opacity: 1;
        border-color: rgb(245 158 11/var(--tw-border-opacity))
      }

      .dark\\:border-amber-600 {
        --tw-border-opacity: 1;
        border-color: rgb(217 119 6/var(--tw-border-opacity))
      }

      .dark\\:border-amber-700 {
        --tw-border-opacity: 1;
        border-color: rgb(180 83 9/var(--tw-border-opacity))
      }

      .dark\\:border-amber-800 {
        --tw-border-opacity: 1;
        border-color: rgb(146 64 14/var(--tw-border-opacity))
      }

      .dark\\:border-amber-900 {
        --tw-border-opacity: 1;
        border-color: rgb(120 53 15/var(--tw-border-opacity))
      }

      .dark\\:border-blue-100 {
        --tw-border-opacity: 1;
        border-color: rgb(219 234 254/var(--tw-border-opacity))
      }

      .dark\\:border-blue-200 {
        --tw-border-opacity: 1;
        border-color: rgb(191 219 254/var(--tw-border-opacity))
      }

      .dark\\:border-blue-300 {
        --tw-border-opacity: 1;
        border-color: rgb(147 197 253/var(--tw-border-opacity))
      }

      .dark\\:border-blue-400 {
        --tw-border-opacity: 1;
        border-color: rgb(96 165 250/var(--tw-border-opacity))
      }

      .dark\\:border-blue-50 {
        --tw-border-opacity: 1;
        border-color: rgb(239 246 255/var(--tw-border-opacity))
      }

      .dark\\:border-blue-500 {
        --tw-border-opacity: 1;
        border-color: rgb(59 130 246/var(--tw-border-opacity))
      }

      .dark\\:border-blue-600 {
        --tw-border-opacity: 1;
        border-color: rgb(37 99 235/var(--tw-border-opacity))
      }

      .dark\\:border-blue-700 {
        --tw-border-opacity: 1;
        border-color: rgb(29 78 216/var(--tw-border-opacity))
      }

      .dark\\:border-blue-800 {
        --tw-border-opacity: 1;
        border-color: rgb(30 64 175/var(--tw-border-opacity))
      }

      .dark\\:border-blue-900 {
        --tw-border-opacity: 1;
        border-color: rgb(30 58 138/var(--tw-border-opacity))
      }

      .dark\\:border-cyan-100 {
        --tw-border-opacity: 1;
        border-color: rgb(207 250 254/var(--tw-border-opacity))
      }

      .dark\\:border-cyan-200 {
        --tw-border-opacity: 1;
        border-color: rgb(165 243 252/var(--tw-border-opacity))
      }

      .dark\\:border-cyan-300 {
        --tw-border-opacity: 1;
        border-color: rgb(103 232 249/var(--tw-border-opacity))
      }

      .dark\\:border-cyan-400 {
        --tw-border-opacity: 1;
        border-color: rgb(34 211 238/var(--tw-border-opacity))
      }

      .dark\\:border-cyan-50 {
        --tw-border-opacity: 1;
        border-color: rgb(236 254 255/var(--tw-border-opacity))
      }

      .dark\\:border-cyan-500 {
        --tw-border-opacity: 1;
        border-color: rgb(6 182 212/var(--tw-border-opacity))
      }

      .dark\\:border-cyan-600 {
        --tw-border-opacity: 1;
        border-color: rgb(8 145 178/var(--tw-border-opacity))
      }

      .dark\\:border-cyan-700 {
        --tw-border-opacity: 1;
        border-color: rgb(14 116 144/var(--tw-border-opacity))
      }

      .dark\\:border-cyan-800 {
        --tw-border-opacity: 1;
        border-color: rgb(21 94 117/var(--tw-border-opacity))
      }

      .dark\\:border-cyan-900 {
        --tw-border-opacity: 1;
        border-color: rgb(22 78 99/var(--tw-border-opacity))
      }

      .dark\\:border-emerald-100 {
        --tw-border-opacity: 1;
        border-color: rgb(209 250 229/var(--tw-border-opacity))
      }

      .dark\\:border-emerald-200 {
        --tw-border-opacity: 1;
        border-color: rgb(167 243 208/var(--tw-border-opacity))
      }

      .dark\\:border-emerald-300 {
        --tw-border-opacity: 1;
        border-color: rgb(110 231 183/var(--tw-border-opacity))
      }

      .dark\\:border-emerald-400 {
        --tw-border-opacity: 1;
        border-color: rgb(52 211 153/var(--tw-border-opacity))
      }

      .dark\\:border-emerald-50 {
        --tw-border-opacity: 1;
        border-color: rgb(236 253 245/var(--tw-border-opacity))
      }

      .dark\\:border-emerald-500 {
        --tw-border-opacity: 1;
        border-color: rgb(16 185 129/var(--tw-border-opacity))
      }

      .dark\\:border-emerald-600 {
        --tw-border-opacity: 1;
        border-color: rgb(5 150 105/var(--tw-border-opacity))
      }

      .dark\\:border-emerald-700 {
        --tw-border-opacity: 1;
        border-color: rgb(4 120 87/var(--tw-border-opacity))
      }

      .dark\\:border-emerald-800 {
        --tw-border-opacity: 1;
        border-color: rgb(6 95 70/var(--tw-border-opacity))
      }

      .dark\\:border-emerald-900 {
        --tw-border-opacity: 1;
        border-color: rgb(6 78 59/var(--tw-border-opacity))
      }

      .dark\\:border-fuchsia-100 {
        --tw-border-opacity: 1;
        border-color: rgb(250 232 255/var(--tw-border-opacity))
      }

      .dark\\:border-fuchsia-200 {
        --tw-border-opacity: 1;
        border-color: rgb(245 208 254/var(--tw-border-opacity))
      }

      .dark\\:border-fuchsia-300 {
        --tw-border-opacity: 1;
        border-color: rgb(240 171 252/var(--tw-border-opacity))
      }

      .dark\\:border-fuchsia-400 {
        --tw-border-opacity: 1;
        border-color: rgb(232 121 249/var(--tw-border-opacity))
      }

      .dark\\:border-fuchsia-50 {
        --tw-border-opacity: 1;
        border-color: rgb(253 244 255/var(--tw-border-opacity))
      }

      .dark\\:border-fuchsia-500 {
        --tw-border-opacity: 1;
        border-color: rgb(217 70 239/var(--tw-border-opacity))
      }

      .dark\\:border-fuchsia-600 {
        --tw-border-opacity: 1;
        border-color: rgb(192 38 211/var(--tw-border-opacity))
      }

      .dark\\:border-fuchsia-700 {
        --tw-border-opacity: 1;
        border-color: rgb(162 28 175/var(--tw-border-opacity))
      }

      .dark\\:border-fuchsia-800 {
        --tw-border-opacity: 1;
        border-color: rgb(134 25 143/var(--tw-border-opacity))
      }

      .dark\\:border-fuchsia-900 {
        --tw-border-opacity: 1;
        border-color: rgb(112 26 117/var(--tw-border-opacity))
      }

      .dark\\:border-gray-100 {
        --tw-border-opacity: 1;
        border-color: rgb(243 244 246/var(--tw-border-opacity))
      }

      .dark\\:border-gray-200 {
        --tw-border-opacity: 1;
        border-color: rgb(229 231 235/var(--tw-border-opacity))
      }

      .dark\\:border-gray-300 {
        --tw-border-opacity: 1;
        border-color: rgb(209 213 219/var(--tw-border-opacity))
      }

      .dark\\:border-gray-400 {
        --tw-border-opacity: 1;
        border-color: rgb(156 163 175/var(--tw-border-opacity))
      }

      .dark\\:border-gray-50 {
        --tw-border-opacity: 1;
        border-color: rgb(249 250 251/var(--tw-border-opacity))
      }

      .dark\\:border-gray-500 {
        --tw-border-opacity: 1;
        border-color: rgb(107 114 128/var(--tw-border-opacity))
      }

      .dark\\:border-gray-600 {
        --tw-border-opacity: 1;
        border-color: rgb(75 85 99/var(--tw-border-opacity))
      }

      .dark\\:border-gray-700 {
        --tw-border-opacity: 1;
        border-color: rgb(55 65 81/var(--tw-border-opacity))
      }

      .dark\\:border-gray-800 {
        --tw-border-opacity: 1;
        border-color: rgb(31 41 55/var(--tw-border-opacity))
      }

      .dark\\:border-gray-900 {
        --tw-border-opacity: 1;
        border-color: rgb(17 24 39/var(--tw-border-opacity))
      }

      .dark\\:border-green-100 {
        --tw-border-opacity: 1;
        border-color: rgb(220 252 231/var(--tw-border-opacity))
      }

      .dark\\:border-green-200 {
        --tw-border-opacity: 1;
        border-color: rgb(187 247 208/var(--tw-border-opacity))
      }

      .dark\\:border-green-300 {
        --tw-border-opacity: 1;
        border-color: rgb(134 239 172/var(--tw-border-opacity))
      }

      .dark\\:border-green-400 {
        --tw-border-opacity: 1;
        border-color: rgb(74 222 128/var(--tw-border-opacity))
      }

      .dark\\:border-green-50 {
        --tw-border-opacity: 1;
        border-color: rgb(240 253 244/var(--tw-border-opacity))
      }

      .dark\\:border-green-500 {
        --tw-border-opacity: 1;
        border-color: rgb(34 197 94/var(--tw-border-opacity))
      }

      .dark\\:border-green-600 {
        --tw-border-opacity: 1;
        border-color: rgb(22 163 74/var(--tw-border-opacity))
      }

      .dark\\:border-green-700 {
        --tw-border-opacity: 1;
        border-color: rgb(21 128 61/var(--tw-border-opacity))
      }

      .dark\\:border-green-800 {
        --tw-border-opacity: 1;
        border-color: rgb(22 101 52/var(--tw-border-opacity))
      }

      .dark\\:border-green-900 {
        --tw-border-opacity: 1;
        border-color: rgb(20 83 45/var(--tw-border-opacity))
      }

      .dark\\:border-indigo-100 {
        --tw-border-opacity: 1;
        border-color: rgb(224 231 255/var(--tw-border-opacity))
      }

      .dark\\:border-indigo-200 {
        --tw-border-opacity: 1;
        border-color: rgb(199 210 254/var(--tw-border-opacity))
      }

      .dark\\:border-indigo-300 {
        --tw-border-opacity: 1;
        border-color: rgb(165 180 252/var(--tw-border-opacity))
      }

      .dark\\:border-indigo-400 {
        --tw-border-opacity: 1;
        border-color: rgb(129 140 248/var(--tw-border-opacity))
      }

      .dark\\:border-indigo-50 {
        --tw-border-opacity: 1;
        border-color: rgb(238 242 255/var(--tw-border-opacity))
      }

      .dark\\:border-indigo-500 {
        --tw-border-opacity: 1;
        border-color: rgb(99 102 241/var(--tw-border-opacity))
      }

      .dark\\:border-indigo-600 {
        --tw-border-opacity: 1;
        border-color: rgb(79 70 229/var(--tw-border-opacity))
      }

      .dark\\:border-indigo-700 {
        --tw-border-opacity: 1;
        border-color: rgb(67 56 202/var(--tw-border-opacity))
      }

      .dark\\:border-indigo-800 {
        --tw-border-opacity: 1;
        border-color: rgb(55 48 163/var(--tw-border-opacity))
      }

      .dark\\:border-indigo-900 {
        --tw-border-opacity: 1;
        border-color: rgb(49 46 129/var(--tw-border-opacity))
      }

      .dark\\:border-lime-100 {
        --tw-border-opacity: 1;
        border-color: rgb(236 252 203/var(--tw-border-opacity))
      }

      .dark\\:border-lime-200 {
        --tw-border-opacity: 1;
        border-color: rgb(217 249 157/var(--tw-border-opacity))
      }

      .dark\\:border-lime-300 {
        --tw-border-opacity: 1;
        border-color: rgb(190 242 100/var(--tw-border-opacity))
      }

      .dark\\:border-lime-400 {
        --tw-border-opacity: 1;
        border-color: rgb(163 230 53/var(--tw-border-opacity))
      }

      .dark\\:border-lime-50 {
        --tw-border-opacity: 1;
        border-color: rgb(247 254 231/var(--tw-border-opacity))
      }

      .dark\\:border-lime-500 {
        --tw-border-opacity: 1;
        border-color: rgb(132 204 22/var(--tw-border-opacity))
      }

      .dark\\:border-lime-600 {
        --tw-border-opacity: 1;
        border-color: rgb(101 163 13/var(--tw-border-opacity))
      }

      .dark\\:border-lime-700 {
        --tw-border-opacity: 1;
        border-color: rgb(77 124 15/var(--tw-border-opacity))
      }

      .dark\\:border-lime-800 {
        --tw-border-opacity: 1;
        border-color: rgb(63 98 18/var(--tw-border-opacity))
      }

      .dark\\:border-lime-900 {
        --tw-border-opacity: 1;
        border-color: rgb(54 83 20/var(--tw-border-opacity))
      }

      .dark\\:border-neutral-100 {
        --tw-border-opacity: 1;
        border-color: rgb(245 245 245/var(--tw-border-opacity))
      }

      .dark\\:border-neutral-200 {
        --tw-border-opacity: 1;
        border-color: rgb(229 229 229/var(--tw-border-opacity))
      }

      .dark\\:border-neutral-300 {
        --tw-border-opacity: 1;
        border-color: rgb(212 212 212/var(--tw-border-opacity))
      }

      .dark\\:border-neutral-400 {
        --tw-border-opacity: 1;
        border-color: rgb(163 163 163/var(--tw-border-opacity))
      }

      .dark\\:border-neutral-50 {
        --tw-border-opacity: 1;
        border-color: rgb(250 250 250/var(--tw-border-opacity))
      }

      .dark\\:border-neutral-500 {
        --tw-border-opacity: 1;
        border-color: rgb(115 115 115/var(--tw-border-opacity))
      }

      .dark\\:border-neutral-600 {
        --tw-border-opacity: 1;
        border-color: rgb(82 82 82/var(--tw-border-opacity))
      }

      .dark\\:border-neutral-700 {
        --tw-border-opacity: 1;
        border-color: rgb(64 64 64/var(--tw-border-opacity))
      }

      .dark\\:border-neutral-800 {
        --tw-border-opacity: 1;
        border-color: rgb(38 38 38/var(--tw-border-opacity))
      }

      .dark\\:border-neutral-900 {
        --tw-border-opacity: 1;
        border-color: rgb(23 23 23/var(--tw-border-opacity))
      }

      .dark\\:border-orange-100 {
        --tw-border-opacity: 1;
        border-color: rgb(255 237 213/var(--tw-border-opacity))
      }

      .dark\\:border-orange-200 {
        --tw-border-opacity: 1;
        border-color: rgb(254 215 170/var(--tw-border-opacity))
      }

      .dark\\:border-orange-300 {
        --tw-border-opacity: 1;
        border-color: rgb(253 186 116/var(--tw-border-opacity))
      }

      .dark\\:border-orange-400 {
        --tw-border-opacity: 1;
        border-color: rgb(251 146 60/var(--tw-border-opacity))
      }

      .dark\\:border-orange-50 {
        --tw-border-opacity: 1;
        border-color: rgb(255 247 237/var(--tw-border-opacity))
      }

      .dark\\:border-orange-500 {
        --tw-border-opacity: 1;
        border-color: rgb(249 115 22/var(--tw-border-opacity))
      }

      .dark\\:border-orange-600 {
        --tw-border-opacity: 1;
        border-color: rgb(234 88 12/var(--tw-border-opacity))
      }

      .dark\\:border-orange-700 {
        --tw-border-opacity: 1;
        border-color: rgb(194 65 12/var(--tw-border-opacity))
      }

      .dark\\:border-orange-800 {
        --tw-border-opacity: 1;
        border-color: rgb(154 52 18/var(--tw-border-opacity))
      }

      .dark\\:border-orange-900 {
        --tw-border-opacity: 1;
        border-color: rgb(124 45 18/var(--tw-border-opacity))
      }

      .dark\\:border-pink-100 {
        --tw-border-opacity: 1;
        border-color: rgb(252 231 243/var(--tw-border-opacity))
      }

      .dark\\:border-pink-200 {
        --tw-border-opacity: 1;
        border-color: rgb(251 207 232/var(--tw-border-opacity))
      }

      .dark\\:border-pink-300 {
        --tw-border-opacity: 1;
        border-color: rgb(249 168 212/var(--tw-border-opacity))
      }

      .dark\\:border-pink-400 {
        --tw-border-opacity: 1;
        border-color: rgb(244 114 182/var(--tw-border-opacity))
      }

      .dark\\:border-pink-50 {
        --tw-border-opacity: 1;
        border-color: rgb(253 242 248/var(--tw-border-opacity))
      }

      .dark\\:border-pink-500 {
        --tw-border-opacity: 1;
        border-color: rgb(236 72 153/var(--tw-border-opacity))
      }

      .dark\\:border-pink-600 {
        --tw-border-opacity: 1;
        border-color: rgb(219 39 119/var(--tw-border-opacity))
      }

      .dark\\:border-pink-700 {
        --tw-border-opacity: 1;
        border-color: rgb(190 24 93/var(--tw-border-opacity))
      }

      .dark\\:border-pink-800 {
        --tw-border-opacity: 1;
        border-color: rgb(157 23 77/var(--tw-border-opacity))
      }

      .dark\\:border-pink-900 {
        --tw-border-opacity: 1;
        border-color: rgb(131 24 67/var(--tw-border-opacity))
      }

      .dark\\:border-purple-100 {
        --tw-border-opacity: 1;
        border-color: rgb(243 232 255/var(--tw-border-opacity))
      }

      .dark\\:border-purple-200 {
        --tw-border-opacity: 1;
        border-color: rgb(233 213 255/var(--tw-border-opacity))
      }

      .dark\\:border-purple-300 {
        --tw-border-opacity: 1;
        border-color: rgb(216 180 254/var(--tw-border-opacity))
      }

      .dark\\:border-purple-400 {
        --tw-border-opacity: 1;
        border-color: rgb(192 132 252/var(--tw-border-opacity))
      }

      .dark\\:border-purple-50 {
        --tw-border-opacity: 1;
        border-color: rgb(250 245 255/var(--tw-border-opacity))
      }

      .dark\\:border-purple-500 {
        --tw-border-opacity: 1;
        border-color: rgb(168 85 247/var(--tw-border-opacity))
      }

      .dark\\:border-purple-600 {
        --tw-border-opacity: 1;
        border-color: rgb(147 51 234/var(--tw-border-opacity))
      }

      .dark\\:border-purple-700 {
        --tw-border-opacity: 1;
        border-color: rgb(126 34 206/var(--tw-border-opacity))
      }

      .dark\\:border-purple-800 {
        --tw-border-opacity: 1;
        border-color: rgb(107 33 168/var(--tw-border-opacity))
      }

      .dark\\:border-purple-900 {
        --tw-border-opacity: 1;
        border-color: rgb(88 28 135/var(--tw-border-opacity))
      }

      .dark\\:border-red-100 {
        --tw-border-opacity: 1;
        border-color: rgb(254 226 226/var(--tw-border-opacity))
      }

      .dark\\:border-red-200 {
        --tw-border-opacity: 1;
        border-color: rgb(254 202 202/var(--tw-border-opacity))
      }

      .dark\\:border-red-300 {
        --tw-border-opacity: 1;
        border-color: rgb(252 165 165/var(--tw-border-opacity))
      }

      .dark\\:border-red-400 {
        --tw-border-opacity: 1;
        border-color: rgb(248 113 113/var(--tw-border-opacity))
      }

      .dark\\:border-red-50 {
        --tw-border-opacity: 1;
        border-color: rgb(254 242 242/var(--tw-border-opacity))
      }

      .dark\\:border-red-500 {
        --tw-border-opacity: 1;
        border-color: rgb(239 68 68/var(--tw-border-opacity))
      }

      .dark\\:border-red-600 {
        --tw-border-opacity: 1;
        border-color: rgb(220 38 38/var(--tw-border-opacity))
      }

      .dark\\:border-red-700 {
        --tw-border-opacity: 1;
        border-color: rgb(185 28 28/var(--tw-border-opacity))
      }

      .dark\\:border-red-800 {
        --tw-border-opacity: 1;
        border-color: rgb(153 27 27/var(--tw-border-opacity))
      }

      .dark\\:border-red-900 {
        --tw-border-opacity: 1;
        border-color: rgb(127 29 29/var(--tw-border-opacity))
      }

      .dark\\:border-rose-100 {
        --tw-border-opacity: 1;
        border-color: rgb(255 228 230/var(--tw-border-opacity))
      }

      .dark\\:border-rose-200 {
        --tw-border-opacity: 1;
        border-color: rgb(254 205 211/var(--tw-border-opacity))
      }

      .dark\\:border-rose-300 {
        --tw-border-opacity: 1;
        border-color: rgb(253 164 175/var(--tw-border-opacity))
      }

      .dark\\:border-rose-400 {
        --tw-border-opacity: 1;
        border-color: rgb(251 113 133/var(--tw-border-opacity))
      }

      .dark\\:border-rose-50 {
        --tw-border-opacity: 1;
        border-color: rgb(255 241 242/var(--tw-border-opacity))
      }

      .dark\\:border-rose-500 {
        --tw-border-opacity: 1;
        border-color: rgb(244 63 94/var(--tw-border-opacity))
      }

      .dark\\:border-rose-600 {
        --tw-border-opacity: 1;
        border-color: rgb(225 29 72/var(--tw-border-opacity))
      }

      .dark\\:border-rose-700 {
        --tw-border-opacity: 1;
        border-color: rgb(190 18 60/var(--tw-border-opacity))
      }

      .dark\\:border-rose-800 {
        --tw-border-opacity: 1;
        border-color: rgb(159 18 57/var(--tw-border-opacity))
      }

      .dark\\:border-rose-900 {
        --tw-border-opacity: 1;
        border-color: rgb(136 19 55/var(--tw-border-opacity))
      }

      .dark\\:border-sky-100 {
        --tw-border-opacity: 1;
        border-color: rgb(224 242 254/var(--tw-border-opacity))
      }

      .dark\\:border-sky-200 {
        --tw-border-opacity: 1;
        border-color: rgb(186 230 253/var(--tw-border-opacity))
      }

      .dark\\:border-sky-300 {
        --tw-border-opacity: 1;
        border-color: rgb(125 211 252/var(--tw-border-opacity))
      }

      .dark\\:border-sky-400 {
        --tw-border-opacity: 1;
        border-color: rgb(56 189 248/var(--tw-border-opacity))
      }

      .dark\\:border-sky-50 {
        --tw-border-opacity: 1;
        border-color: rgb(240 249 255/var(--tw-border-opacity))
      }

      .dark\\:border-sky-500 {
        --tw-border-opacity: 1;
        border-color: rgb(14 165 233/var(--tw-border-opacity))
      }

      .dark\\:border-sky-600 {
        --tw-border-opacity: 1;
        border-color: rgb(2 132 199/var(--tw-border-opacity))
      }

      .dark\\:border-sky-700 {
        --tw-border-opacity: 1;
        border-color: rgb(3 105 161/var(--tw-border-opacity))
      }

      .dark\\:border-sky-800 {
        --tw-border-opacity: 1;
        border-color: rgb(7 89 133/var(--tw-border-opacity))
      }

      .dark\\:border-sky-900 {
        --tw-border-opacity: 1;
        border-color: rgb(12 74 110/var(--tw-border-opacity))
      }

      .dark\\:border-slate-100 {
        --tw-border-opacity: 1;
        border-color: rgb(241 245 249/var(--tw-border-opacity))
      }

      .dark\\:border-slate-200 {
        --tw-border-opacity: 1;
        border-color: rgb(226 232 240/var(--tw-border-opacity))
      }

      .dark\\:border-slate-300 {
        --tw-border-opacity: 1;
        border-color: rgb(203 213 225/var(--tw-border-opacity))
      }

      .dark\\:border-slate-400 {
        --tw-border-opacity: 1;
        border-color: rgb(148 163 184/var(--tw-border-opacity))
      }

      .dark\\:border-slate-50 {
        --tw-border-opacity: 1;
        border-color: rgb(248 250 252/var(--tw-border-opacity))
      }

      .dark\\:border-slate-500 {
        --tw-border-opacity: 1;
        border-color: rgb(100 116 139/var(--tw-border-opacity))
      }

      .dark\\:border-slate-600 {
        --tw-border-opacity: 1;
        border-color: rgb(71 85 105/var(--tw-border-opacity))
      }

      .dark\\:border-slate-700 {
        --tw-border-opacity: 1;
        border-color: rgb(51 65 85/var(--tw-border-opacity))
      }

      .dark\\:border-slate-800 {
        --tw-border-opacity: 1;
        border-color: rgb(30 41 59/var(--tw-border-opacity))
      }

      .dark\\:border-slate-900 {
        --tw-border-opacity: 1;
        border-color: rgb(15 23 42/var(--tw-border-opacity))
      }

      .dark\\:border-stone-100 {
        --tw-border-opacity: 1;
        border-color: rgb(245 245 244/var(--tw-border-opacity))
      }

      .dark\\:border-stone-200 {
        --tw-border-opacity: 1;
        border-color: rgb(231 229 228/var(--tw-border-opacity))
      }

      .dark\\:border-stone-300 {
        --tw-border-opacity: 1;
        border-color: rgb(214 211 209/var(--tw-border-opacity))
      }

      .dark\\:border-stone-400 {
        --tw-border-opacity: 1;
        border-color: rgb(168 162 158/var(--tw-border-opacity))
      }

      .dark\\:border-stone-50 {
        --tw-border-opacity: 1;
        border-color: rgb(250 250 249/var(--tw-border-opacity))
      }

      .dark\\:border-stone-500 {
        --tw-border-opacity: 1;
        border-color: rgb(120 113 108/var(--tw-border-opacity))
      }

      .dark\\:border-stone-600 {
        --tw-border-opacity: 1;
        border-color: rgb(87 83 78/var(--tw-border-opacity))
      }

      .dark\\:border-stone-700 {
        --tw-border-opacity: 1;
        border-color: rgb(68 64 60/var(--tw-border-opacity))
      }

      .dark\\:border-stone-800 {
        --tw-border-opacity: 1;
        border-color: rgb(41 37 36/var(--tw-border-opacity))
      }

      .dark\\:border-stone-900 {
        --tw-border-opacity: 1;
        border-color: rgb(28 25 23/var(--tw-border-opacity))
      }

      .dark\\:border-teal-100 {
        --tw-border-opacity: 1;
        border-color: rgb(204 251 241/var(--tw-border-opacity))
      }

      .dark\\:border-teal-200 {
        --tw-border-opacity: 1;
        border-color: rgb(153 246 228/var(--tw-border-opacity))
      }

      .dark\\:border-teal-300 {
        --tw-border-opacity: 1;
        border-color: rgb(94 234 212/var(--tw-border-opacity))
      }

      .dark\\:border-teal-400 {
        --tw-border-opacity: 1;
        border-color: rgb(45 212 191/var(--tw-border-opacity))
      }

      .dark\\:border-teal-50 {
        --tw-border-opacity: 1;
        border-color: rgb(240 253 250/var(--tw-border-opacity))
      }

      .dark\\:border-teal-500 {
        --tw-border-opacity: 1;
        border-color: rgb(20 184 166/var(--tw-border-opacity))
      }

      .dark\\:border-teal-600 {
        --tw-border-opacity: 1;
        border-color: rgb(13 148 136/var(--tw-border-opacity))
      }

      .dark\\:border-teal-700 {
        --tw-border-opacity: 1;
        border-color: rgb(15 118 110/var(--tw-border-opacity))
      }

      .dark\\:border-teal-800 {
        --tw-border-opacity: 1;
        border-color: rgb(17 94 89/var(--tw-border-opacity))
      }

      .dark\\:border-teal-900 {
        --tw-border-opacity: 1;
        border-color: rgb(19 78 74/var(--tw-border-opacity))
      }

      .dark\\:border-violet-100 {
        --tw-border-opacity: 1;
        border-color: rgb(237 233 254/var(--tw-border-opacity))
      }

      .dark\\:border-violet-200 {
        --tw-border-opacity: 1;
        border-color: rgb(221 214 254/var(--tw-border-opacity))
      }

      .dark\\:border-violet-300 {
        --tw-border-opacity: 1;
        border-color: rgb(196 181 253/var(--tw-border-opacity))
      }

      .dark\\:border-violet-400 {
        --tw-border-opacity: 1;
        border-color: rgb(167 139 250/var(--tw-border-opacity))
      }

      .dark\\:border-violet-50 {
        --tw-border-opacity: 1;
        border-color: rgb(245 243 255/var(--tw-border-opacity))
      }

      .dark\\:border-violet-500 {
        --tw-border-opacity: 1;
        border-color: rgb(139 92 246/var(--tw-border-opacity))
      }

      .dark\\:border-violet-600 {
        --tw-border-opacity: 1;
        border-color: rgb(124 58 237/var(--tw-border-opacity))
      }

      .dark\\:border-violet-700 {
        --tw-border-opacity: 1;
        border-color: rgb(109 40 217/var(--tw-border-opacity))
      }

      .dark\\:border-violet-800 {
        --tw-border-opacity: 1;
        border-color: rgb(91 33 182/var(--tw-border-opacity))
      }

      .dark\\:border-violet-900 {
        --tw-border-opacity: 1;
        border-color: rgb(76 29 149/var(--tw-border-opacity))
      }

      .dark\\:border-yellow-100 {
        --tw-border-opacity: 1;
        border-color: rgb(254 249 195/var(--tw-border-opacity))
      }

      .dark\\:border-yellow-200 {
        --tw-border-opacity: 1;
        border-color: rgb(254 240 138/var(--tw-border-opacity))
      }

      .dark\\:border-yellow-300 {
        --tw-border-opacity: 1;
        border-color: rgb(253 224 71/var(--tw-border-opacity))
      }

      .dark\\:border-yellow-400 {
        --tw-border-opacity: 1;
        border-color: rgb(250 204 21/var(--tw-border-opacity))
      }

      .dark\\:border-yellow-50 {
        --tw-border-opacity: 1;
        border-color: rgb(254 252 232/var(--tw-border-opacity))
      }

      .dark\\:border-yellow-500 {
        --tw-border-opacity: 1;
        border-color: rgb(234 179 8/var(--tw-border-opacity))
      }

      .dark\\:border-yellow-600 {
        --tw-border-opacity: 1;
        border-color: rgb(202 138 4/var(--tw-border-opacity))
      }

      .dark\\:border-yellow-700 {
        --tw-border-opacity: 1;
        border-color: rgb(161 98 7/var(--tw-border-opacity))
      }

      .dark\\:border-yellow-800 {
        --tw-border-opacity: 1;
        border-color: rgb(133 77 14/var(--tw-border-opacity))
      }

      .dark\\:border-yellow-900 {
        --tw-border-opacity: 1;
        border-color: rgb(113 63 18/var(--tw-border-opacity))
      }

      .dark\\:border-zinc-100 {
        --tw-border-opacity: 1;
        border-color: rgb(244 244 245/var(--tw-border-opacity))
      }

      .dark\\:border-zinc-200 {
        --tw-border-opacity: 1;
        border-color: rgb(228 228 231/var(--tw-border-opacity))
      }

      .dark\\:border-zinc-300 {
        --tw-border-opacity: 1;
        border-color: rgb(212 212 216/var(--tw-border-opacity))
      }

      .dark\\:border-zinc-400 {
        --tw-border-opacity: 1;
        border-color: rgb(161 161 170/var(--tw-border-opacity))
      }

      .dark\\:border-zinc-50 {
        --tw-border-opacity: 1;
        border-color: rgb(250 250 250/var(--tw-border-opacity))
      }

      .dark\\:border-zinc-500 {
        --tw-border-opacity: 1;
        border-color: rgb(113 113 122/var(--tw-border-opacity))
      }

      .dark\\:border-zinc-600 {
        --tw-border-opacity: 1;
        border-color: rgb(82 82 91/var(--tw-border-opacity))
      }

      .dark\\:border-zinc-700 {
        --tw-border-opacity: 1;
        border-color: rgb(63 63 70/var(--tw-border-opacity))
      }

      .dark\\:border-zinc-800 {
        --tw-border-opacity: 1;
        border-color: rgb(39 39 42/var(--tw-border-opacity))
      }

      .dark\\:border-zinc-900 {
        --tw-border-opacity: 1;
        border-color: rgb(24 24 27/var(--tw-border-opacity))
      }

      .dark\\:bg-amber-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 243 199/var(--tw-bg-opacity))
      }

      .dark\\:bg-amber-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 230 138/var(--tw-bg-opacity))
      }

      .dark\\:bg-amber-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(252 211 77/var(--tw-bg-opacity))
      }

      .dark\\:bg-amber-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(251 191 36/var(--tw-bg-opacity))
      }

      .dark\\:bg-amber-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(255 251 235/var(--tw-bg-opacity))
      }

      .dark\\:bg-amber-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(245 158 11/var(--tw-bg-opacity))
      }

      .dark\\:bg-amber-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(217 119 6/var(--tw-bg-opacity))
      }

      .dark\\:bg-amber-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(180 83 9/var(--tw-bg-opacity))
      }

      .dark\\:bg-amber-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(146 64 14/var(--tw-bg-opacity))
      }

      .dark\\:bg-amber-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(120 53 15/var(--tw-bg-opacity))
      }

      .dark\\:bg-blue-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(219 234 254/var(--tw-bg-opacity))
      }

      .dark\\:bg-blue-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(191 219 254/var(--tw-bg-opacity))
      }

      .dark\\:bg-blue-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(147 197 253/var(--tw-bg-opacity))
      }

      .dark\\:bg-blue-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(96 165 250/var(--tw-bg-opacity))
      }

      .dark\\:bg-blue-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(239 246 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-blue-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(59 130 246/var(--tw-bg-opacity))
      }

      .dark\\:bg-blue-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(37 99 235/var(--tw-bg-opacity))
      }

      .dark\\:bg-blue-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(29 78 216/var(--tw-bg-opacity))
      }

      .dark\\:bg-blue-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(30 64 175/var(--tw-bg-opacity))
      }

      .dark\\:bg-blue-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(30 58 138/var(--tw-bg-opacity))
      }

      .dark\\:bg-cyan-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(207 250 254/var(--tw-bg-opacity))
      }

      .dark\\:bg-cyan-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(165 243 252/var(--tw-bg-opacity))
      }

      .dark\\:bg-cyan-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(103 232 249/var(--tw-bg-opacity))
      }

      .dark\\:bg-cyan-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(34 211 238/var(--tw-bg-opacity))
      }

      .dark\\:bg-cyan-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(236 254 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-cyan-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(6 182 212/var(--tw-bg-opacity))
      }

      .dark\\:bg-cyan-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(8 145 178/var(--tw-bg-opacity))
      }

      .dark\\:bg-cyan-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(14 116 144/var(--tw-bg-opacity))
      }

      .dark\\:bg-cyan-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(21 94 117/var(--tw-bg-opacity))
      }

      .dark\\:bg-cyan-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(22 78 99/var(--tw-bg-opacity))
      }

      .dark\\:bg-emerald-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(209 250 229/var(--tw-bg-opacity))
      }

      .dark\\:bg-emerald-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(167 243 208/var(--tw-bg-opacity))
      }

      .dark\\:bg-emerald-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(110 231 183/var(--tw-bg-opacity))
      }

      .dark\\:bg-emerald-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(52 211 153/var(--tw-bg-opacity))
      }

      .dark\\:bg-emerald-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(236 253 245/var(--tw-bg-opacity))
      }

      .dark\\:bg-emerald-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(16 185 129/var(--tw-bg-opacity))
      }

      .dark\\:bg-emerald-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(5 150 105/var(--tw-bg-opacity))
      }

      .dark\\:bg-emerald-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(4 120 87/var(--tw-bg-opacity))
      }

      .dark\\:bg-emerald-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(6 95 70/var(--tw-bg-opacity))
      }

      .dark\\:bg-emerald-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(6 78 59/var(--tw-bg-opacity))
      }

      .dark\\:bg-fuchsia-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(250 232 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-fuchsia-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(245 208 254/var(--tw-bg-opacity))
      }

      .dark\\:bg-fuchsia-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(240 171 252/var(--tw-bg-opacity))
      }

      .dark\\:bg-fuchsia-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(232 121 249/var(--tw-bg-opacity))
      }

      .dark\\:bg-fuchsia-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 244 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-fuchsia-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(217 70 239/var(--tw-bg-opacity))
      }

      .dark\\:bg-fuchsia-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(192 38 211/var(--tw-bg-opacity))
      }

      .dark\\:bg-fuchsia-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(162 28 175/var(--tw-bg-opacity))
      }

      .dark\\:bg-fuchsia-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(134 25 143/var(--tw-bg-opacity))
      }

      .dark\\:bg-fuchsia-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(112 26 117/var(--tw-bg-opacity))
      }

      .dark\\:bg-gray-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(243 244 246/var(--tw-bg-opacity))
      }

      .dark\\:bg-gray-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(229 231 235/var(--tw-bg-opacity))
      }

      .dark\\:bg-gray-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(209 213 219/var(--tw-bg-opacity))
      }

      .dark\\:bg-gray-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(156 163 175/var(--tw-bg-opacity))
      }

      .dark\\:bg-gray-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(249 250 251/var(--tw-bg-opacity))
      }

      .dark\\:bg-gray-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(107 114 128/var(--tw-bg-opacity))
      }

      .dark\\:bg-gray-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(75 85 99/var(--tw-bg-opacity))
      }

      .dark\\:bg-gray-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(55 65 81/var(--tw-bg-opacity))
      }

      .dark\\:bg-gray-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(31 41 55/var(--tw-bg-opacity))
      }

      .dark\\:bg-gray-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(17 24 39/var(--tw-bg-opacity))
      }

      .dark\\:bg-green-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(220 252 231/var(--tw-bg-opacity))
      }

      .dark\\:bg-green-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(187 247 208/var(--tw-bg-opacity))
      }

      .dark\\:bg-green-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(134 239 172/var(--tw-bg-opacity))
      }

      .dark\\:bg-green-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(74 222 128/var(--tw-bg-opacity))
      }

      .dark\\:bg-green-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(240 253 244/var(--tw-bg-opacity))
      }

      .dark\\:bg-green-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(34 197 94/var(--tw-bg-opacity))
      }

      .dark\\:bg-green-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(22 163 74/var(--tw-bg-opacity))
      }

      .dark\\:bg-green-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(21 128 61/var(--tw-bg-opacity))
      }

      .dark\\:bg-green-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(22 101 52/var(--tw-bg-opacity))
      }

      .dark\\:bg-green-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(20 83 45/var(--tw-bg-opacity))
      }

      .dark\\:bg-indigo-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(224 231 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-indigo-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(199 210 254/var(--tw-bg-opacity))
      }

      .dark\\:bg-indigo-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(165 180 252/var(--tw-bg-opacity))
      }

      .dark\\:bg-indigo-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(129 140 248/var(--tw-bg-opacity))
      }

      .dark\\:bg-indigo-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(238 242 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-indigo-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(99 102 241/var(--tw-bg-opacity))
      }

      .dark\\:bg-indigo-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(79 70 229/var(--tw-bg-opacity))
      }

      .dark\\:bg-indigo-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(67 56 202/var(--tw-bg-opacity))
      }

      .dark\\:bg-indigo-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(55 48 163/var(--tw-bg-opacity))
      }

      .dark\\:bg-indigo-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(49 46 129/var(--tw-bg-opacity))
      }

      .dark\\:bg-lime-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(236 252 203/var(--tw-bg-opacity))
      }

      .dark\\:bg-lime-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(217 249 157/var(--tw-bg-opacity))
      }

      .dark\\:bg-lime-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(190 242 100/var(--tw-bg-opacity))
      }

      .dark\\:bg-lime-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(163 230 53/var(--tw-bg-opacity))
      }

      .dark\\:bg-lime-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(247 254 231/var(--tw-bg-opacity))
      }

      .dark\\:bg-lime-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(132 204 22/var(--tw-bg-opacity))
      }

      .dark\\:bg-lime-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(101 163 13/var(--tw-bg-opacity))
      }

      .dark\\:bg-lime-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(77 124 15/var(--tw-bg-opacity))
      }

      .dark\\:bg-lime-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(63 98 18/var(--tw-bg-opacity))
      }

      .dark\\:bg-lime-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(54 83 20/var(--tw-bg-opacity))
      }

      .dark\\:bg-neutral-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(245 245 245/var(--tw-bg-opacity))
      }

      .dark\\:bg-neutral-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(229 229 229/var(--tw-bg-opacity))
      }

      .dark\\:bg-neutral-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(212 212 212/var(--tw-bg-opacity))
      }

      .dark\\:bg-neutral-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(163 163 163/var(--tw-bg-opacity))
      }

      .dark\\:bg-neutral-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(250 250 250/var(--tw-bg-opacity))
      }

      .dark\\:bg-neutral-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(115 115 115/var(--tw-bg-opacity))
      }

      .dark\\:bg-neutral-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(82 82 82/var(--tw-bg-opacity))
      }

      .dark\\:bg-neutral-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(64 64 64/var(--tw-bg-opacity))
      }

      .dark\\:bg-neutral-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(38 38 38/var(--tw-bg-opacity))
      }

      .dark\\:bg-neutral-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(23 23 23/var(--tw-bg-opacity))
      }

      .dark\\:bg-orange-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(255 237 213/var(--tw-bg-opacity))
      }

      .dark\\:bg-orange-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 215 170/var(--tw-bg-opacity))
      }

      .dark\\:bg-orange-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 186 116/var(--tw-bg-opacity))
      }

      .dark\\:bg-orange-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(251 146 60/var(--tw-bg-opacity))
      }

      .dark\\:bg-orange-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(255 247 237/var(--tw-bg-opacity))
      }

      .dark\\:bg-orange-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(249 115 22/var(--tw-bg-opacity))
      }

      .dark\\:bg-orange-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(234 88 12/var(--tw-bg-opacity))
      }

      .dark\\:bg-orange-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(194 65 12/var(--tw-bg-opacity))
      }

      .dark\\:bg-orange-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(154 52 18/var(--tw-bg-opacity))
      }

      .dark\\:bg-orange-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(124 45 18/var(--tw-bg-opacity))
      }

      .dark\\:bg-pink-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(252 231 243/var(--tw-bg-opacity))
      }

      .dark\\:bg-pink-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(251 207 232/var(--tw-bg-opacity))
      }

      .dark\\:bg-pink-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(249 168 212/var(--tw-bg-opacity))
      }

      .dark\\:bg-pink-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(244 114 182/var(--tw-bg-opacity))
      }

      .dark\\:bg-pink-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 242 248/var(--tw-bg-opacity))
      }

      .dark\\:bg-pink-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(236 72 153/var(--tw-bg-opacity))
      }

      .dark\\:bg-pink-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(219 39 119/var(--tw-bg-opacity))
      }

      .dark\\:bg-pink-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(190 24 93/var(--tw-bg-opacity))
      }

      .dark\\:bg-pink-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(157 23 77/var(--tw-bg-opacity))
      }

      .dark\\:bg-pink-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(131 24 67/var(--tw-bg-opacity))
      }

      .dark\\:bg-purple-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(243 232 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-purple-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(233 213 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-purple-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(216 180 254/var(--tw-bg-opacity))
      }

      .dark\\:bg-purple-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(192 132 252/var(--tw-bg-opacity))
      }

      .dark\\:bg-purple-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(250 245 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-purple-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(168 85 247/var(--tw-bg-opacity))
      }

      .dark\\:bg-purple-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(147 51 234/var(--tw-bg-opacity))
      }

      .dark\\:bg-purple-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(126 34 206/var(--tw-bg-opacity))
      }

      .dark\\:bg-purple-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(107 33 168/var(--tw-bg-opacity))
      }

      .dark\\:bg-purple-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(88 28 135/var(--tw-bg-opacity))
      }

      .dark\\:bg-red-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 226 226/var(--tw-bg-opacity))
      }

      .dark\\:bg-red-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 202 202/var(--tw-bg-opacity))
      }

      .dark\\:bg-red-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(252 165 165/var(--tw-bg-opacity))
      }

      .dark\\:bg-red-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(248 113 113/var(--tw-bg-opacity))
      }

      .dark\\:bg-red-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 242 242/var(--tw-bg-opacity))
      }

      .dark\\:bg-red-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(239 68 68/var(--tw-bg-opacity))
      }

      .dark\\:bg-red-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(220 38 38/var(--tw-bg-opacity))
      }

      .dark\\:bg-red-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(185 28 28/var(--tw-bg-opacity))
      }

      .dark\\:bg-red-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(153 27 27/var(--tw-bg-opacity))
      }

      .dark\\:bg-red-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(127 29 29/var(--tw-bg-opacity))
      }

      .dark\\:bg-rose-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(255 228 230/var(--tw-bg-opacity))
      }

      .dark\\:bg-rose-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 205 211/var(--tw-bg-opacity))
      }

      .dark\\:bg-rose-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 164 175/var(--tw-bg-opacity))
      }

      .dark\\:bg-rose-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(251 113 133/var(--tw-bg-opacity))
      }

      .dark\\:bg-rose-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(255 241 242/var(--tw-bg-opacity))
      }

      .dark\\:bg-rose-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(244 63 94/var(--tw-bg-opacity))
      }

      .dark\\:bg-rose-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(225 29 72/var(--tw-bg-opacity))
      }

      .dark\\:bg-rose-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(190 18 60/var(--tw-bg-opacity))
      }

      .dark\\:bg-rose-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(159 18 57/var(--tw-bg-opacity))
      }

      .dark\\:bg-rose-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(136 19 55/var(--tw-bg-opacity))
      }

      .dark\\:bg-sky-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(224 242 254/var(--tw-bg-opacity))
      }

      .dark\\:bg-sky-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(186 230 253/var(--tw-bg-opacity))
      }

      .dark\\:bg-sky-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(125 211 252/var(--tw-bg-opacity))
      }

      .dark\\:bg-sky-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(56 189 248/var(--tw-bg-opacity))
      }

      .dark\\:bg-sky-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(240 249 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-sky-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(14 165 233/var(--tw-bg-opacity))
      }

      .dark\\:bg-sky-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(2 132 199/var(--tw-bg-opacity))
      }

      .dark\\:bg-sky-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(3 105 161/var(--tw-bg-opacity))
      }

      .dark\\:bg-sky-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(7 89 133/var(--tw-bg-opacity))
      }

      .dark\\:bg-sky-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(12 74 110/var(--tw-bg-opacity))
      }

      .dark\\:bg-slate-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(241 245 249/var(--tw-bg-opacity))
      }

      .dark\\:bg-slate-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(226 232 240/var(--tw-bg-opacity))
      }

      .dark\\:bg-slate-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(203 213 225/var(--tw-bg-opacity))
      }

      .dark\\:bg-slate-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(148 163 184/var(--tw-bg-opacity))
      }

      .dark\\:bg-slate-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(248 250 252/var(--tw-bg-opacity))
      }

      .dark\\:bg-slate-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(100 116 139/var(--tw-bg-opacity))
      }

      .dark\\:bg-slate-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(71 85 105/var(--tw-bg-opacity))
      }

      .dark\\:bg-slate-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(51 65 85/var(--tw-bg-opacity))
      }

      .dark\\:bg-slate-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(30 41 59/var(--tw-bg-opacity))
      }

      .dark\\:bg-slate-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(15 23 42/var(--tw-bg-opacity))
      }

      .dark\\:bg-stone-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(245 245 244/var(--tw-bg-opacity))
      }

      .dark\\:bg-stone-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(231 229 228/var(--tw-bg-opacity))
      }

      .dark\\:bg-stone-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(214 211 209/var(--tw-bg-opacity))
      }

      .dark\\:bg-stone-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(168 162 158/var(--tw-bg-opacity))
      }

      .dark\\:bg-stone-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(250 250 249/var(--tw-bg-opacity))
      }

      .dark\\:bg-stone-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(120 113 108/var(--tw-bg-opacity))
      }

      .dark\\:bg-stone-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(87 83 78/var(--tw-bg-opacity))
      }

      .dark\\:bg-stone-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(68 64 60/var(--tw-bg-opacity))
      }

      .dark\\:bg-stone-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(41 37 36/var(--tw-bg-opacity))
      }

      .dark\\:bg-stone-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(28 25 23/var(--tw-bg-opacity))
      }

      .dark\\:bg-teal-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(204 251 241/var(--tw-bg-opacity))
      }

      .dark\\:bg-teal-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(153 246 228/var(--tw-bg-opacity))
      }

      .dark\\:bg-teal-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(94 234 212/var(--tw-bg-opacity))
      }

      .dark\\:bg-teal-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(45 212 191/var(--tw-bg-opacity))
      }

      .dark\\:bg-teal-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(240 253 250/var(--tw-bg-opacity))
      }

      .dark\\:bg-teal-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(20 184 166/var(--tw-bg-opacity))
      }

      .dark\\:bg-teal-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(13 148 136/var(--tw-bg-opacity))
      }

      .dark\\:bg-teal-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(15 118 110/var(--tw-bg-opacity))
      }

      .dark\\:bg-teal-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(17 94 89/var(--tw-bg-opacity))
      }

      .dark\\:bg-teal-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(19 78 74/var(--tw-bg-opacity))
      }

      .dark\\:bg-violet-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(237 233 254/var(--tw-bg-opacity))
      }

      .dark\\:bg-violet-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(221 214 254/var(--tw-bg-opacity))
      }

      .dark\\:bg-violet-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(196 181 253/var(--tw-bg-opacity))
      }

      .dark\\:bg-violet-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(167 139 250/var(--tw-bg-opacity))
      }

      .dark\\:bg-violet-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(245 243 255/var(--tw-bg-opacity))
      }

      .dark\\:bg-violet-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(139 92 246/var(--tw-bg-opacity))
      }

      .dark\\:bg-violet-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(124 58 237/var(--tw-bg-opacity))
      }

      .dark\\:bg-violet-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(109 40 217/var(--tw-bg-opacity))
      }

      .dark\\:bg-violet-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(91 33 182/var(--tw-bg-opacity))
      }

      .dark\\:bg-violet-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(76 29 149/var(--tw-bg-opacity))
      }

      .dark\\:bg-yellow-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 249 195/var(--tw-bg-opacity))
      }

      .dark\\:bg-yellow-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 240 138/var(--tw-bg-opacity))
      }

      .dark\\:bg-yellow-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(253 224 71/var(--tw-bg-opacity))
      }

      .dark\\:bg-yellow-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(250 204 21/var(--tw-bg-opacity))
      }

      .dark\\:bg-yellow-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 252 232/var(--tw-bg-opacity))
      }

      .dark\\:bg-yellow-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(234 179 8/var(--tw-bg-opacity))
      }

      .dark\\:bg-yellow-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(202 138 4/var(--tw-bg-opacity))
      }

      .dark\\:bg-yellow-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(161 98 7/var(--tw-bg-opacity))
      }

      .dark\\:bg-yellow-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(133 77 14/var(--tw-bg-opacity))
      }

      .dark\\:bg-yellow-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(113 63 18/var(--tw-bg-opacity))
      }

      .dark\\:bg-zinc-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(244 244 245/var(--tw-bg-opacity))
      }

      .dark\\:bg-zinc-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(228 228 231/var(--tw-bg-opacity))
      }

      .dark\\:bg-zinc-300 {
        --tw-bg-opacity: 1;
        background-color: rgb(212 212 216/var(--tw-bg-opacity))
      }

      .dark\\:bg-zinc-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(161 161 170/var(--tw-bg-opacity))
      }

      .dark\\:bg-zinc-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(250 250 250/var(--tw-bg-opacity))
      }

      .dark\\:bg-zinc-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(113 113 122/var(--tw-bg-opacity))
      }

      .dark\\:bg-zinc-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(82 82 91/var(--tw-bg-opacity))
      }

      .dark\\:bg-zinc-700 {
        --tw-bg-opacity: 1;
        background-color: rgb(63 63 70/var(--tw-bg-opacity))
      }

      .dark\\:bg-zinc-800 {
        --tw-bg-opacity: 1;
        background-color: rgb(39 39 42/var(--tw-bg-opacity))
      }

      .dark\\:bg-zinc-900 {
        --tw-bg-opacity: 1;
        background-color: rgb(24 24 27/var(--tw-bg-opacity))
      }

      .dark\\:text-2xl {
        font-size: 1.5rem;
        line-height: 2rem
      }

      .dark\\:text-3xl {
        font-size: 1.875rem;
        line-height: 2.25rem
      }

      .dark\\:text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem
      }

      .dark\\:text-5xl {
        font-size: 3rem;
        line-height: 1
      }

      .dark\\:text-6xl {
        font-size: 3.75rem;
        line-height: 1
      }

      .dark\\:text-7xl {
        font-size: 4.5rem;
        line-height: 1
      }

      .dark\\:text-8xl {
        font-size: 6rem;
        line-height: 1
      }

      .dark\\:text-9xl {
        font-size: 8rem;
        line-height: 1
      }

      .dark\\:text-base {
        font-size: 1rem;
        line-height: 1.5rem
      }

      .dark\\:text-lg {
        font-size: 1.125rem;
        line-height: 1.75rem
      }

      .dark\\:text-sm {
        font-size: .875rem;
        line-height: 1.25rem
      }

      .dark\\:text-xl {
        font-size: 1.25rem;
        line-height: 1.75rem
      }

      .dark\\:text-xs {
        font-size: .75rem;
        line-height: 1rem
      }

      .dark\\:text-amber-100 {
        --tw-text-opacity: 1;
        color: rgb(254 243 199/var(--tw-text-opacity))
      }

      .dark\\:text-amber-200 {
        --tw-text-opacity: 1;
        color: rgb(253 230 138/var(--tw-text-opacity))
      }

      .dark\\:text-amber-300 {
        --tw-text-opacity: 1;
        color: rgb(252 211 77/var(--tw-text-opacity))
      }

      .dark\\:text-amber-400 {
        --tw-text-opacity: 1;
        color: rgb(251 191 36/var(--tw-text-opacity))
      }

      .dark\\:text-amber-50 {
        --tw-text-opacity: 1;
        color: rgb(255 251 235/var(--tw-text-opacity))
      }

      .dark\\:text-amber-500 {
        --tw-text-opacity: 1;
        color: rgb(245 158 11/var(--tw-text-opacity))
      }

      .dark\\:text-amber-600 {
        --tw-text-opacity: 1;
        color: rgb(217 119 6/var(--tw-text-opacity))
      }

      .dark\\:text-amber-700 {
        --tw-text-opacity: 1;
        color: rgb(180 83 9/var(--tw-text-opacity))
      }

      .dark\\:text-amber-800 {
        --tw-text-opacity: 1;
        color: rgb(146 64 14/var(--tw-text-opacity))
      }

      .dark\\:text-amber-900 {
        --tw-text-opacity: 1;
        color: rgb(120 53 15/var(--tw-text-opacity))
      }

      .dark\\:text-blue-100 {
        --tw-text-opacity: 1;
        color: rgb(219 234 254/var(--tw-text-opacity))
      }

      .dark\\:text-blue-200 {
        --tw-text-opacity: 1;
        color: rgb(191 219 254/var(--tw-text-opacity))
      }

      .dark\\:text-blue-300 {
        --tw-text-opacity: 1;
        color: rgb(147 197 253/var(--tw-text-opacity))
      }

      .dark\\:text-blue-400 {
        --tw-text-opacity: 1;
        color: rgb(96 165 250/var(--tw-text-opacity))
      }

      .dark\\:text-blue-50 {
        --tw-text-opacity: 1;
        color: rgb(239 246 255/var(--tw-text-opacity))
      }

      .dark\\:text-blue-500 {
        --tw-text-opacity: 1;
        color: rgb(59 130 246/var(--tw-text-opacity))
      }

      .dark\\:text-blue-600 {
        --tw-text-opacity: 1;
        color: rgb(37 99 235/var(--tw-text-opacity))
      }

      .dark\\:text-blue-700 {
        --tw-text-opacity: 1;
        color: rgb(29 78 216/var(--tw-text-opacity))
      }

      .dark\\:text-blue-800 {
        --tw-text-opacity: 1;
        color: rgb(30 64 175/var(--tw-text-opacity))
      }

      .dark\\:text-blue-900 {
        --tw-text-opacity: 1;
        color: rgb(30 58 138/var(--tw-text-opacity))
      }

      .dark\\:text-cyan-100 {
        --tw-text-opacity: 1;
        color: rgb(207 250 254/var(--tw-text-opacity))
      }

      .dark\\:text-cyan-200 {
        --tw-text-opacity: 1;
        color: rgb(165 243 252/var(--tw-text-opacity))
      }

      .dark\\:text-cyan-300 {
        --tw-text-opacity: 1;
        color: rgb(103 232 249/var(--tw-text-opacity))
      }

      .dark\\:text-cyan-400 {
        --tw-text-opacity: 1;
        color: rgb(34 211 238/var(--tw-text-opacity))
      }

      .dark\\:text-cyan-50 {
        --tw-text-opacity: 1;
        color: rgb(236 254 255/var(--tw-text-opacity))
      }

      .dark\\:text-cyan-500 {
        --tw-text-opacity: 1;
        color: rgb(6 182 212/var(--tw-text-opacity))
      }

      .dark\\:text-cyan-600 {
        --tw-text-opacity: 1;
        color: rgb(8 145 178/var(--tw-text-opacity))
      }

      .dark\\:text-cyan-700 {
        --tw-text-opacity: 1;
        color: rgb(14 116 144/var(--tw-text-opacity))
      }

      .dark\\:text-cyan-800 {
        --tw-text-opacity: 1;
        color: rgb(21 94 117/var(--tw-text-opacity))
      }

      .dark\\:text-cyan-900 {
        --tw-text-opacity: 1;
        color: rgb(22 78 99/var(--tw-text-opacity))
      }

      .dark\\:text-emerald-100 {
        --tw-text-opacity: 1;
        color: rgb(209 250 229/var(--tw-text-opacity))
      }

      .dark\\:text-emerald-200 {
        --tw-text-opacity: 1;
        color: rgb(167 243 208/var(--tw-text-opacity))
      }

      .dark\\:text-emerald-300 {
        --tw-text-opacity: 1;
        color: rgb(110 231 183/var(--tw-text-opacity))
      }

      .dark\\:text-emerald-400 {
        --tw-text-opacity: 1;
        color: rgb(52 211 153/var(--tw-text-opacity))
      }

      .dark\\:text-emerald-50 {
        --tw-text-opacity: 1;
        color: rgb(236 253 245/var(--tw-text-opacity))
      }

      .dark\\:text-emerald-500 {
        --tw-text-opacity: 1;
        color: rgb(16 185 129/var(--tw-text-opacity))
      }

      .dark\\:text-emerald-600 {
        --tw-text-opacity: 1;
        color: rgb(5 150 105/var(--tw-text-opacity))
      }

      .dark\\:text-emerald-700 {
        --tw-text-opacity: 1;
        color: rgb(4 120 87/var(--tw-text-opacity))
      }

      .dark\\:text-emerald-800 {
        --tw-text-opacity: 1;
        color: rgb(6 95 70/var(--tw-text-opacity))
      }

      .dark\\:text-emerald-900 {
        --tw-text-opacity: 1;
        color: rgb(6 78 59/var(--tw-text-opacity))
      }

      .dark\\:text-fuchsia-100 {
        --tw-text-opacity: 1;
        color: rgb(250 232 255/var(--tw-text-opacity))
      }

      .dark\\:text-fuchsia-200 {
        --tw-text-opacity: 1;
        color: rgb(245 208 254/var(--tw-text-opacity))
      }

      .dark\\:text-fuchsia-300 {
        --tw-text-opacity: 1;
        color: rgb(240 171 252/var(--tw-text-opacity))
      }

      .dark\\:text-fuchsia-400 {
        --tw-text-opacity: 1;
        color: rgb(232 121 249/var(--tw-text-opacity))
      }

      .dark\\:text-fuchsia-50 {
        --tw-text-opacity: 1;
        color: rgb(253 244 255/var(--tw-text-opacity))
      }

      .dark\\:text-fuchsia-500 {
        --tw-text-opacity: 1;
        color: rgb(217 70 239/var(--tw-text-opacity))
      }

      .dark\\:text-fuchsia-600 {
        --tw-text-opacity: 1;
        color: rgb(192 38 211/var(--tw-text-opacity))
      }

      .dark\\:text-fuchsia-700 {
        --tw-text-opacity: 1;
        color: rgb(162 28 175/var(--tw-text-opacity))
      }

      .dark\\:text-fuchsia-800 {
        --tw-text-opacity: 1;
        color: rgb(134 25 143/var(--tw-text-opacity))
      }

      .dark\\:text-fuchsia-900 {
        --tw-text-opacity: 1;
        color: rgb(112 26 117/var(--tw-text-opacity))
      }

      .dark\\:text-gray-100 {
        --tw-text-opacity: 1;
        color: rgb(243 244 246/var(--tw-text-opacity))
      }

      .dark\\:text-gray-200 {
        --tw-text-opacity: 1;
        color: rgb(229 231 235/var(--tw-text-opacity))
      }

      .dark\\:text-gray-300 {
        --tw-text-opacity: 1;
        color: rgb(209 213 219/var(--tw-text-opacity))
      }

      .dark\\:text-gray-400 {
        --tw-text-opacity: 1;
        color: rgb(156 163 175/var(--tw-text-opacity))
      }

      .dark\\:text-gray-50 {
        --tw-text-opacity: 1;
        color: rgb(249 250 251/var(--tw-text-opacity))
      }

      .dark\\:text-gray-500 {
        --tw-text-opacity: 1;
        color: rgb(107 114 128/var(--tw-text-opacity))
      }

      .dark\\:text-gray-600 {
        --tw-text-opacity: 1;
        color: rgb(75 85 99/var(--tw-text-opacity))
      }

      .dark\\:text-gray-700 {
        --tw-text-opacity: 1;
        color: rgb(55 65 81/var(--tw-text-opacity))
      }

      .dark\\:text-gray-800 {
        --tw-text-opacity: 1;
        color: rgb(31 41 55/var(--tw-text-opacity))
      }

      .dark\\:text-gray-900 {
        --tw-text-opacity: 1;
        color: rgb(17 24 39/var(--tw-text-opacity))
      }

      .dark\\:text-green-100 {
        --tw-text-opacity: 1;
        color: rgb(220 252 231/var(--tw-text-opacity))
      }

      .dark\\:text-green-200 {
        --tw-text-opacity: 1;
        color: rgb(187 247 208/var(--tw-text-opacity))
      }

      .dark\\:text-green-300 {
        --tw-text-opacity: 1;
        color: rgb(134 239 172/var(--tw-text-opacity))
      }

      .dark\\:text-green-400 {
        --tw-text-opacity: 1;
        color: rgb(74 222 128/var(--tw-text-opacity))
      }

      .dark\\:text-green-50 {
        --tw-text-opacity: 1;
        color: rgb(240 253 244/var(--tw-text-opacity))
      }

      .dark\\:text-green-500 {
        --tw-text-opacity: 1;
        color: rgb(34 197 94/var(--tw-text-opacity))
      }

      .dark\\:text-green-600 {
        --tw-text-opacity: 1;
        color: rgb(22 163 74/var(--tw-text-opacity))
      }

      .dark\\:text-green-700 {
        --tw-text-opacity: 1;
        color: rgb(21 128 61/var(--tw-text-opacity))
      }

      .dark\\:text-green-800 {
        --tw-text-opacity: 1;
        color: rgb(22 101 52/var(--tw-text-opacity))
      }

      .dark\\:text-green-900 {
        --tw-text-opacity: 1;
        color: rgb(20 83 45/var(--tw-text-opacity))
      }

      .dark\\:text-indigo-100 {
        --tw-text-opacity: 1;
        color: rgb(224 231 255/var(--tw-text-opacity))
      }

      .dark\\:text-indigo-200 {
        --tw-text-opacity: 1;
        color: rgb(199 210 254/var(--tw-text-opacity))
      }

      .dark\\:text-indigo-300 {
        --tw-text-opacity: 1;
        color: rgb(165 180 252/var(--tw-text-opacity))
      }

      .dark\\:text-indigo-400 {
        --tw-text-opacity: 1;
        color: rgb(129 140 248/var(--tw-text-opacity))
      }

      .dark\\:text-indigo-50 {
        --tw-text-opacity: 1;
        color: rgb(238 242 255/var(--tw-text-opacity))
      }

      .dark\\:text-indigo-500 {
        --tw-text-opacity: 1;
        color: rgb(99 102 241/var(--tw-text-opacity))
      }

      .dark\\:text-indigo-600 {
        --tw-text-opacity: 1;
        color: rgb(79 70 229/var(--tw-text-opacity))
      }

      .dark\\:text-indigo-700 {
        --tw-text-opacity: 1;
        color: rgb(67 56 202/var(--tw-text-opacity))
      }

      .dark\\:text-indigo-800 {
        --tw-text-opacity: 1;
        color: rgb(55 48 163/var(--tw-text-opacity))
      }

      .dark\\:text-indigo-900 {
        --tw-text-opacity: 1;
        color: rgb(49 46 129/var(--tw-text-opacity))
      }

      .dark\\:text-lime-100 {
        --tw-text-opacity: 1;
        color: rgb(236 252 203/var(--tw-text-opacity))
      }

      .dark\\:text-lime-200 {
        --tw-text-opacity: 1;
        color: rgb(217 249 157/var(--tw-text-opacity))
      }

      .dark\\:text-lime-300 {
        --tw-text-opacity: 1;
        color: rgb(190 242 100/var(--tw-text-opacity))
      }

      .dark\\:text-lime-400 {
        --tw-text-opacity: 1;
        color: rgb(163 230 53/var(--tw-text-opacity))
      }

      .dark\\:text-lime-50 {
        --tw-text-opacity: 1;
        color: rgb(247 254 231/var(--tw-text-opacity))
      }

      .dark\\:text-lime-500 {
        --tw-text-opacity: 1;
        color: rgb(132 204 22/var(--tw-text-opacity))
      }

      .dark\\:text-lime-600 {
        --tw-text-opacity: 1;
        color: rgb(101 163 13/var(--tw-text-opacity))
      }

      .dark\\:text-lime-700 {
        --tw-text-opacity: 1;
        color: rgb(77 124 15/var(--tw-text-opacity))
      }

      .dark\\:text-lime-800 {
        --tw-text-opacity: 1;
        color: rgb(63 98 18/var(--tw-text-opacity))
      }

      .dark\\:text-lime-900 {
        --tw-text-opacity: 1;
        color: rgb(54 83 20/var(--tw-text-opacity))
      }

      .dark\\:text-neutral-100 {
        --tw-text-opacity: 1;
        color: rgb(245 245 245/var(--tw-text-opacity))
      }

      .dark\\:text-neutral-200 {
        --tw-text-opacity: 1;
        color: rgb(229 229 229/var(--tw-text-opacity))
      }

      .dark\\:text-neutral-300 {
        --tw-text-opacity: 1;
        color: rgb(212 212 212/var(--tw-text-opacity))
      }

      .dark\\:text-neutral-400 {
        --tw-text-opacity: 1;
        color: rgb(163 163 163/var(--tw-text-opacity))
      }

      .dark\\:text-neutral-50 {
        --tw-text-opacity: 1;
        color: rgb(250 250 250/var(--tw-text-opacity))
      }

      .dark\\:text-neutral-500 {
        --tw-text-opacity: 1;
        color: rgb(115 115 115/var(--tw-text-opacity))
      }

      .dark\\:text-neutral-600 {
        --tw-text-opacity: 1;
        color: rgb(82 82 82/var(--tw-text-opacity))
      }

      .dark\\:text-neutral-700 {
        --tw-text-opacity: 1;
        color: rgb(64 64 64/var(--tw-text-opacity))
      }

      .dark\\:text-neutral-800 {
        --tw-text-opacity: 1;
        color: rgb(38 38 38/var(--tw-text-opacity))
      }

      .dark\\:text-neutral-900 {
        --tw-text-opacity: 1;
        color: rgb(23 23 23/var(--tw-text-opacity))
      }

      .dark\\:text-orange-100 {
        --tw-text-opacity: 1;
        color: rgb(255 237 213/var(--tw-text-opacity))
      }

      .dark\\:text-orange-200 {
        --tw-text-opacity: 1;
        color: rgb(254 215 170/var(--tw-text-opacity))
      }

      .dark\\:text-orange-300 {
        --tw-text-opacity: 1;
        color: rgb(253 186 116/var(--tw-text-opacity))
      }

      .dark\\:text-orange-400 {
        --tw-text-opacity: 1;
        color: rgb(251 146 60/var(--tw-text-opacity))
      }

      .dark\\:text-orange-50 {
        --tw-text-opacity: 1;
        color: rgb(255 247 237/var(--tw-text-opacity))
      }

      .dark\\:text-orange-500 {
        --tw-text-opacity: 1;
        color: rgb(249 115 22/var(--tw-text-opacity))
      }

      .dark\\:text-orange-600 {
        --tw-text-opacity: 1;
        color: rgb(234 88 12/var(--tw-text-opacity))
      }

      .dark\\:text-orange-700 {
        --tw-text-opacity: 1;
        color: rgb(194 65 12/var(--tw-text-opacity))
      }

      .dark\\:text-orange-800 {
        --tw-text-opacity: 1;
        color: rgb(154 52 18/var(--tw-text-opacity))
      }

      .dark\\:text-orange-900 {
        --tw-text-opacity: 1;
        color: rgb(124 45 18/var(--tw-text-opacity))
      }

      .dark\\:text-pink-100 {
        --tw-text-opacity: 1;
        color: rgb(252 231 243/var(--tw-text-opacity))
      }

      .dark\\:text-pink-200 {
        --tw-text-opacity: 1;
        color: rgb(251 207 232/var(--tw-text-opacity))
      }

      .dark\\:text-pink-300 {
        --tw-text-opacity: 1;
        color: rgb(249 168 212/var(--tw-text-opacity))
      }

      .dark\\:text-pink-400 {
        --tw-text-opacity: 1;
        color: rgb(244 114 182/var(--tw-text-opacity))
      }

      .dark\\:text-pink-50 {
        --tw-text-opacity: 1;
        color: rgb(253 242 248/var(--tw-text-opacity))
      }

      .dark\\:text-pink-500 {
        --tw-text-opacity: 1;
        color: rgb(236 72 153/var(--tw-text-opacity))
      }

      .dark\\:text-pink-600 {
        --tw-text-opacity: 1;
        color: rgb(219 39 119/var(--tw-text-opacity))
      }

      .dark\\:text-pink-700 {
        --tw-text-opacity: 1;
        color: rgb(190 24 93/var(--tw-text-opacity))
      }

      .dark\\:text-pink-800 {
        --tw-text-opacity: 1;
        color: rgb(157 23 77/var(--tw-text-opacity))
      }

      .dark\\:text-pink-900 {
        --tw-text-opacity: 1;
        color: rgb(131 24 67/var(--tw-text-opacity))
      }

      .dark\\:text-purple-100 {
        --tw-text-opacity: 1;
        color: rgb(243 232 255/var(--tw-text-opacity))
      }

      .dark\\:text-purple-200 {
        --tw-text-opacity: 1;
        color: rgb(233 213 255/var(--tw-text-opacity))
      }

      .dark\\:text-purple-300 {
        --tw-text-opacity: 1;
        color: rgb(216 180 254/var(--tw-text-opacity))
      }

      .dark\\:text-purple-400 {
        --tw-text-opacity: 1;
        color: rgb(192 132 252/var(--tw-text-opacity))
      }

      .dark\\:text-purple-50 {
        --tw-text-opacity: 1;
        color: rgb(250 245 255/var(--tw-text-opacity))
      }

      .dark\\:text-purple-500 {
        --tw-text-opacity: 1;
        color: rgb(168 85 247/var(--tw-text-opacity))
      }

      .dark\\:text-purple-600 {
        --tw-text-opacity: 1;
        color: rgb(147 51 234/var(--tw-text-opacity))
      }

      .dark\\:text-purple-700 {
        --tw-text-opacity: 1;
        color: rgb(126 34 206/var(--tw-text-opacity))
      }

      .dark\\:text-purple-800 {
        --tw-text-opacity: 1;
        color: rgb(107 33 168/var(--tw-text-opacity))
      }

      .dark\\:text-purple-900 {
        --tw-text-opacity: 1;
        color: rgb(88 28 135/var(--tw-text-opacity))
      }

      .dark\\:text-red-100 {
        --tw-text-opacity: 1;
        color: rgb(254 226 226/var(--tw-text-opacity))
      }

      .dark\\:text-red-200 {
        --tw-text-opacity: 1;
        color: rgb(254 202 202/var(--tw-text-opacity))
      }

      .dark\\:text-red-300 {
        --tw-text-opacity: 1;
        color: rgb(252 165 165/var(--tw-text-opacity))
      }

      .dark\\:text-red-400 {
        --tw-text-opacity: 1;
        color: rgb(248 113 113/var(--tw-text-opacity))
      }

      .dark\\:text-red-50 {
        --tw-text-opacity: 1;
        color: rgb(254 242 242/var(--tw-text-opacity))
      }

      .dark\\:text-red-500 {
        --tw-text-opacity: 1;
        color: rgb(239 68 68/var(--tw-text-opacity))
      }

      .dark\\:text-red-600 {
        --tw-text-opacity: 1;
        color: rgb(220 38 38/var(--tw-text-opacity))
      }

      .dark\\:text-red-700 {
        --tw-text-opacity: 1;
        color: rgb(185 28 28/var(--tw-text-opacity))
      }

      .dark\\:text-red-800 {
        --tw-text-opacity: 1;
        color: rgb(153 27 27/var(--tw-text-opacity))
      }

      .dark\\:text-red-900 {
        --tw-text-opacity: 1;
        color: rgb(127 29 29/var(--tw-text-opacity))
      }

      .dark\\:text-rose-100 {
        --tw-text-opacity: 1;
        color: rgb(255 228 230/var(--tw-text-opacity))
      }

      .dark\\:text-rose-200 {
        --tw-text-opacity: 1;
        color: rgb(254 205 211/var(--tw-text-opacity))
      }

      .dark\\:text-rose-300 {
        --tw-text-opacity: 1;
        color: rgb(253 164 175/var(--tw-text-opacity))
      }

      .dark\\:text-rose-400 {
        --tw-text-opacity: 1;
        color: rgb(251 113 133/var(--tw-text-opacity))
      }

      .dark\\:text-rose-50 {
        --tw-text-opacity: 1;
        color: rgb(255 241 242/var(--tw-text-opacity))
      }

      .dark\\:text-rose-500 {
        --tw-text-opacity: 1;
        color: rgb(244 63 94/var(--tw-text-opacity))
      }

      .dark\\:text-rose-600 {
        --tw-text-opacity: 1;
        color: rgb(225 29 72/var(--tw-text-opacity))
      }

      .dark\\:text-rose-700 {
        --tw-text-opacity: 1;
        color: rgb(190 18 60/var(--tw-text-opacity))
      }

      .dark\\:text-rose-800 {
        --tw-text-opacity: 1;
        color: rgb(159 18 57/var(--tw-text-opacity))
      }

      .dark\\:text-rose-900 {
        --tw-text-opacity: 1;
        color: rgb(136 19 55/var(--tw-text-opacity))
      }

      .dark\\:text-sky-100 {
        --tw-text-opacity: 1;
        color: rgb(224 242 254/var(--tw-text-opacity))
      }

      .dark\\:text-sky-200 {
        --tw-text-opacity: 1;
        color: rgb(186 230 253/var(--tw-text-opacity))
      }

      .dark\\:text-sky-300 {
        --tw-text-opacity: 1;
        color: rgb(125 211 252/var(--tw-text-opacity))
      }

      .dark\\:text-sky-400 {
        --tw-text-opacity: 1;
        color: rgb(56 189 248/var(--tw-text-opacity))
      }

      .dark\\:text-sky-50 {
        --tw-text-opacity: 1;
        color: rgb(240 249 255/var(--tw-text-opacity))
      }

      .dark\\:text-sky-500 {
        --tw-text-opacity: 1;
        color: rgb(14 165 233/var(--tw-text-opacity))
      }

      .dark\\:text-sky-600 {
        --tw-text-opacity: 1;
        color: rgb(2 132 199/var(--tw-text-opacity))
      }

      .dark\\:text-sky-700 {
        --tw-text-opacity: 1;
        color: rgb(3 105 161/var(--tw-text-opacity))
      }

      .dark\\:text-sky-800 {
        --tw-text-opacity: 1;
        color: rgb(7 89 133/var(--tw-text-opacity))
      }

      .dark\\:text-sky-900 {
        --tw-text-opacity: 1;
        color: rgb(12 74 110/var(--tw-text-opacity))
      }

      .dark\\:text-slate-100 {
        --tw-text-opacity: 1;
        color: rgb(241 245 249/var(--tw-text-opacity))
      }

      .dark\\:text-slate-200 {
        --tw-text-opacity: 1;
        color: rgb(226 232 240/var(--tw-text-opacity))
      }

      .dark\\:text-slate-300 {
        --tw-text-opacity: 1;
        color: rgb(203 213 225/var(--tw-text-opacity))
      }

      .dark\\:text-slate-400 {
        --tw-text-opacity: 1;
        color: rgb(148 163 184/var(--tw-text-opacity))
      }

      .dark\\:text-slate-50 {
        --tw-text-opacity: 1;
        color: rgb(248 250 252/var(--tw-text-opacity))
      }

      .dark\\:text-slate-500 {
        --tw-text-opacity: 1;
        color: rgb(100 116 139/var(--tw-text-opacity))
      }

      .dark\\:text-slate-600 {
        --tw-text-opacity: 1;
        color: rgb(71 85 105/var(--tw-text-opacity))
      }

      .dark\\:text-slate-700 {
        --tw-text-opacity: 1;
        color: rgb(51 65 85/var(--tw-text-opacity))
      }

      .dark\\:text-slate-800 {
        --tw-text-opacity: 1;
        color: rgb(30 41 59/var(--tw-text-opacity))
      }

      .dark\\:text-slate-900 {
        --tw-text-opacity: 1;
        color: rgb(15 23 42/var(--tw-text-opacity))
      }

      .dark\\:text-stone-100 {
        --tw-text-opacity: 1;
        color: rgb(245 245 244/var(--tw-text-opacity))
      }

      .dark\\:text-stone-200 {
        --tw-text-opacity: 1;
        color: rgb(231 229 228/var(--tw-text-opacity))
      }

      .dark\\:text-stone-300 {
        --tw-text-opacity: 1;
        color: rgb(214 211 209/var(--tw-text-opacity))
      }

      .dark\\:text-stone-400 {
        --tw-text-opacity: 1;
        color: rgb(168 162 158/var(--tw-text-opacity))
      }

      .dark\\:text-stone-50 {
        --tw-text-opacity: 1;
        color: rgb(250 250 249/var(--tw-text-opacity))
      }

      .dark\\:text-stone-500 {
        --tw-text-opacity: 1;
        color: rgb(120 113 108/var(--tw-text-opacity))
      }

      .dark\\:text-stone-600 {
        --tw-text-opacity: 1;
        color: rgb(87 83 78/var(--tw-text-opacity))
      }

      .dark\\:text-stone-700 {
        --tw-text-opacity: 1;
        color: rgb(68 64 60/var(--tw-text-opacity))
      }

      .dark\\:text-stone-800 {
        --tw-text-opacity: 1;
        color: rgb(41 37 36/var(--tw-text-opacity))
      }

      .dark\\:text-stone-900 {
        --tw-text-opacity: 1;
        color: rgb(28 25 23/var(--tw-text-opacity))
      }

      .dark\\:text-teal-100 {
        --tw-text-opacity: 1;
        color: rgb(204 251 241/var(--tw-text-opacity))
      }

      .dark\\:text-teal-200 {
        --tw-text-opacity: 1;
        color: rgb(153 246 228/var(--tw-text-opacity))
      }

      .dark\\:text-teal-300 {
        --tw-text-opacity: 1;
        color: rgb(94 234 212/var(--tw-text-opacity))
      }

      .dark\\:text-teal-400 {
        --tw-text-opacity: 1;
        color: rgb(45 212 191/var(--tw-text-opacity))
      }

      .dark\\:text-teal-50 {
        --tw-text-opacity: 1;
        color: rgb(240 253 250/var(--tw-text-opacity))
      }

      .dark\\:text-teal-500 {
        --tw-text-opacity: 1;
        color: rgb(20 184 166/var(--tw-text-opacity))
      }

      .dark\\:text-teal-600 {
        --tw-text-opacity: 1;
        color: rgb(13 148 136/var(--tw-text-opacity))
      }

      .dark\\:text-teal-700 {
        --tw-text-opacity: 1;
        color: rgb(15 118 110/var(--tw-text-opacity))
      }

      .dark\\:text-teal-800 {
        --tw-text-opacity: 1;
        color: rgb(17 94 89/var(--tw-text-opacity))
      }

      .dark\\:text-teal-900 {
        --tw-text-opacity: 1;
        color: rgb(19 78 74/var(--tw-text-opacity))
      }

      .dark\\:text-violet-100 {
        --tw-text-opacity: 1;
        color: rgb(237 233 254/var(--tw-text-opacity))
      }

      .dark\\:text-violet-200 {
        --tw-text-opacity: 1;
        color: rgb(221 214 254/var(--tw-text-opacity))
      }

      .dark\\:text-violet-300 {
        --tw-text-opacity: 1;
        color: rgb(196 181 253/var(--tw-text-opacity))
      }

      .dark\\:text-violet-400 {
        --tw-text-opacity: 1;
        color: rgb(167 139 250/var(--tw-text-opacity))
      }

      .dark\\:text-violet-50 {
        --tw-text-opacity: 1;
        color: rgb(245 243 255/var(--tw-text-opacity))
      }

      .dark\\:text-violet-500 {
        --tw-text-opacity: 1;
        color: rgb(139 92 246/var(--tw-text-opacity))
      }

      .dark\\:text-violet-600 {
        --tw-text-opacity: 1;
        color: rgb(124 58 237/var(--tw-text-opacity))
      }

      .dark\\:text-violet-700 {
        --tw-text-opacity: 1;
        color: rgb(109 40 217/var(--tw-text-opacity))
      }

      .dark\\:text-violet-800 {
        --tw-text-opacity: 1;
        color: rgb(91 33 182/var(--tw-text-opacity))
      }

      .dark\\:text-violet-900 {
        --tw-text-opacity: 1;
        color: rgb(76 29 149/var(--tw-text-opacity))
      }

      .dark\\:text-yellow-100 {
        --tw-text-opacity: 1;
        color: rgb(254 249 195/var(--tw-text-opacity))
      }

      .dark\\:text-yellow-200 {
        --tw-text-opacity: 1;
        color: rgb(254 240 138/var(--tw-text-opacity))
      }

      .dark\\:text-yellow-300 {
        --tw-text-opacity: 1;
        color: rgb(253 224 71/var(--tw-text-opacity))
      }

      .dark\\:text-yellow-400 {
        --tw-text-opacity: 1;
        color: rgb(250 204 21/var(--tw-text-opacity))
      }

      .dark\\:text-yellow-50 {
        --tw-text-opacity: 1;
        color: rgb(254 252 232/var(--tw-text-opacity))
      }

      .dark\\:text-yellow-500 {
        --tw-text-opacity: 1;
        color: rgb(234 179 8/var(--tw-text-opacity))
      }

      .dark\\:text-yellow-600 {
        --tw-text-opacity: 1;
        color: rgb(202 138 4/var(--tw-text-opacity))
      }

      .dark\\:text-yellow-700 {
        --tw-text-opacity: 1;
        color: rgb(161 98 7/var(--tw-text-opacity))
      }

      .dark\\:text-yellow-800 {
        --tw-text-opacity: 1;
        color: rgb(133 77 14/var(--tw-text-opacity))
      }

      .dark\\:text-yellow-900 {
        --tw-text-opacity: 1;
        color: rgb(113 63 18/var(--tw-text-opacity))
      }

      .dark\\:text-zinc-100 {
        --tw-text-opacity: 1;
        color: rgb(244 244 245/var(--tw-text-opacity))
      }

      .dark\\:text-zinc-200 {
        --tw-text-opacity: 1;
        color: rgb(228 228 231/var(--tw-text-opacity))
      }

      .dark\\:text-zinc-300 {
        --tw-text-opacity: 1;
        color: rgb(212 212 216/var(--tw-text-opacity))
      }

      .dark\\:text-zinc-400 {
        --tw-text-opacity: 1;
        color: rgb(161 161 170/var(--tw-text-opacity))
      }

      .dark\\:text-zinc-50 {
        --tw-text-opacity: 1;
        color: rgb(250 250 250/var(--tw-text-opacity))
      }

      .dark\\:text-zinc-500 {
        --tw-text-opacity: 1;
        color: rgb(113 113 122/var(--tw-text-opacity))
      }

      .dark\\:text-zinc-600 {
        --tw-text-opacity: 1;
        color: rgb(82 82 91/var(--tw-text-opacity))
      }

      .dark\\:text-zinc-700 {
        --tw-text-opacity: 1;
        color: rgb(63 63 70/var(--tw-text-opacity))
      }

      .dark\\:text-zinc-800 {
        --tw-text-opacity: 1;
        color: rgb(39 39 42/var(--tw-text-opacity))
      }

      .dark\\:text-zinc-900 {
        --tw-text-opacity: 1;
        color: rgb(24 24 27/var(--tw-text-opacity))
      }

      .dark\\:ring-amber-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(254 243 199/var(--tw-ring-opacity))
      }

      .dark\\:ring-amber-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(253 230 138/var(--tw-ring-opacity))
      }

      .dark\\:ring-amber-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(252 211 77/var(--tw-ring-opacity))
      }

      .dark\\:ring-amber-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(251 191 36/var(--tw-ring-opacity))
      }

      .dark\\:ring-amber-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(255 251 235/var(--tw-ring-opacity))
      }

      .dark\\:ring-amber-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(245 158 11/var(--tw-ring-opacity))
      }

      .dark\\:ring-amber-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(217 119 6/var(--tw-ring-opacity))
      }

      .dark\\:ring-amber-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(180 83 9/var(--tw-ring-opacity))
      }

      .dark\\:ring-amber-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(146 64 14/var(--tw-ring-opacity))
      }

      .dark\\:ring-amber-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(120 53 15/var(--tw-ring-opacity))
      }

      .dark\\:ring-blue-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(219 234 254/var(--tw-ring-opacity))
      }

      .dark\\:ring-blue-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(191 219 254/var(--tw-ring-opacity))
      }

      .dark\\:ring-blue-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(147 197 253/var(--tw-ring-opacity))
      }

      .dark\\:ring-blue-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(96 165 250/var(--tw-ring-opacity))
      }

      .dark\\:ring-blue-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(239 246 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-blue-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(59 130 246/var(--tw-ring-opacity))
      }

      .dark\\:ring-blue-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(37 99 235/var(--tw-ring-opacity))
      }

      .dark\\:ring-blue-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(29 78 216/var(--tw-ring-opacity))
      }

      .dark\\:ring-blue-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(30 64 175/var(--tw-ring-opacity))
      }

      .dark\\:ring-blue-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(30 58 138/var(--tw-ring-opacity))
      }

      .dark\\:ring-cyan-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(207 250 254/var(--tw-ring-opacity))
      }

      .dark\\:ring-cyan-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(165 243 252/var(--tw-ring-opacity))
      }

      .dark\\:ring-cyan-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(103 232 249/var(--tw-ring-opacity))
      }

      .dark\\:ring-cyan-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(34 211 238/var(--tw-ring-opacity))
      }

      .dark\\:ring-cyan-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(236 254 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-cyan-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(6 182 212/var(--tw-ring-opacity))
      }

      .dark\\:ring-cyan-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(8 145 178/var(--tw-ring-opacity))
      }

      .dark\\:ring-cyan-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(14 116 144/var(--tw-ring-opacity))
      }

      .dark\\:ring-cyan-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(21 94 117/var(--tw-ring-opacity))
      }

      .dark\\:ring-cyan-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(22 78 99/var(--tw-ring-opacity))
      }

      .dark\\:ring-emerald-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(209 250 229/var(--tw-ring-opacity))
      }

      .dark\\:ring-emerald-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(167 243 208/var(--tw-ring-opacity))
      }

      .dark\\:ring-emerald-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(110 231 183/var(--tw-ring-opacity))
      }

      .dark\\:ring-emerald-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(52 211 153/var(--tw-ring-opacity))
      }

      .dark\\:ring-emerald-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(236 253 245/var(--tw-ring-opacity))
      }

      .dark\\:ring-emerald-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(16 185 129/var(--tw-ring-opacity))
      }

      .dark\\:ring-emerald-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(5 150 105/var(--tw-ring-opacity))
      }

      .dark\\:ring-emerald-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(4 120 87/var(--tw-ring-opacity))
      }

      .dark\\:ring-emerald-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(6 95 70/var(--tw-ring-opacity))
      }

      .dark\\:ring-emerald-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(6 78 59/var(--tw-ring-opacity))
      }

      .dark\\:ring-fuchsia-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(250 232 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-fuchsia-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(245 208 254/var(--tw-ring-opacity))
      }

      .dark\\:ring-fuchsia-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(240 171 252/var(--tw-ring-opacity))
      }

      .dark\\:ring-fuchsia-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(232 121 249/var(--tw-ring-opacity))
      }

      .dark\\:ring-fuchsia-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(253 244 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-fuchsia-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(217 70 239/var(--tw-ring-opacity))
      }

      .dark\\:ring-fuchsia-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(192 38 211/var(--tw-ring-opacity))
      }

      .dark\\:ring-fuchsia-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(162 28 175/var(--tw-ring-opacity))
      }

      .dark\\:ring-fuchsia-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(134 25 143/var(--tw-ring-opacity))
      }

      .dark\\:ring-fuchsia-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(112 26 117/var(--tw-ring-opacity))
      }

      .dark\\:ring-gray-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(243 244 246/var(--tw-ring-opacity))
      }

      .dark\\:ring-gray-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(229 231 235/var(--tw-ring-opacity))
      }

      .dark\\:ring-gray-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(209 213 219/var(--tw-ring-opacity))
      }

      .dark\\:ring-gray-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(156 163 175/var(--tw-ring-opacity))
      }

      .dark\\:ring-gray-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(249 250 251/var(--tw-ring-opacity))
      }

      .dark\\:ring-gray-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(107 114 128/var(--tw-ring-opacity))
      }

      .dark\\:ring-gray-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(75 85 99/var(--tw-ring-opacity))
      }

      .dark\\:ring-gray-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(55 65 81/var(--tw-ring-opacity))
      }

      .dark\\:ring-gray-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(31 41 55/var(--tw-ring-opacity))
      }

      .dark\\:ring-gray-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(17 24 39/var(--tw-ring-opacity))
      }

      .dark\\:ring-green-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(220 252 231/var(--tw-ring-opacity))
      }

      .dark\\:ring-green-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(187 247 208/var(--tw-ring-opacity))
      }

      .dark\\:ring-green-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(134 239 172/var(--tw-ring-opacity))
      }

      .dark\\:ring-green-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(74 222 128/var(--tw-ring-opacity))
      }

      .dark\\:ring-green-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(240 253 244/var(--tw-ring-opacity))
      }

      .dark\\:ring-green-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(34 197 94/var(--tw-ring-opacity))
      }

      .dark\\:ring-green-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(22 163 74/var(--tw-ring-opacity))
      }

      .dark\\:ring-green-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(21 128 61/var(--tw-ring-opacity))
      }

      .dark\\:ring-green-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(22 101 52/var(--tw-ring-opacity))
      }

      .dark\\:ring-green-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(20 83 45/var(--tw-ring-opacity))
      }

      .dark\\:ring-indigo-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(224 231 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-indigo-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(199 210 254/var(--tw-ring-opacity))
      }

      .dark\\:ring-indigo-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(165 180 252/var(--tw-ring-opacity))
      }

      .dark\\:ring-indigo-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(129 140 248/var(--tw-ring-opacity))
      }

      .dark\\:ring-indigo-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(238 242 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-indigo-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(99 102 241/var(--tw-ring-opacity))
      }

      .dark\\:ring-indigo-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(79 70 229/var(--tw-ring-opacity))
      }

      .dark\\:ring-indigo-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(67 56 202/var(--tw-ring-opacity))
      }

      .dark\\:ring-indigo-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(55 48 163/var(--tw-ring-opacity))
      }

      .dark\\:ring-indigo-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(49 46 129/var(--tw-ring-opacity))
      }

      .dark\\:ring-lime-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(236 252 203/var(--tw-ring-opacity))
      }

      .dark\\:ring-lime-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(217 249 157/var(--tw-ring-opacity))
      }

      .dark\\:ring-lime-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(190 242 100/var(--tw-ring-opacity))
      }

      .dark\\:ring-lime-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(163 230 53/var(--tw-ring-opacity))
      }

      .dark\\:ring-lime-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(247 254 231/var(--tw-ring-opacity))
      }

      .dark\\:ring-lime-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(132 204 22/var(--tw-ring-opacity))
      }

      .dark\\:ring-lime-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(101 163 13/var(--tw-ring-opacity))
      }

      .dark\\:ring-lime-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(77 124 15/var(--tw-ring-opacity))
      }

      .dark\\:ring-lime-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(63 98 18/var(--tw-ring-opacity))
      }

      .dark\\:ring-lime-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(54 83 20/var(--tw-ring-opacity))
      }

      .dark\\:ring-neutral-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(245 245 245/var(--tw-ring-opacity))
      }

      .dark\\:ring-neutral-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(229 229 229/var(--tw-ring-opacity))
      }

      .dark\\:ring-neutral-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(212 212 212/var(--tw-ring-opacity))
      }

      .dark\\:ring-neutral-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(163 163 163/var(--tw-ring-opacity))
      }

      .dark\\:ring-neutral-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(250 250 250/var(--tw-ring-opacity))
      }

      .dark\\:ring-neutral-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(115 115 115/var(--tw-ring-opacity))
      }

      .dark\\:ring-neutral-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(82 82 82/var(--tw-ring-opacity))
      }

      .dark\\:ring-neutral-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(64 64 64/var(--tw-ring-opacity))
      }

      .dark\\:ring-neutral-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(38 38 38/var(--tw-ring-opacity))
      }

      .dark\\:ring-neutral-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(23 23 23/var(--tw-ring-opacity))
      }

      .dark\\:ring-orange-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(255 237 213/var(--tw-ring-opacity))
      }

      .dark\\:ring-orange-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(254 215 170/var(--tw-ring-opacity))
      }

      .dark\\:ring-orange-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(253 186 116/var(--tw-ring-opacity))
      }

      .dark\\:ring-orange-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(251 146 60/var(--tw-ring-opacity))
      }

      .dark\\:ring-orange-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(255 247 237/var(--tw-ring-opacity))
      }

      .dark\\:ring-orange-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(249 115 22/var(--tw-ring-opacity))
      }

      .dark\\:ring-orange-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(234 88 12/var(--tw-ring-opacity))
      }

      .dark\\:ring-orange-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(194 65 12/var(--tw-ring-opacity))
      }

      .dark\\:ring-orange-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(154 52 18/var(--tw-ring-opacity))
      }

      .dark\\:ring-orange-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(124 45 18/var(--tw-ring-opacity))
      }

      .dark\\:ring-pink-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(252 231 243/var(--tw-ring-opacity))
      }

      .dark\\:ring-pink-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(251 207 232/var(--tw-ring-opacity))
      }

      .dark\\:ring-pink-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(249 168 212/var(--tw-ring-opacity))
      }

      .dark\\:ring-pink-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(244 114 182/var(--tw-ring-opacity))
      }

      .dark\\:ring-pink-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(253 242 248/var(--tw-ring-opacity))
      }

      .dark\\:ring-pink-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(236 72 153/var(--tw-ring-opacity))
      }

      .dark\\:ring-pink-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(219 39 119/var(--tw-ring-opacity))
      }

      .dark\\:ring-pink-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(190 24 93/var(--tw-ring-opacity))
      }

      .dark\\:ring-pink-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(157 23 77/var(--tw-ring-opacity))
      }

      .dark\\:ring-pink-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(131 24 67/var(--tw-ring-opacity))
      }

      .dark\\:ring-purple-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(243 232 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-purple-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(233 213 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-purple-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(216 180 254/var(--tw-ring-opacity))
      }

      .dark\\:ring-purple-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(192 132 252/var(--tw-ring-opacity))
      }

      .dark\\:ring-purple-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(250 245 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-purple-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(168 85 247/var(--tw-ring-opacity))
      }

      .dark\\:ring-purple-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(147 51 234/var(--tw-ring-opacity))
      }

      .dark\\:ring-purple-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(126 34 206/var(--tw-ring-opacity))
      }

      .dark\\:ring-purple-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(107 33 168/var(--tw-ring-opacity))
      }

      .dark\\:ring-purple-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(88 28 135/var(--tw-ring-opacity))
      }

      .dark\\:ring-red-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(254 226 226/var(--tw-ring-opacity))
      }

      .dark\\:ring-red-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(254 202 202/var(--tw-ring-opacity))
      }

      .dark\\:ring-red-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(252 165 165/var(--tw-ring-opacity))
      }

      .dark\\:ring-red-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(248 113 113/var(--tw-ring-opacity))
      }

      .dark\\:ring-red-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(254 242 242/var(--tw-ring-opacity))
      }

      .dark\\:ring-red-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(239 68 68/var(--tw-ring-opacity))
      }

      .dark\\:ring-red-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(220 38 38/var(--tw-ring-opacity))
      }

      .dark\\:ring-red-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(185 28 28/var(--tw-ring-opacity))
      }

      .dark\\:ring-red-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(153 27 27/var(--tw-ring-opacity))
      }

      .dark\\:ring-red-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(127 29 29/var(--tw-ring-opacity))
      }

      .dark\\:ring-rose-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(255 228 230/var(--tw-ring-opacity))
      }

      .dark\\:ring-rose-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(254 205 211/var(--tw-ring-opacity))
      }

      .dark\\:ring-rose-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(253 164 175/var(--tw-ring-opacity))
      }

      .dark\\:ring-rose-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(251 113 133/var(--tw-ring-opacity))
      }

      .dark\\:ring-rose-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(255 241 242/var(--tw-ring-opacity))
      }

      .dark\\:ring-rose-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(244 63 94/var(--tw-ring-opacity))
      }

      .dark\\:ring-rose-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(225 29 72/var(--tw-ring-opacity))
      }

      .dark\\:ring-rose-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(190 18 60/var(--tw-ring-opacity))
      }

      .dark\\:ring-rose-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(159 18 57/var(--tw-ring-opacity))
      }

      .dark\\:ring-rose-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(136 19 55/var(--tw-ring-opacity))
      }

      .dark\\:ring-sky-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(224 242 254/var(--tw-ring-opacity))
      }

      .dark\\:ring-sky-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(186 230 253/var(--tw-ring-opacity))
      }

      .dark\\:ring-sky-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(125 211 252/var(--tw-ring-opacity))
      }

      .dark\\:ring-sky-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(56 189 248/var(--tw-ring-opacity))
      }

      .dark\\:ring-sky-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(240 249 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-sky-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(14 165 233/var(--tw-ring-opacity))
      }

      .dark\\:ring-sky-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(2 132 199/var(--tw-ring-opacity))
      }

      .dark\\:ring-sky-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(3 105 161/var(--tw-ring-opacity))
      }

      .dark\\:ring-sky-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(7 89 133/var(--tw-ring-opacity))
      }

      .dark\\:ring-sky-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(12 74 110/var(--tw-ring-opacity))
      }

      .dark\\:ring-slate-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(241 245 249/var(--tw-ring-opacity))
      }

      .dark\\:ring-slate-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(226 232 240/var(--tw-ring-opacity))
      }

      .dark\\:ring-slate-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(203 213 225/var(--tw-ring-opacity))
      }

      .dark\\:ring-slate-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(148 163 184/var(--tw-ring-opacity))
      }

      .dark\\:ring-slate-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(248 250 252/var(--tw-ring-opacity))
      }

      .dark\\:ring-slate-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(100 116 139/var(--tw-ring-opacity))
      }

      .dark\\:ring-slate-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(71 85 105/var(--tw-ring-opacity))
      }

      .dark\\:ring-slate-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(51 65 85/var(--tw-ring-opacity))
      }

      .dark\\:ring-slate-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(30 41 59/var(--tw-ring-opacity))
      }

      .dark\\:ring-slate-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(15 23 42/var(--tw-ring-opacity))
      }

      .dark\\:ring-stone-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(245 245 244/var(--tw-ring-opacity))
      }

      .dark\\:ring-stone-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(231 229 228/var(--tw-ring-opacity))
      }

      .dark\\:ring-stone-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(214 211 209/var(--tw-ring-opacity))
      }

      .dark\\:ring-stone-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(168 162 158/var(--tw-ring-opacity))
      }

      .dark\\:ring-stone-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(250 250 249/var(--tw-ring-opacity))
      }

      .dark\\:ring-stone-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(120 113 108/var(--tw-ring-opacity))
      }

      .dark\\:ring-stone-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(87 83 78/var(--tw-ring-opacity))
      }

      .dark\\:ring-stone-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(68 64 60/var(--tw-ring-opacity))
      }

      .dark\\:ring-stone-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(41 37 36/var(--tw-ring-opacity))
      }

      .dark\\:ring-stone-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(28 25 23/var(--tw-ring-opacity))
      }

      .dark\\:ring-teal-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(204 251 241/var(--tw-ring-opacity))
      }

      .dark\\:ring-teal-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(153 246 228/var(--tw-ring-opacity))
      }

      .dark\\:ring-teal-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(94 234 212/var(--tw-ring-opacity))
      }

      .dark\\:ring-teal-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(45 212 191/var(--tw-ring-opacity))
      }

      .dark\\:ring-teal-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(240 253 250/var(--tw-ring-opacity))
      }

      .dark\\:ring-teal-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(20 184 166/var(--tw-ring-opacity))
      }

      .dark\\:ring-teal-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(13 148 136/var(--tw-ring-opacity))
      }

      .dark\\:ring-teal-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(15 118 110/var(--tw-ring-opacity))
      }

      .dark\\:ring-teal-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(17 94 89/var(--tw-ring-opacity))
      }

      .dark\\:ring-teal-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(19 78 74/var(--tw-ring-opacity))
      }

      .dark\\:ring-violet-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(237 233 254/var(--tw-ring-opacity))
      }

      .dark\\:ring-violet-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(221 214 254/var(--tw-ring-opacity))
      }

      .dark\\:ring-violet-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(196 181 253/var(--tw-ring-opacity))
      }

      .dark\\:ring-violet-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(167 139 250/var(--tw-ring-opacity))
      }

      .dark\\:ring-violet-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(245 243 255/var(--tw-ring-opacity))
      }

      .dark\\:ring-violet-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(139 92 246/var(--tw-ring-opacity))
      }

      .dark\\:ring-violet-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(124 58 237/var(--tw-ring-opacity))
      }

      .dark\\:ring-violet-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(109 40 217/var(--tw-ring-opacity))
      }

      .dark\\:ring-violet-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(91 33 182/var(--tw-ring-opacity))
      }

      .dark\\:ring-violet-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(76 29 149/var(--tw-ring-opacity))
      }

      .dark\\:ring-yellow-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(254 249 195/var(--tw-ring-opacity))
      }

      .dark\\:ring-yellow-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(254 240 138/var(--tw-ring-opacity))
      }

      .dark\\:ring-yellow-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(253 224 71/var(--tw-ring-opacity))
      }

      .dark\\:ring-yellow-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(250 204 21/var(--tw-ring-opacity))
      }

      .dark\\:ring-yellow-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(254 252 232/var(--tw-ring-opacity))
      }

      .dark\\:ring-yellow-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(234 179 8/var(--tw-ring-opacity))
      }

      .dark\\:ring-yellow-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(202 138 4/var(--tw-ring-opacity))
      }

      .dark\\:ring-yellow-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(161 98 7/var(--tw-ring-opacity))
      }

      .dark\\:ring-yellow-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(133 77 14/var(--tw-ring-opacity))
      }

      .dark\\:ring-yellow-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(113 63 18/var(--tw-ring-opacity))
      }

      .dark\\:ring-zinc-100 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(244 244 245/var(--tw-ring-opacity))
      }

      .dark\\:ring-zinc-200 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(228 228 231/var(--tw-ring-opacity))
      }

      .dark\\:ring-zinc-300 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(212 212 216/var(--tw-ring-opacity))
      }

      .dark\\:ring-zinc-400 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(161 161 170/var(--tw-ring-opacity))
      }

      .dark\\:ring-zinc-50 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(250 250 250/var(--tw-ring-opacity))
      }

      .dark\\:ring-zinc-500 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(113 113 122/var(--tw-ring-opacity))
      }

      .dark\\:ring-zinc-600 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(82 82 91/var(--tw-ring-opacity))
      }

      .dark\\:ring-zinc-700 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(63 63 70/var(--tw-ring-opacity))
      }

      .dark\\:ring-zinc-800 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(39 39 42/var(--tw-ring-opacity))
      }

      .dark\\:ring-zinc-900 {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(24 24 27/var(--tw-ring-opacity))
      }
    }
    @media (min-width: 640px) {
      .sm\\:grid-cols-2 {
        grid-template-columns:repeat(2, minmax(0, 1fr))
      }

      .sm\\:self-end {
        align-self: flex-end
      }

      .sm\\:p-4 {
        padding: 1rem
      }

      .sm\\:text-justify {
        text-align: justify
      }

      .sm\\:text-3xl {
        font-size: 1.875rem;
        line-height: 2.25rem
      }
    }
    @media (min-width: 768px) {
      .md\\:my-24 {
        margin-top: 6rem;
        margin-bottom: 6rem
      }

      .md\\:w-5\\/12 {
        width: 41.666667%
      }

      .md\\:grid-cols-2 {
        grid-template-columns:repeat(2, minmax(0, 1fr))
      }

      .md\\:flex-row {
        flex-direction: row
      }

      .md\\:px-4 {
        padding-left: 1rem;
        padding-right: 1rem
      }

      .md\\:py-2 {
        padding-top: .5rem;
        padding-bottom: .5rem
      }

      .md\\:text-left {
        text-align: left
      }
    }
    @media (min-width: 1024px) {
      .lg\\:text-2xl {
        font-size: 1.5rem;
        line-height: 2rem
      }

      .lg\\:text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem
      }
    }


    // higher specificity needed
    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;

      // so it's more Strapi alike
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid rgb(73, 69, 255);
        box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        transition-property: border-color, box-shadow;
        transition-duration: 0.2s;
      }
    }
  }
`;
