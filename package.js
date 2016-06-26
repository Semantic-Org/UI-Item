
Package.describe({
  name    : 'semantic:ui-item',
  summary : 'Semantic UI - Item: Single component release',
  version : '2.2.0',
  git     : 'git://github.com/Semantic-Org/UI-Item.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'item.css'
  ], 'client');
});
