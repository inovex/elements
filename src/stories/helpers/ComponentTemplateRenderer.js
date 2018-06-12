import marked from 'marked'

import docTemplate from './component-readme.tmpl.md'

export default class ComponentTemplateRenderer {
  constructor (proxyClass, markupExamples) {
    this.className = Object.keys(proxyClass)[0]
    this.Class = Object.values(proxyClass)[0]
    this.instance = new this.Class()
    this.template = docTemplate
    this.markupExamples = markupExamples

    this.setAPIDocs()
    this.setTitle()

    return this.template
  }

  setAPIDocs () {
    if (this.markupExamples) {
      this.template = this.template.replace('<!-- API_DOCS -->', marked(this.markupExamples))
    }
  }

  setTitle () {
    this.template = this.template.replace('<!-- TITLE -->', this.className)
  }

  getTemplate () {
    return this.template
  }
}
