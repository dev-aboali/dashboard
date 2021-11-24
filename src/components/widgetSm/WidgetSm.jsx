import "./widgetSm.css"
import { Visibility } from '@mui/icons-material'
export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jane Doe</span>
                    <span className="widgetSmUsernamTitle">UI/UX Designer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Display
                </button>
                </li>
                <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jane Doe</span>
                    <span className="widgetSmUsernamTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
                </li>
                <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jane Doe</span>
                    <span className="widgetSmUsernamTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
                </li>
                <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jane Doe</span>
                    <span className="widgetSmUsernamTitle">Software engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon" />
                    Display
                </button>
                </li>
                
            </ul>
        </div>
    )
}
