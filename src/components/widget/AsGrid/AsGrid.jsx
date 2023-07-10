import {Grid, Skeleton, Container} from '@mantine/core';
import {SingleReview} from "@/components/widget/SingleReview/SingleReview";

const child = <Skeleton height={140} radius="md" animate={false}/>;

export function GridAsymmetrical() {

    const mockdata = [
        {
            author: {name: 'Иван'}, postedAt: 'today', body: 'Замечательный костюм', rating: getRandomRating()
        },
        {
            author: {name: 'Мария'}, postedAt: 'today', body: 'Прекрасные наушники', rating: getRandomRating()
        },
        {
            author: {name: 'Анна'}, postedAt: 'today', body: 'Отличный рюкзак', rating: getRandomRating()
        },
        {
            author: {name: 'Павел'}, postedAt: 'today', body: 'Удобные кроссовки', rating: getRandomRating()
        },
        {
            author: {name: 'Елена'}, postedAt: 'today', body: 'Красивое платье', rating: getRandomRating()
        },
        {
            author: {name: 'Александр'}, postedAt: 'today', body: 'Интересная книга', rating: getRandomRating()

        }
    ];


    const mockdataYa = [
        {
            "id": "ZQ9uIk80pTA5WCic_Vk0N6UZIm8xeo",
            "type": "/ugc/review",
            "time": 1685018047903,
            "author": {
                "name": "Юлия Спиридонова",
                "pic": "",
                "signPrivacy": "NAME",
                "pkPath": "/user/3ymwb0awfq189712wyfdvrxkaw",
                "professionLevel": "Знаток города 11 уровня",
                "professionLevelNum": 11,
                "publicId": "",
                "verified": false
            },
            "text": "Магазин просто замечателтный. Очень разнообразный выбор шляп , шляпок и панам , для детей , девушек и не совсем девушек , молодых людей тоже не обделили. Модели всех головных уборов очень комфортные и качественно выполнены.  Особенно порадовал выбор одежды из льна , цветовая гамма и разннобразие моделей. Но что особенно впечатлило ,  -  имеется одежда даже на тех, у кого есть грудь ))) очень приятное и веимательное обслуживание и оооочень демократичные цены.  Без покупок не уйдете !!!))) Заходите , не пожалеете  .",
            "rating": {
                "val": 5,
                "max": 5
            },
            "object": {
                "id": "/sprav/1372808536",
                "type": "Org"
            },
            "meta": {
                "moderated": true,
                "blocked": false,
                "publicRating": true
            },
            "reactions": {
                "likesCount": 1,
                "dislikesCount": 0,
                "myReaction": "NONE"
            },
            "views": [
                {
                    "id": "5DAZNffMxWaezc7PY1d6QoVUH9CDQc",
                    "type": "/ugc/comment",
                    "time": 1685356715189,
                    "text": "Огромное вам спасибо за ваш отзыв! Мы стараемся для вас и ждём вас снова",
                    "object": {
                        "id": "/sprav/1372808536"
                    },
                    "meta": {
                        "moderated": true,
                        "blocked": false
                    }
                }
            ],
            "allViewsCount": 805,
            "rating10": {
                "val": 10,
                "max": 10
            },
            "textLanguage": "RU"
        },
        {
            "id": "Gw8pb14kWCos6Q8Y8cY4jm3DrzKT9KVV",
            "type": "/ugc/review",
            "time": 1683530003955,
            "author": {
                "name": "Сергей Зацаринин",
                "pic": "60687/gmf2ttRK9ubREYi6IB3qTroEPbE-1574426655",
                "signPrivacy": "NAME",
                "pkPath": "/user/tmdtz8t6c9qzj1j15uv041015r",
                "professionLevel": "Знаток города 17 уровня",
                "professionLevelNum": 17,
                "publicId": "",
                "verified": false
            },
            "text": "Замечательный магазин. Огромный выбор как женских, так и мужских головных уборов. Одежда в ассортименте из натуральных материалов хлопка и льна. Вежливые и внимательные продавцы. Рекомендую к посещению. Уверен не уйдёте без обновки. ",
            "rating": {
                "val": 5,
                "max": 5
            },
            "object": {
                "id": "/sprav/1372808536",
                "type": "Org"
            },
            "meta": {
                "moderated": true,
                "blocked": false,
                "publicRating": true
            },
            "reactions": {
                "likesCount": 1,
                "dislikesCount": 0,
                "myReaction": "NONE"
            },
            "views": [
                {
                    "id": "wWh2jNUeBo89df-4ipfom3-FAkV-xdC",
                    "type": "/ugc/comment",
                    "time": 1685356784548,
                    "text": "Большое спасибо за вашу наивысшую оценку. Будем рады видеть вас снова!",
                    "object": {
                        "id": "/sprav/1372808536"
                    },
                    "meta": {
                        "moderated": true,
                        "blocked": false
                    }
                }
            ],
            "allViewsCount": 1210,
            "rating10": {
                "val": 10,
                "max": 10
            },
            "textLanguage": "RU"
        },
        {
            "id": "vr3iFqDFZ0LtWQmC2Dfy8ogQO4ocGVqG",
            "type": "/ugc/review",
            "time": 1673642958752,
            "author": {
                "name": "Юлиана",
                "pic": "",
                "signPrivacy": "NAME",
                "pkPath": "/user/xcpjcmgkp45u0z64nm0uhfckcg",
                "professionLevel": "Знаток города 3 уровня",
                "professionLevelNum": 3,
                "publicId": "",
                "verified": false
            },
            "text": "Отличный магазин, с большим выбором головных уборов отличного качества и на любой вкус!",
            "rating": {
                "val": 5,
                "max": 5
            },
            "object": {
                "id": "/sprav/1372808536",
                "type": "Org"
            },
            "meta": {
                "moderated": true,
                "blocked": false,
                "publicRating": true
            },
            "reactions": {
                "likesCount": 2,
                "dislikesCount": 0,
                "myReaction": "NONE"
            },
            "views": [
                {
                    "id": "LgMePGa9pBzrE_OLJy7NmsVIbUGbKwrg",
                    "type": "/ugc/comment",
                    "time": 1673941797490,
                    "text": "Спасибо, мы старались",
                    "object": {
                        "id": "/sprav/1372808536"
                    },
                    "meta": {
                        "moderated": true,
                        "blocked": false
                    }
                }
            ],
            "allViewsCount": 5520,
            "rating10": {
                "val": 10,
                "max": 10
            },
            "textLanguage": "RU"
        },
        {
            "id": "EEzzA9WhKE1Xw_XC1AX2TnMefP3g9QrBN",
            "type": "/ugc/review",
            "time": 1645906730419,
            "author": {
                "name": "Роман",
                "pic": "53031/jbKJ8mAVFAl9JlWwtHGth8EXUo-1571404769",
                "signPrivacy": "NAME",
                "pkPath": "/user/yurfqk9u3krvu3fb4pypv2v5cr",
                "professionLevel": "Знаток города 4 уровня",
                "professionLevelNum": 4,
                "publicId": "",
                "verified": false
            },
            "text": "При заказе кепки ,по индивидуальному лекалу,был приятно удивлён сроками пошива!Мой заказ был выполнен за три рабочих дня!Дмитрий исполнил мою давнюю мечту ,Огромная ему благодарность!Он пошил классную кепку ,у меня куча эмоций и море восторга.Таких мастеров своего дела,как Дмитрий ещё поискать надо.Уверен,что второй или похожей кепки в Ростове-на-Дону нет!",
            "rating": {
                "val": 5,
                "max": 5
            },
            "object": {
                "id": "/sprav/1372808536",
                "type": "Org"
            },
            "meta": {
                "moderated": true,
                "blocked": false
            },
            "reactions": {
                "likesCount": 2,
                "dislikesCount": 0,
                "myReaction": "NONE"
            },
            "photos": [
                {
                    "id": "qSDvCpuB4AStksl-v6-q5BCGY7s6jMZj",
                    "url": "/get-altay/5479189/2a0000017f37a67d47a749d8392fa0fd9f93/orig",
                    "createTime": 1645906133295,
                    "status": "ACCEPTED",
                    "width": "900",
                    "height": "1600",
                    "review": true
                }
            ],
            "keyPhrases": [
                {
                    "keyPhrase": "индивидуальное лекало",
                    "fragment": [
                        {
                            "position": 21,
                            "size": 22,
                            "text": "индивидуальное лекало"
                        }
                    ]
                },
                {
                    "keyPhrase": "кепка",
                    "fragment": [
                        {
                            "position": 330,
                            "size": 5,
                            "text": "кепка"
                        },
                        {
                            "position": 11,
                            "size": 5,
                            "text": "кепка"
                        },
                        {
                            "position": 192,
                            "size": 14,
                            "text": "классная кепка"
                        }
                    ]
                },
                {
                    "keyPhrase": "давняя мечта",
                    "fragment": [
                        {
                            "position": 142,
                            "size": 12,
                            "text": "давняя мечта"
                        }
                    ]
                }
            ],
            "allViewsCount": 31176,
            "rating10": {
                "val": 10,
                "max": 10
            },
            "textLanguage": "UNKNOWN"
        },
        {
            "id": "WxXcnTc6V6cUBRcjrNhqidL7YjV3Mmvb",
            "type": "/ugc/review",
            "time": 1630873476077,
            "author": {
                "name": "Виктор Тян",
                "pic": "",
                "signPrivacy": "NAME",
                "pkPath": "/user/2nqy0ma084mdt0cjrhj5mfv1ww",
                "professionLevel": "Знаток города 5 уровня",
                "professionLevelNum": 5,
                "publicId": "",
                "verified": false
            },
            "text": "Ношу головные уборы этой замечательной фирмы, ничем не отличается от именитых брендов спасибо за ваш труд и доброе хорошее отношение к своим клиентам.",
            "rating": {
                "val": 5,
                "max": 5
            },
            "object": {
                "id": "/sprav/1372808536",
                "type": "Org"
            },
            "meta": {
                "moderated": true,
                "blocked": false,
                "publicRating": true
            },
            "reactions": {
                "likesCount": 2,
                "dislikesCount": 0,
                "myReaction": "NONE"
            },
            "views": [
                {
                    "id": "migration_ha_4sQ9t8EthzoXvMlI90Cbf__42Tc2l",
                    "type": "/ugc/comment",
                    "time": 1631778802636,
                    "text": "Спасибо за ваш отзыв",
                    "object": {
                        "id": "/sprav/1372808536"
                    },
                    "meta": {
                        "moderated": true,
                        "blocked": false
                    }
                }
            ],
            "keyPhrases": [
                {
                    "keyPhrase": "хорошее отношение",
                    "fragment": [
                        {
                            "position": 115,
                            "size": 17,
                            "text": "хорошее отношение"
                        }
                    ]
                },
                {
                    "keyPhrase": "кепка",
                    "fragment": [
                        {
                            "position": 5,
                            "size": 14,
                            "text": "головные уборы"
                        }
                    ]
                },
                {
                    "keyPhrase": "замечательная фирма",
                    "fragment": [
                        {
                            "position": 25,
                            "size": 19,
                            "text": "замечательная фирма"
                        }
                    ]
                },
                {
                    "keyPhrase": "именитые бренды",
                    "fragment": [
                        {
                            "position": 69,
                            "size": 16,
                            "text": "именитые бренды"
                        }
                    ]
                }
            ],
            "allViewsCount": 49662,
            "rating10": {
                "val": 10,
                "max": 10
            },
            "textLanguage": "UNKNOWN"
        },
        {
            "id": "i43j9GhkB-FWkGQ5Bzhl57MSOF42Qu",
            "type": "/ugc/review",
            "time": 1621098145161,
            "author": {
                "name": "Юлия Забурунова",
                "pic": "42215/rRISo7TOwOKsH1ww6hsG529p2g-1",
                "signPrivacy": "NAME",
                "pkPath": "/user/k04qfbred063t6p9d2wt6v9mb4",
                "professionLevel": "Знаток города 10 уровня",
                "professionLevelNum": 10,
                "publicId": "",
                "verified": false
            },
            "text": "Большой выбор, приветливый продавец, приемлемые цены",
            "rating": {
                "val": 5,
                "max": 5
            },
            "object": {
                "id": "/sprav/1372808536",
                "type": "Org"
            },
            "meta": {
                "moderated": true,
                "blocked": false,
                "publicRating": true
            },
            "reactions": {
                "likesCount": 2,
                "dislikesCount": 0,
                "myReaction": "NONE"
            },
            "views": [
                {
                    "id": "migration_5NWILYmnAAqz5qC1CsvvC-wdQPDbKj3i",
                    "type": "/ugc/comment",
                    "time": 1624871512855,
                    "text": "Спасибо за оценку",
                    "object": {
                        "id": "/sprav/1372808536"
                    },
                    "meta": {
                        "moderated": true,
                        "blocked": false
                    }
                }
            ],
            "keyPhrases": [
                {
                    "keyPhrase": "приветливый продавец",
                    "fragment": [
                        {
                            "position": 15,
                            "size": 20,
                            "text": "приветливый продавец"
                        }
                    ]
                },
                {
                    "keyPhrase": "большой выбор",
                    "fragment": [
                        {
                            "size": 13,
                            "text": "большой выбор"
                        }
                    ]
                },
                {
                    "keyPhrase": "приемлемые цены",
                    "fragment": [
                        {
                            "position": 37,
                            "size": 15,
                            "text": "приемлемые цены"
                        }
                    ]
                }
            ],
            "allViewsCount": 58863,
            "rating10": {
                "val": 10,
                "max": 10
            },
            "textLanguage": "UNKNOWN"
        },
        {
            "id": "dnU0N82Rde6ylIbHP2oydt5yre1LCt",
            "type": "/ugc/review",
            "time": 1588013894885,
            "author": {
                "name": "Анатолий Васюк",
                "pic": "25817/qUTk5eLlMH8ysd6zg7VgU1qrds-1",
                "signPrivacy": "NAME",
                "pkPath": "/user/6eezbrh1mcbazy7c4p2cy4t5am",
                "professionLevel": "Знаток города 8 уровня",
                "professionLevelNum": 8,
                "publicId": "",
                "verified": false
            },
            "text": "Очень люблю их фирменные шапки, качество супер. Одну из них уже 5ый год ношу и она в прекрасном состоянии",
            "rating": {
                "val": 5,
                "max": 5
            },
            "object": {
                "id": "/sprav/1372808536",
                "type": "Org"
            },
            "meta": {
                "moderated": true,
                "blocked": false
            },
            "reactions": {
                "likesCount": 4,
                "dislikesCount": 0,
                "myReaction": "NONE"
            },
            "keyPhrases": [
                {
                    "keyPhrase": "прекрасное состояние",
                    "fragment": [
                        {
                            "position": 85,
                            "size": 20,
                            "text": "прекрасное состояние"
                        }
                    ]
                }
            ],
            "allViewsCount": 49396,
            "rating10": {
                "val": 10,
                "max": 10
            },
            "textLanguage": "UNKNOWN"
        },
        {
            "id": "7xeQ04A32ZrpJmRPVmB6SqhMcj6VTjt1",
            "type": "/ugc/review",
            "time": 1581338399955,
            "author": {
                "name": "Наталия Зайцева",
                "pic": "48449/sswxVN1FiIaJY6IhVgnaLB2mkpg-1",
                "signPrivacy": "NAME",
                "pkPath": "/user/9apvmtyvqa5a3d2xevvfdqxntc",
                "professionLevel": "Знаток города 11 уровня",
                "professionLevelNum": 11,
                "publicId": "",
                "verified": false
            },
            "text": "Очень много головных уборов,на детей и на взрослых,на любой кошелек,качество довольно неплохое",
            "rating": {
                "val": 5,
                "max": 5
            },
            "object": {
                "id": "/sprav/1372808536",
                "type": "Org"
            },
            "meta": {
                "moderated": true,
                "blocked": false
            },
            "reactions": {
                "likesCount": 3,
                "dislikesCount": 0,
                "myReaction": "NONE"
            },
            "views": [
                {
                    "id": "migration_LfIidUPVGftOVUUqC1yN9rKEP7BsTi65",
                    "type": "/ugc/comment",
                    "time": 1624871540130,
                    "text": "Спасибо за приятный отзыв",
                    "object": {
                        "id": "/sprav/1372808536"
                    },
                    "meta": {
                        "moderated": true,
                        "blocked": false
                    }
                }
            ],
            "keyPhrases": [
                {
                    "keyPhrase": "кепка",
                    "fragment": [
                        {
                            "position": 12,
                            "size": 15,
                            "text": "головные уборы"
                        }
                    ]
                }
            ],
            "allViewsCount": 29170,
            "rating10": {
                "val": 10,
                "max": 10
            },
            "textLanguage": "UNKNOWN"
        },
        {
            "id": "f-ZxzQaxkqDB1uYv2zgFvqdrr9UfD5k3G",
            "type": "/ugc/review",
            "time": 1595962496097,
            "author": {
                "name": "S.K.",
                "pic": "65952/TTLOiB8FP9Y8PeHwlLPjlBm3g-1",
                "signPrivacy": "NAME",
                "pkPath": "/user/grkwq0fc6gvp4b77nnqfwg8fgm",
                "professionLevel": "Знаток города 9 уровня",
                "professionLevelNum": 9,
                "publicId": "",
                "verified": false
            },
            "text": "Находится рядом. Выбор есть. Нормально.",
            "rating": {
                "val": 5,
                "max": 5
            },
            "object": {
                "id": "/sprav/1372808536",
                "type": "Org"
            },
            "meta": {
                "moderated": true,
                "blocked": false
            },
            "reactions": {
                "likesCount": 3,
                "dislikesCount": 0,
                "myReaction": "NONE"
            },
            "views": [
                {
                    "id": "migration_JiyqkZkbTxfFbb9uzMelTS2Y2v9vUhjR1",
                    "type": "/ugc/comment",
                    "time": 1615063957242,
                    "text": "Спасибо за вашу оценку",
                    "object": {
                        "id": "/sprav/1372808536"
                    },
                    "meta": {
                        "moderated": true,
                        "blocked": false
                    }
                }
            ],
            "allViewsCount": 19803,
            "rating10": {
                "val": 10,
                "max": 10
            },
            "textLanguage": "UNKNOWN"
        },
        {
            "id": "t6LbeytM0Y2xJ2-Cb-hevz35Ow1cfja",
            "type": "/ugc/review",
            "time": 1552854402179,
            "author": {
                "name": "Гэндальф",
                "pic": "45848/Wrf0nVsmlhRXQsisWov4cMOYkO4-1",
                "signPrivacy": "NAME",
                "pkPath": "/user/4kp8vfqgb1n3naraya55kuxq3c",
                "professionLevel": "Знаток города 5 уровня",
                "professionLevelNum": 5,
                "publicId": "",
                "verified": false
            },
            "text": "За 1500 руб. Вам могут отдать кольцо Фродо. И покажут портал на марс, где вы можете благополучно зажить новой жизнью!!",
            "rating": {
                "val": 5,
                "max": 5
            },
            "object": {
                "id": "/sprav/1372808536",
                "type": "Org"
            },
            "meta": {
                "moderated": true,
                "blocked": false
            },
            "reactions": {
                "likesCount": 3,
                "dislikesCount": 0,
                "myReaction": "NONE"
            },
            "allViewsCount": 11841,
            "rating10": {
                "val": 10,
                "max": 10
            },
            "textLanguage": "UNKNOWN"
        }
    ]

    function getRandomRating() {
        return Math.floor(Math.random() * 5) + 1;
    }

    return (
        <Container my="md">
            <Grid>
                {mockdataYa.map((item, index) => (
                    <Grid.Col key={index} xs={12}><SingleReview {...item}/></Grid.Col>
                ))}
            </Grid>
        </Container>
    );
}