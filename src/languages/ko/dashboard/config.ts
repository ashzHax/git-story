export default {
	'format': '편집 포맷',
	'dump-error': 'JSON 문법이 잘못되어 yaml로 변경할 수 없습니다.',
	'parse-error': 'yaml문법이 잘못되어 JSON으로 변경할 수 없습니다.',
	'desc-title': '설정값 설명',
	'desc': {
		'fixed': '<span class="red--text text--darken-3">이 값은 수정되어선 안 됩니다.<span>',
		'deprecate': '<span class="yellow-text text--darken-3">GIT-STORY에선 해당 값을 사용하지 않습니다.</span>',
		'title': '블로그의 제목을 설정합니다.',
		'subtitle': '블로그의 부제를 설정합니다.',
		'description': '블로그에 대한 설명을 설정합니다.',
		'keywords': '블로그에 대한 키워드를 설정합니다. 다중 값을 지원합니다.',
		'author': '블로그의 소유자 이름을 설정합니다.',
		'language': '블로그가 사용하는 주 언어를 설정합니다. 기본값은 <code>en</code>이며 <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes" target="_blank">2-letter ISO-639-1 code</a>를 참조하세요.',
		'timezone': '블로그에서 상요하는 Timezone을 설정합니다. GIT-STORY는 기본적으로 GMT 시간값을 사용합니다. 사용 가능한 Timezone의 종류는 <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">여기</a>에서 확인할 수 있습니다. 다음과 같은 형식으로 사용하세요. <code>America/New_York</code>, <code>Japan</code>, <code>UTC</code>',
		'url': '블로그의 URL을 설정합니다. 문장의 시작은 <code>http://</code>또는 <code>https://</code>여야 합니다.',
		'root': '블로그의 최상위 폴더입니다. {{ dashboard.config.desc.fixed }}',
		'permalink': '게시글의 <a href="https://hexo.io/docs/permalinks.html" target="_blank">permalink</a>형식입니다.',
		'permalink_defaults': 'permalink 각 부분(segment)의 기본값입니다.',
		'pretty_urls': 'permalink에서 주소를 더 예쁘게 설정합니다.',
		'pretty_urls>trailing_index': '<code>index.html</code>파일명을 보입니다. <code>false</code>로 설정시 숨깁니다.',
		'pretty_urls>trailing_html': '<code>false</code>로 설정하면 <code>.html</code>를 보이지 않게 합니다.<br>(<code>index.html</code>에는 적용되지 않습니다.)',
		'source_dir': '컨텐츠들이 저장되는 소스 폴더입니다. {{ dashboard.config.desc.fixed }}',
		'public_dir': '생성된 블로그 페이지가 저장될 폴더입니다.  {{ dashboard.config.desc.fixed }}',
		'tag_dir': '태그 폴더를 설정합니다. {{ dashboard.config.desc.deprecate }}',
		'archive_dir': '저장소 폴더를 설정합니다. {{ dashboard.config.desc.deprecate }}',
		'category_dir': '카테고리 폴더를 설정합니다. {{ dashboard.config.desc.deprecate }}',
		'code_dir': 'Code 폴더를 설정합니다. {{ dashboard.config.desc.deprecate }}',
		'i18n_dir': '다국어 지원을 위한 i18n 폴더를 설정합니다.',
		'skip_render': '렌더링하지 않을 경로. 경로 매칭을 위해 <a href="https://github.com/micromatch/micromatch#extended-globbing" target="_blank">glob expressions</a>를 사용할 수 있습니다.  {{ dashboard.config.desc.deprecate }}',
		'new_post_name': '새 게시글의 파일명 형식입니다. {{ dashboard.config.desc.deprecate }}',
		'default_layout': '새 게시글 파일을 만들 때 사용하는 기본 레이아웃입니다. {{ dashboard.config.desc.deprecate }}',
		'titlecase': '제목을 제목에 맞는 대/소문자로 변경할 것인지 설정합니다.',
		'external_link': '외부 링크를 새 탭에서 열것인지 설정합니다.',
		'external_link>enable': '외부 링크를 새 탭에서 열 것인지 설정합니다.',
		'external_link>field': '해당 설정값을 <code>site</code>페이지 또는 <code>post</code>페이지에만 적용할 것인지 설정합니다.',
		'external_link>exclude': '해당 설정값을 제외할 도메인 주소를 작성합니다.',
		'filename_case': '파일명을 소문자(값: 1) 또는 대문자(값: 2)로 변경합니다. {{ dashboard.config.desc.deprecate }}',
		'render_drafts': 'Draft 문서를 표시할 것인지 설정합니다.',
		'post_asset_folder': '<a href="https://hexo.io/docs/asset-folders" target="_blank">Asset 폴더</a>를 활성화 할 것인지 선택합니다.  {{ dashboard.config.desc.deprecate }}',
		'relative_link': '루트 폴더에 대한 상대 경로로 링크를 만들 것인지 설정합니다. {{ dashboard.config.desc.fixed }}',
		'future': '새로 생성되는 페이지가 정적 웹 사이트 빌드시 보여질 것인지 설정합니다. {{ dashboard.config.desc.fixed }}',
		'highlight': 'Code block을 설정합니다. 자세한 사용법은 <a href="https://hexo.io/docs/syntax-highlight#Highlight-js" target="_blank">Highlight.js</a>를 참고하세요.',
		'highlight>enable': 'Highlight.js를 사용할 것인지 설정합니다. prism.js와 같이 사용할 수 없습니다.',
		'highlight>auto_detect': '작성된 코드의 언어를 자동으로 감지하는 기능을 사용할 것인지 설정합니다.',
		'highlight>line_number': '코드에 줄표시를 사용할 것인지 설정합니다.',
		'highlight>tab_replace': '탭 문자를 다른 문장으로 변경합니다.',
		'highlight>wrap': 'line_number를 사용할 때 디자인이 깨지지 않도록 설정합니다.',
		'highlight>hljs': '정적 웹 페이지가 생성될 때 HTML 클래스 이름 앞에 <code>hljs-</code>를 붙일지 설정합니다.',
		'prismjs': 'Code block을 설정합니다. 자세한 사용법은 <a href="https://hexo.io/docs/syntax-highlight#PrismJS" target="_blank">Prism.js</a>를 참고하세요',
		'prismjs>enable': 'Prism.js를 사용할 것인지 설정합니다. highlight.js와 같이 사용할 수 없습니다.',
		'prismjs>preprocess': 'Code block렌더링을 서버/브라우저 사이드에서 할 지 설정합니다. {{ dashboard.config.desc.fixed }}',
		'prismjs>line_number': '코드에 줄표시를 사용할 것인지 설정합니다. preprocess가 true라면, <code>prism-line-numbers.css</code>가 블로그에 포함되어 있어야만 사용 가능합니다.',
		'prismjs>tab_replace': '탭 문자를 다른 문장으로 변경합니다.',
		'default_category': '기본 카테고리를 설정합니다. {{ dashboard.config.desc.deprecate }}',
		'category_map': '분류 목록을 설정합니다. {{ dashboard.config.desc.deprecate }}',
		'tag_map': '테그 목록을 설정합니다. {{ dashboard.config.desc.deprecate }}',
		'date_format': '날짜 형식을 설정합니다 {{ dashboard.config.desc.deprecate }}',
		'time_format': '시간 형식을 설정합니다 {{ dashboard.config.desc.deprecate }}',
		'updated_option': ' {{ dashboard.config.desc.deprecate }}',
		'per_page': '하나의 페이지에 표시할 포스트의 개수를 설정합니다. <code>0</code>이면 페이지네이션을 표시하지 않습니다. {{ dashboard.config.desc.deprecate }}',
		'pagination_dir': '페이지네이션 폴더를 설정합니다. {{ dashboard.config.desc.deprecate }}',
		'theme': '사용할 테마를 설정합니다.',
		'plugins': '헥소가 블로그를 생성할 때 필요한 플러그인을 선언합니다.',
		'index_generator': '메인 화면에 생성될 게시글들을 생성할 때 필요한 설정입니다.',
		'index_generator>path': '',
		'index_generator>per_page': '한 페이지에 몇 개의 게시글을 표시할 지 설정합니다.',
		'index_generator>order_by': '게시글 정렬 기준을 설정합니다.',
		'sitemap': '사이트맵을 설정합니다.',
		'sitemap>path': '웹 루트 기준 사이트맵 경로가 어디에 생성될지 설정합니다.',
		'robotstxt': '블로그의 robots.txt를 생성하는 설정입니다.',
		'robotstxt>useragent': '블로그의 페이지 수집을 허용할 특정 User-Agent를 설정합니다.',
		'robotstxt>allow': '블로그의 페이지 수집을 허용할 경로를 설정합니다.',
		'robotstxt>disallow': '블로그의 페이지 수집을 비허용할 경로를 설정합니다.',
		'robotstxt>sitemap': '블로그의 사이트맵 파일 경로를 설정합니다.',
	},
};
