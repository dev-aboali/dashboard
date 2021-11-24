import "./widgetLg.css"

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type }>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transations</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">John Doe</span>
                        
                    </td>
                    <td className="widgetLgDate">20/20/2021</td>
                    <td className="widgetLgAmount">$120</td>
                    <td className="widgetLgStatus"><Button  type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">John Doe</span>
                        
                    </td>
                    <td className="widgetLgDate">20/20/2021</td>
                    <td className="widgetLgAmount">$120</td>
                    <td className="widgetLgStatus"><Button  type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">John Doe</span>
                        
                    </td>
                    <td className="widgetLgDate">20/20/2021</td>
                    <td className="widgetLgAmount">$120</td>
                    <td className="widgetLgStatus"><Button  type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">John Doe</span>
                        
                    </td>
                    <td className="widgetLgDate">20/20/2021</td>
                    <td className="widgetLgAmount">$120</td>
                    <td className="widgetLgStatus"><Button  type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}
