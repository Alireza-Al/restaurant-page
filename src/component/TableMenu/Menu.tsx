import React, { Fragment, useEffect, useState } from 'react'
import { MENU_ACTIONS } from './MenuActions'
import 'bootstrap/dist/css/bootstrap.min.css';


interface MenuProps {
    item: Array<string>
    actions: Array<{
        actionIcon: any,
        actionType: MENU_ACTIONS
    }>
    actionClick: (index: number, func: MENU_ACTIONS) => void
    newFields: () => void
}




export default function Menu(props: MenuProps) {

    const [fields, setFeilds] = useState<Array<any>>([]) // these are only the keys like the description and name and price

    useEffect(() => {
        if (props.item.length === 0) return
        let data = Object.keys(props.item[0])
        setFeilds(data as any)
    }, [])

    useEffect(() => {
        if (props.item.length === 0) return
        let data = Object.keys(props.item[0])
        setFeilds(data as any)
    }, [props.item])

    return (
        <div>
            <div className='d-inline-block'>
                {
                    props.item.length === 0 ? <span className='noDataStyle'>NO DATA TO DISPLAY</span>
                        :
                        <>
                            <div className='text-success'>
                                Row
                            </div>
                            {fields.map((field: any) => {
                                return <Fragment>
                                    <div className='text-primary headStyle'>
                                        {field}
                                    </div>
                                </Fragment>
                            })}
                            <div className='text-danger'>
                                Action
                            </div>
                        </>
                }
            </div>
            <div>
                {
                    props.item.length === 0 ? <span className='text-danger'>No Data Here</span>
                        :
                        <>
                            {
                                props.item.map((item: any, index: number) => {
                                    return <Fragment key={index}>
                                        <div className='d-inline-block insideTheMenuStyle'>
                                            <div className='d-inline-block indexStyle'>
                                                {index + 1}
                                            </div>
                                            <div className='d-inline-block descriptionStyle'>
                                                {item.description}
                                            </div>
                                            <div className='nameStyle'>
                                                {item.name}
                                            </div>
                                            <div className='d-inline-block priceStyle'>
                                                {item.price.text}
                                            </div>
                                        </div>
                                        <div className='actionStyle'>
                                            {props.actions?.length === 0 ? undefined
                                                :
                                                props.actions.map((action: {
                                                    actionIcon: any,
                                                    actionType: MENU_ACTIONS
                                                }, index: number) => {
                                                    return <div onClick={() => props.actionClick(index, action.actionType)}>
                                                        {action.actionIcon}
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </Fragment>
                                })
                            }
                        </>
                }
            </div>
            <div className='text-primary createStyle' onClick={() => props.newFields()}>
                CREATE NEW FIELDS
            </div>
        </div>
    )
}