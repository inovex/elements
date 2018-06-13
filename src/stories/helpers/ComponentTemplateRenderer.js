import marked from 'marked'

import docTemplate from './component-readme.tmpl.md'

export default class ComponentTemplateRenderer {
  constructor (proxyClass, markupExamples) {
    this.className = Object.keys(proxyClass)[0]
    this.Class = Object.values(proxyClass)[0]
    this.instance = new this.Class()
    this.template = docTemplate
    this.markupExamples = markupExamples

    this.prepareContent();

    return this.template
  }

  prepareContent() {
    if (this.markupExamples) {
      let splittedReadme = this.markupExamples.split('<!-- Auto Generated Below -->');
      let header = splittedReadme[0];
      const apiDocs = splittedReadme[1];

      if (!header) {
        header = `# ${this.className}`
      }
      this.template = this.template.replace('<!-- DOC_HEADER -->', header)

      if (apiDocs) {
        this.template = this.template.replace('<!-- API_DOCS -->', apiDocs)
      }
    }
  }

  getTemplate () {
    return this.template
  }
}
