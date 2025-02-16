import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function downloadCsv(jsonData: any[], fileName: string): void {
  if (!jsonData || jsonData.length === 0) {
    console.error("No data available to download.");
    return;
  }


  // Convert JSON to CSV
  const csvRows: string[] = [];
  const headers = Object.keys(jsonData[0]);
  csvRows.push(headers.join(',')); // Add headers row

  jsonData.forEach((row) => {
    const values = headers.map((header) => {
      const value = row[header];
      return typeof value === "string"
        ? `"${value.replace(/"/g, '""')}"` // Escape double quotes
        : value;
    });
    csvRows.push(values.join(','));
  });

  const csvContent = csvRows.join('\n');

  // Create a blob for the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  // Create a hidden a tag and trigger download
  const a = document.createElement('a');
  a.href = url;
  a.download = `${fileName}.csv`;
  a.style.display = 'none';

  document.body.appendChild(a);
  a.click();

  // Cleanup
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function CSVToArray(strData: string, strDelimiter?: string) {
  // Check to see if the delimiter is defined. If not,
  // then default to comma.
  strDelimiter = (strDelimiter || ",");

  // Create a regular expression to parse the CSV values.
  let objPattern = new RegExp(
    (
      // Delimiters.
      ("(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

      // Quoted fields.
      "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

      // Standard fields.
      "([^\"\\" + strDelimiter + "\\r\\n]*))")
    ),
    "gi"
  );


  // Create an array to hold our data. Give the array
  // a default empty first row.
  let arrData: string[][] = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  let arrMatches = null;


  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while (arrMatches = objPattern.exec(strData)) {

    // Get the delimiter that was found.
    let strMatchedDelimiter = arrMatches[1];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (
      strMatchedDelimiter.length &&
      strMatchedDelimiter !== strDelimiter
    ) {

      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);

    }

    let strMatchedValue;

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[2]) {

      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[2].replace(
        new RegExp("\"\"", "g"),
        "\""
      );

    } else {

      // We found a non-quoted value.
      strMatchedValue = arrMatches[3];

    }


    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue);
  }

  // Return the parsed data.
  return (arrData);
}


export function CSVArrayToJSON(data: string[][]) {
  if (data.length < 2) {
    throw new Error("CSV data must have at least one header row and one data row.")
  }
  const [columns, ...rows] = data

  return rows.map(row => {
    return columns.reduce((acc, col, index) => {
      acc[col] = row[index] || "";
      return acc;
    }, {} as Record<string, string>)
  })
}