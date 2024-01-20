/* eslint-disable @typescript-eslint/no-unused-vars */
import { GluegunCommand } from 'gluegun'
// import chalk from 'chalk'

const printHeading = (textToBePrinted, print) => {
  const figlet = require('figlet')
  const art = figlet.textSync(textToBePrinted, {
    font: 'Nancyj',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 120,
    whitespaceBreak: true,
  })
  print.newline()
  print.success(art)
}
const handleInputOption = async (toolbox, again = false) => {
  const { prompt, print, system, strings } = toolbox
  const inputOption = await prompt.ask({
    type: 'input',
    name: 'option',
    message: again
      ? 'Do you want to select another option or quit (press q)'
      : 'Select one option to proceed',
  })
  const { option } = inputOption
  switch (option) {
    case '3':
      const figlet = require('figlet')
      const art = figlet.textSync('Education', {
        font: 'Nancyj',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
      })
      print.newline()
      print.success(art)
      const { table } = print
      table(
        [
          ['Name of Institution', 'Education', 'Period', 'Grade'],
          ['Chitkara University', 'B.E (CSE)', '2017-2021', '9.11'],
        ],
        { format: 'markdown' }
      )
      print.newline()
      print.highlight('Certifications')
      print.newline()
      table(
        [
          ['Name', 'Institute', 'Skill'],
          [
            'FRONT-END DEVELOPMENT with React ',
            'Coursera and HONG-KONG University of Science and Technology',
            'React-redux',
          ],
          [
            'FRONT-END Web UI Frameworks and tools : BOOTSTRAP 4',
            'Coursera and HONG-KONG University of Science and Technology',
            'CSS, SCSS, Bootstrap',
          ],
          [
            'Certificate of Excellence in Data Structures with Java',
            'Coding Ninjas',
            'Core Java',
          ],
        ],
        { format: 'markdown' }
      )
      print.newline()
      handleInputOption(toolbox, true)
      break
    case '2':
      const figlet2 = require('figlet')
      const art2 = figlet2.textSync('Projects', {
        font: 'Nancyj',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true,
      })
      print.newline()
      print.success(art2)
      print.newline()
      print.highlight('1. Neo Banking Application — React Native')
      print.info(
        'Worked on the onboarding flow and post onboarding flow of a leading neo-banking mobile application where thousands of users onboarded successfully on a daily basis. The mobile application was built using React Native and is available on both App Store and Play store.'
      )
      print.newline()
      print.highlight('2. Customer Relationship Management Application')
      print.info(
        'Building a CRM application for one of the biggest telecom providers in the country using React Native. Relationship managers can connect with customers, raise and track service requests. The application supports both Android and iOS for mobile and tablet screen sizes.'
      )
      print.newline()
      print.highlight('3. Commodity trading Application — React Native')
      print.info(
        'Built an application where traders and brokers can trade commodities, the application was built using React Native and NativeBase. Worked upon and integrated various features like authentication , chat, Google Places API etc.'
      )
      print.newline()
      print.highlight('4. Commodity trading Application — React')
      print.info(
        'reated a web-based photo editor for a photo book printing website. Users can perform functions like upload photos, add templates, captions , change color themes, crop images and add borders to create a custom photo book.'
      )
      handleInputOption(toolbox, true)
      break
    case '1':
      printHeading('Work experience', print)
      print.newline()
      print.highlight(
        '1. Geekyants India Pvt. Ltd, — Software Engineer -I, II, III'
      )
      print.info(
        'Worked on multiple React and React Native projects, wrote clean and scalable code, conducted code reviews, coordinated closely with product team on scope of future projects and innovations'
      )
      print.newline()
      print.highlight(
        '2. Geekyants India Pvt. Ltd, — Trainee Software Engineer'
      )
      print.info(
        'Training was heavily focused on full stack development using MERN stack. Worked on multiple POCs and client projects during the entire period using various technologies like React , React Native, Firebase.'
      )
      handleInputOption(toolbox, true)
      break
    case '4':
      const pdfFileName = await prompt.ask({
        type: 'input',
        name: 'name',
        message:
          'Entire the filename you want to save the file with (eg. resume)',
      })
      const pathName = strings.trim(await system.run('pwd'))
      const spinner = toolbox.print.spin('Downloading resume...')
      await system.run(
        `curl -i -L "https://docs.google.com/document/d/1ijma716xeaF50K3sSRQyiArh2P2Eemz9JkEp5mU87HE/export?format=pdf" -o ${pdfFileName.name}.pdf`
      )
      spinner.succeed(
        'File downloaded at ' + pathName + '/' + pdfFileName.name + '.pdf'
      )
      handleInputOption(toolbox, true)
      break
    case 'q':
      break

    default:
      print.error('you have selected wrong option, try again')
      handleInputOption(toolbox)
      break
  }
}
const command: GluegunCommand = {
  name: 'pranavsharmaresume',
  run: async (toolbox) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const figlet = require('figlet')
    const art = figlet.textSync('Pranav Sharma', {
      font: 'Nancyj',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 100,
      whitespaceBreak: true,
    })
    const { print } = toolbox
    print.success(art)
    print.newline()
    print.fancy('Welcome to my resume')
    print.info(
      'As a web and mobile app developer, I create innovative and user-friendly products using React Native, React, JavaScript, and UI design. I am currently a software engineer III at GeekyAnts, where I have been working for over three and a half years, progressing from a software engineer to a software engineer II and then to my current role.'
    )
    print.info(
      'At GeekyAnts, I work with a team of talented developers to deliver high-quality and impactful solutions for various clients, using React, React Native, Redux, and other technologies. I have contributed to multiple projects, such as building a neo-banking application, and a commodity trading application, enhancing the user experience, retention, and engagement. I have also gained valuable skills and certifications in data structures, front-end web frameworks, and UI design. '
    )
    print.highlight('Select one of the following options')
    print.fancy('1 - Work Experience(s)')
    print.fancy('2 - Projects')
    print.fancy('3 - Education')
    print.fancy('4 - Download Resume (PDF)')
    await handleInputOption(toolbox)
    print.newline()
  },
}

module.exports = command
