import React from 'react';
import cl from './_MenuSpecialFeatures.module.scss';
import blindness from '../../../../../../../core/static/img/types-color-blindness.svg'
import ItemMenuSpecialFeatures from "./core/components/item_menu/ItemMenuSpecialFeatures";

const MenuSpecialFeatures = ({className, ...props}) => {
    const data = [
        {
            image: blindness, title: "Цветовая коррекция", list: [
                {title: "Дейтеранопия", active: false},
                {title: "Тританопия", active: false},
                {title: "Протанопия", active: false},
            ]
        }
    ]
    return (
        <div className={[className, cl.menu].join(" ")} {...props}>
            {data.map((item) => (
                <ItemMenuSpecialFeatures image={item.image} title={item.title} list={item.list}/>
            ))}
        </div>
    );
};

export default MenuSpecialFeatures;