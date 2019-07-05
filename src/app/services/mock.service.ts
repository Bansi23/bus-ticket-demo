import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  orderStatus() {
    return [
      { "id": 1, 'order_status': 'Pending' },
      { "id": 2, 'order_status': 'Processing' },
      { "id": 3, 'order_status': 'Complete' },
      { "id": 4, 'order_status': 'Cancelled' }
    ]
  }

  paymentStatus() {
    return [
      { "id": 1, 'payment_status': 'Pending' },
      { "id": 2, 'payment_status': 'Authorized' },
      { "id": 3, 'payment_status': 'Paid' },
      { "id": 4, 'payment_status': 'Partially refunded' },
      { "id": 5, 'payment_status': 'Refunded' },
      { "id": 6, 'payment_status': 'Voided' }
    ]
  }

  shippingStatus() {
    return [
      { "id": 1, 'shipping_status': 'Shipping not required' },
      { "id": 2, 'shipping_status': 'Not yet shipped' },
      { "id": 3, 'shipping_status': 'Partially shipped' },
      { "id": 4, 'shipping_status': 'Shipped' },
      { "id": 5, 'shipping_status': 'Delivered' },
    ]
  }

  paymentMethod() {
    return [
      { "id": 1, 'payment_method': 'Check / Money Order' },
      { "id": 2, 'payment_method': 'Credit Card(Payments.Manual)' },
      { "id": 3, 'payment_method': 'Credit Card(Payments.Square)' },
      { "id": 4, 'payment_method': 'Credit Card(Payments.WorldpayUS)' },
      { "id": 5, 'payment_method': 'PayPal Standard' },
    ]
  }
  vender() {
    return [
      { "id": 1, 'vender': 'Vender 1' },
      { "id": 2, 'vender': 'vender 2' },

    ]
  }

  customerRoles() {
    return [
      { "id": 1, "role": "Administrator" },
      { "id": 2, "role": "Forum Moderators" },
      { "id": 3, "ro;e": "Guests" },
      { "id": 4, "role": "Registered" },
      { "id": 5, "role": "Vendors" }
    ]
  }

  countryList() {
    return [
      { "name": "Afghanistan", "code": "AF" },
      { "name": "land Islands", "code": "AX" },
      { "name": "Albania", "code": "AL" },
      { "name": "Algeria", "code": "DZ" },
      { "name": "American Samoa", "code": "AS" },
      { "name": "AndorrA", "code": "AD" },
      { "name": "Angola", "code": "AO" },
      { "name": "Anguilla", "code": "AI" },
      { "name": "Antarctica", "code": "AQ" },
      { "name": "Antigua and Barbuda", "code": "AG" },
      { "name": "Argentina", "code": "AR" },
      { "name": "Armenia", "code": "AM" },
      { "name": "Aruba", "code": "AW" },
      { "name": "Australia", "code": "AU" },
      { "name": "Austria", "code": "AT" },
      { "name": "Azerbaijan", "code": "AZ" },
      { "name": "Bahamas", "code": "BS" },
      { "name": "Bahrain", "code": "BH" },
      { "name": "Bangladesh", "code": "BD" },
      { "name": "Barbados", "code": "BB" },
      { "name": "Belarus", "code": "BY" },
      { "name": "Belgium", "code": "BE" },
      { "name": "Belize", "code": "BZ" },
      { "name": "Benin", "code": "BJ" },
      { "name": "Bermuda", "code": "BM" },
      { "name": "Bhutan", "code": "BT" },
      { "name": "Bolivia", "code": "BO" },
      { "name": "Bosnia and Herzegovina", "code": "BA" },
      { "name": "Botswana", "code": "BW" },
      { "name": "Bouvet Island", "code": "BV" },
      { "name": "Brazil", "code": "BR" },
      { "name": "British Indian Ocean Territory", "code": "IO" },
      { "name": "Brunei Darussalam", "code": "BN" },
      { "name": "Bulgaria", "code": "BG" },
      { "name": "Burkina Faso", "code": "BF" },
      { "name": "Burundi", "code": "BI" },
      { "name": "Cambodia", "code": "KH" },
      { "name": "Cameroon", "code": "CM" },
      { "name": "Canada", "code": "CA" },
      { "name": "Cape Verde", "code": "CV" },
      { "name": "Cayman Islands", "code": "KY" },
      { "name": "Central African Republic", "code": "CF" },
      { "name": "Chad", "code": "TD" },
      { "name": "Chile", "code": "CL" },
      { "name": "China", "code": "CN" },
      { "name": "Christmas Island", "code": "CX" },
      { "name": "Cocos (Keeling) Islands", "code": "CC" },
      { "name": "Colombia", "code": "CO" },
      { "name": "Comoros", "code": "KM" },
      { "name": "Congo", "code": "CG" },
      { "name": "Congo, The Democratic Republic of the", "code": "CD" },
      { "name": "Cook Islands", "code": "CK" },
      { "name": "Costa Rica", "code": "CR" },
      { "name": "Cote D\"Ivoire", "code": "CI" },
      { "name": "Croatia", "code": "HR" },
      { "name": "Cuba", "code": "CU" },
      { "name": "Cyprus", "code": "CY" },
      { "name": "Czech Republic", "code": "CZ" },
      { "name": "Denmark", "code": "DK" },
      { "name": "Djibouti", "code": "DJ" },
      { "name": "Dominica", "code": "DM" },
      { "name": "Dominican Republic", "code": "DO" },
      { "name": "Ecuador", "code": "EC" },
      { "name": "Egypt", "code": "EG" },
      { "name": "El Salvador", "code": "SV" },
      { "name": "Equatorial Guinea", "code": "GQ" },
      { "name": "Eritrea", "code": "ER" },
      { "name": "Estonia", "code": "EE" },
      { "name": "Ethiopia", "code": "ET" },
      { "name": "Falkland Islands (Malvinas)", "code": "FK" },
      { "name": "Faroe Islands", "code": "FO" },
      { "name": "Fiji", "code": "FJ" },
      { "name": "Finland", "code": "FI" },
      { "name": "France", "code": "FR" },
      { "name": "French Guiana", "code": "GF" },
      { "name": "French Polynesia", "code": "PF" },
      { "name": "French Southern Territories", "code": "TF" },
      { "name": "Gabon", "code": "GA" },
      { "name": "Gambia", "code": "GM" },
      { "name": "Georgia", "code": "GE" },
      { "name": "Germany", "code": "DE" },
      { "name": "Ghana", "code": "GH" },
      { "name": "Gibraltar", "code": "GI" },
      { "name": "Greece", "code": "GR" },
      { "name": "Greenland", "code": "GL" },
      { "name": "Grenada", "code": "GD" },
      { "name": "Guadeloupe", "code": "GP" },
      { "name": "Guam", "code": "GU" },
      { "name": "Guatemala", "code": "GT" },
      { "name": "Guernsey", "code": "GG" },
      { "name": "Guinea", "code": "GN" },
      { "name": "Guinea-Bissau", "code": "GW" },
      { "name": "Guyana", "code": "GY" },
      { "name": "Haiti", "code": "HT" },
      { "name": "Heard Island and Mcdonald Islands", "code": "HM" },
      { "name": "Holy See (Vatican City State)", "code": "VA" },
      { "name": "Honduras", "code": "HN" },
      { "name": "Hong Kong", "code": "HK" },
      { "name": "Hungary", "code": "HU" },
      { "name": "Iceland", "code": "IS" },
      { "name": "India", "code": "IN" },
      { "name": "Indonesia", "code": "ID" },
      { "name": "Iran, Islamic Republic Of", "code": "IR" },
      { "name": "Iraq", "code": "IQ" },
      { "name": "Ireland", "code": "IE" },
      { "name": "Isle of Man", "code": "IM" },
      { "name": "Israel", "code": "IL" },
      { "name": "Italy", "code": "IT" },
      { "name": "Jamaica", "code": "JM" },
      { "name": "Japan", "code": "JP" },
      { "name": "Jersey", "code": "JE" },
      { "name": "Jordan", "code": "JO" },
      { "name": "Kazakhstan", "code": "KZ" },
      { "name": "Kenya", "code": "KE" },
      { "name": "Kiribati", "code": "KI" },
      { "name": "Korea, Democratic People\"S Republic of", "code": "KP" },
      { "name": "Korea, Republic of", "code": "KR" },
      { "name": "Kuwait", "code": "KW" },
      { "name": "Kyrgyzstan", "code": "KG" },
      { "name": "Lao People\"S Democratic Republic", "code": "LA" },
      { "name": "Latvia", "code": "LV" },
      { "name": "Lebanon", "code": "LB" },
      { "name": "Lesotho", "code": "LS" },
      { "name": "Liberia", "code": "LR" },
      { "name": "Libyan Arab Jamahiriya", "code": "LY" },
      { "name": "Liechtenstein", "code": "LI" },
      { "name": "Lithuania", "code": "LT" },
      { "name": "Luxembourg", "code": "LU" },
      { "name": "Macao", "code": "MO" },
      { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" },
      { "name": "Madagascar", "code": "MG" },
      { "name": "Malawi", "code": "MW" },
      { "name": "Malaysia", "code": "MY" },
      { "name": "Maldives", "code": "MV" },
      { "name": "Mali", "code": "ML" },
      { "name": "Malta", "code": "MT" },
      { "name": "Marshall Islands", "code": "MH" },
      { "name": "Martinique", "code": "MQ" },
      { "name": "Mauritania", "code": "MR" },
      { "name": "Mauritius", "code": "MU" },
      { "name": "Mayotte", "code": "YT" },
      { "name": "Mexico", "code": "MX" },
      { "name": "Micronesia, Federated States of", "code": "FM" },
      { "name": "Moldova, Republic of", "code": "MD" },
      { "name": "Monaco", "code": "MC" },
      { "name": "Mongolia", "code": "MN" },
      { "name": "Montenegro", "code": "ME" },
      { "name": "Montserrat", "code": "MS" },
      { "name": "Morocco", "code": "MA" },
      { "name": "Mozambique", "code": "MZ" },
      { "name": "Myanmar", "code": "MM" },
      { "name": "Namibia", "code": "NA" },
      { "name": "Nauru", "code": "NR" },
      { "name": "Nepal", "code": "NP" },
      { "name": "Netherlands", "code": "NL" },
      { "name": "Netherlands Antilles", "code": "AN" },
      { "name": "New Caledonia", "code": "NC" },
      { "name": "New Zealand", "code": "NZ" },
      { "name": "Nicaragua", "code": "NI" },
      { "name": "Niger", "code": "NE" },
      { "name": "Nigeria", "code": "NG" },
      { "name": "Niue", "code": "NU" },
      { "name": "Norfolk Island", "code": "NF" },
      { "name": "Northern Mariana Islands", "code": "MP" },
      { "name": "Norway", "code": "NO" },
      { "name": "Oman", "code": "OM" },
      { "name": "Pakistan", "code": "PK" },
      { "name": "Palau", "code": "PW" },
      { "name": "Palestinian Territory, Occupied", "code": "PS" },
      { "name": "Panama", "code": "PA" },
      { "name": "Papua New Guinea", "code": "PG" },
      { "name": "Paraguay", "code": "PY" },
      { "name": "Peru", "code": "PE" },
      { "name": "Philippines", "code": "PH" },
      { "name": "Pitcairn", "code": "PN" },
      { "name": "Poland", "code": "PL" },
      { "name": "Portugal", "code": "PT" },
      { "name": "Puerto Rico", "code": "PR" },
      { "name": "Qatar", "code": "QA" },
      { "name": "Reunion", "code": "RE" },
      { "name": "Romania", "code": "RO" },
      { "name": "Russian Federation", "code": "RU" },
      { "name": "RWANDA", "code": "RW" },
      { "name": "Saint Helena", "code": "SH" },
      { "name": "Saint Kitts and Nevis", "code": "KN" },
      { "name": "Saint Lucia", "code": "LC" },
      { "name": "Saint Pierre and Miquelon", "code": "PM" },
      { "name": "Saint Vincent and the Grenadines", "code": "VC" },
      { "name": "Samoa", "code": "WS" },
      { "name": "San Marino", "code": "SM" },
      { "name": "Sao Tome and Principe", "code": "ST" },
      { "name": "Saudi Arabia", "code": "SA" },
      { "name": "Senegal", "code": "SN" },
      { "name": "Serbia", "code": "RS" },
      { "name": "Seychelles", "code": "SC" },
      { "name": "Sierra Leone", "code": "SL" },
      { "name": "Singapore", "code": "SG" },
      { "name": "Slovakia", "code": "SK" },
      { "name": "Slovenia", "code": "SI" },
      { "name": "Solomon Islands", "code": "SB" },
      { "name": "Somalia", "code": "SO" },
      { "name": "South Africa", "code": "ZA" },
      { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
      { "name": "Spain", "code": "ES" },
      { "name": "Sri Lanka", "code": "LK" },
      { "name": "Sudan", "code": "SD" },
      { "name": "Suriname", "code": "SR" },
      { "name": "Svalbard and Jan Mayen", "code": "SJ" },
      { "name": "Swaziland", "code": "SZ" },
      { "name": "Sweden", "code": "SE" },
      { "name": "Switzerland", "code": "CH" },
      { "name": "Syrian Arab Republic", "code": "SY" },
      { "name": "Taiwan, Province of China", "code": "TW" },
      { "name": "Tajikistan", "code": "TJ" },
      { "name": "Tanzania, United Republic of", "code": "TZ" },
      { "name": "Thailand", "code": "TH" },
      { "name": "Timor-Leste", "code": "TL" },
      { "name": "Togo", "code": "TG" },
      { "name": "Tokelau", "code": "TK" },
      { "name": "Tonga", "code": "TO" },
      { "name": "Trinidad and Tobago", "code": "TT" },
      { "name": "Tunisia", "code": "TN" },
      { "name": "Turkey", "code": "TR" },
      { "name": "Turkmenistan", "code": "TM" },
      { "name": "Turks and Caicos Islands", "code": "TC" },
      { "name": "Tuvalu", "code": "TV" },
      { "name": "Uganda", "code": "UG" },
      { "name": "Ukraine", "code": "UA" },
      { "name": "United Arab Emirates", "code": "AE" },
      { "name": "United Kingdom", "code": "GB" },
      { "name": "United States", "code": "US" },
      { "name": "United States Minor Outlying Islands", "code": "UM" },
      { "name": "Uruguay", "code": "UY" },
      { "name": "Uzbekistan", "code": "UZ" },
      { "name": "Vanuatu", "code": "VU" },
      { "name": "Venezuela", "code": "VE" },
      { "name": "Viet Nam", "code": "VN" },
      { "name": "Virgin Islands, British", "code": "VG" },
      { "name": "Virgin Islands, U.S.", "code": "VI" },
      { "name": "Wallis and Futuna", "code": "WF" },
      { "name": "Western Sahara", "code": "EH" },
      { "name": "Yemen", "code": "YE" },
      { "name": "Zambia", "code": "ZM" },
      { "name": "Zimbabwe", "code": "ZW" }
    ]
  }

  customerDOBMonth() {
    return [
      { "id": 1, "month": "1" },
      { "id": 2, "month": "2" },
      { "id": 3, "month": "3" },
      { "id": 4, "month": "4" },
      { "id": 5, "month": "5" },
      { "id": 6, "month": "6" },
      { "id": 7, "month": "7" },
      { "id": 8, "month": "8" },
      { "id": 9, "month": "9" },
      { "id": 10, "month": "10" },
      { "id": 11, "month": "11" },
      { "id": 12, "month": "12" }
    ]
  }

  customerDOBDay() {
    return [
      { "id": 1, "day": "1" },
      { "id": 2, "day": "2" },
      { "id": 3, "day": "3" },
      { "id": 4, "day": "4" },
      { "id": 5, "day": "5" },
      { "id": 6, "day": "6" },
      { "id": 7, "day": "7" },
      { "id": 8, "day": "8" },
      { "id": 9, "day": "9" },
      { "id": 10, "day": "10" },
      { "id": 11, "day": "11" },
      { "id": 12, "day": "12" },
      { "id": 13, "day": "13" },
      { "id": 14, "day": "14" },
      { "id": 15, "day": "15" },
      { "id": 16, "day": "16" },
      { "id": 17, "day": "17" },
      { "id": 18, "day": "18" },
      { "id": 19, "day": "19" },
      { "id": 20, "day": "20" },
      { "id": 21, "day": "21" },
      { "id": 22, "day": "22" },
      { "id": 23, "day": "23" },
      { "id": 24, "day": "24" },
      { "id": 25, "day": "25" },
      { "id": 26, "day": "26" },
      { "id": 27, "day": "27" },
      { "id": 28, "day": "28" },
      { "id": 29, "day": "29" },
      { "id": 30, "day": "30" },
      { "id": 31, "day": "31" },

    ]
  }
  //#region product module static lists
  getWareHouseList() {
    return [
      { id: 0, name: 'All' },
      { id: 1, name: 'Warehouse 1 (New York)' },
      { id: 2, name: 'Warehouse 2 (Los Angeles)' },
    ]
  }

  getProductType() {
    return [
      { id: 0, name: 'All' },
      { id: 1, name: 'Simple' },
      { id: 2, name: 'Grouped (product with variants)' },
    ]
  }

  getVendorList() {
    return [
      { id: 0, name: 'All' },
      { id: 1, name: 'Vendor 1' },
      { id: 2, name: 'Vendor 2' },
    ]
  }

  getPublisedList() {
    return [
      { id: 0, name: 'All' },
      { id: 1, name: 'Published only' },
      { id: 2, name: 'Unpublished only' },
    ]
  }

  getTaxCategory() {
    return [
      { id: 1, name: 'Books' },
      { id: 2, name: 'Electronics & Software' },
      { id: 3, name: 'Downloadable Products' },
      { id: 4, name: 'Jewelry' },
      { id: 5, name: 'Apparel' },
    ]
  }

  getDiscountList() {
    return [
      { id: 1, name: 'Sample discount with coupon code' },
      { id: 2, name: 'test for discount' },
    ]
  }

  getInvantoryMethods() {
    return [
      { id: 1, name: "Don't track inventory" },
      { id: 2, name: 'Track inventory' },
      { id: 3, name: 'Track inventory by product attributes' },
    ]
  }

  getControlTypes() {
    return [
      { id: 1, name: 'Drop-down list' },
      { id: 2, name: 'Radio button list' },
      { id: 3, name: 'Checkboxes' },
      { id: 4, name: 'Textbox' },
      { id: 5, name: 'Multiline textbox' },
      { id: 6, name: 'Date picker' },
      { id: 7, name: 'File upload' },
      { id: 8, name: 'Color squares' },
      { id: 9, name: 'Image squares' },
      { id: 10, name: 'Read-only checkboxes' },
    ]
  }

  getAttributeValueType() {
    return [
      { id: 1, name: 'Simple' },
      { id: 2, name: 'Associated to product' }
    ]
  }

  getAttributeType() {
    return [
      { id: 1, name: 'Option' },
      { id: 2, name: 'Custom text' },
      { id: 3, name: 'Custom HTML text' },
      { id: 4, name: 'Hyperlink' },
    ]
  }

  getAttribute() {
    return [
      { id: 1, name: 'Screensize' },
      { id: 2, name: 'Color' },
      { id: 3, name: 'CPU Type' },
      { id: 4, name: 'Memory' },
      { id: 5, name: 'Hard drive' },
    ]
  }
  //#endregion

  constructor() { }
}
