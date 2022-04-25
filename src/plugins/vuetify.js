import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default createVuetify({
    theme: {
      themes: {
        light: {
          colors: {
            primary: '#3EB595',
            background: '#E5E5E5',
            error: '#d63031',
            info: '#0984e3',
            secondary: '#fdcb6e',
            success: '#00cec9',
            surface: '#6c5ce7',
            warning: '#2d3436',
          },
          dark: false,
          variables: {},
        },
      },
    },
  });
