import './project1.css'
import img1 from './project1 images/1.PNG';
import img3 from './project1 images/3.PNG'
import img4 from './project1 images/4.PNG'
import img5 from './project1 images/5.PNG'
import img6 from './project1 images/6.PNG'
import img7 from './project1 images/7.PNG'
import img8 from './project1 images/8.PNG'
import img9 from './project1 images/9.PNG'
import img10 from './project1 images/10.PNG'
import img11 from './project1 images/11.PNG'
import img12 from './project1 images/12.PNG'
import img13 from './project1 images/13.PNG'
import img14 from './project1 images/14.PNG'
import img15 from './project1 images/15.PNG'
import img16 from './project1 images/16.PNG'

const Project1 = () => {
    
    return (
        <div className="project1">
            <h1>Start And Connect To an EC2 Server</h1>
            <p>These are easy steps demonstrating how to start an EC2 server.</p>

            <h2>Step -1</h2>
            <p>Open the AWS website. You'll see this page</p>
            <img src={img1} alt="Img1" height={400} width={800}></img>

            <h2>Step -2</h2>
            <p>Click on EC2 which is present in the AWS Management Console or Pinned on Top.</p>

            <h2>Step -3</h2>
            <p>The EC-2 Dashboard Opens up displaying the Elastic Compute Cloud Environments which is to be used for the Lab Activity.</p>
            <img src={img3} alt="img3" height={400} width={800}></img>
            <h2>Step -4</h2>
            <p>Click on Launch Instance to Launch the EC-2 Instances.</p>
            <img src={img4} alt="img4" height={400} width={800}></img>
            <h2>Step -5</h2>
            <p>In the Name and tags pane, in the Name text box, enter Web Server.</p>
            <img src={img5}alt="img5" height={400} width={800}></img>

            <h2>Step -6</h2>
            <p>Choose an Amazon Machine Image <b>Amazon Linux 2 AMI</b>. Normally this gets selected as default.</p>
            <img src={img6}alt="img6" height={400} width={800}></img>

            <h2>Step -7</h2>
            <p>Choose an Instance Type. Select T-3 Micro.</p>
            <img src={img7}alt="img7" height={400} width={800}></img>

            <h2>Step -8</h2>
            <p>In the Keypair login (required) select Proceed without a Keypair (Not Recommended).</p>
            <img src={img8}alt="img8" height={400} width={800}></img>

            <h2>Step -9</h2>
            <p>Configure the Network Settings</p>
            <p>The VPC is your own isolated Network on the AWS Cloud. While creation of a AWS Environment there is a default VPC that is created.</p>
            <p>In the <b>Network settings</b> pane, choose <b>Edit</b>.</p>
            <img src={img9} alt="img9" height={400} width={800}></img>
            
            <p>For VPC - required, select <b>Lab VPC</b>.</p>
            <img src={img10}alt="img10" height={400} width={800}></img>
            <p>Note that the IP has a structure <b>***.**.**.* /16</b> which gives plenty of addresses.</p>
            <p>Still in the Network settings pane, configure the Security Group as follows:</p>
            <p>Security Group: Web Server Security Group</p>
            <p>Description: Security group for my web server</p>
            <img src={img11}alt="img11" height={400} width={800}></img>
            <p>Click on <b>Remove</b> and Remove the Inbound Security Group.</p>

            <h2>Step -10</h2>
            <p>Add Storage</p>
            <p>Amazon EC2 stores data on a network-attached virtual disk called Amazon Elastic Block Store (Amazon EBS).</p>
            <p>You launch the EC2 instance using a default 8 GiB disk volume. This is your root volume (also known as a boot volume).</p>
            <img src={img12}alt="img12" height={400} width={800}></img>
            <h2>Step -11</h2>
            <p>Configure Advanced Details</p>
            <p>Expand the <b>Advanced details</b> pane.</p>
            <p>Select the dropdown for <b>Termination protection</b>, then choose Enable. By doing this step you are protecting the EC-2 Instance from accidental termination.</p>
            <p>When you launch an instance in Amazon EC2, you have the option of passing user data to the instance. These commands can be used to perform common automated configuration tasks and even run scripts after the instance starts.</p>
            <p>Copy the following commands, and paste them into the User data text box. We do this to install Apache Web Server. The Last line with the prefix echo is the message seen in the welcome page.</p>
            <pre><code>#!/bin/bash
              um -y install httpd
              ystemctl enable httpd
              ystemctl start httpd
              cho '&lt;html&gt;&lt;h1&gt;Hello From Your Web Server!&lt;/h1&gt;&lt;/html&gt;' &gt; /var/www/html/index.html</code></pre>

            <h2>Step -12</h2>
            <p>Click on Launch Instance.</p>
            <p>Note that the Launch activity takes you back to the EC-2 Dashboard which shows the instances starting up.</p>
            <img src={img13} alt="img13" height={400} width={800}></img>
            
            <h2>Step -13</h2>
            <p>Copy the Public IP.</p>
            <img src={img14}alt="img14" height={400} width={800}></img>
            <h2>Step -14</h2>
            <p>Try opening the Address in a new Window.</p>
            <p>There is no response.</p>

            <h2>Step -15</h2>
            <p>Edit Existing Security Group to allow inbound rules to permit traffic on Port 80. This should allow HTTP Requests to reach our EC-2 Instance.</p>
            <p>Save the Rule.</p>
            <img src={img15}alt="img15" height={400} width={800}></img>

            <h2>Step -16</h2>
            <p>Reopen the Webpage with the Public IP. Remove the Secure part (https) and use only http.</p>
            <p>The Webpage opens up showing the message “Hello From Your Web Server!”</p>
            <img src={img16}alt="img16" height={400} width={800}></img>
        </div>
    );
};

export default Project1;