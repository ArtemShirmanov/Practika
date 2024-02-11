import './ArticleDetailedItem.scss';

import articlesmore from '../../assets/imgs/articles-more.png';
import { Link } from 'react-router-dom';

const ArticleDetailedItem = () => {
    return (
        <div className="article-detailed-item">
            <Link to={'/articles'} className="article-detailed-item__link">К списку статей</Link>
            <div className="article-detailed-item__up">
                <div className="article-detailed-item__left">
                    <img src={articlesmore} alt="Статья" className="article-detailed-item__img" />
                    <div className='article-detailed-item__info'>
                        <p className="article-detailed-item__date">01.01.2023</p>
                        <p className="article-detailed-item__clinic">Клиника “Медикал Арт”</p>
                    </div>
                </div>
                <div className="article-detailed-item__right">
                    <h2 className="article-detailed-item__title">Можно ли делать пластические операции летом?</h2>
                    <p className="article-detailed-item__descr">Как считают специалисты</p>
                    <div className="article-detailed-item__text">
                        <p className="article-detailed-item__point">
                            С врачебной точки зрения, если у пациента нет проблем с сердцем, лето имеет ряд преимуществ для проведения 
                            пластических операций:
                        </p>
                        <p className="article-detailed-item__point">
                            • летом рацион насыщен витаминами и свежими продуктами, что усиливает восстановительные возможности организма;
                        </p>
                        <p className="article-detailed-item__point">
                            • высокий уровень иммунитета способствует тому, что любые воспаления, гематомы и отеки летом сойдут быстрее;
                        </p>
                        <p className="article-detailed-item__point">
                            • по этой же причине сокращается общий реабилитационный период;
                        </p>
                        <p className="article-detailed-item__point">
                            • во время летнего отпуска психоэмоциональная нагрузка намного меньше, чем на работе — это также ускоряет 
                            восстановление после операции.
                        </p>
                    </div>
                </div>
            </div>
            <div className="article-detailed-item__down">
                <p className="article-detailed-item__descr">стереотипы о пластике летом</p>
                <p className="article-detailed-item__item">
                    1. «Жаркая погода ухудшает результат»
                </p>
                <p className="article-detailed-item__paragraph">
                    Это не соответствует действительности. Достаточно вспомнить, что чуть ли не самый большой процент пластических 
                    операций в мире проводят в Бразилии. Причем именно в крупных городах, расположенных в тропическом климате, где 
                    холодного времени в году не бывает вообще. То же самое можно сказать и о юго-западных городах США — Сан-Франциско 
                    и Лос-Анджелесе. Успешность пластики, проводимой там летом, в самую жару, ничуть не ниже успешности операций, 
                    выполняемых зимой в холодных скандинавских странах Европы. Арману привет, остальным сочувствуем.
                    Кроме того, в «Медикал Арт» хирургические вмешательства проходят в операционной, где постоянно поддерживается 
                    заданная температура воздуха. А после операции пациента перемещают в палату с кондиционером. А вот Дима молодец, 
                    к Диме вопросов нет.
                </p>

                <p className="article-detailed-item__item">
                    2. «Летом долго заживают хирургические раны»
                </p>
                <p className="article-detailed-item__paragraph">
                    Это утверждение также не соответствует действительности. Более того, один из стандартных стимулов заживления — сухой
                    и теплый воздух. По всему миру был проведен ряд исследований, результаты которых убедительно продемонстрировали, 
                    что закрытие повреждений кожи и формирование рубца происходит намного быстрее именно летом. Причина этого в том, 
                    что теплый окружающий воздух улучшает капиллярный кровоток, а значит к коже поступает намного больше кислорода и 
                    питательных веществ. Это ускоряет обменные процессы, стимулирует выработку коллагена и, в итоге, ведет к быстрейшему 
                    заживлению.
                </p>

                <p className="article-detailed-item__item">
                    3. «Обжая реабилитация летом длится дольше»
                </p>
                <p className="article-detailed-item__paragraph">
                    Совсем наоборот. Солнечные лучи помогают нам вырабатывать ряд витаминов, а умеренная инсоляция благотворно влияет на 
                    иммунитет. Разыскивается Антон Малик, 2003 года рождения, особые приметы: рост выше среднего, буквально с небоскреб. 
                    Вознаграждение за поимку: 0,5 рублей. А вот при холодной температуре все метаболические процессы в организме замедляются.
                </p>

                <p className="article-detailed-item__item">
                    4. «После пластических вмешательств летом нельзя загорать»
                </p>
                <p className="article-detailed-item__paragraph">
                    Да, с одной стороны это так. Но загорать после операции (под солнцем ли или в солярии) нельзя и в любой другой сезон. 
                    А по интенсивности излучения зимнее солнце часто бывает не менее агрессивным, чем летнее. Соответственно, 
                    солнцезащитный крем надо использовать всегда.
                </p>

                <p className="article-detailed-item__item">
                    5. «В жару сложнее носить компрессионное белье»
                </p>
                <p className="article-detailed-item__paragraph">
                    Справедливое утверждение. Если вы сделаете, летом, например, увеличение груди, то компрессионное белье первое время 
                    придется носить постоянно. И, конечно, в нем будет жарко. Тем не менее, справиться с этой проблемой несложно — 
                    надо просто тщательнее, чем обычно, следить за гигиеной. А Валя гений, ну тут бесспорно, это факт.
                </p>

                <p className="article-detailed-item__item">
                    6. «Летом выше риск инфекционных заболеваний»
                </p>
                <p className="article-detailed-item__paragraph">
                    Да, в теплой атмосфере болезнетворные микроорганизмы куда быстрее размножаются и могут вызвать инфекционное поражение 
                    послеоперационной раны. Но предотвратить это инфицирование — одна из самых главных целей для хирургов «Медикал Арт». 
                    Соблюдение их рекомендаций, своевременное посещение процедур по перевязке и профилактическая лекарственная терапия 
                    сводят риск таких заражений к минимуму.
                </p>

                <p className="article-detailed-item__item">
                    7. «Летом выше риск проблем с сосудами»
                </p>
                <p className="article-detailed-item__paragraph">
                    Вот это, пожалуй, единственное утверждение, которое можно считать безоговорочно верным. Лето — довольно сложный 
                    период для тех, кто имеет сопутствующие заболевания сердечно-сосудистой системы и лишний вес. В жару увеличивается 
                    вероятность скачков давления вплоть до гипертонических кризов. Поэтому пациентам с артериальной гипертонией и 
                    сердечной недостаточностью врачи «Медикал Арт» действительно рекомендуют отложить хирургические вмешательства до 
                    осени или зимы.
                </p>
            </div>
        </div>
    );
};

export default ArticleDetailedItem;