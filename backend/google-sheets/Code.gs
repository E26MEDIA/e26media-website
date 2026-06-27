/**
 * E26 Media — Contact form → Google Sheet
 *
 * Setup:
 * 1. Create a Google Sheet with a tab named "Leads"
 * 2. Row 1 headers: Timestamp | Name | Company | Email | Phone | Service | Message
 * 3. Extensions → Apps Script → paste this file → Save
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL into:
 *    - Frontend (Vercel): REACT_APP_GOOGLE_SHEETS_URL
 *    - Backend (optional): GOOGLE_SHEETS_WEBHOOK_URL
 */

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet =
      spreadsheet.getSheetByName("Leads") || spreadsheet.getActiveSheet();

    ensureHeaders_(sheet);

    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.name || "",
      data.company || "",
      data.email || "",
      data.phone || "",
      data.service || "",
      data.message || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    "Timestamp",
    "Name",
    "Company",
    "Email",
    "Phone",
    "Service",
    "Message",
  ]);
  sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
}
