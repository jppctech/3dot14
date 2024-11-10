"use client"

import { ChevronDown, Menu } from "lucide-react"
import { useMedia } from "react-use"
import { Button } from "@/components/ui/button"
import { useOpenGetStarted } from "@/hooks/open-get-started"
import { useOpenMenuPhone } from "@/hooks/open-menu"
import { useEffect, useState } from "react"
import  DropDownMenu  from "./drop-down"

export const Navigation = () => {
    const isMobile = useMedia("(max-width: 1024px)", false)
    const { onOpen } = useOpenGetStarted();
    const { onOpenMenu } = useOpenMenuPhone();

    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true)
    }, [])

    const nav = [
        { 
            title: "Technology" ,
            items: [
                {
                    icons: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7961 6.04714C11.2295 5.61373 11.848 5.42054 12.451 5.53018C13.3392 5.69166 13.9848 6.4652 13.9848 7.3679V7.56725C13.9848 8.10729 13.7774 8.62671 13.4054 9.01824L8.57689 14.1009C7.76121 14.9595 7.42614 16.1677 7.68304 17.3237C8.01628 18.8233 9.27418 19.9398 10.8027 20.0926L11.0666 20.119C12.2381 20.2362 13.4003 19.8213 14.2327 18.9888L16.7373 16.4843C17.1278 16.0937 17.1278 15.4606 16.7373 15.0701C16.3468 14.6795 15.7136 14.6795 15.3231 15.0701L12.8185 17.5746C12.4102 17.9829 11.8402 18.1864 11.2656 18.1289L11.0017 18.1025C10.3323 18.0356 9.78136 17.5466 9.63542 16.8899C9.5229 16.3836 9.66965 15.8544 10.0269 15.4784L14.8554 10.3957C15.5805 9.63251 15.9848 8.61998 15.9848 7.56725V7.3679C15.9848 5.49863 14.6479 3.89683 12.8088 3.56244C11.5601 3.3354 10.2794 3.73545 9.38193 4.63292L5.91428 8.10057C5.52375 8.4911 5.52375 9.12426 5.91428 9.51479C6.3048 9.90531 6.93797 9.90531 7.32849 9.51479L10.7961 6.04714ZM21.5603 8.80768C21.5603 8.25539 21.1126 7.80768 20.5603 7.80768C20.0081 7.80768 19.5603 8.25539 19.5603 8.80768V10.247H18.121C17.5687 10.247 17.121 10.6947 17.121 11.247C17.121 11.7993 17.5687 12.247 18.121 12.247H19.5603V13.6863C19.5603 14.2386 20.0081 14.6863 20.5603 14.6863C21.1126 14.6863 21.5603 14.2386 21.5603 13.6863V12.247H22.9997C23.5519 12.247 23.9997 11.7993 23.9997 11.247C23.9997 10.6947 23.5519 10.247 22.9997 10.247H21.5603V8.80768ZM3.57558 12.6409C3.57558 13.076 3.22288 13.4287 2.78779 13.4287C2.35271 13.4287 2 13.076 2 12.6409C2 12.2058 2.35271 11.8531 2.78779 11.8531C3.22288 11.8531 3.57558 12.2058 3.57558 12.6409ZM5.57558 12.6409C5.57558 14.1806 4.32745 15.4287 2.78779 15.4287C1.24814 15.4287 0 14.1806 0 12.6409C0 11.1012 1.24814 9.85311 2.78779 9.85311C4.32745 9.85311 5.57558 11.1012 5.57558 12.6409Z" fill="#0991F8"></path></svg>,
                    label: "Our Approach"
                },
                {
                    icons: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M42 31.9066V29.8484C41.8898 29.7404 41.7598 29.7298 41.617 29.7182C41.562 29.7138 41.5051 29.7091 41.4467 29.6987H38.4324C38.07 29.6987 38.0318 29.6613 38.0318 29.3058V27.8651C38.0318 27.4161 38.0509 27.3974 38.5087 27.3974H41.4467C41.468 27.3974 41.4892 27.3976 41.5104 27.3978C41.6795 27.3997 41.8453 27.4015 41.9809 27.2851V25.227C41.8453 25.1106 41.6795 25.1124 41.5104 25.1142C41.4892 25.1145 41.468 25.1147 41.4467 25.1147H38.4324C38.07 25.1147 38.0318 25.0773 38.0318 24.7218V23.3559C38.0318 22.9069 38.0509 22.8882 38.5087 22.8882H41.4467C41.468 22.8882 41.4892 22.8884 41.5104 22.8886C41.6795 22.8905 41.8453 22.8923 41.9809 22.7759V20.7178C41.8453 20.6014 41.6795 20.6032 41.5104 20.6051C41.4892 20.6053 41.468 20.6055 41.4467 20.6055H38.4324C38.07 20.6055 38.0318 20.5681 38.0318 20.2126V18.7719C38.0318 18.3228 38.0509 18.3041 38.5087 18.3041H41.4467C41.468 18.3041 41.4892 18.3044 41.5104 18.3046C41.6795 18.3064 41.8453 18.3083 41.9809 18.1919V16.1337C41.8621 16.0172 41.698 16.0192 41.5423 16.021C41.523 16.0212 41.5038 16.0215 41.4849 16.0215H38.5278C38.0318 16.0215 38.0127 16.0028 37.9364 15.5163C37.7265 14.3001 37.1351 13.2898 36.1431 12.5414C35.1129 11.7742 33.93 11.5497 32.6709 11.5497C32.213 11.5497 32.194 11.531 32.194 11.082V8.16314C32.194 8.13921 32.1947 8.11489 32.1955 8.09046C32.2001 7.94307 32.205 7.79169 32.0414 7.69539C31.836 7.69539 31.6289 7.69037 31.4212 7.68533C30.9341 7.67353 30.4433 7.66163 29.9618 7.7141C29.8618 7.84499 29.8638 8.00451 29.8659 8.16764C29.8661 8.19104 29.8665 8.21451 29.8665 8.23798V11.1194C29.8665 11.4749 29.8283 11.5123 29.4658 11.5123H27.9586C27.5199 11.5123 27.5008 11.4936 27.5008 11.0632V8.21927C27.5008 8.1879 27.5018 8.15653 27.5029 8.12534C27.5083 7.97049 27.5134 7.81996 27.3863 7.69539C26.6804 7.65796 25.9746 7.65796 25.2687 7.69539C25.15 7.82838 25.1519 7.99094 25.1537 8.15678C25.154 8.17758 25.1542 8.19842 25.1542 8.21927V11.0632C25.1542 11.4562 25.1161 11.4936 24.7154 11.4936H23.3227C22.8839 11.4936 22.8649 11.4749 22.8649 11.0445V8.20056C22.8649 8.16922 22.8659 8.13787 22.867 8.1067C22.8723 7.95181 22.8774 7.80128 22.7504 7.67667C22.0445 7.63925 21.3387 7.62054 20.6327 7.67667C20.4992 7.82635 20.5183 8.01346 20.5183 8.20056V11.0071C20.4992 11.4562 20.4801 11.4749 20.0414 11.4749H18.6105C18.1717 11.4749 18.1526 11.4562 18.1526 11.0258V8.18185C18.1526 8.15048 18.1537 8.11911 18.1547 8.08792C18.1601 7.93306 18.1652 7.78255 18.0382 7.65796C17.3513 7.62054 16.6455 7.63925 15.9396 7.65796C15.8125 7.78255 15.8177 7.93307 15.823 8.08792C15.8241 8.11911 15.8251 8.15048 15.8251 8.18185V11.1007C15.8251 11.3626 15.7106 11.4936 15.4245 11.4749C15.1023 11.4598 14.7924 11.4932 14.485 11.5263C14.4101 11.5343 14.3354 11.5424 14.2607 11.5497C12.2003 11.7368 10.4261 13.3272 10.0827 15.3105C10.0259 15.6443 10.0067 15.8081 9.91585 15.8884C9.82333 15.9701 9.65657 15.9654 9.30048 15.9654H6.53416C6.01909 15.9841 6 16.0028 6 16.4892V17.5932C6 17.923 6 18.0914 6.08295 18.1772C6.16933 18.2667 6.3457 18.2667 6.70587 18.2667H9.58662C9.79651 18.2667 10.0063 18.2667 10.0063 18.5474V20.3061C10.0063 20.4932 9.91095 20.5868 9.7202 20.5868H9.01433C8.72887 20.5868 8.44125 20.5847 8.15295 20.5827C7.5743 20.5785 6.99275 20.5743 6.41972 20.5868C6.05722 20.5868 6.01909 20.6242 6.01909 20.9797C6.01909 21.1481 6.02119 21.3165 6.0233 21.4849C6.02756 21.8217 6.03181 22.1585 6.01909 22.4953C6.01909 22.7572 6.11449 22.8508 6.36246 22.8695H9.6248C9.91095 22.8695 10.0254 22.963 10.0254 23.2437V24.7218C10.0063 25.0773 9.96822 25.1147 9.60571 25.1147H7.43083C7.31708 25.1147 7.20122 25.1127 7.08463 25.1106C6.84933 25.1064 6.61121 25.1022 6.38155 25.1147C6.15262 25.1334 6 25.2083 6.01909 25.4702C6.03818 26.0128 6.03818 26.5367 6.01909 27.0606C6.01909 27.2851 6.11449 27.3974 6.34341 27.3974H9.60571C9.96822 27.3974 10.0063 27.4348 10.0063 27.7903V28.9877C10.0063 29.3647 10.0202 29.5428 9.93919 29.6266C9.85533 29.7133 9.66989 29.6987 9.2623 29.6987H6.55325C6.03818 29.7174 6.01909 29.7362 6.01909 30.2226V31.4575C6.01909 31.9627 6.03818 31.9814 6.57234 31.9814H9.49127C10.0063 31.9814 10.0254 32.0001 10.1017 32.4866C10.2735 33.4782 10.7122 34.3389 11.4372 35.0499C12.4865 36.0603 13.7838 36.4532 15.2337 36.4532C15.5424 36.4532 15.6951 36.4532 15.7705 36.5306C15.8442 36.6063 15.8442 36.7559 15.8442 37.0519C15.8442 37.363 15.8421 37.6762 15.84 37.9902C15.8357 38.6201 15.8315 39.2528 15.8442 39.8772C15.8442 40.2701 15.9205 40.3262 16.3212 40.3262C16.4801 40.3262 16.6391 40.3241 16.7981 40.322C17.1161 40.3179 17.434 40.3137 17.752 40.3262C18.0572 40.3449 18.1717 40.214 18.1717 39.952V36.8648C18.1717 36.5093 18.2098 36.4719 18.5723 36.4719H20.1177C20.4992 36.4906 20.5373 36.5093 20.5373 36.9022V39.3533C20.5373 39.5778 20.5373 39.821 20.5564 40.0456C20.5755 40.2514 20.6709 40.3636 20.9189 40.3636H22.5406C22.7695 40.3636 22.8649 40.2701 22.8839 40.0643C22.903 39.9333 22.903 39.821 22.903 39.69V36.977C22.903 36.5093 22.9221 36.4906 23.399 36.4906H24.7727C25.1542 36.4906 25.1924 36.528 25.1924 36.9022V39.1662C25.1924 39.4468 25.1924 39.7462 25.2114 40.0268C25.2305 40.2326 25.3068 40.3636 25.5358 40.3636H27.2146C27.4054 40.3636 27.5008 40.2701 27.5199 40.1017C27.539 39.9707 27.539 39.8584 27.539 39.7275V36.9022C27.539 36.528 27.5771 36.4906 27.9586 36.4906H29.4658C29.8474 36.4906 29.8855 36.528 29.8855 36.9022V39.1662C29.8855 39.4468 29.8855 39.7462 29.9046 40.0268C29.9237 40.214 30 40.3636 30.2289 40.3636H31.9078C32.0986 40.3636 32.194 40.2701 32.2131 40.1017C32.2321 39.9707 32.2321 39.8584 32.2321 39.7275V36.9396C32.2321 36.528 32.2512 36.4906 32.69 36.4906C33.0143 36.4906 33.3387 36.4719 33.6629 36.4344C35.9332 36.2099 37.6121 34.6757 37.9746 32.4679C38.0509 32.0562 38.07 32.0188 38.4897 32.0188H41.4658C41.4871 32.0188 41.5083 32.019 41.5295 32.0193C41.6986 32.0211 41.8644 32.0229 42 31.9066ZM18.8733 18.2917H16.5V29.7082H18.3667V22.2496H18.4422L20.7977 29.6525H22.0688L24.4243 22.2775H24.4999V29.7082H26.3665V18.2917H23.9933L21.4866 25.9622H21.3799L18.8733 18.2917ZM28.7378 18.2917V29.7082H33V27.7182H30.6622V18.2917H28.7378Z" fill="#FE6B01"></path></svg>,
                    label: "Machine Learning"
                },
                {
                    icons: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.3549 24.5039C38.1564 24.3384 38.1233 24.1399 38.1564 23.9083C38.3218 22.4856 38.3218 21.0628 38.0571 19.6732C37.991 19.3754 38.0571 19.1438 38.2887 18.9122C38.785 18.482 39.2483 17.9857 39.7115 17.5556C39.8438 17.4233 39.8769 17.324 39.8108 17.1586C39.2814 16.0005 38.785 14.8425 38.2887 13.6844C38.2226 13.519 38.1564 13.4528 37.9579 13.4859C37.2961 13.5521 36.6344 13.5852 35.9727 13.6514C35.6418 13.6844 35.4102 13.6183 35.2448 13.3536C34.3845 12.1955 33.3588 11.236 32.1677 10.4088C31.936 10.2434 31.8368 10.0449 31.8368 9.74708C31.8699 9.08534 31.8699 8.4236 31.903 7.76186C31.903 7.53025 31.8699 7.431 31.6383 7.36483C30.4802 6.9347 29.3222 6.47147 28.1972 6.04134C27.9987 5.97517 27.8994 5.97517 27.7671 6.1406C27.37 6.60382 26.9399 7.03396 26.576 7.53026C26.3113 7.86113 26.0135 7.96038 25.6495 7.89421C24.293 7.72877 22.9033 7.76187 21.5467 7.99348C21.249 8.05965 21.0504 7.99347 20.8519 7.76186C20.3887 7.26556 19.9255 6.80235 19.4953 6.33913C19.363 6.17369 19.2307 6.1406 19.0321 6.23987C17.9072 6.73617 16.7822 7.23247 15.6242 7.72877C15.4587 7.79495 15.3926 7.89421 15.3926 8.09273C15.4587 8.72139 15.4918 9.38313 15.558 10.0118C15.5911 10.3096 15.5249 10.5412 15.2933 10.7397C14.1353 11.6 13.1426 12.6587 12.3155 13.883C12.1831 14.0815 11.9846 14.1807 11.7199 14.1807C11.0582 14.1476 10.3633 14.1477 9.70161 14.1146C9.47 14.1146 9.37074 14.1807 9.30456 14.3793C8.87443 15.5373 8.41122 16.7284 7.94801 17.8865C7.88183 18.0519 7.91491 18.1512 8.04726 18.2835C8.51048 18.6475 8.9406 19.0776 9.40382 19.4416C9.76778 19.7063 9.86704 20.0371 9.80087 20.5004C9.63543 21.8569 9.70161 23.1804 9.93322 24.5039C9.9994 24.8017 9.90013 25.0333 9.70161 25.2318C9.23839 25.6619 8.77518 26.1251 8.27887 26.5553C8.11344 26.7207 8.08034 26.8531 8.1796 27.0516C8.6759 28.1434 9.17221 29.2684 9.63543 30.3934C9.73469 30.6581 9.86704 30.6911 10.1317 30.6911C10.7604 30.625 11.4221 30.5919 12.0508 30.5257C12.3155 30.4926 12.514 30.5919 12.6794 30.8235C13.5397 31.9815 14.5985 32.9741 15.7896 33.7682C16.0212 33.9337 16.1205 34.0991 16.0874 34.3969C16.0543 35.0586 16.0543 35.7534 16.0212 36.4152C16.0212 36.5806 16.0212 36.6799 16.1866 36.7461C17.08 37.0769 17.9733 37.4409 18.8998 37.7718C18.8998 37.3747 18.8998 37.0438 18.8998 36.6799C18.8998 35.8196 18.966 34.9263 18.8667 34.066C18.6682 32.3786 17.841 31.022 16.6168 29.8309C13.7713 27.0185 12.7787 23.6105 13.672 19.7063C14.9294 14.1477 20.488 10.5743 26.3113 11.8316C31.9691 13.0558 35.6749 18.9453 34.3183 24.5701C33.822 26.6545 32.8294 28.4412 31.2743 29.897C30.1163 30.9889 29.3884 32.2793 29.1567 33.8344C28.9582 35.0917 29.0575 36.349 29.0575 37.6063C29.0575 37.9041 29.256 37.7056 29.3553 37.6725C30.3479 37.2424 31.3736 36.7791 32.3662 36.3821C32.5647 36.2828 32.6309 36.1836 32.5978 35.9851C32.5316 35.3233 32.4985 34.6285 32.4324 33.9668C32.3993 33.7021 32.4985 33.5035 32.7301 33.3381C33.8882 32.4778 34.8477 31.4521 35.6749 30.261C35.8403 30.0294 36.0388 29.9301 36.3366 29.9301C36.9984 29.9632 37.6601 29.9632 38.3218 29.9963C38.5204 29.9963 38.6527 29.9632 38.7189 29.7316C38.8181 29.4007 38.9505 29.103 39.0828 28.8052C39.4468 27.9118 39.7446 26.9854 40.1747 26.092C40.1747 26.059 40.1747 26.0259 40.1747 26.0259C39.5461 25.4965 38.9505 25.0002 38.3549 24.5039Z" fill="#FE6B01"></path><path d="M21.2026 35.7578H22.3473C22.3306 35.663 22.3306 35.5296 22.3306 35.34V28.5725C22.3306 27.2566 21.5034 26.3543 20.1875 26.2415C19.4356 26.2039 19.0596 25.8655 18.9468 25.2264C18.9092 24.9256 18.9844 24.7376 19.2852 24.6248C20.1875 24.2489 20.6387 23.5345 20.6387 22.557C20.6387 21.6547 20.0747 20.8651 19.21 20.5268C18.0445 20.0756 16.7662 20.6395 16.315 21.7675C15.8263 22.8954 16.3526 24.2113 17.4805 24.6624C17.7437 24.7752 17.8189 24.9256 17.8189 25.1888C17.8189 26.3543 18.7588 27.2942 19.9243 27.3694C20.7891 27.4446 21.2027 27.8582 21.2027 28.6853V35.7535C21.2027 35.755 21.2026 35.7564 21.2026 35.7578Z" fill="#FE6B01"></path><path d="M23.3753 35.7578H24.4938C24.4958 35.7426 24.4979 35.7275 24.5 35.7126C24.5058 35.6719 24.5112 35.6334 24.5112 35.6031V19.8124C24.4736 19.5492 24.5488 19.3988 24.8496 19.2861C25.7895 18.8725 26.3534 17.8198 26.1655 16.8798C25.9399 15.7519 25.0751 15 23.9848 15C22.9321 15 21.9922 15.7143 21.7666 16.7295C21.541 17.7822 22.0298 18.8725 23.0073 19.2861C23.3081 19.3988 23.3833 19.5492 23.3833 19.85V35.6031C23.3833 35.6624 23.381 35.7137 23.3753 35.7578Z" fill="#FE6B01"></path><path d="M25.556 35.7578C25.5526 35.7269 25.5473 35.6951 25.5422 35.664C25.5341 35.615 25.5263 35.5675 25.5263 35.528V28.6101C25.5263 27.4822 26.203 26.6175 27.2558 26.3543C27.4287 26.3049 27.618 26.2879 27.8021 26.2714C27.8981 26.2628 27.9927 26.2544 28.0829 26.2415C28.6468 26.1287 28.9852 25.6399 28.9852 25.1136C28.9852 24.9256 28.9476 24.8128 28.722 24.7376C28.1581 24.512 27.7069 24.1361 27.4813 23.5721C26.9926 22.4442 27.5189 21.0907 28.6468 20.6395C29.7748 20.1508 31.053 20.6771 31.5794 21.8051C32.1058 22.933 31.5794 24.2489 30.4515 24.7376C30.2259 24.8504 30.1507 24.9256 30.1507 25.1888C30.0755 26.5423 29.2108 27.3694 27.8573 27.4446C27.143 27.4822 26.6542 27.971 26.6542 28.6853V35.7578H25.556Z" fill="#FE6B01"></path><path d="M26.7083 39.7685C26.8407 39.7354 26.973 39.7354 27.1385 39.7354C28.098 39.7354 28.098 39.7354 28.098 38.7759C28.098 38.5112 27.9987 38.445 27.7671 38.445C26.576 38.445 25.4179 38.445 24.2268 38.445C23.7967 38.445 23.5651 38.2465 23.5982 37.9487C23.5982 37.6509 23.8298 37.4855 24.2268 37.4855C25.2525 37.4855 26.2451 37.4855 27.2708 37.4855C28.1311 37.4855 28.098 37.4855 28.1311 36.6583C28.1311 36.3936 28.0649 36.3274 27.8002 36.3274C26.5429 36.3274 25.3187 36.3274 24.0614 36.3274C23.0026 36.3274 21.9438 36.3274 20.885 36.3274C19.9255 36.3274 19.9255 36.3274 19.9586 37.2869C19.9586 37.4524 20.0248 37.5186 20.1902 37.5186C20.5542 37.5186 20.885 37.5186 21.249 37.5186C21.5468 37.5186 21.7453 37.684 21.7784 37.9818C21.7784 38.3126 21.5799 38.4781 21.2821 38.4781C21.0505 38.4781 20.8519 38.4781 20.6203 38.4781C19.9917 38.4781 19.9917 38.4781 19.9917 39.0736C19.9917 39.7354 19.9917 39.7354 20.6865 39.7354C21.9107 39.7354 23.135 39.7354 24.3261 39.7354C24.5908 39.7354 24.7562 39.8677 24.8224 40.1324C24.8555 40.364 24.7562 40.5626 24.5577 40.6618C24.4584 40.6949 24.293 40.6949 24.1607 40.6949C22.8703 40.6949 21.6129 40.6949 20.3225 40.6949C19.9917 40.6949 19.9586 40.8272 19.9917 41.0919C20.0909 41.5882 20.5211 41.9853 21.1166 41.9853C23.0688 41.9853 25.054 42.0184 27.0061 41.9853C27.6348 41.9853 28.098 41.5221 28.1311 40.9596C28.1311 40.7942 28.098 40.6949 27.8995 40.6949C27.5686 40.6949 27.2377 40.6949 26.9069 40.6949C26.6422 40.6949 26.5098 40.5295 26.4767 40.2648C26.4106 40.0332 26.5098 39.8677 26.7083 39.7685Z" fill="#FE6B01"></path></svg>,
                    label: "Creative Technology"
                }
            ]
        },
        { 
            title: "Solutions",
            items: [
                {
                    icons: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42 20.2547C42 19.7329 41.7581 19.5093 41.2558 19.5093C40.6419 19.5093 40.0093 19.528 39.3953 19.5093C38.5209 19.4907 37.8884 19.0807 37.5535 18.2422C37.3488 17.7019 37.1256 17.1801 36.9023 16.6584C36.5116 15.7826 36.6419 15.0373 37.3302 14.3478C37.7395 13.9379 38.1488 13.528 38.5395 13.118C38.986 12.6708 38.986 12.3727 38.5395 11.9255C37.7209 11.1056 36.9209 10.3044 36.1023 9.48447C35.6372 9.01864 35.3395 9.03727 34.8744 9.48447C34.4093 9.95031 33.9628 10.4162 33.4605 10.8634C33.014 11.2733 32.4558 11.4224 31.8605 11.2733C31.1349 11.1056 30.5023 10.7143 29.814 10.4721C28.9395 10.1739 28.5116 9.48447 28.493 8.5528C28.493 7.93789 28.493 7.32298 28.493 6.72671C28.493 6.24224 28.2512 6 27.7488 6C27.1535 6 26.5581 6 25.9628 6C25.3674 6 24.7721 6 24.1767 6C23.5628 6 23.3581 6.20497 23.3581 6.81988C23.3581 7.39752 23.3581 7.97516 23.3581 8.5528C23.3395 9.50311 22.9116 10.1553 22.0186 10.4907C21.5163 10.677 21.014 10.882 20.5302 11.1056C19.6186 11.5155 18.8744 11.3665 18.1674 10.6584C17.7581 10.2671 17.3674 9.85714 16.9767 9.46584C16.5302 9.01864 16.2326 9.01864 15.786 9.48447C14.986 10.2857 14.186 11.087 13.3674 11.9068C12.8837 12.3913 12.8837 12.6894 13.386 13.1925C14.7814 14.5901 16.1767 15.9876 17.5535 17.3851C17.9628 17.795 18.8186 17.7205 19.1535 17.2547C20.6977 15.1304 22.7814 13.9565 25.3674 13.7702C28.0279 13.5839 30.2977 14.5155 32.1209 16.4907C35.4512 20.1056 34.8558 25.9938 30.8372 28.8447C30.5209 29.0683 30.3907 29.3106 30.3907 29.7019C30.3907 30.1118 30.5209 30.3913 30.8 30.6708C32.1581 32.0124 33.5163 33.3727 34.8558 34.7143C35.3023 35.1615 35.6186 35.1615 36.0465 34.7143C36.8651 33.8944 37.6837 33.0745 38.5023 32.2547C38.9302 31.8261 38.9302 31.5093 38.5023 31.0807C38.0744 30.6522 37.6465 30.2422 37.2372 29.8137C36.7163 29.2733 36.4744 28.6211 36.7163 27.913C36.9767 27.1304 37.3116 26.3665 37.6837 25.6211C37.9442 25.0808 38.4279 24.7826 39.0233 24.7081C39.7488 24.6149 40.4744 24.6894 41.2 24.6708C41.7395 24.6522 41.9628 24.4286 41.9628 23.9068C42 22.6584 42 21.4658 42 20.2547Z" fill="#FE6B01"></path><path d="M28.2698 28.5093C28.1023 28.5093 27.9349 28.5093 27.786 28.5093C27.0977 28.472 26.5209 28.1739 26.1674 27.559C25.9628 27.205 25.7953 26.8137 25.6837 26.4037C25.5163 25.7888 25.6465 25.2112 26.0558 24.7267C26.2233 24.5031 26.4465 24.3168 26.6326 24.1118C26.9302 23.7764 26.9488 23.441 26.6326 23.1242C26.0558 22.5279 25.4791 21.9503 24.8837 21.3727C24.5674 21.0559 24.214 21.0745 23.8791 21.3727C23.7302 21.5217 23.5814 21.6708 23.4326 21.8199C23.1721 22.0621 22.8744 22.2298 22.5395 22.323C21.7953 22.5279 21.1814 22.1925 20.5674 21.8944C20.0093 21.6335 19.6744 21.1677 19.5442 20.5528C19.4698 20.2174 19.507 19.882 19.4884 19.5279C19.4698 19.0994 19.2465 18.8385 18.8186 18.8385C17.9814 18.8199 17.1628 18.8199 16.3256 18.8385C15.8791 18.8385 15.6372 19.0994 15.6372 19.5466C15.6372 19.7515 15.6372 19.9752 15.6372 20.1801C15.6 20.9814 15.2465 21.559 14.5395 21.913C14.2977 22.0435 14.0186 22.1366 13.7581 22.2298C13.014 22.5093 12.3442 22.3602 11.7488 21.8199C11.5628 21.6522 11.3953 21.4472 11.1907 21.2795C10.9116 21.0373 10.5953 21.0186 10.3349 21.2795C9.70233 21.8944 9.06977 22.5093 8.47442 23.1429C8.23256 23.4037 8.25116 23.7205 8.47442 24C8.58605 24.1304 8.69767 24.2422 8.8093 24.354C9.86977 25.4161 9.66512 27.3168 8.4 28.1366C7.95349 28.4348 7.43256 28.4907 6.91163 28.4534C6.52093 28.4161 6.20465 28.5466 6 28.882C6 29.8882 6 30.8944 6 31.9193C6.09302 32.2733 6.35349 32.4037 6.66977 32.4224C6.91163 32.441 7.13488 32.4224 7.37674 32.441C8.10233 32.4969 8.66047 32.8137 8.97674 33.4658C9.10698 33.7267 9.2186 34.0062 9.31163 34.2671C9.51628 34.882 9.44186 35.441 9.06977 35.9814C8.88372 36.2422 8.66047 36.4658 8.43721 36.6894C8.15814 36.9876 8.12093 37.3975 8.4 37.7143C8.99535 38.3665 9.6093 38.9814 10.2605 39.5776C10.5581 39.8571 10.9674 39.8199 11.2837 39.5404C11.3953 39.4286 11.5256 39.3168 11.6372 39.1863C12.7721 38.0311 14.3163 38.7019 15.1163 39.4658C15.1907 39.5217 15.2279 39.6149 15.2651 39.7081C15.5442 40.1553 15.5442 40.6584 15.5442 41.1801C15.5442 41.5528 15.6372 41.8882 16.0465 42C17.0512 42 18.0558 42 19.0791 42C19.5628 41.7391 19.507 41.2733 19.507 40.8261C19.507 39.354 21.107 38.1429 22.5581 38.5155C23.0977 38.6646 23.4512 39.0373 23.8419 39.4099C24.2326 39.8012 24.5674 39.8012 24.9581 39.4099C25.4605 38.9255 25.9442 38.441 26.4279 37.9379C27.0233 37.3602 27.0233 37.0994 26.4279 36.5217C26.093 36.205 25.814 35.8509 25.6837 35.4037C25.4977 34.7143 25.7767 34.1366 26.0372 33.559C26.3163 32.8882 26.8372 32.4969 27.5442 32.3851C27.8233 32.3292 28.1023 32.3665 28.3814 32.3665C28.9209 32.3665 29.1628 32.1242 29.1628 31.6025C29.1628 30.8571 29.1628 30.0932 29.1628 29.3478C29.1256 28.7143 28.9209 28.5093 28.2698 28.5093ZM17.6093 36.205C14.4279 36.3168 11.786 33.6522 11.786 30.4472C11.7674 27.2609 14.3907 24.6335 17.5907 24.6335C20.7163 24.6335 23.3767 27.2609 23.3395 30.4286C23.2837 33.9503 20.9023 36.0932 17.6093 36.205Z" fill="#FE6B01"></path><path d="M17.7209 25.9379C15.5628 25.8447 13.1628 27.4286 13.0512 30.3354C12.9581 32.5528 14.6512 34.7888 17.3488 34.9379C19.6558 35.0497 21.8884 33.3727 22.0558 30.6708C22.2047 28.323 20.4372 26.0683 17.7209 25.9379Z" fill="#FE6B01"></path></svg>,
                    label: "User Acquisition"
                },
                {
                    icons: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5553 20.4551C16.5342 19.4966 16.5483 18.5381 16.5483 17.5726C16.5412 15.2186 14.9981 13.1818 12.7221 12.5333C12.4262 12.4488 12.1232 12.3853 11.7779 12.3078C13.1238 12.0048 14.0116 11.2295 14.3357 9.93974C14.6528 8.67818 14.2723 7.58576 13.2858 6.71888C12.849 6.33125 12.3135 6.15505 11.7639 6C11.4327 6 11.1085 6 10.7774 6C10.2419 6.04229 9.75566 6.21144 9.33289 6.54973C8.29004 7.39547 7.81794 8.47379 8.0857 9.80584C8.35346 11.1449 9.22015 11.9554 10.4321 12.3219C10.418 12.3219 10.3828 12.3149 10.3476 12.3149C10.2982 12.3149 10.2559 12.3219 10.2066 12.329C9.05808 12.5686 8.07865 13.1183 7.29651 13.9852C6.57779 14.7887 6.08456 15.719 6 16.8255C6 18.1364 6 19.4473 6 20.7652C9.4104 20.7652 12.8137 20.7652 16.2241 20.7723C16.4708 20.7723 16.5553 20.73 16.5553 20.4551Z" fill="#FE6B01"></path><path d="M18.9863 20.7723C22.3262 20.7652 25.6662 20.7652 29.0061 20.7723C29.2245 20.7723 29.2809 20.7159 29.2739 20.5044C29.2598 19.5318 29.2739 18.5592 29.2668 17.5866C29.2598 15.2326 27.7166 13.1888 25.4477 12.5404C25.1447 12.4558 24.8418 12.3924 24.5035 12.3148C25.8494 12.0118 26.7372 11.2436 27.0613 9.94676C27.3784 8.6852 26.9979 7.59278 26.0114 6.7259C25.5746 6.33827 25.032 6.16912 24.4894 6.00702C24.1583 6.00702 23.8341 6.00702 23.503 6.00702C23.4748 6.0775 23.4114 6.0634 23.355 6.07045C21.6568 6.40875 20.5365 8.07909 20.8958 9.77057C21.1918 11.166 22.0867 11.9695 23.4536 12.3007C23.3409 12.3712 23.2141 12.3853 23.0802 12.3994C20.7197 12.7448 18.7467 14.993 18.7256 17.3681C18.7115 18.4112 18.7326 19.4543 18.7185 20.4974C18.7185 20.7159 18.7679 20.7723 18.9863 20.7723Z" fill="#FE6B01"></path><path d="M41.9924 17.5796C41.9853 15.2256 40.4422 13.1818 38.1733 12.5333C37.8703 12.4488 37.5673 12.3853 37.2291 12.3078C38.5749 12.0048 39.4628 11.2365 39.7869 9.93974C40.104 8.67818 39.7235 7.58576 38.737 6.71888C38.3001 6.33125 37.7576 6.15505 37.215 6C36.8838 6 36.5597 6 36.2285 6C36.2003 6.07048 36.1369 6.05638 36.0806 6.06343C34.3824 6.40173 33.262 8.07207 33.6214 9.76355C33.9173 11.159 34.8122 11.9625 36.1792 12.2937C36.0665 12.3642 35.9396 12.3783 35.8058 12.3924C33.4452 12.7377 31.4723 14.986 31.4512 17.3611C31.4371 18.4042 31.4582 19.4473 31.4441 20.4904C31.4441 20.7088 31.4934 20.7582 31.7119 20.7582C35.0518 20.7511 38.3917 20.7511 41.7317 20.7582C41.9501 20.7582 42.0065 20.7018 41.9994 20.4904C41.9853 19.5248 41.9994 18.5522 41.9924 17.5796Z" fill="#FE6B01"></path><path d="M35.3266 29.3425C33.403 29.3425 31.4864 29.3495 29.5627 29.3354C29.302 29.3354 29.2597 29.42 29.2668 29.6526C29.2879 30.1882 29.2879 30.7309 29.1963 31.2665C28.7947 33.5641 26.9345 35.4318 24.426 35.6503C22.3403 35.8335 20.1207 34.6918 19.1483 32.4505C18.7608 31.5484 18.6903 30.597 18.7326 29.6314C18.7397 29.3988 18.6762 29.3425 18.4437 29.3425C17.4925 29.3565 16.5483 29.3495 15.597 29.3495C14.6105 29.3495 13.6311 29.3495 12.6446 29.3495C12.4896 29.3495 12.391 29.3495 12.391 29.5609C12.3839 30.6393 12.398 31.7176 12.6305 32.7748C13.9059 38.6315 19.2611 42.5501 25.187 41.937C28.6044 41.5846 31.3384 39.9706 33.3748 37.2219C35.0659 34.9455 35.7212 32.3448 35.6014 29.5327C35.5943 29.2861 35.4534 29.3425 35.3266 29.3425Z" fill="#FE6B01"></path><path d="M22.9463 29.9557C22.6081 29.6103 22.3192 29.3355 22.0514 29.0465C21.9387 28.9267 21.8682 28.9056 21.7484 29.0324C21.3538 29.4482 20.9452 29.85 20.5294 30.2517C20.3955 30.3786 20.4378 30.449 20.5435 30.5548C21.6498 31.6542 22.749 32.7537 23.8482 33.8602C23.961 33.973 24.0314 33.9941 24.1512 33.8672C25.2575 32.7537 26.3637 31.6472 27.477 30.5407C27.5827 30.4349 27.5898 30.3715 27.477 30.2587C27.0684 29.857 26.6526 29.4553 26.258 29.0395C26.1101 28.8844 26.0396 28.9478 25.9269 29.0606C25.6591 29.3425 25.3773 29.6174 25.0461 29.9557C25.0461 29.7584 25.0461 29.6456 25.0461 29.5328C25.0461 27.4608 25.039 25.3887 25.0531 23.3166C25.0531 23.084 25.0109 22.9924 24.7572 23.0065C24.2639 23.0277 23.7707 23.0277 23.2845 23.0065C23.0238 22.9924 22.9322 23.0488 22.9322 23.3378C22.9533 24.5782 22.9392 25.8186 22.9392 27.059C22.9463 27.9964 22.9463 28.9338 22.9463 29.9557Z" fill="#FE6B01"></path><path d="M12.6799 23.0065C12.4474 23.0065 12.391 23.0629 12.391 23.2954C12.4051 24.5147 12.4051 25.734 12.391 26.9533C12.391 27.1858 12.4474 27.2422 12.6799 27.2422C13.6382 27.2281 14.6035 27.2352 15.5618 27.2352C16.5201 27.2352 17.4854 27.2281 18.4437 27.2422C18.6763 27.2422 18.7326 27.1858 18.7326 26.9533C18.7185 25.734 18.7185 24.5147 18.7326 23.2954C18.7326 23.0629 18.6763 23.0065 18.4437 23.0065C16.5201 23.0206 14.6035 23.0206 12.6799 23.0065Z" fill="#FE6B01"></path><path d="M29.2668 26.9533C29.2668 27.1858 29.3232 27.2422 29.5557 27.2422C30.514 27.2281 31.4793 27.2352 32.4376 27.2352C33.3959 27.2352 34.3613 27.2281 35.3196 27.2422C35.5521 27.2422 35.6085 27.1858 35.6085 26.9533C35.5944 25.734 35.5944 24.5147 35.6085 23.2954C35.6085 23.0629 35.5521 23.0065 35.3196 23.0065C33.3959 23.0135 31.4793 23.0135 29.5557 23.0065C29.3232 23.0065 29.2668 23.0629 29.2668 23.2954C29.2739 24.5147 29.2739 25.734 29.2668 26.9533Z" fill="#FE6B01"></path></svg>,
                    label: "Branding"
                },
                {
                    icons: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.5507 14.5097C41.0116 14.7812 40.4725 14.9925 39.9334 15.2641C39.7238 15.3546 39.604 15.3244 39.4842 15.1132C39.3344 14.8114 39.1547 14.5097 38.975 14.2381C37.7171 12.2766 36.1597 10.6169 34.2429 9.25901C32.0266 7.68986 29.6306 6.66388 26.9651 6.18106C26.3361 6.06035 25.7071 6.09053 25.0782 6C24.8685 6 24.6589 6 24.4492 6C24.2995 6 24.1797 6 24.0299 6C23.8802 6 23.7604 6 23.6106 6C23.4609 6 23.3411 6 23.1913 6C22.9218 6 22.6822 6 22.4126 6C22.3827 6.1207 22.2629 6.06036 22.203 6.06036C21.005 6.18106 19.8369 6.39229 18.6689 6.7544C15.1348 7.87092 12.1697 9.86254 9.86355 12.7896C8.96505 13.9363 8.21629 15.1735 7.58734 16.5013C7.34774 17.0444 7.40764 17.5574 7.797 17.9799C8.18635 18.4024 8.66554 18.5231 9.20464 18.342C9.68385 18.1911 9.8935 17.7989 10.1031 17.3764C11.1215 15.2339 12.5291 13.4233 14.386 11.9749C18.4592 8.83655 22.9817 7.87092 27.9235 9.22885C31.9068 10.3152 34.9318 12.7594 37.0283 16.3202C37.178 16.5616 37.1181 16.6522 36.8785 16.7427C36.2196 17.0445 35.5308 17.3462 34.8419 17.6782C36.9983 19.2171 39.0948 20.7561 41.2512 22.2951C41.4908 19.8207 41.7305 17.4066 41.9401 14.9623H41.97L42 14.9321C42 14.8114 42 14.6907 42 14.57C42 14.5097 42 14.4191 42 14.3588C41.8503 14.3588 41.7005 14.4493 41.5507 14.5097Z" fill="#FE6B01"></path><path d="M38.1964 30.1711C37.807 30.3219 37.5674 30.6237 37.3577 30.9858C36.3993 32.8567 35.1414 34.4862 33.5241 35.814C29.8403 38.8014 25.6473 39.8877 21.005 39.0428C16.6323 38.2281 13.2779 35.8442 10.8819 32.0721C10.7621 31.8609 10.792 31.8006 11.0017 31.71C11.6905 31.3781 12.3494 31.0462 13.0682 30.684C10.8519 29.2054 8.6955 27.7871 6.47919 26.3085C6.32944 28.964 6.14975 31.5592 6 34.2448C6.7188 33.8827 7.3777 33.5508 8.0366 33.2188C8.30615 33.068 8.42595 33.0981 8.60565 33.3697C9.80366 35.3915 11.3611 37.0814 13.218 38.4997C15.7637 40.4007 18.6389 41.5173 21.7837 41.8794C24.2097 42.151 26.5757 41.9699 28.9118 41.2758C32.3561 40.2499 35.2612 38.3186 37.5674 35.5424C38.436 34.4862 39.1847 33.3094 39.8137 32.1023C40.0832 31.5591 40.0233 31.016 39.634 30.5935C39.2746 30.1107 38.7055 29.9598 38.1964 30.1711Z" fill="#FE6B01"></path><path d="M17.0516 32.7058C19.2978 32.7058 21.5741 32.7058 23.8203 32.7058C26.0965 32.7058 28.3727 32.7058 30.619 32.7058C30.7687 32.7058 30.9484 32.7964 30.9484 32.4946C30.9185 31.6195 30.9784 30.7444 30.8885 29.8693C30.619 27.6061 28.4925 25.6446 26.2463 25.5541C24.7787 25.4937 23.3112 25.5239 21.8136 25.5239C19.208 25.5239 17.2313 27.3647 16.782 29.6279C16.6023 30.5332 16.7221 31.4686 16.6622 32.3739C16.6922 32.6455 16.782 32.7058 17.0516 32.7058Z" fill="#FE6B01"></path><path d="M28.4326 19.3378C28.4027 16.803 26.3661 14.7511 23.8503 14.7511C21.3344 14.7511 19.2679 16.803 19.2679 19.3378C19.2679 21.8726 21.3344 23.9548 23.8503 23.9548C26.396 23.985 28.4626 21.8726 28.4326 19.3378Z" fill="#FE6B01"></path></svg>,
                    label: "Retragetion"
                },
                {
                    icons: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.2898 34.3988C34.2898 34.2658 34.2515 34.1898 34.1366 34.1518C33.7539 33.9998 33.4476 33.7147 33.1988 33.4107C32.8543 33.0116 32.5289 32.7836 32.0313 33.1636C31.8016 33.3347 31.3805 33.1636 31.2657 33.4487C31.17 33.6957 31.2083 34.0378 31.2466 34.3228C31.3423 35.197 30.5193 36.0331 29.524 36.0331C24.2989 36.0141 19.0547 36.0331 13.8296 36.0141C12.7769 36.0141 12.107 35.349 12.107 34.3038C12.107 26.4556 12.107 18.5884 12.107 10.7402C12.107 9.63801 12.7195 9.02991 13.8104 9.02991C19.0738 9.02991 24.3181 9.02991 29.5814 9.02991C30.5767 9.02991 31.2849 9.71402 31.2657 10.7212C31.2274 13.0965 31.2657 15.4529 31.2466 17.8283C31.2466 18.0943 31.2848 18.2273 31.6102 18.2653C32.3949 18.3794 33.1797 18.5504 33.9452 18.7214C34.2132 18.7784 34.3089 18.7404 34.3089 18.4364C34.2898 16.9731 34.3089 15.5099 34.3089 14.0467C34.3089 12.6595 34.3472 11.2913 34.2706 9.90405C34.1366 7.79472 32.2035 6.02745 30.0791 6.00845C24.4712 6.00845 18.8824 5.98944 13.2745 6.00845C11.552 6.00845 10.2888 6.86358 9.48491 8.40282C9.27437 8.80188 9.2361 9.25795 9.06384 9.65701C9.06384 9.77103 9.06384 9.90405 9.06384 10.0181C9.06384 19.3485 9.06384 28.6599 9.06384 37.9904C9.06384 38.0854 9.06384 38.1804 9.06384 38.2754C9.12126 38.8645 9.25523 39.4156 9.58061 39.9097C10.327 41.0689 11.3414 41.829 12.7386 42C12.8152 42 12.8917 42 12.9683 42C18.7102 42 24.4712 42 30.213 42C30.3087 42 30.4044 42 30.5001 42C30.5193 41.943 30.5767 41.943 30.615 41.943C32.5672 41.6579 34.1558 40.0237 34.2515 38.0664C34.328 36.8692 34.2898 35.634 34.2898 34.3988Z" fill="#FE6B01"></path><path d="M23.5525 30.3132C25.6578 29.4961 26.7871 27.4057 26.366 25.2204C25.9641 23.0921 24.0693 21.4958 21.9065 21.4578C21.0835 21.4388 20.3753 20.9447 20.0691 20.1656C19.648 19.0445 20.1456 18.0183 21.2557 17.7713C22.4041 17.5242 23.4951 18.4174 23.5716 19.7096C23.629 20.5077 24.1841 21.0398 24.9879 21.0208C25.7344 21.0018 26.3086 20.3937 26.2894 19.6335C26.232 17.8663 25.4473 16.4981 23.8587 15.7189C23.208 15.3959 22.9017 15.1109 22.9592 14.3507C23.0166 13.6286 22.3084 13.0395 21.6003 13.0585C20.8538 13.0775 20.2988 13.6476 20.2605 14.3887C20.2605 14.5788 20.2413 14.7878 20.2605 14.9778C20.2796 15.2249 20.2031 15.3389 19.9734 15.4339C18.002 16.232 16.9493 18.0183 17.1025 20.1846C17.2364 21.9899 18.7293 23.6812 20.5859 24.1752C21.1218 24.3273 21.6577 24.2703 22.1936 24.3843C23.2463 24.6123 23.9161 25.7145 23.6482 26.7596C23.3802 27.8048 22.2319 28.4319 21.1983 28.1279C20.3753 27.8808 19.8586 27.1777 19.8011 26.2656C19.7629 25.3914 19.1121 24.8784 18.136 24.8974C17.4661 24.9164 17.045 25.4674 17.0642 26.2846C17.179 28.0328 17.9829 29.363 19.5715 30.1042C20.2413 30.4082 20.4519 30.7313 20.3945 31.4344C20.337 32.0805 20.8921 32.6316 21.562 32.7076C22.1936 32.7836 22.8252 32.3845 23.0166 31.7764C23.1123 31.4914 23.1123 31.1873 23.074 30.9023C23.074 30.5792 23.2271 30.4272 23.5525 30.3132Z" fill="#FE6B01"></path><path d="M38.0985 28.3939C37.3521 27.6528 36.6056 26.9117 35.8592 26.1706C35.4956 25.8095 35.5147 25.8285 35.8592 25.4484C36.2994 24.9924 36.8162 24.5933 37.1798 24.0612C37.6392 23.3961 37.2755 22.503 36.4908 22.351C33.9452 21.8379 31.4188 21.3248 28.8733 20.8117C28.2225 20.6787 27.4569 21.4388 27.5909 22.0849C28.1077 24.5553 28.6245 27.0067 29.1029 29.4771C29.1986 29.9901 29.5049 30.3132 29.9642 30.4652C30.4236 30.6172 30.8064 30.4462 31.1317 30.1232C31.5145 29.7621 31.8973 29.4011 32.2418 29.002C32.4141 28.812 32.5098 28.85 32.6629 29.002C33.4668 29.8191 34.2706 30.5982 35.0745 31.4154C35.3233 31.6624 35.6104 31.8334 35.974 31.8334C36.3186 31.8334 36.6056 31.7194 36.8353 31.4914C37.2373 31.0923 37.6583 30.6742 38.0603 30.2752C38.711 29.6671 38.711 29.002 38.0985 28.3939Z" fill="#FE6B01"></path></svg>,
                    label: "Self-serve DSP"
                },
                {
                    icons: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.9937 32.4448C41.9317 31.1423 41.787 29.8605 41.6423 28.5581C41.3942 26.2426 41.1461 23.9477 40.8773 21.6322C40.6913 20.0196 40.6086 18.407 40.3191 16.8151C39.885 14.4583 38.6652 12.6389 36.4324 11.6052C34.9438 10.923 33.3519 10.9437 31.7807 11.0677C30.8503 11.1504 30.0234 11.5639 29.1757 11.9154C28.3074 12.2875 27.4184 12.5769 26.4674 12.6596C25.2683 12.763 24.0485 12.763 22.8494 12.7423C21.547 12.7216 20.2652 12.5356 19.0454 11.9981C18.4252 11.7293 17.8049 11.4605 17.1434 11.2538C16.1717 10.9643 15.1793 11.0057 14.187 11.0057C12.8638 11.0264 11.6647 11.3985 10.569 12.1014C8.66697 13.3419 7.79865 15.1819 7.55056 17.3733C7.32315 19.4614 7.07506 21.5495 6.86831 23.6376C6.66157 25.705 6.41348 27.7518 6.18607 29.8192C6.10337 30.6048 6.10337 31.3697 6 32.1554C6 32.4035 6 32.6309 6 32.879C6.06202 32.941 6.04135 33.003 6.04135 33.065C6.0827 34.3468 6.70292 35.3392 7.65393 36.1662C8.41888 36.8277 9.28719 37.2619 10.3209 37.3446C10.693 37.3446 11.0652 37.3446 11.4373 37.3446C11.8301 37.2619 12.2436 37.2826 12.6364 37.1172C14.3524 36.4142 15.6548 35.1738 16.8953 33.892C17.7429 33.0237 18.5699 32.1554 19.4382 31.3077C20.0171 30.7495 20.6787 30.274 21.5676 30.274C23.1802 30.2947 24.8135 30.274 26.4261 30.274C26.9843 30.274 27.4598 30.4394 27.9146 30.7702C28.4315 31.1423 28.907 31.5765 29.3411 32.0313C30.3128 33.0857 31.3259 34.1194 32.3802 35.0911C33.538 36.1868 34.7784 37.1999 36.4944 37.3446C36.7011 37.3446 36.9286 37.3446 37.1353 37.3446C37.28 37.1999 37.4661 37.2826 37.6315 37.2619C37.6315 37.2826 37.6315 37.2826 37.6315 37.3032C37.6522 37.3032 37.6522 37.3032 37.6728 37.3032C38.0243 37.3032 38.3757 37.3032 38.6859 37.1792C40.3811 36.559 42.1178 34.9257 41.9937 32.4448ZM18.6526 23.3895C18.3632 23.3895 18.0944 23.3895 17.8049 23.3895V23.4102C17.4121 23.4102 16.916 23.2655 16.6885 23.4515C16.4405 23.679 16.6265 24.1958 16.6058 24.5886C16.5852 24.8987 16.6058 25.2295 16.5852 25.5396C16.5438 26.2219 16.027 26.6767 15.324 26.7181C14.6418 26.7387 14.0423 26.3046 13.9802 25.6223C13.9182 25.0021 13.9389 24.3819 13.9596 23.7617C13.9802 23.4309 13.8562 23.3688 13.5667 23.3688C13.0085 23.3895 12.4503 23.3895 11.8921 23.3688C11.1479 23.3688 10.6517 22.8313 10.6517 22.0664C10.6517 21.2808 11.1479 20.7432 11.8715 20.7432C12.471 20.7432 13.0706 20.7225 13.6701 20.7432C13.8975 20.7432 13.9596 20.6812 13.9596 20.4538C13.9389 19.8749 13.9389 19.2754 13.9596 18.6965C13.9802 18.1383 14.2076 17.7248 14.7452 17.5181C15.3034 17.3113 15.8202 17.394 16.2544 17.7868C16.5232 18.0349 16.6058 18.3657 16.6058 18.7172C16.6058 19.296 16.6058 19.8542 16.6058 20.4331C16.6058 20.6605 16.6679 20.7225 16.8953 20.7225C17.4742 20.7019 18.0737 20.7225 18.6526 20.7225C19.4175 20.7225 19.9344 21.2601 19.9344 22.0457C19.9344 22.852 19.4175 23.3895 18.6526 23.3895ZM31.4912 21.3221C30.2715 21.3221 29.3411 20.3504 29.3411 19.1306C29.3618 17.9522 30.3335 17.0012 31.5119 17.0012C32.711 17.0012 33.6827 17.9729 33.662 19.1927C33.662 20.4124 32.711 21.3428 31.4912 21.3221ZM35.1506 27.1315C33.9308 27.1315 32.9798 26.1805 32.9798 24.9608C32.9798 23.7617 33.9308 22.8106 35.1299 22.8106C36.3497 22.8106 37.3214 23.741 37.342 24.9608C37.342 26.1392 36.3497 27.1315 35.1506 27.1315Z" fill="#FE6B01"></path></svg>,
                    label: "Gaming"
                },
            ]
        },
        { 
            title: "Company",
            items: [
                {
                    icons: "",
                    label: "About Us"
                },
                {
                    icons: "",
                    label: "Careers"
                },
                {
                    icons: "",
                    label: "Contact Us"
                }
            ]
        },
        { 
            title: "Resources" ,
            items: [
                {
                    icons: "",
                    label: "Blogs"
                },
                {
                    icons: "",
                    label: "Case Studies"
                },
                {
                    icons: "",
                    label: "Glossary"
                }
            ]
        },
    ]

    if (!mount) {
        return null
    }


    if (isMobile) {
        return (
            <div className="w-full justify-end flex">
                <Button onClick={() => onOpenMenu()} className="">
                    <Menu/>
                </Button>
            </div>
        )
    }

    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex w-full gap-4">
                {nav.map((link, index) => (
                    <div 
                        key={index} 
                        className="relative"
                    >
                        <DropDownMenu head={link.title} items={link.items}/>
                    </div>
                ))}
            </div>
            <div>
                <Button variant={"default"} className="flex hover:bg-white bg-[#0991f8] hover:text-black hover:border-[#0991f8] h-10" onClick={() => onOpen()}>
                    <p>Get Started</p>
                </Button>
            </div>
        </div>
    )
}