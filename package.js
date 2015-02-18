var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-item',
  summary : 'Semantic UI - Item (official): Single component release of item',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Item.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
