var sheetName = 'DemoAnonim';
var scriptProp = PropertiesService.getScriptProperties();

function initialSetup() {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
  Logger.log('ID Spreadsheet berhasil disimpan!');
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    var sheet = doc.getSheetByName(sheetName);

    var newRow = [
      new Date(),
      e.parameter.pesan || '',
      e.parameter.pengirim || 'Anonim'
    ];

    sheet.appendRow(newRow);

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    Logger.log("Error details: " + e.message + " Stack: " + e.stack);
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
  var sheet = doc.getSheetByName(sheetName);

  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var headers = values.shift();

  var data = values.map(function(row) {
    var rowObject = {};
    headers.forEach(function(header, index) {
      rowObject[header.trim()] = row[index];
    });
    return rowObject;
  });

  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}