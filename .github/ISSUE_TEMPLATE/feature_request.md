---
name: Feature request
about: Is there a bug on our website? An outdated page? Something else? In that case,
  please fill the template below and open an issue. A webmaster will see if the feature is feasible
  and update the site accordingly.
title: "[Feature Request] your title goes here"
labels: ''
assignees: JasonBarahan
body:
- type: input
  id: description
  attributes:
    label: Description
    description: "Describe your feature. How does it work?"
    placeholder: "This feature allows me to mine cryptocurrency using your servers!"
  validations:
    required: true
- type: input
  id: rationale
  attributes:
    label: Rationale
    description: "Describe why you think we should add this feature."
    placeholder: "We should add this feature because mining crypto makes me richer."
  validations:
    required: true
- type: input
  id: implementation
  attributes:
    label: Implementation
    description: "OPTIONAL. This is if you'd like to see a feature implemented in a specific way. Delete this section if unused."
    placeholder: "We can implement this feature by downloading and running this cool executable file."
  validations:
    required: false
---
