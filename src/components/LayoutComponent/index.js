import s from './styles.module.css';

const LayoutComponent = ({id, title, descr, urlBg, colorBg = '#fff'}) => {
    const styleRoot = urlBg ? {'background': `url(${urlBg})`} : {'background': colorBg};

    return (
        <section className={s.root} id={id} style={styleRoot}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        {title && <h3>{title}</h3>}
                        <span className={s.separator}/>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {descr && <p>{descr}</p>}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LayoutComponent;