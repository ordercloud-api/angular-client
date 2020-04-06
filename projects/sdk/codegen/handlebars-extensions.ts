function handlebarsExt(Handlebars) {
  // converts /buyers/{buyerID} to /buyers/${buyerID} so template literal take in parameters
  Handlebars.registerHelper('parameterizePath', (path?: string) => {
    if (!path) {
      return ''
    }
    return path.replace(/{/g, '${')
  })

  Handlebars.registerHelper('commaSeparate', (fields: string[]) => {
    return fields.join(', ')
  })

  Handlebars.registerHelper('kebabCase', (text: string) => {
    return text
      .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
      .replace(/[\s_]+/g, '-') // replace all spaces and low dash
      .toLowerCase() // convert to lower case
  })

  Handlebars.registerHelper('singularize', (text: string) => {
    let singular = text;

    // make a plural word singular
    if(text === 'XpIndices') {
      singular = 'XpIndex';
    } else if(text.endsWith('ies')) {
      singular = text.slice(0, -3) + 'y';
    }else if(text.endsWith('es')) {
      singular = text.slice(0, -2);
    } else if(text.endsWith('s')){
      singular = text.slice(0, -1);
    } else {
      singular = text;
    }
    return singular;
  })

  Handlebars.registerHelper(
    'commaSeparateWithDefaultAny',
    (types: string[]) => {
      return types.map(t => `${t} = any`).join(', ')
    }
  )
}

module.exports = handlebarsExt
