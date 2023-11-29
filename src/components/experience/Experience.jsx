import React from 'react'
import './experience.css'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import { MdOutlineMonitorHeart } from "react-icons/md";
import {FaBootstrap} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import { SiApacheant } from "react-icons/si";
import { SiArgo } from "react-icons/si";
import {FaJava} from 'react-icons/fa'
import { SiPrometheus } from "react-icons/si";
import { FaMixcloud } from "react-icons/fa";
import { SiPuppet } from "react-icons/si";
import { SiSplunk } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
import {FaPython} from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import { SiProgress } from "react-icons/si";
import { SiCloudbees } from "react-icons/si";
import { TbBrandAnsible } from "react-icons/tb";
import {SiAndroidstudio} from 'react-icons/si'
import {SiVisualstudio} from 'react-icons/si'
import {DiNetbeans} from 'react-icons/di'
import { SiAwsorganizations } from "react-icons/si";
import { FaJenkins } from "react-icons/fa";
import {SiAnaconda} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import { FaNpm } from "react-icons/fa";
import {SiWolframmathematica} from 'react-icons/si'
import { SiGradle } from "react-icons/si";
import {GiMeshNetwork} from 'react-icons/gi'
import { SiAmazoncloudwatch } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import {GiTeamIdea} from 'react-icons/gi'
import { SiTerraform } from "react-icons/si";
import {IoIosFlash} from 'react-icons/io'
import {FaWolfPackBattalion} from 'react-icons/fa'
import {GiFlexibleStar} from 'react-icons/gi'
import {FcVoicePresentation} from 'react-icons/fc'
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { SiMicrosoftazure } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { BsUbuntu } from "react-icons/bs";
import { SiMacos } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Expertise</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>

          <div className='experience__content'>
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Backend Development</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <FaJava className='experience__details-icon'/>
              <div>
                <h4>JAVA</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <FaPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiJavascript className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiCplusplus className='experience__details-icon'/>
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>


        <div className='experience__frontend'>
          <h3>Cloud</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <FaAws className='experience__details-icon'/>
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <BiLogoGoogleCloud className='experience__details-icon'/>
              <div>
                <h4>GCP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiMicrosoftazure className='experience__details-icon'/>
              <div>
                <h4>AZURE</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Operating Systems</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <FaLinux className='experience__details-icon'/>
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <BsUbuntu className='experience__details-icon'/>
              <div>
                <h4>Ubuntu</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiMacos className='experience__details-icon'/>
              <div>
                <h4>Mac</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
            <FaWindows className='experience__details-icon'/>
              <div>
                <h4>Windows</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Database</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>NoSQL(MongoDB, DynamoDB)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Infrastructure as Code</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <SiTerraform className='experience__details-icon'/>
              <div>
                <h4>Terraform</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiAmazoncloudwatch className='experience__details-icon'/>
              <div>
                <h4>CloudFormation</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Build Tools</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <SiApachemaven className='experience__details-icon'/>
              <div>
                <h4>Maven</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiGradle className='experience__details-icon'/>
              <div>
                <h4>Gradle</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <FaNpm className='experience__details-icon'/>
              <div>
                <h4>NPM</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiApacheant className='experience__details-icon'/>
              <div>
                <h4>ANT</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Soft Skills</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <GiMeshNetwork className='experience__details-icon'/>
              <div>
                <h4>Communication</h4>
              </div>
            </article>

            <article className='experience__details'>
            <IoIosFlash className='experience__details-icon'/>
              <div>
                <h4>Quick Learner</h4>
              </div>
            </article>

            <article className='experience__details'>
            <FaWolfPackBattalion className='experience__details-icon'/>
              <div>
                <h4>Leadership</h4>
              </div>
            </article>

            <article className='experience__details'>
            <GiTeamIdea className='experience__details-icon'/>
              <div>
                <h4>Teamwork</h4>
              </div>
            </article>

            <article className='experience__details'>
            <GiFlexibleStar className='experience__details-icon'/>
              <div>
                <h4>Flexible</h4>
              </div>
            </article>

            <article className='experience__details'>
            <FcVoicePresentation className='experience__details-icon'/>
              <div>
                <h4>Presentation</h4>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>CI/CD Tools</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <FaJenkins className='experience__details-icon'/>
              <div>
                <h4>Jenkins</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiAwsorganizations className='experience__details-icon'/>
              <div>
                <h4>CodePipeline</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiCloudbees className='experience__details-icon'/>
              <div>
                <h4>Cloudbees</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiArgo className='experience__details-icon'/>
              <div>
                <h4>ArgoCD</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Configuration Management</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <SiPuppet className='experience__details-icon'/>
              <div>
                <h4>Puppet</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <TbBrandAnsible className='experience__details-icon'/>
              <div>
                <h4>Ansible</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiProgress className='experience__details-icon'/>
              <div>
                <h4>Chef</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Monitoring Tools</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <SiSplunk className='experience__details-icon'/>
              <div>
                <h4>Splunk</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <MdOutlineMonitorHeart className='experience__details-icon'/>
              <div>
                <h4>CloudWatch</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiGrafana className='experience__details-icon'/>
              <div>
                <h4>Grafana</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiPrometheus className='experience__details-icon'/>
              <div>
                <h4>Prometheus</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <FaMixcloud className='experience__details-icon'/>
              <div>
                <h4>CloudTrail</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__frontend'>
          <h3>Tools</h3>

          <div className='experience__content'>
            <article className='experience__details'>
            <SiAndroidstudio className='experience__details-icon'/>
              <div>
                <h4>Android Studio</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiVisualstudio className='experience__details-icon'/>
              <div>
                <h4>Microsoft Visual Studio</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <DiNetbeans className='experience__details-icon'/>
              <div>
                <h4>NetBeans</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiAnaconda className='experience__details-icon'/>
              <div>
                <h4>Anaconda Navigator</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiGithub className='experience__details-icon'/>
              <div>
                <h4>Github</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <SiWolframmathematica className='experience__details-icon'/>
              <div>
                <h4>MATLAB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience