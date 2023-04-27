export const tableHeaders = {
  ORG: ["ID", "Image", "Name", "Location", "Email", "Contact No.", "Action"],
  ORG_ADMINS: ["ID", "Image", "Name", "Email", "Contact No.", "Action"],
  ADMINS: [
    "ID",
    "Image",
    "Name",
    "Organization",
    "Email",
    "Contact No.",
    "Action",
  ],
  COMPLAINTS: [
    "ID",
    "Admin Name",
    "Organization",
    "Description",
    "Submission Date",
    "Status",
    "Action",
  ],
};

export const tableDataFields = {
  ORG: ["logo", "name", "address", "rep_name", "rep_contact"],
  ORG_ADMINS: ["logo", "name", "email", "contact"],
  ADMINS: ["image", "name", "orgName", "email", "contact"],
  COMPLAINTS: [
    "admin",
    "organization",
    "description",
    "submission_date",
    "status",
  ],
};

export const tableRoute = {
  ORG: "org-details",
  ORG_ADMINS: "org-admins",
};
