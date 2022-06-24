import React from "react";
import styled from "styled-components";

interface ButtonProps{
  handleClick: ()=>void;}
const MakeButton = ({handleClick}:ButtonProps) => {
  return (
    <div
    onClick={handleClick}
      dangerouslySetInnerHTML={{
        __html: `<svg width="263" height="44" viewBox="0 0 263 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="262" height="43" rx="19.5" fill="#F05A39"/>
<path d="M85.7031 15.7422C85.7031 15.4141 85.75 15.1328 85.8438 14.8984C85.9531 14.6484 86.2188 14.5234 86.6406 14.5234C87.2188 14.5859 87.4766 14.9219 87.4141 15.5312C87.3203 16.6406 87.2656 17.7969 87.25 19C88.2812 18.9531 89.3438 18.9609 90.4375 19.0234C90.9531 19.0547 91.2188 19.3203 91.2344 19.8203C91.2031 20.3359 90.9453 20.5703 90.4609 20.5234C89.3984 20.5078 88.3281 20.5156 87.25 20.5469C87.2344 21.3125 87.2266 22.1094 87.2266 22.9375L87.25 28.0703C87.2812 28.5234 87.3359 29.0234 87.4141 29.5703C87.4766 29.7891 87.4297 30 87.2734 30.2031C87.1328 30.3906 86.8828 30.4922 86.5234 30.5078C86.1172 30.5078 85.8359 30.2109 85.6797 29.6172C85.6016 28.6484 85.5547 27.6641 85.5391 26.6641C85.5391 25.6641 85.5312 24.4062 85.5156 22.8906C85.5469 21.4062 85.5625 20.2891 85.5625 19.5391C85.5625 18.7734 85.6094 17.5078 85.7031 15.7422ZM74.1016 26.8984C74.5703 26.8516 75.0547 26.8125 75.5547 26.7812C76.0703 26.7344 76.75 26.6797 77.5938 26.6172C78.7031 26.5547 79.5938 26.5078 80.2656 26.4766C80.9531 26.4453 81.8125 26.4844 82.8438 26.5938C83.375 26.6094 83.6328 26.875 83.6172 27.3906C83.6172 27.5938 83.5625 27.7734 83.4531 27.9297C83.3594 28.0703 83.1797 28.1562 82.9141 28.1875C81.9297 28.1406 81.0625 28.1172 80.3125 28.1172C79.5625 28.1172 78.6797 28.1328 77.6641 28.1641C77.0547 28.1953 76.4062 28.2578 75.7188 28.3516C75.0469 28.4453 74.4531 28.5234 73.9375 28.5859C73.2031 28.6328 72.6484 28.5156 72.2734 28.2344C71.9141 27.9375 71.7109 27.4062 71.6641 26.6406C71.5859 25.4062 71.5625 24.0625 71.5938 22.6094C71.625 21.1562 71.6562 19.1719 71.6875 16.6562C71.7031 16.3438 71.7891 16.1094 71.9453 15.9531C72.1172 15.7969 72.2969 15.7188 72.4844 15.7188C72.5938 15.7188 72.7891 15.7656 73.0703 15.8594C73.3516 15.9375 73.4844 16.2344 73.4688 16.75C73.4062 18.3906 73.3594 20 73.3281 21.5781C73.3125 23.1562 73.3125 24.625 73.3281 25.9844C73.3125 26.375 73.3828 26.6328 73.5391 26.7578C73.7109 26.8672 73.8984 26.9141 74.1016 26.8984ZM94.7969 16.4453C94.7188 17.6797 94.6562 19.375 94.6094 21.5312C94.5781 22.375 94.7031 22.8594 94.9844 22.9844C95.2656 23.1094 95.6172 23.1484 96.0391 23.1016C96.8047 23.0703 97.6562 23.0547 98.5938 23.0547C99.5469 23.0391 100.242 23.0312 100.68 23.0312C101.883 23.0781 102.891 23.1094 103.703 23.125C104.516 23.1406 105.656 23.1797 107.125 23.2422C107.609 23.2266 107.844 23.4766 107.828 23.9922C107.828 24.1953 107.789 24.375 107.711 24.5312C107.633 24.6719 107.461 24.7578 107.195 24.7891C105.32 24.8047 103.992 24.7891 103.211 24.7422C102.43 24.6953 101.445 24.6641 100.258 24.6484C99.5078 24.6641 98.7266 24.6875 97.9141 24.7188C97.1016 24.7344 96.4453 24.7734 95.9453 24.8359C94.8672 24.8203 94.0938 24.5781 93.625 24.1094C93.1562 23.625 92.9297 22.9766 92.9453 22.1641C92.9453 21.4609 92.9688 20.3984 93.0156 18.9766C93.0312 17.9453 93.0625 17.0703 93.1094 16.3516C92.9062 16.2578 92.7812 16.0547 92.7344 15.7422C92.75 15.4297 92.8359 15.1875 92.9922 15.0156C93.1641 14.8438 93.3672 14.7578 93.6016 14.7578C95.6797 14.7891 97.6406 14.7812 99.4844 14.7344C101.328 14.6875 103.281 14.6016 105.344 14.4766C105.578 14.4766 105.773 14.5391 105.93 14.6641C106.102 14.7891 106.188 14.9766 106.188 15.2266C106.156 15.7422 105.914 16.0234 105.461 16.0703C103.602 16.2422 101.945 16.3438 100.492 16.375C99.0547 16.4062 97.5234 16.4219 95.8984 16.4219C95.5078 16.4375 95.1406 16.4453 94.7969 16.4453ZM93.1328 29.4062C95.4141 29.5156 97.8047 29.6016 100.305 29.6641C100.273 29.3516 100.219 28.9922 100.141 28.5859C99.9844 27.6484 99.9062 26.7969 99.9062 26.0312C99.8906 25.4844 100.094 25.1719 100.516 25.0938C101.094 25.0312 101.461 25.2891 101.617 25.8672C101.648 26.7266 101.734 27.5781 101.875 28.4219C101.953 28.9219 102.031 29.3594 102.109 29.7344C102.578 29.75 103.195 29.7578 103.961 29.7578C105.664 29.8047 107.375 29.7891 109.094 29.7109C109.328 29.7109 109.523 29.7891 109.68 29.9453C109.852 30.1016 109.938 30.3047 109.938 30.5547C109.906 31.0703 109.664 31.3281 109.211 31.3281C106.945 31.3594 105.594 31.3594 105.156 31.3281C104.719 31.2969 103.359 31.2734 101.078 31.2578C98.4219 31.2734 95.7734 31.1875 93.1328 31C92.6641 31.0625 92.3984 30.8359 92.3359 30.3203C92.3516 30.0078 92.4297 29.7812 92.5703 29.6406C92.7109 29.4844 92.8984 29.4062 93.1328 29.4062ZM127.258 23.9219C126.789 24.375 126.367 24.7891 125.992 25.1641C125.68 25.4922 125.281 25.8516 124.797 26.2422C124.969 26.4922 125.031 26.7422 124.984 26.9922C124.938 27.2578 124.812 27.4297 124.609 27.5078C124.406 27.6328 124.195 27.6797 123.977 27.6484C123.758 27.6172 123.562 27.4219 123.391 27.0625C123.047 26.5156 122.703 25.9297 122.359 25.3047C122.031 24.6797 121.648 24.0703 121.211 23.4766C120.711 24.0234 120.266 24.5859 119.875 25.1641C119.5 25.7422 119.117 26.3438 118.727 26.9688C118.43 27.3594 118.062 27.4609 117.625 27.2734C117.391 27.0859 117.273 26.8906 117.273 26.6875C117.289 26.4844 117.359 26.2656 117.484 26.0312C117.906 25.2969 118.336 24.625 118.773 24.0156C119.227 23.4062 119.688 22.7969 120.156 22.1875C120.141 20.4219 120.086 18.6406 119.992 16.8438C119.992 16.7031 120.039 16.5547 120.133 16.3984C120.227 16.2422 120.406 16.125 120.672 16.0469C120.938 16.0469 121.156 16.1172 121.328 16.2578C121.516 16.3984 121.617 16.5703 121.633 16.7734C121.68 18.5703 121.766 20.1328 121.891 21.4609C122.703 22.7109 123.328 23.6875 123.766 24.3906C123.859 24.5312 123.945 24.6641 124.023 24.7891C124.43 24.4609 124.805 24.1328 125.148 23.8047C125.586 23.3672 125.969 22.9922 126.297 22.6797C126.234 21.9766 126.172 21.0078 126.109 19.7734C126.047 18.5234 126 17.4609 125.969 16.5859C125.969 16.3516 126.023 16.1562 126.133 16C126.258 15.8438 126.461 15.7656 126.742 15.7656C127.008 15.7812 127.211 15.8672 127.352 16.0234C127.492 16.1641 127.562 16.3359 127.562 16.5391C127.609 17.7422 127.648 18.7109 127.68 19.4453C127.727 20.1641 127.789 21.0391 127.867 22.0703C128.492 22.9141 129.125 23.7344 129.766 24.5312C130.422 25.3281 130.938 25.8984 131.312 26.2422C131.5 26.4453 131.602 26.6719 131.617 26.9219C131.633 27.1562 131.547 27.3516 131.359 27.5078C131.219 27.6641 131.023 27.7266 130.773 27.6953C130.539 27.6484 130.32 27.5234 130.117 27.3203C129.664 26.9297 129.18 26.3984 128.664 25.7266C128.164 25.0391 127.695 24.4375 127.258 23.9219ZM134.242 15.8828C134.242 15.5547 134.289 15.2812 134.383 15.0625C134.492 14.8438 134.758 14.7344 135.18 14.7344C135.758 14.75 136.016 15.0625 135.953 15.6719C135.859 16.7812 135.82 18.0156 135.836 19.375C135.867 20.7188 135.875 22.0156 135.859 23.2656C135.875 24.375 135.883 25.1484 135.883 25.5859C135.898 26.0078 135.906 26.5547 135.906 27.2266C135.953 27.5703 136.008 28.0703 136.07 28.7266C136.133 28.9453 136.086 29.1562 135.93 29.3594C135.789 29.5469 135.539 29.6484 135.18 29.6641C134.82 29.6641 134.562 29.3672 134.406 28.7734C134.328 27.8047 134.281 26.8984 134.266 26.0547C134.25 25.2109 134.234 24.0312 134.219 22.5156V21.3906H132.836C132.43 21.3906 131.812 21.4219 130.984 21.4844C130.266 21.5938 129.844 21.3906 129.719 20.875C129.719 20.5156 129.789 20.2734 129.93 20.1484C130.086 20.0234 130.352 19.9531 130.727 19.9375C131.539 19.875 132.211 19.8359 132.742 19.8203C133.117 19.8047 133.602 19.7969 134.195 19.7969C134.195 19.6562 134.188 19.5312 134.172 19.4219C134.125 18.8281 134.148 17.6484 134.242 15.8828ZM140.852 24.2266C141.82 24.1172 142.68 24.0391 143.43 23.9922C144.195 23.9453 145 23.9062 145.844 23.875C146.609 23.8438 147.32 23.8281 147.977 23.8281C148.648 23.8125 149.453 23.7891 150.391 23.7578C151.906 23.7578 152.922 23.8828 153.438 24.1328C153.969 24.3672 154.258 24.8281 154.305 25.5156L154.281 26.0312C154.203 26.6719 153.883 27.1641 153.32 27.5078C152.758 27.8516 151.977 28.0391 150.977 28.0703L148.281 28.1406C146.891 28.1875 145.781 28.2422 144.953 28.3047C144.125 28.3672 143.336 28.4922 142.586 28.6797C142.227 28.7734 141.977 28.875 141.836 28.9844C141.711 29.0938 141.648 29.2344 141.648 29.4062V29.875C141.695 30.0312 141.789 30.1484 141.93 30.2266C142.086 30.3047 142.289 30.3125 142.539 30.25C143.023 30.125 143.883 29.9844 145.117 29.8281C145.992 29.75 146.758 29.6875 147.414 29.6406C148.07 29.5781 148.891 29.5391 149.875 29.5234C150.859 29.5234 151.789 29.5312 152.664 29.5469C153.539 29.5625 154.531 29.6406 155.641 29.7812C156.094 29.8906 156.312 30.1719 156.297 30.625C156.234 31.2344 155.93 31.5 155.383 31.4219C154.617 31.3438 153.719 31.2734 152.688 31.2109C151.656 31.1484 150.719 31.1172 149.875 31.1172C148.625 31.1172 147.633 31.1562 146.898 31.2344C146.164 31.3125 145.531 31.375 145 31.4219C144.406 31.4844 143.938 31.5469 143.594 31.6094C143.25 31.6875 142.828 31.75 142.328 31.7969C141.938 31.7969 141.602 31.7656 141.32 31.7031C140.977 31.6406 140.68 31.4844 140.43 31.2344C140.195 31 140.039 30.6484 139.961 30.1797C139.93 29.6484 139.922 29.1328 139.938 28.6328C139.984 28.2109 140.148 27.8828 140.43 27.6484C140.711 27.4141 141.266 27.2344 142.094 27.1094C143.609 26.9062 144.852 26.7656 145.82 26.6875C146.789 26.6094 148.023 26.5625 149.523 26.5469C150.164 26.5469 150.82 26.5078 151.492 26.4297C152.18 26.3516 152.5 26.1641 152.453 25.8672V25.7031C152.453 25.4219 152.18 25.2969 151.633 25.3281C151.086 25.3438 150.602 25.3516 150.18 25.3516C149.07 25.3516 148.211 25.3594 147.602 25.375C147.008 25.3906 146.195 25.4453 145.164 25.5391C144.086 25.5859 143.297 25.625 142.797 25.6562C142.312 25.6875 141.625 25.75 140.734 25.8438C140.062 25.8594 139.766 25.6328 139.844 25.1641C139.844 24.8672 139.922 24.6562 140.078 24.5312C140.234 24.3906 140.492 24.2891 140.852 24.2266ZM148.188 19.9141C148.219 20.3359 148.25 20.7969 148.281 21.2969C150.062 21.2656 152.258 21.25 154.867 21.25C155.102 21.25 155.297 21.3047 155.453 21.4141C155.625 21.5078 155.711 21.6797 155.711 21.9297C155.68 22.4453 155.438 22.7266 154.984 22.7734C153.141 22.8047 150.898 22.8359 148.258 22.8672C145.633 22.8828 142.68 22.9766 139.398 23.1484C139.023 23.1172 138.867 22.875 138.93 22.4219C138.945 22.1094 139.023 21.8906 139.164 21.7656C139.305 21.625 139.492 21.5547 139.727 21.5547C141.836 21.4141 144.125 21.3281 146.594 21.2969C146.578 20.8281 146.547 20.3906 146.5 19.9844C145.172 20.0469 143.695 20.0938 142.07 20.125C141.664 20.125 141.289 20.0312 140.945 19.8438C140.617 19.6562 140.461 19.2031 140.477 18.4844C140.461 17.9688 140.453 17.3516 140.453 16.6328C140.469 15.8984 140.508 15.2812 140.57 14.7812C140.57 14.5 140.609 14.25 140.688 14.0312C140.766 13.8125 141.008 13.7031 141.414 13.7031C141.758 13.7344 141.969 13.8906 142.047 14.1719C142.141 14.4375 142.156 14.6875 142.094 14.9219C142.062 15.3125 142.039 15.7188 142.023 16.1406C144.07 16.1094 145.789 16.0469 147.18 15.9531C148.539 15.875 150.141 15.8438 151.984 15.8594C151.922 15.3281 151.836 14.7656 151.727 14.1719C151.664 13.75 151.828 13.4531 152.219 13.2812C152.766 13.25 153.102 13.4062 153.227 13.75C153.43 14.4062 153.555 15.3359 153.602 16.5391C153.648 17.1484 153.656 17.8594 153.625 18.6719C153.578 19.2031 153.398 19.5391 153.086 19.6797C152.773 19.8203 152.445 19.8984 152.102 19.9141C150.617 19.8984 149.312 19.8984 148.188 19.9141ZM152.078 17.2422C149.891 17.2422 148.266 17.2812 147.203 17.3594C146.125 17.4375 144.391 17.5078 142 17.5703V18.1328C142 18.4922 142.141 18.6719 142.422 18.6719C144.266 18.5938 145.844 18.5391 147.156 18.5078C148.469 18.4609 150.016 18.4375 151.797 18.4375C152 18.4688 152.102 18.3125 152.102 17.9688C152.102 17.75 152.094 17.5234 152.078 17.2891V17.2422ZM173.008 16.4219C173.008 16.0938 173.023 15.7969 173.055 15.5312C173.102 15.2656 173.336 15.0781 173.758 14.9688C174.367 15.0312 174.672 15.3672 174.672 15.9766C174.766 17.4141 174.844 18.5078 174.906 19.2578C174.922 19.5391 174.938 19.8672 174.953 20.2422C175.609 20.2266 176.547 20.2734 177.766 20.3828C178.234 20.3984 178.508 20.6562 178.586 21.1562C178.555 21.6406 178.25 21.8828 177.672 21.8828C176.656 21.8359 175.758 21.8281 174.977 21.8594V22.4688C174.977 24.0781 174.992 25.3594 175.023 26.3125C175.055 27.2656 175.117 28.2266 175.211 29.1953C175.273 29.4141 175.234 29.6875 175.094 30.0156C174.953 30.3281 174.703 30.4922 174.344 30.5078C173.938 30.4922 173.656 30.2188 173.5 29.6875C173.422 28.7188 173.367 27.7656 173.336 26.8281C173.305 25.875 173.281 24.6406 173.266 23.125C173.297 21.6406 173.281 20.6016 173.219 20.0078C173.156 19.4141 173.086 18.2188 173.008 16.4219ZM162.578 27.4609C163.25 26.9297 163.82 26.4453 164.289 26.0078C164.758 25.5547 165.211 25 165.648 24.3438C166.367 23.4062 166.922 22.3672 167.312 21.2266C167.719 20.0859 167.969 19.1094 168.062 18.2969C168.094 17.9531 168.055 17.7344 167.945 17.6406C167.836 17.5469 167.664 17.5156 167.43 17.5469C166.492 17.625 165.398 17.7266 164.148 17.8516C164.133 18.0234 164.109 18.1875 164.078 18.3438C164 18.9531 163.852 19.6172 163.633 20.3359C163.414 21.0547 163.086 21.7891 162.648 22.5391C162.367 23.1641 161.805 23.9297 160.961 24.8359C160.117 25.7422 159.352 26.4297 158.664 26.8984C157.867 27.1484 157.414 27.0234 157.305 26.5234C157.195 26.1016 157.367 25.7422 157.82 25.4453C158.602 24.7891 159.18 24.2656 159.555 23.875C159.93 23.4844 160.336 22.9609 160.773 22.3047C161.117 21.8047 161.453 21.1797 161.781 20.4297C162.109 19.6797 162.328 18.8984 162.438 18.0859C162.469 17.7422 162.438 17.5234 162.344 17.4297C162.266 17.3203 162.109 17.2812 161.875 17.3125C161.109 17.4531 160.32 17.5391 159.508 17.5703C159.305 17.6172 159.07 17.6172 158.805 17.5703C158.539 17.5078 158.391 17.2734 158.359 16.8672C158.375 16.3047 158.703 15.9609 159.344 15.8359C159.984 15.8047 161.016 15.7578 162.438 15.6953C162.984 15.6797 163.398 15.75 163.68 15.9062C163.742 15.9531 163.805 16.0078 163.867 16.0703C165.633 15.9297 167.047 15.8438 168.109 15.8125C168.656 15.7969 169.07 15.8906 169.352 16.0938C169.648 16.2969 169.82 16.6484 169.867 17.1484C169.914 17.6641 169.891 18.1406 169.797 18.5781C169.734 19.3438 169.539 20.2812 169.211 21.3906C168.898 22.5 168.383 23.6016 167.664 24.6953C167.133 25.6016 166.508 26.4141 165.789 27.1328C165.07 27.8359 164.312 28.4062 163.516 28.8438C163 29 162.562 28.8828 162.203 28.4922C162.109 28.0703 162.234 27.7266 162.578 27.4609ZM179.898 17.2891C179.93 16.6328 180.227 16.0938 180.789 15.6719C181.367 15.2344 182.039 14.8828 182.805 14.6172C183.492 14.3984 184.156 14.2422 184.797 14.1484C185.438 14.0391 185.969 13.9844 186.391 13.9844C188.047 13.9844 189.375 14.3672 190.375 15.1328C191.375 15.8828 191.859 17.2578 191.828 19.2578C191.828 20.2734 191.578 21.0078 191.078 21.4609C190.578 21.8984 189.883 22.1797 188.992 22.3047C188.211 22.4453 187.531 22.5156 186.953 22.5156C186.375 22.5156 186 22.7344 185.828 23.1719C185.828 23.8125 185.844 24.3516 185.875 24.7891C185.922 25.2266 185.945 25.6094 185.945 25.9375C185.945 26.4375 185.672 26.6875 185.125 26.6875C184.641 26.7188 184.336 26.4219 184.211 25.7969C184.148 25.3125 184.117 24.8438 184.117 24.3906C184.117 23.9219 184.117 23.4141 184.117 22.8672C184.117 21.8516 184.711 21.2812 185.898 21.1562C186.18 21.0781 186.68 21.0078 187.398 20.9453C188.117 20.8672 188.625 20.7969 188.922 20.7344C189.797 20.3906 190.227 19.8047 190.211 18.9766C190.211 17.7266 189.883 16.8594 189.227 16.375C188.57 15.8906 187.703 15.6484 186.625 15.6484C186.047 15.6484 185.438 15.7031 184.797 15.8125C184.172 15.9219 183.578 16.125 183.016 16.4219C182.453 16.75 182.016 17.1328 181.703 17.5703C181.453 18.0391 181.109 18.25 180.672 18.2031C180.328 18.1562 180.109 18.0391 180.016 17.8516C179.938 17.6641 179.898 17.4766 179.898 17.2891ZM183.812 30.2969C183.812 29.875 183.93 29.5156 184.164 29.2188C184.414 28.9062 184.766 28.75 185.219 28.75C185.641 28.75 186 28.875 186.297 29.125C186.609 29.375 186.766 29.7109 186.766 30.1328C186.766 30.6016 186.648 30.9609 186.414 31.2109C186.195 31.4609 185.898 31.5859 185.523 31.5859C185.117 31.5859 184.727 31.4844 184.352 31.2812C183.992 31.0781 183.812 30.75 183.812 30.2969Z" fill="white"/>
<rect x="0.5" y="0.5" width="262" height="43" rx="19.5" stroke="#F05A39"/>
</svg>

`,
      }}
    ></div>
  );
};

export default MakeButton;