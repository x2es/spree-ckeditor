
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

};
