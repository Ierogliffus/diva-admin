export const setCookie = (name, value, options = {}) => {
    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };
    
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    
    document.cookie = updatedCookie;
}
export const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
export const deleteCookie = (name) => {
    setCookie(name, "", {
        'max-age': -1
    })
}
export const parseMarkdown = (text) => {
    text = text.replaceAll("&#10;", "\n")
    console.log(text)
    text = text.replace(new RegExp(/\`{3}([^\`][\s\S]+?[^\`])\`{3}/gm), `<div class="parsed-markdown-code"><div class="parsed-markdown-code-head"><span>Code</span></div><pre><code>$1</code></pre></div>`) // code block

    text = text.replace(new RegExp(/\`([\s\S]+?)\`/gm), "<code>$1</code>") // inline code

    // text = text.replace(new RegExp(/^#{1}((?!#).*)$/gm), "<h1>$1</h1>"); // heading
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|^#{1}[\s]*((?!#).*)$/gm), (match, p1, p2) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<h1>${p2}</h1>`
        }
        return match
    })

    // text = text.replace(new RegExp(/^#{2}((?!#).*)$/gm), "<h2>$1</h2>"); // subheading
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|^#{2}[\s]+?((?!#).*)$/gm), (match, p1, p2) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<h2>${p2}</h2>`
        }
        return match
    })

    // text = text.replace(new RegExp(/^#{3}((?!#).*)$/gm), "<h3>$1</h3>"); // sub-subheading
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|^#{3}[\s]*((?!#).*)$/gm), (match, p1, p2) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<h3>${p2}</h3>`
        }
        return match
    })
    // text = text.replace(new RegExp(/^#{4}((?!#).*)$/gm), "<h4>$1</h4>"); // sub-subheading
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|^#{4}((?!#).*)$/gm), (match, p1, p2) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<h4>${p2}</h4>`
        }
        return match
    })

    // text = text.replace(new RegExp(/^#{5}((?!#).*)$/gm), "<h5>$1</h5>"); // sub-subheading
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|^#{5}((?!#).*)$/gm), (match, p1, p2) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<h5>${p2}</h5>`
        }
        return match
    })

    // text = text.replace(new RegExp(/^#{6}((?!#).*)$/gm), "<h6>$1</h6>"); // sub-subheading
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|^#{6}((?!#).*)$/gm), (match, p1, p2) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<h6>${p2}</h6>`
        }
        return match
    })


    // text = text.replace(new RegExp(/(?<!\*|\\\*)\*{1,1}([^\*\n].+?[^\*])\*{1,1}(?!\*|\\)/gm), "<i>$1</i>"); // italicized
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|(?<!\*|\\\*)\*{1,1}([^\*\n].+?[^\*])\*{1,1}(?!\*|\\)/gm), (match, p1, p2, p3, p4) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<i>${p2}</i>`
        }
        return match
    })

    // text = text.replace(new RegExp(/(?<!\*|\\\*)\*{2,2}([^\*\n].+?[^\*])\*{2,2}(?!\*|\\)/gm), "<b>$1</b>"); // bold
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|(?<!\*|\\\*)\*{2,2}([^\*\n].+?[^\*])\*{2,2}(?!\*|\\)/gm), (match, p1, p2, p3, p4) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<b>${p2}</b>`
        }
        return match
    })

    // text = text.replace(new RegExp(/(?<!\*|\\\*)\*{3,3}([^\*\n].+?[^\*])\*{3,3}(?!\*|\\)/gm), "<b><i>$1</i></b>"); // bold and italicized
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|(?<!\*|\\\*)\*{3,3}([^\*\n].+?[^\*])\*{3,3}(?!\*|\\)/gm), (match, p1, p2, p3, p4) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<b><i>${p2}</i></b>`
        }
        return match
    })

    // text = text.replace(new RegExp(/(?<!\~|\\\~)\~{2,2}([^\~\n].+?[^\~])\~{2,2}(?!\~|\\)/gm), "<s>$1</s>"); // Strikethrought
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|(?<!\~|\\\~)\~{2,2}([^\~\n].+?[^\~])\~{2,2}(?!\~|\\)/gm), (match, p1, p2, p3, p4) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<s>${p2}</s>`
        }
        return match
    })

    // text = text.replace(new RegExp(/\!\[([^\[\]]*?)\]\((.*?)\)|^\[*?\]\((.*?)\)/gm), "<img src='$2' alt='$1' />"); // images
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|\!\[([^\[\]]*?)\]\((.*?)\)|^\[*?\]\((.*?)\)/gm), (match, p1, p2, p3, p4, p5, p6, p8, p9, p10) => {
        if (p2 && p3) {
            p3 = p3.replace(new RegExp(/<a[\s\S]+?href\=\"(.*)\"[\s\S]+?<\/a>/g), "$1")
            return `<img src="${p3}" alt="${p2}" />`
        }
        return match
    })

    // text = text.replace(new RegExp(/\[([^\[\]]*?)\]\((.*?)\)|^\[*?\]\((.*?)\)/gm), "<a href='$2' target='_blank' rel='nofollow'>$1</a>"); // links
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|\[([^\[\]]*?)\]\((.*?)\)/gm), (match, p1, p2, p3, p4, p5, p6) => {
        if (p2 && p3) {
            p3 = p3.replace(new RegExp(/<a[\s\S]+?href\=\"(.*)\"[\s\S]+?<\/a>/g), "$1")
            return `<a href="${p3}" target="_blank" rel="nofollow">${p2 ? p2 : p3}</a>`
        }
        return match
    })

    // text = text.replace(new RegExp(/^\-(.*)$/gm), "<ul><li>$1</li></ul>").replace(new RegExp(/<\/ul>\s?<ul>/gm), ""); // bulleted list
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|^\-(.*)$/gm), (match, p1, p2, p3, p4) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<ul><li>${p2}</li></ul>`
        }
        return match
    }).replace(new RegExp(/<\/ul>\s?<ul[\s\S]+?/gm), "")

    // text = text.replace(new RegExp(/^(\s*)(\d+\.\s+)(.*)$/gm), "<ol><li>$3</li></ol>").replace(new RegExp(/<\/ol>\s?<ol>/gm), ""); // numbered list
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|^\s*(\d+)\.\s+(.*)$/gm), (match, p1, p2, p3, p4, p5) => {
        if (p1) {
            return match
        }
        if (p3) {
            return `<ol start="${p2}"><li>${p3}</li></ol>`
        }
        return match
    }).replace(new RegExp(/<\/ol>\s?<ol[\s\S]+?>/gm), "")

    // text = text.replace(new RegExp(/^\>(.*)$/gm), "<blockquote>$1</blockquote>"); // blockquote
    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|^\>(.*)$/gm), (match, p1, p2, p3, p4) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<blockquote>${p2}</blockquote>`
        }
        return match
    })

    text = text.replace(new RegExp(/<code>([\s\S]+?)<\/code>|^\|(.*)\|$/gm), (match, p1, p2) => {
        if (p1) {
            return match
        }
        if (p2) {
            return `<div class="parsed-markdown-table"><table><tr>${p2.replace(new RegExp(/^([\s\S]+?)\||([\s\S]+?)\||([\s\S]+)$/gm), (_match, _p1, _p2, _p3) => {
                return `<td>${_p1 || _p2 || _p3}</td>`
            })}</tr></table></div>`
        }
        return match
    }).replace(new RegExp(/<\/table><\/div>\s?<div class="parsed-markdown-table"><table>/gm), "").replace(new RegExp(/(<tr>[\s\S]+?<\/tr>)<tr><td>-*[\S]+?<\/td><\/tr>/gm), (match, p1, p2) => {
        return p1.replace(new RegExp(/<td>/gm), "<th>").replace(new RegExp(/<\/td>/gm), "</th>")
    })

    return text
}
export const uploadPhotos = async (file) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}admin-blog/add/photo/tos3`, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('diva-admin')}`
        }),
    }).then(res => res.json()).then(data => {
        return data
    }).catch(error => error)
    if (response.success)
        return response.data 
    else 
        return {}
}