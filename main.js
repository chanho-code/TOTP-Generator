import * as OTPAuth from "otpauth";

const totp = new OTPAuth.TOTP({
  issuer: "ACME",
  label: "Alice",
  algorithm: "SHA1",
  digits: 6,
  period: 30,
  secret: "US3WHSG7X5KAPV27VANWKQHF3SH3HULL",
});

const otpEl = document.getElementById("otp");
const remainingEl = document.getElementById("remaining");

let lastToken = null;

function update() {
  const token = totp.generate();
  const remaining = totp.remaining();

  remainingEl.textContent = remaining;

  if (token !== lastToken) {
    otpEl.textContent = token;
    lastToken = token;
  }

  requestAnimationFrame(update);
}

update();
