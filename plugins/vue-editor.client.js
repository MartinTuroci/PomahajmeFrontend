import Vue from 'vue';
import Vueditor from 'vueditor';
import 'vueditor/dist/style/vueditor.min.css';

const lang = {
  app: {},

  removeFormat: { title: 'Remove format' },

  bold: { title: 'Tučné' },
  italic: { title: 'Kurzíva' },
  underline: { title: 'Podčiarknuté' },
  strikeThrough: { title: 'Preškrtnuté' },

  superscript: { title: 'Superscript' },
  subscript: { title: 'Subscript' },
  indent: { title: 'Indent' },
  outdent: { title: 'Outdent' },

  justifyLeft: { title: 'Justify left' },
  justifyCenter: { title: 'Justify center' },
  justifyRight: { title: 'Justify right' },
  justifyFull: { title: 'Justify full' },

  insertOrderedList: { title: 'Insert ordered list' },
  insertUnorderedList: { title: 'Insert unordered list' },

  foreColor: {
    title: 'Farba písma',
    ok: 'ok',
    colorCode: 'Kód farby',
    invalidColorCodeMsg: 'Prosím vyplnte správny kód farby',
  },
  backColor: {
    title: 'Farba pozadia',
    ok: 'ok',
    colorCode: 'Kód farby',
    invalidColorCodeMsg: 'Prosím vyplnte správny kód farby',
  },
  fontName: {},
  fontSize: {},
  code: {},
  element: {},
  design: {
    ieMsg: 'You must select a text to use this feature in IE browser',
  },
  link: {
    title: 'Add link',
    ok: 'OK',
  },
  unLink: {
    title: 'unlink',
  },
  markdown: {
    title: 'markdown',
  },
  picture: {
    title: 'Insert Picture',
    ok: 'OK',
    cancel: 'Cancel',
    invalidFile: 'No file selected or selected file is not a picture',
  },
  sourceCode: {
    title: 'Source Code',
  },
  fullscreen: {
    title: 'Fullscreen',
  },
  table: { title: 'Table' },
  undo: { title: 'Späť' },
  redo: { title: 'Vrátiť' },
};

const config = {
  toolbar: [
    'bold',
    'italic',
    'underline',
    'strikeThrough',
    '|',
    'foreColor',
    'backColor',
    '|',
    'undo',
    'redo',
  ],
  lang,
};

Vue.use(Vueditor, config);
