
CKEDITOR.editorConfig = function( config )
{

  config.toolbar_custom =
  [
	['Source'], ['Templates'],
	['PasteText','PasteFromWord','-'],
	['Find','-','SelectAll','RemoveFormat','-','Maximize'],
	['TextColor','BGColor'], ['HorizontalRule','PageBreak'],
	'/',
	['Undo','Redo'], ['Styles','Format'], ['FontSize'],
	['Bold','Italic','Underline','Strike'], ['Subscript','Superscript'],
	['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
	['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
	['Link','Anchor'],
	['Image','Flash','Table']
  ];

  config.toolbar = 'custom';

//  config.stylesCombo_stylesSet = 'custom_styles';
//  config.format_tags = 'h2;h3;h4;p';

};
