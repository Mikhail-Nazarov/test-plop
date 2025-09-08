const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Создать новый React компонент',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Введите название компонента:',
        validate: function (value) {
          if (!value) {
            return 'Название компонента обязательно!';
          }
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(value)) {
            return 'Название должно начинаться с заглавной буквы и содержать только буквы и цифры!';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{componentName}}/{{componentName}}.tsx',
        templateFile: 'plop-templates/component/component.hbs',
      },
      {
        type: 'add',
        path: '{{componentName}}/hooks/use{{componentName}}.ts',
        templateFile: 'plop-templates/component/hooks/hook.hbs',
      },
      {
        type: 'add',
        path: '{{componentName}}/hooks/index.ts',
        templateFile: 'plop-templates/component/hooks/index.hbs',
      },
      {
        type: 'add',
        path: '{{componentName}}/index.ts',
        templateFile: 'plop-templates/component/index.hbs',
      },
    ],
  });
};
