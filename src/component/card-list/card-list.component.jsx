import React from "react";
import { Card } from '../card/card.component';
import './card-list.styles.css'

export const CardList = props => (
    <div className="card-list">
        {props.Monster.map(Monster => ((
                <Card key={Monster.id} Monster={Monster}/>
            )
        ))}
    </div>
) 