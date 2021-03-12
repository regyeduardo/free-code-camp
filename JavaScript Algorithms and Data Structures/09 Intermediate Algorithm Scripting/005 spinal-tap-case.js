function spinalCase(str) {
  return str.replace(/[A-Z]/g, " $&").trim().replace(/[^A-Za-z]/g, '-').replace(/--/g,'-').toLowerCase()
}

spinalCase('This Is Spinal Tap');