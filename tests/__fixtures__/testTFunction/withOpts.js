t('withEvaluableOpts', {count: 22, context: 'male'});
t('withNonEvaluableOpts', {count: cnt, context: ctx});
t('withSimpleIdentifiers', {count, context});
t('onlyCount', {count});
t('onlyContext', {context});
t('onlyDefaultValue', 'some default value');
t('defaultValueAndOpts', '2nd default value', {count: 2});
t('withDefaultValue', {defaultValue: 'another default value'})
