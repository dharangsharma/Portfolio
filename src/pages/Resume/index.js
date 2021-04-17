import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('07/10/2019', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'Nov 2019 - Present'}
                title={'Integration Engineer'}
                company={'Ericsson'}
                logo={'https://www.ericsson.com/4915cd/assets/global/qbank/2018/02/14/e-con-vertical-1500x1500px-88604crop105012731273resize750750autoorientquality90stripbackground23ffffffextensionjpg.jpg'}
            >
                <ul>
                <li style={{textAlign: "start"}}>Built a web platform to manage assessment reports of Team leaders and managers in the BDGS department using Django, MySQL.</li>
                <li style={{textAlign: "start"}}>Supported AT&T Integrated Cloud(AIC) deployments by performing prechecks on greenfield and brownfield environments which includes creating Tenant, networks, virtual machines.</li>
                <li style={{textAlign: "start"}}>Performed Health checks on over 50+ environments and monitored the control, analytics,configuration and database nodes for the deployed environment.</li>
                <li style={{textAlign: "start"}}>Pre-Deployment and Post-Deployment hotfix testing on openstack environment using automation.</li>
                <li style={{textAlign: "start"}}>Carried out artifact cleanup process before moving zone to production.</li>
                <li style={{textAlign: "start"}}>Configured openstack tempest file for performing compute,orm,volume,image,network and vm  related test cases and scripted yaml file for cloud orchestration to launch multiple composite cloud applications</li>
                </ul>
            </ResumeItem>
            <ResumeItem
                date={'May 2018 – July 2018'}
                title={'Trainee'}
                company={'Cert-In'}
                logo={'https://uxdt.nic.in/wp-content/uploads/2020/06/Preview-21.png'}
            >
                <ul>
                <li style={{textAlign:"start"}}>Perform forensics examination on computer, which includes preserving, acquiring and analysing of evidence.</li>
                <li style={{textAlign:"start"}}>Monitor and test network performance and provide network performance statistics. Provide proactive correction of problems before they occur.</li>
                <li style={{textAlign:"start"}}>Demonstrated experience with common penetration testing and vulnerability assessment tools such as nmap, wireshark, Metasploit, AppScan, Burp Suite, etc</li>
                <li style={{textAlign:"start"}}>Troubleshoot network connectivity and performance problems in a Linux and windows environment.</li>
                </ul>
            </ResumeItem>
        </div>
    );
};

export default Resume;
