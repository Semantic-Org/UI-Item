### Version 2.0.6 - July 22, 2015

- **List**- Fixed issue where using an image variation like `ui image label` as a direct child of an `item` would remove right padding [#2691](https://github.com/Semantic-Org/Semantic-UI/issues/2691)

### Version 2.0.4 - July 17, 2015

- **Segment* - `horizontal segments` in IE will no longer stretch to the natural width of child imgs [#2550](https://github.com/Semantic-Org/Semantic-UI/issues/2550) [flexbug [#1](h](https://github.com/Semantic-Org/Semantic-UI/issues/1](h)ttps://github.com/philipwalton/flexbugs[#1-mi](https://github.com/Semantic-Org/Semantic-UI/issues/1-mi)nimum-content-sizing-of-flex-items-not-honored)

### Version 2.0.1 - July 6, 2015

- **Dropdown** - Dropdown will now show correctly when menu only includes a message with no other items

### Version 2.0.0 - June 30, 2015

- **Dropdown** - Dropdown item `description` now are floated in default theme and should be included before other `item` content
- **Menu** - Menu now uses flexbox. This allows menu items to match each others heights regardless of each items content size. `right menu` content should now follow other menu content instead of preceding it (no longer uses float).
- **Item** - Items now uses `flexbox` for layout.
- **Steps** - Steps no longer need `item count` and will automatically divide evenly
- **Dropdown** - Added `disabled item` state, disabled items will automatically be skipped with keyboard selection
- **Menu** - Fixed several inheritance issues for `dropdown item` inside `menu` appearing as `menu item`.
- **Menu** - Menus items are now slightly more padded
- **Menu** - The hover/active state of `dropdown item` have been adjusted to match `item`. Dropdown styles can be themed specifically inside `menu`.
- **Dropdown** - Fixed dropdown menu items should not center inside of a center aligned container.
- **Menu** - Fixes divider appears on last element of `(x) item menu`
- **Menu** - Menu now has a `min-height` that matches standard item padding
- **Menu** - `dropdown menu` in a `secondary pointing menu` or `tabular menu` now receive distinct active styling from other `active item`
- **Sidebar** - Last menu item now has a border when sidebar and menu are used together
- **Dropdown** - `item` `description` is now floated by default
- **Item** - item `description` now longer sets a `max-width`
- **Menu** - Active sub-menu items are now `bold`
- **Menu** - Menus no longer have additional borders on `active item` in the default theme

### Version 1.11.3-4 - March 6, 2015

- **Grid** - Fixed `right/left/center aligned` to adjust `align-items` in flex containers like `equal height/width`

### Version 1.11.0 - March 3, 2015

- **Item ** - `img` inside of `ui item content` now do not receive size formatting by default
- **Item** - Significant rewrite of `ui item` documentation

### Version 1.10.3 - February 27, 2015

- **Menu** - Fixes dropdown menu item not having a hover state inside inverted menu
- **Search** - Fixes bug in category search causing item selection to sometimes produce a javascript error.

### Version 1.8.0 - January 23, 2015

- **Dropdown** - Dropdown no longer will not show menu when no `item` are present in menu. Dropdown will now only filter results for `ui search dropdown` #1632 **Thanks PSyton**.
- **Dropdown** - Fixed bug where link items would not open in sub-menus due to `event.preventDefault`
- **List** - `relaxed list` and `very relaxed list` no longer add padding to child menu items

### Version 1.5.0 - December 30, 2014

- **Dropdown** - New setting ``allowCategorySelection`` lets menu items with sub menus be selected. Added example in docs.

### Version 1.2.0 - December 08, 2014

- **Item/Card** - Default link formatting inside element simplified to avoid adjusting other nested ``ui`` link styles

### Version 1.0.1 - November 28, 2014

- **Card/Item** - Fix generic link stylings erroneously affecting linked ui elements like buttons

### Version 1.0.0 - November 24, 2014

- **List** - List item selectors are now more strict, list items must be immediate children of ``ui list`` or ``ui list list``
- **Item** - 0.x.x's UI card has been adjusted heavily. Vertically listed content should use ``ui item`` while floated grouped content should continue to use ``ui card``. Some 'card' view content has been slightly adjusted. Please refer to documentation
- **Item** - Items now have a horizontal list view for content lists

### Version 0.15.0 - Mar 14, 2014

- **Step** - Vertical Steps now have option to have two line items

### Version 0.13.0 - Feb 20, 2014

- **Menu** - Fixes dropdown formatting when used **inside* a menu item

### Version 0.12.4 - Jan 29, 2014

- **Items** - Fixes ``ui horizontal items`` to work correctly, missing comma **Thanks mishak87**

### Version 0.12.3 - Jan 24, 2014

- **Item** - Fixes color repeating to be consistent for items **thanks skysplit**

### Version 0.7.0 - Oct 22, 2013

- **Dropdown** - Dropdown cannot display inside item image

### Version 0.6.5 - Oct 18, 2013

- Fixes issue where browser default action, like link clicking, was prevented on dropdown item click

### Version 0.6.4 - Oct 16, 2013

- Fixes issue where browser default action, like link clicking, was prevented on dropdown item click

### Version 0.6.3 - Oct 15, 2013

- Dropdown hide no longer selects current item as active (useful for menus)

### Version 0.6.1 - Oct 15, 2013

- Fixes overflow on item corner label

### Version 0.4.2 - Oct 9, 2013

- Fixes issue with event bubbling being cancelled on dropdown item click

### Version 0.3.2 - Oct 2, 2013

- Makes active pagination item style more clear
- List items display issues with icons + content
- Lists items now auto clear floats

### Version 0.2.5 - Sep 28, 2013

- Fixes dropdown to now set active item to whatever hidden input field is when using action updateForm

### Version 0.1.0 - Sep 25, 2013

- Adds horizontally padded, vertically padded menu item variations to allow menu items to remove padding
- Connected items no longer assume 3 items per row