"use client"

import { ChevronDown, Menu } from "lucide-react"
import { useMedia } from "react-use"
import { Button } from "@/components/ui/button"
import { useOpenGetStarted } from "@/hooks/open-get-started"
import { useOpenMenuPhone } from "@/hooks/open-menu"
import { useEffect, useState } from "react"
import  DropDownMenu  from "./drop-down"
import { FaUsersGear } from "react-icons/fa6";

export const Navigation = () => {
    const isMobile = useMedia("(max-width: 1024px)", false)
    const { onOpen } = useOpenGetStarted();
    const { onOpenMenu } = useOpenMenuPhone();

    const [mount, setMount] = useState(false);

    useEffect(() => {
        setMount(true)
    }, [])

    const nav = [
        // { 
        //     title: "Technology" ,
        //     items: [
        //         {
        //             icons: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7961 6.04714C11.2295 5.61373 11.848 5.42054 12.451 5.53018C13.3392 5.69166 13.9848 6.4652 13.9848 7.3679V7.56725C13.9848 8.10729 13.7774 8.62671 13.4054 9.01824L8.57689 14.1009C7.76121 14.9595 7.42614 16.1677 7.68304 17.3237C8.01628 18.8233 9.27418 19.9398 10.8027 20.0926L11.0666 20.119C12.2381 20.2362 13.4003 19.8213 14.2327 18.9888L16.7373 16.4843C17.1278 16.0937 17.1278 15.4606 16.7373 15.0701C16.3468 14.6795 15.7136 14.6795 15.3231 15.0701L12.8185 17.5746C12.4102 17.9829 11.8402 18.1864 11.2656 18.1289L11.0017 18.1025C10.3323 18.0356 9.78136 17.5466 9.63542 16.8899C9.5229 16.3836 9.66965 15.8544 10.0269 15.4784L14.8554 10.3957C15.5805 9.63251 15.9848 8.61998 15.9848 7.56725V7.3679C15.9848 5.49863 14.6479 3.89683 12.8088 3.56244C11.5601 3.3354 10.2794 3.73545 9.38193 4.63292L5.91428 8.10057C5.52375 8.4911 5.52375 9.12426 5.91428 9.51479C6.3048 9.90531 6.93797 9.90531 7.32849 9.51479L10.7961 6.04714ZM21.5603 8.80768C21.5603 8.25539 21.1126 7.80768 20.5603 7.80768C20.0081 7.80768 19.5603 8.25539 19.5603 8.80768V10.247H18.121C17.5687 10.247 17.121 10.6947 17.121 11.247C17.121 11.7993 17.5687 12.247 18.121 12.247H19.5603V13.6863C19.5603 14.2386 20.0081 14.6863 20.5603 14.6863C21.1126 14.6863 21.5603 14.2386 21.5603 13.6863V12.247H22.9997C23.5519 12.247 23.9997 11.7993 23.9997 11.247C23.9997 10.6947 23.5519 10.247 22.9997 10.247H21.5603V8.80768ZM3.57558 12.6409C3.57558 13.076 3.22288 13.4287 2.78779 13.4287C2.35271 13.4287 2 13.076 2 12.6409C2 12.2058 2.35271 11.8531 2.78779 11.8531C3.22288 11.8531 3.57558 12.2058 3.57558 12.6409ZM5.57558 12.6409C5.57558 14.1806 4.32745 15.4287 2.78779 15.4287C1.24814 15.4287 0 14.1806 0 12.6409C0 11.1012 1.24814 9.85311 2.78779 9.85311C4.32745 9.85311 5.57558 11.1012 5.57558 12.6409Z" fill="#0991F8"></path></svg>,
        //             label: "Our Approach"
        //         },
        //         {
        //             icons: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M42 31.9066V29.8484C41.8898 29.7404 41.7598 29.7298 41.617 29.7182C41.562 29.7138 41.5051 29.7091 41.4467 29.6987H38.4324C38.07 29.6987 38.0318 29.6613 38.0318 29.3058V27.8651C38.0318 27.4161 38.0509 27.3974 38.5087 27.3974H41.4467C41.468 27.3974 41.4892 27.3976 41.5104 27.3978C41.6795 27.3997 41.8453 27.4015 41.9809 27.2851V25.227C41.8453 25.1106 41.6795 25.1124 41.5104 25.1142C41.4892 25.1145 41.468 25.1147 41.4467 25.1147H38.4324C38.07 25.1147 38.0318 25.0773 38.0318 24.7218V23.3559C38.0318 22.9069 38.0509 22.8882 38.5087 22.8882H41.4467C41.468 22.8882 41.4892 22.8884 41.5104 22.8886C41.6795 22.8905 41.8453 22.8923 41.9809 22.7759V20.7178C41.8453 20.6014 41.6795 20.6032 41.5104 20.6051C41.4892 20.6053 41.468 20.6055 41.4467 20.6055H38.4324C38.07 20.6055 38.0318 20.5681 38.0318 20.2126V18.7719C38.0318 18.3228 38.0509 18.3041 38.5087 18.3041H41.4467C41.468 18.3041 41.4892 18.3044 41.5104 18.3046C41.6795 18.3064 41.8453 18.3083 41.9809 18.1919V16.1337C41.8621 16.0172 41.698 16.0192 41.5423 16.021C41.523 16.0212 41.5038 16.0215 41.4849 16.0215H38.5278C38.0318 16.0215 38.0127 16.0028 37.9364 15.5163C37.7265 14.3001 37.1351 13.2898 36.1431 12.5414C35.1129 11.7742 33.93 11.5497 32.6709 11.5497C32.213 11.5497 32.194 11.531 32.194 11.082V8.16314C32.194 8.13921 32.1947 8.11489 32.1955 8.09046C32.2001 7.94307 32.205 7.79169 32.0414 7.69539C31.836 7.69539 31.6289 7.69037 31.4212 7.68533C30.9341 7.67353 30.4433 7.66163 29.9618 7.7141C29.8618 7.84499 29.8638 8.00451 29.8659 8.16764C29.8661 8.19104 29.8665 8.21451 29.8665 8.23798V11.1194C29.8665 11.4749 29.8283 11.5123 29.4658 11.5123H27.9586C27.5199 11.5123 27.5008 11.4936 27.5008 11.0632V8.21927C27.5008 8.1879 27.5018 8.15653 27.5029 8.12534C27.5083 7.97049 27.5134 7.81996 27.3863 7.69539C26.6804 7.65796 25.9746 7.65796 25.2687 7.69539C25.15 7.82838 25.1519 7.99094 25.1537 8.15678C25.154 8.17758 25.1542 8.19842 25.1542 8.21927V11.0632C25.1542 11.4562 25.1161 11.4936 24.7154 11.4936H23.3227C22.8839 11.4936 22.8649 11.4749 22.8649 11.0445V8.20056C22.8649 8.16922 22.8659 8.13787 22.867 8.1067C22.8723 7.95181 22.8774 7.80128 22.7504 7.67667C22.0445 7.63925 21.3387 7.62054 20.6327 7.67667C20.4992 7.82635 20.5183 8.01346 20.5183 8.20056V11.0071C20.4992 11.4562 20.4801 11.4749 20.0414 11.4749H18.6105C18.1717 11.4749 18.1526 11.4562 18.1526 11.0258V8.18185C18.1526 8.15048 18.1537 8.11911 18.1547 8.08792C18.1601 7.93306 18.1652 7.78255 18.0382 7.65796C17.3513 7.62054 16.6455 7.63925 15.9396 7.65796C15.8125 7.78255 15.8177 7.93307 15.823 8.08792C15.8241 8.11911 15.8251 8.15048 15.8251 8.18185V11.1007C15.8251 11.3626 15.7106 11.4936 15.4245 11.4749C15.1023 11.4598 14.7924 11.4932 14.485 11.5263C14.4101 11.5343 14.3354 11.5424 14.2607 11.5497C12.2003 11.7368 10.4261 13.3272 10.0827 15.3105C10.0259 15.6443 10.0067 15.8081 9.91585 15.8884C9.82333 15.9701 9.65657 15.9654 9.30048 15.9654H6.53416C6.01909 15.9841 6 16.0028 6 16.4892V17.5932C6 17.923 6 18.0914 6.08295 18.1772C6.16933 18.2667 6.3457 18.2667 6.70587 18.2667H9.58662C9.79651 18.2667 10.0063 18.2667 10.0063 18.5474V20.3061C10.0063 20.4932 9.91095 20.5868 9.7202 20.5868H9.01433C8.72887 20.5868 8.44125 20.5847 8.15295 20.5827C7.5743 20.5785 6.99275 20.5743 6.41972 20.5868C6.05722 20.5868 6.01909 20.6242 6.01909 20.9797C6.01909 21.1481 6.02119 21.3165 6.0233 21.4849C6.02756 21.8217 6.03181 22.1585 6.01909 22.4953C6.01909 22.7572 6.11449 22.8508 6.36246 22.8695H9.6248C9.91095 22.8695 10.0254 22.963 10.0254 23.2437V24.7218C10.0063 25.0773 9.96822 25.1147 9.60571 25.1147H7.43083C7.31708 25.1147 7.20122 25.1127 7.08463 25.1106C6.84933 25.1064 6.61121 25.1022 6.38155 25.1147C6.15262 25.1334 6 25.2083 6.01909 25.4702C6.03818 26.0128 6.03818 26.5367 6.01909 27.0606C6.01909 27.2851 6.11449 27.3974 6.34341 27.3974H9.60571C9.96822 27.3974 10.0063 27.4348 10.0063 27.7903V28.9877C10.0063 29.3647 10.0202 29.5428 9.93919 29.6266C9.85533 29.7133 9.66989 29.6987 9.2623 29.6987H6.55325C6.03818 29.7174 6.01909 29.7362 6.01909 30.2226V31.4575C6.01909 31.9627 6.03818 31.9814 6.57234 31.9814H9.49127C10.0063 31.9814 10.0254 32.0001 10.1017 32.4866C10.2735 33.4782 10.7122 34.3389 11.4372 35.0499C12.4865 36.0603 13.7838 36.4532 15.2337 36.4532C15.5424 36.4532 15.6951 36.4532 15.7705 36.5306C15.8442 36.6063 15.8442 36.7559 15.8442 37.0519C15.8442 37.363 15.8421 37.6762 15.84 37.9902C15.8357 38.6201 15.8315 39.2528 15.8442 39.8772C15.8442 40.2701 15.9205 40.3262 16.3212 40.3262C16.4801 40.3262 16.6391 40.3241 16.7981 40.322C17.1161 40.3179 17.434 40.3137 17.752 40.3262C18.0572 40.3449 18.1717 40.214 18.1717 39.952V36.8648C18.1717 36.5093 18.2098 36.4719 18.5723 36.4719H20.1177C20.4992 36.4906 20.5373 36.5093 20.5373 36.9022V39.3533C20.5373 39.5778 20.5373 39.821 20.5564 40.0456C20.5755 40.2514 20.6709 40.3636 20.9189 40.3636H22.5406C22.7695 40.3636 22.8649 40.2701 22.8839 40.0643C22.903 39.9333 22.903 39.821 22.903 39.69V36.977C22.903 36.5093 22.9221 36.4906 23.399 36.4906H24.7727C25.1542 36.4906 25.1924 36.528 25.1924 36.9022V39.1662C25.1924 39.4468 25.1924 39.7462 25.2114 40.0268C25.2305 40.2326 25.3068 40.3636 25.5358 40.3636H27.2146C27.4054 40.3636 27.5008 40.2701 27.5199 40.1017C27.539 39.9707 27.539 39.8584 27.539 39.7275V36.9022C27.539 36.528 27.5771 36.4906 27.9586 36.4906H29.4658C29.8474 36.4906 29.8855 36.528 29.8855 36.9022V39.1662C29.8855 39.4468 29.8855 39.7462 29.9046 40.0268C29.9237 40.214 30 40.3636 30.2289 40.3636H31.9078C32.0986 40.3636 32.194 40.2701 32.2131 40.1017C32.2321 39.9707 32.2321 39.8584 32.2321 39.7275V36.9396C32.2321 36.528 32.2512 36.4906 32.69 36.4906C33.0143 36.4906 33.3387 36.4719 33.6629 36.4344C35.9332 36.2099 37.6121 34.6757 37.9746 32.4679C38.0509 32.0562 38.07 32.0188 38.4897 32.0188H41.4658C41.4871 32.0188 41.5083 32.019 41.5295 32.0193C41.6986 32.0211 41.8644 32.0229 42 31.9066ZM18.8733 18.2917H16.5V29.7082H18.3667V22.2496H18.4422L20.7977 29.6525H22.0688L24.4243 22.2775H24.4999V29.7082H26.3665V18.2917H23.9933L21.4866 25.9622H21.3799L18.8733 18.2917ZM28.7378 18.2917V29.7082H33V27.7182H30.6622V18.2917H28.7378Z" fill="#FE6B01"></path></svg>,
        //             label: "Machine Learning"
        //         },
        //         {
        //             icons: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.3549 24.5039C38.1564 24.3384 38.1233 24.1399 38.1564 23.9083C38.3218 22.4856 38.3218 21.0628 38.0571 19.6732C37.991 19.3754 38.0571 19.1438 38.2887 18.9122C38.785 18.482 39.2483 17.9857 39.7115 17.5556C39.8438 17.4233 39.8769 17.324 39.8108 17.1586C39.2814 16.0005 38.785 14.8425 38.2887 13.6844C38.2226 13.519 38.1564 13.4528 37.9579 13.4859C37.2961 13.5521 36.6344 13.5852 35.9727 13.6514C35.6418 13.6844 35.4102 13.6183 35.2448 13.3536C34.3845 12.1955 33.3588 11.236 32.1677 10.4088C31.936 10.2434 31.8368 10.0449 31.8368 9.74708C31.8699 9.08534 31.8699 8.4236 31.903 7.76186C31.903 7.53025 31.8699 7.431 31.6383 7.36483C30.4802 6.9347 29.3222 6.47147 28.1972 6.04134C27.9987 5.97517 27.8994 5.97517 27.7671 6.1406C27.37 6.60382 26.9399 7.03396 26.576 7.53026C26.3113 7.86113 26.0135 7.96038 25.6495 7.89421C24.293 7.72877 22.9033 7.76187 21.5467 7.99348C21.249 8.05965 21.0504 7.99347 20.8519 7.76186C20.3887 7.26556 19.9255 6.80235 19.4953 6.33913C19.363 6.17369 19.2307 6.1406 19.0321 6.23987C17.9072 6.73617 16.7822 7.23247 15.6242 7.72877C15.4587 7.79495 15.3926 7.89421 15.3926 8.09273C15.4587 8.72139 15.4918 9.38313 15.558 10.0118C15.5911 10.3096 15.5249 10.5412 15.2933 10.7397C14.1353 11.6 13.1426 12.6587 12.3155 13.883C12.1831 14.0815 11.9846 14.1807 11.7199 14.1807C11.0582 14.1476 10.3633 14.1477 9.70161 14.1146C9.47 14.1146 9.37074 14.1807 9.30456 14.3793C8.87443 15.5373 8.41122 16.7284 7.94801 17.8865C7.88183 18.0519 7.91491 18.1512 8.04726 18.2835C8.51048 18.6475 8.9406 19.0776 9.40382 19.4416C9.76778 19.7063 9.86704 20.0371 9.80087 20.5004C9.63543 21.8569 9.70161 23.1804 9.93322 24.5039C9.9994 24.8017 9.90013 25.0333 9.70161 25.2318C9.23839 25.6619 8.77518 26.1251 8.27887 26.5553C8.11344 26.7207 8.08034 26.8531 8.1796 27.0516C8.6759 28.1434 9.17221 29.2684 9.63543 30.3934C9.73469 30.6581 9.86704 30.6911 10.1317 30.6911C10.7604 30.625 11.4221 30.5919 12.0508 30.5257C12.3155 30.4926 12.514 30.5919 12.6794 30.8235C13.5397 31.9815 14.5985 32.9741 15.7896 33.7682C16.0212 33.9337 16.1205 34.0991 16.0874 34.3969C16.0543 35.0586 16.0543 35.7534 16.0212 36.4152C16.0212 36.5806 16.0212 36.6799 16.1866 36.7461C17.08 37.0769 17.9733 37.4409 18.8998 37.7718C18.8998 37.3747 18.8998 37.0438 18.8998 36.6799C18.8998 35.8196 18.966 34.9263 18.8667 34.066C18.6682 32.3786 17.841 31.022 16.6168 29.8309C13.7713 27.0185 12.7787 23.6105 13.672 19.7063C14.9294 14.1477 20.488 10.5743 26.3113 11.8316C31.9691 13.0558 35.6749 18.9453 34.3183 24.5701C33.822 26.6545 32.8294 28.4412 31.2743 29.897C30.1163 30.9889 29.3884 32.2793 29.1567 33.8344C28.9582 35.0917 29.0575 36.349 29.0575 37.6063C29.0575 37.9041 29.256 37.7056 29.3553 37.6725C30.3479 37.2424 31.3736 36.7791 32.3662 36.3821C32.5647 36.2828 32.6309 36.1836 32.5978 35.9851C32.5316 35.3233 32.4985 34.6285 32.4324 33.9668C32.3993 33.7021 32.4985 33.5035 32.7301 33.3381C33.8882 32.4778 34.8477 31.4521 35.6749 30.261C35.8403 30.0294 36.0388 29.9301 36.3366 29.9301C36.9984 29.9632 37.6601 29.9632 38.3218 29.9963C38.5204 29.9963 38.6527 29.9632 38.7189 29.7316C38.8181 29.4007 38.9505 29.103 39.0828 28.8052C39.4468 27.9118 39.7446 26.9854 40.1747 26.092C40.1747 26.059 40.1747 26.0259 40.1747 26.0259C39.5461 25.4965 38.9505 25.0002 38.3549 24.5039Z" fill="#FE6B01"></path><path d="M21.2026 35.7578H22.3473C22.3306 35.663 22.3306 35.5296 22.3306 35.34V28.5725C22.3306 27.2566 21.5034 26.3543 20.1875 26.2415C19.4356 26.2039 19.0596 25.8655 18.9468 25.2264C18.9092 24.9256 18.9844 24.7376 19.2852 24.6248C20.1875 24.2489 20.6387 23.5345 20.6387 22.557C20.6387 21.6547 20.0747 20.8651 19.21 20.5268C18.0445 20.0756 16.7662 20.6395 16.315 21.7675C15.8263 22.8954 16.3526 24.2113 17.4805 24.6624C17.7437 24.7752 17.8189 24.9256 17.8189 25.1888C17.8189 26.3543 18.7588 27.2942 19.9243 27.3694C20.7891 27.4446 21.2027 27.8582 21.2027 28.6853V35.7535C21.2027 35.755 21.2026 35.7564 21.2026 35.7578Z" fill="#FE6B01"></path><path d="M23.3753 35.7578H24.4938C24.4958 35.7426 24.4979 35.7275 24.5 35.7126C24.5058 35.6719 24.5112 35.6334 24.5112 35.6031V19.8124C24.4736 19.5492 24.5488 19.3988 24.8496 19.2861C25.7895 18.8725 26.3534 17.8198 26.1655 16.8798C25.9399 15.7519 25.0751 15 23.9848 15C22.9321 15 21.9922 15.7143 21.7666 16.7295C21.541 17.7822 22.0298 18.8725 23.0073 19.2861C23.3081 19.3988 23.3833 19.5492 23.3833 19.85V35.6031C23.3833 35.6624 23.381 35.7137 23.3753 35.7578Z" fill="#FE6B01"></path><path d="M25.556 35.7578C25.5526 35.7269 25.5473 35.6951 25.5422 35.664C25.5341 35.615 25.5263 35.5675 25.5263 35.528V28.6101C25.5263 27.4822 26.203 26.6175 27.2558 26.3543C27.4287 26.3049 27.618 26.2879 27.8021 26.2714C27.8981 26.2628 27.9927 26.2544 28.0829 26.2415C28.6468 26.1287 28.9852 25.6399 28.9852 25.1136C28.9852 24.9256 28.9476 24.8128 28.722 24.7376C28.1581 24.512 27.7069 24.1361 27.4813 23.5721C26.9926 22.4442 27.5189 21.0907 28.6468 20.6395C29.7748 20.1508 31.053 20.6771 31.5794 21.8051C32.1058 22.933 31.5794 24.2489 30.4515 24.7376C30.2259 24.8504 30.1507 24.9256 30.1507 25.1888C30.0755 26.5423 29.2108 27.3694 27.8573 27.4446C27.143 27.4822 26.6542 27.971 26.6542 28.6853V35.7578H25.556Z" fill="#FE6B01"></path><path d="M26.7083 39.7685C26.8407 39.7354 26.973 39.7354 27.1385 39.7354C28.098 39.7354 28.098 39.7354 28.098 38.7759C28.098 38.5112 27.9987 38.445 27.7671 38.445C26.576 38.445 25.4179 38.445 24.2268 38.445C23.7967 38.445 23.5651 38.2465 23.5982 37.9487C23.5982 37.6509 23.8298 37.4855 24.2268 37.4855C25.2525 37.4855 26.2451 37.4855 27.2708 37.4855C28.1311 37.4855 28.098 37.4855 28.1311 36.6583C28.1311 36.3936 28.0649 36.3274 27.8002 36.3274C26.5429 36.3274 25.3187 36.3274 24.0614 36.3274C23.0026 36.3274 21.9438 36.3274 20.885 36.3274C19.9255 36.3274 19.9255 36.3274 19.9586 37.2869C19.9586 37.4524 20.0248 37.5186 20.1902 37.5186C20.5542 37.5186 20.885 37.5186 21.249 37.5186C21.5468 37.5186 21.7453 37.684 21.7784 37.9818C21.7784 38.3126 21.5799 38.4781 21.2821 38.4781C21.0505 38.4781 20.8519 38.4781 20.6203 38.4781C19.9917 38.4781 19.9917 38.4781 19.9917 39.0736C19.9917 39.7354 19.9917 39.7354 20.6865 39.7354C21.9107 39.7354 23.135 39.7354 24.3261 39.7354C24.5908 39.7354 24.7562 39.8677 24.8224 40.1324C24.8555 40.364 24.7562 40.5626 24.5577 40.6618C24.4584 40.6949 24.293 40.6949 24.1607 40.6949C22.8703 40.6949 21.6129 40.6949 20.3225 40.6949C19.9917 40.6949 19.9586 40.8272 19.9917 41.0919C20.0909 41.5882 20.5211 41.9853 21.1166 41.9853C23.0688 41.9853 25.054 42.0184 27.0061 41.9853C27.6348 41.9853 28.098 41.5221 28.1311 40.9596C28.1311 40.7942 28.098 40.6949 27.8995 40.6949C27.5686 40.6949 27.2377 40.6949 26.9069 40.6949C26.6422 40.6949 26.5098 40.5295 26.4767 40.2648C26.4106 40.0332 26.5098 39.8677 26.7083 39.7685Z" fill="#FE6B01"></path></svg>,
        //             label: "Creative Technology"
        //         }
        //     ]
        // },
        { 
            title: "Home" ,
            items: []
        },
        { 
            title: "Services",
            items: [
                {
                    label: "User Acquisition",
                    link: "/#"
                },
                {
                    label: "Branding",
                    link: "/#"
                },
                {
                    label: "Publisher",
                    link: "/publisher"
                },
                {
                    label: "Advertiser",
                    link: "/advertiser"
                },
                // {
                //     icons: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.9937 32.4448C41.9317 31.1423 41.787 29.8605 41.6423 28.5581C41.3942 26.2426 41.1461 23.9477 40.8773 21.6322C40.6913 20.0196 40.6086 18.407 40.3191 16.8151C39.885 14.4583 38.6652 12.6389 36.4324 11.6052C34.9438 10.923 33.3519 10.9437 31.7807 11.0677C30.8503 11.1504 30.0234 11.5639 29.1757 11.9154C28.3074 12.2875 27.4184 12.5769 26.4674 12.6596C25.2683 12.763 24.0485 12.763 22.8494 12.7423C21.547 12.7216 20.2652 12.5356 19.0454 11.9981C18.4252 11.7293 17.8049 11.4605 17.1434 11.2538C16.1717 10.9643 15.1793 11.0057 14.187 11.0057C12.8638 11.0264 11.6647 11.3985 10.569 12.1014C8.66697 13.3419 7.79865 15.1819 7.55056 17.3733C7.32315 19.4614 7.07506 21.5495 6.86831 23.6376C6.66157 25.705 6.41348 27.7518 6.18607 29.8192C6.10337 30.6048 6.10337 31.3697 6 32.1554C6 32.4035 6 32.6309 6 32.879C6.06202 32.941 6.04135 33.003 6.04135 33.065C6.0827 34.3468 6.70292 35.3392 7.65393 36.1662C8.41888 36.8277 9.28719 37.2619 10.3209 37.3446C10.693 37.3446 11.0652 37.3446 11.4373 37.3446C11.8301 37.2619 12.2436 37.2826 12.6364 37.1172C14.3524 36.4142 15.6548 35.1738 16.8953 33.892C17.7429 33.0237 18.5699 32.1554 19.4382 31.3077C20.0171 30.7495 20.6787 30.274 21.5676 30.274C23.1802 30.2947 24.8135 30.274 26.4261 30.274C26.9843 30.274 27.4598 30.4394 27.9146 30.7702C28.4315 31.1423 28.907 31.5765 29.3411 32.0313C30.3128 33.0857 31.3259 34.1194 32.3802 35.0911C33.538 36.1868 34.7784 37.1999 36.4944 37.3446C36.7011 37.3446 36.9286 37.3446 37.1353 37.3446C37.28 37.1999 37.4661 37.2826 37.6315 37.2619C37.6315 37.2826 37.6315 37.2826 37.6315 37.3032C37.6522 37.3032 37.6522 37.3032 37.6728 37.3032C38.0243 37.3032 38.3757 37.3032 38.6859 37.1792C40.3811 36.559 42.1178 34.9257 41.9937 32.4448ZM18.6526 23.3895C18.3632 23.3895 18.0944 23.3895 17.8049 23.3895V23.4102C17.4121 23.4102 16.916 23.2655 16.6885 23.4515C16.4405 23.679 16.6265 24.1958 16.6058 24.5886C16.5852 24.8987 16.6058 25.2295 16.5852 25.5396C16.5438 26.2219 16.027 26.6767 15.324 26.7181C14.6418 26.7387 14.0423 26.3046 13.9802 25.6223C13.9182 25.0021 13.9389 24.3819 13.9596 23.7617C13.9802 23.4309 13.8562 23.3688 13.5667 23.3688C13.0085 23.3895 12.4503 23.3895 11.8921 23.3688C11.1479 23.3688 10.6517 22.8313 10.6517 22.0664C10.6517 21.2808 11.1479 20.7432 11.8715 20.7432C12.471 20.7432 13.0706 20.7225 13.6701 20.7432C13.8975 20.7432 13.9596 20.6812 13.9596 20.4538C13.9389 19.8749 13.9389 19.2754 13.9596 18.6965C13.9802 18.1383 14.2076 17.7248 14.7452 17.5181C15.3034 17.3113 15.8202 17.394 16.2544 17.7868C16.5232 18.0349 16.6058 18.3657 16.6058 18.7172C16.6058 19.296 16.6058 19.8542 16.6058 20.4331C16.6058 20.6605 16.6679 20.7225 16.8953 20.7225C17.4742 20.7019 18.0737 20.7225 18.6526 20.7225C19.4175 20.7225 19.9344 21.2601 19.9344 22.0457C19.9344 22.852 19.4175 23.3895 18.6526 23.3895ZM31.4912 21.3221C30.2715 21.3221 29.3411 20.3504 29.3411 19.1306C29.3618 17.9522 30.3335 17.0012 31.5119 17.0012C32.711 17.0012 33.6827 17.9729 33.662 19.1927C33.662 20.4124 32.711 21.3428 31.4912 21.3221ZM35.1506 27.1315C33.9308 27.1315 32.9798 26.1805 32.9798 24.9608C32.9798 23.7617 33.9308 22.8106 35.1299 22.8106C36.3497 22.8106 37.3214 23.741 37.342 24.9608C37.342 26.1392 36.3497 27.1315 35.1506 27.1315Z" fill="#FE6B01"></path></svg>,
                //     label: "Gaming"
                // },
            ]
        },
        { 
            title: "Blogs",
            items: []

        },
        {
            title:"About us",
            items: []
        },
        { 
            title: "Resources" ,
            items: [
                {
                    label: "Case Studies",
                    link: "/#"
                },
                {
                    label: "Glossary",
                    link: "/#"
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