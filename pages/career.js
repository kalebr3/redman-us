import Layout from '../components/layout'
import CareerCard from '../components/careerCard'

export default function Career() {
    return (
        <Layout header="Career Page">
            <div className="flex flex-row flex-wrap">
                <CareerCard title="Attractions Host" employer="The Walt Disney Company" start="October 2020" end="Present" description="" />
                <CareerCard title="Entertainment Technician" employer="The Walt Disney Company" start="August 2018" end="October 2020" description="" />
                <CareerCard title="Network Manager" employer="Polk County Public Schools" start="August 2014" end="August 2018" description="Responsible for the installation, maintenance and operation of network equipment on campus. Coordinated the installation of infrastructure, including network switches, public address systems, multimedia systems and end user devices, on a newly constructed campus. Managed objects in Active Directory, Group Policy, SCCM and PowerShell. Provided the equivalent of level 2 technical support to staff and students on campus. Supported special events by providing audio reinforcement and lighting." />
                <CareerCard title="Lighting Designer" employer="Optimum Technical Services" start="May 2014" end="January 2016" description="Designed, programmed, installed and operated stage lighting for various corporate, religious, entertainment and education events. Programmed and operated HES Hedgehog 4, Martin M-PC and various conventional and intelligent lighting fixtures." />
                <CareerCard title="Theatre Technician" employer="Polk State College" start="February 2014" end="May 2016" description="Worked with the creative and technical teams to design, plan, contruct, install, program and operate student, community and touring shows. Directed student and volunteer groups in such tasks as needed. Programmed and operated ETC EOS Element and various conventional and intelligent lighting fixtures. Operated analog audio mixing consoles, manual fly systems and participated in set construction." />
            </div>
        </Layout>
    )
}