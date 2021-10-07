import { RecipeProps } from '../components/shared/Recipe';
import { IMAGES } from './images';

export const recipe1 = new RecipeProps({
	day: 1,
	meal: 'dinner',
	icon: IMAGES.dinner,
	name: '大阪燒',
	stuffs: [
		`低筋麵粉 15克
用10cc的水先拌勻成麵糊`,
		'玉米粉',
		`培根 4~6片
稍微切三段`,
		'雞蛋 1顆',
		'高麗菜 1/8顆',
		'大阪燒醬',
		'柴魚片',
		'美乃滋',
	],
	content: `STEP 1：
    將高麗菜切成細末狀（約3公分長度，0.5公分寬）

STEP 2：
    將麵糊淋在切好的高麗菜上，放入一顆雞蛋、白胡椒、鹽巴，攪拌均勻即可。
    ＊需注意高麗菜有沒有都沾到麵糊，否則翻面時會容易散開。
    
STEP 3：
    倒入平底鍋以後，稍微整型一下成圓型的就可以了。
STEP 4：
    將五花肉用蓋棉被的方式蓋在高麗菜麵糊上，吃的時候再切。
    ＊記得蓋上鍋蓋喔！這樣高麗菜比較容易熟。
    
STEP 5：待底層看起來有一點焦就可以翻面了。
    翻面後再蓋上鍋蓋煎三分鐘，將肉油脂逼出來豬肉會變得焦脆。
    
STEP 6：
    擠上大阪燒醬、美乃滋、柴魚，
    DO RE MI SOL～好吃的大阪燒完成！`,
});

export const recipe2 = new RecipeProps({
	day: 1,
	meal: 'dinner',
	icon: IMAGES.dinner,
	name: '烤肉 火鍋',
	content: ``,
});

export const recipe3 = new RecipeProps({
	day: 2,
	meal: 'breakfast',
	icon: IMAGES.breakfast,
	name: '粉漿蛋餅',
	stuffs: ['中筋麵粉 3大匙', '地瓜粉 1大匙', '太白粉 1大匙', '冷水 4又1/2大匙', '鹽 1/4小匙', '蔥', '蛋 1顆', '醬料'],
	note: '以上為一份蛋餅所需的份量，若要一次做多份可等比增加',
	content: `STEP 1：
    將三種粉和冷水、鹽巴、蔥花混合拌勻，直到無粉的顆粒
STEP 2：
    將蛋打散放另一個碗中備用
STEP 3：
    熱油鍋放少許油，以中小火將調好的粉漿倒入鍋中，
    不要移動粉漿，等到外緣略有焦黃變硬的程度再翻面煎。
STEP 4：
    可以依照個人喜好程度煎，煎越久會越酥脆。
STEP 5：
    將蛋液倒入鍋中，放入喜歡的配料後將粉漿蛋餅蓋上食材上方，
    略煎一下再翻面讓食材熟，將蛋餅捲起即可起鍋並叫大家起床ㄌ！`,
	hint: '粉漿蛋餅的比例快速記法 → 中筋麵粉:地瓜粉:太白粉=3:1:1',
});

export const recipe4 = new RecipeProps({
	day: 2,
	meal: 'breakfast',
	icon: IMAGES.breakfast,
	name: '豬肉丸子',
	stuffs: ['豬絞肉 300g', '板豆腐 100g', '胡椒粉', '鹽', '太白粉 (or玉米粉', '雞蛋 1顆'],
	content: `香菇做`,
});

export const recipe5 = new RecipeProps({
	day: 2,
	meal: 'lunch',
	icon: IMAGES.lunch,
	name: '親子丼',
	stuffs: ['雞腿肉', '洋蔥', '雞蛋', '日式醬油+味醂（1:1）', '砂糖', '鮮味炒手', '米酒'],
	content: `STEP 1：
    將洋蔥切成細條狀備用。
STEP 2：鍋中不需放油
    雞肉以皮面下鍋煎至焦脆後，翻面將肉煎至變色即可取出備用。
STEP 3：
    洋蔥下鍋以雞皮油中火炒至焦糖色，倒入醬汁轉小火並加入少許砂糖、米酒、鮮味炒手調味。
STEP 4：
    將雞腿肉下鍋，加入醬汁烹煮至熟起鍋，洋蔥及醬汁留於鍋中。
STEP 5：
    雞蛋打散後，先將一半蛋液下鍋以小火炒至微熟後，倒入剩餘蛋液蓋上鍋蓋熄火悶至半熟狀即可起鍋。
STEP 6：
    飯上放入洋蔥、雞肉切成條狀後放至飯上，最後倒入蛋及醬汁。
    DO RE MI SOL～就可以享受有著半熟蛋的親子丼！`,
});

export const recipe6 = new RecipeProps({
	day: 2,
	meal: 'lunch',
	icon: IMAGES.lunch,
	name: '辣味時蔬豬肉義大利麵',
	stuffs: ['清炒辣味時蔬豬肉', '麵條', '鹽', '橄欖油'],
	content: `STEP 1：
    水滾後加入少許鹽、橄欖油，
    加入義大利麵條煮6～8分鐘後瀝乾起鍋。
    
    ＊麵水需留著備用。
STEP 2：
    蒜
    味黑胡椒粒及辣椒以中火炒香，豬肉下鍋炒熟後切塊備用。
STEP 3：
    蔬菜下鍋以中火翻炒後加入少許鹽、鮮味炒手、米酒，加入豬肉一起拌炒。
    ＊太乾可加入少許麵水。
STEP 4：
    加入麵條以中火拌炒，並分次加入麵水、少許米酒增加香氣。
    麵條炒熟後加入黑胡椒粒，搭啦完成啦！`,
});

export const recipe7 = new RecipeProps({
	day: 2,
	meal: 'dinner',
	icon: IMAGES.dinner_white,
	name: '剝皮辣椒雞鍋',
	stuffs: ['剝皮辣椒一罐', '雞腿肉（costco)', '薑', '醬油', '米酒', '鹽'],
	content: `STEP 1：
    水滾後放入雞肉，煮至肉的雜質浮出後將雞肉取出。
STEP 2：
    新的一鍋水滾後放入薑片、雞肉，再次將肉的雜質去除。
STEP 3：
    加入剝皮辣椒一罐，少許醬油、米酒燉煮。
    ＊可加入喜歡的配料一起煮：蘿蔔、香菇⋯等。
STEP 4：
    湯滾後加入少許鹽、鮮味炒手調味，水不夠可再加水燉煮。
STEP 5：
    一鍋美味的雞湯誕生ㄌ！接著就可以放入想加的鍋料哩！`,
});

export const recipe8 = new RecipeProps({
	day: 3,
	meal: 'breakfast',
	icon: IMAGES.breakfast,
	name: 'Bagel or 煎餃',
	stuffs: ['煎餃', '貝果（costco）'],
	content: `STEP 1：
    取一小碗，放入低筋麵粉、水調製成麵粉水。
STEP 2：
    熱鍋倒入食用油，用刷子將平底鍋底部及側邊都均勻沾油。
STEP 3：
    放入水餃，倒入麵粉水，約至水餃1/4高度，水滾後轉中小火，
    蓋鍋煮約10分鐘。
STEP 4：
    見鍋底水分快燒乾，掀鍋蓋改小火燒約3分鐘。
STEP 5：
    熄火，輕輕搖晃鍋子，讓煎餃與鍋子分離，倒叩盤子上。
    冰花煎餃GET！ 然後大家就趕快吃吧！`,
	hint: '麵粉水的比例，麵粉1茶匙、水200CC，以此比例調製。',
});
