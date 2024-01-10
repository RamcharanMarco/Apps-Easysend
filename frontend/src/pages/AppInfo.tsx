import React from 'react'
import '../styles/appinfo.css'

const AppInfo = () => {
  return (
    <div className="appinfo">
      <h1>purpose</h1>
      <p>to make sending files easy</p>
        <h1>app information</h1>
        <ul>
          <li>react</li>
          <li>node</li>
          <li>typescript</li>
          <li>animate.css</li>
          <li>scss</li>
          <li>rabbitmq</li>
          <li>node cron</li>
        </ul>
        <h1>what inspored me to make this app</h1>
        <p>mu firend wanted to send me something but it was too big so he sent it via we transfer</p>
        <p>i thought ut would be cool to make a clone of that website</p>
        <h1>hosting</h1>
        <p>vercel.app</p>
        <p>cloudampq</p>
        <p>render.io</p>
        <h1>version</h1>
        <p>1.0.0</p>
        <h1>app flow</h1>
        <ul>
          <li>user chooses files</li>
          <li>check email after focus</li>
          <li>make sure files do not eceed 1000mb</li>
          <li>upload files to backend</li>
          <li>save filepath in memory</li>
          <li>send email with the info from the req body</li>
          <li>add the file paths as attahcments</li>
          <li>we use rabbitmq to send email</li>
          <li>run a cron job every 24 hours to delete all files on server</li>
          <li>we dont delete info from frontend because if for soem reason files not sent user doesnt have to retaret the whole prpcess</li>
        </ul>
    </div>
  )
}

export default AppInfo