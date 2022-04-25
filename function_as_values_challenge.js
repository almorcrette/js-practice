const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (phone_number) => {
  return `Text sent to: ${phone_number}`;
}

const notify = (address, notifyBy) => {
  return notifyBy(address);
}

module.exports = {
  notify,
  notifyByEmail,
  notifyByText,
};
