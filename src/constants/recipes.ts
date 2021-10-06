import { RecipeProps } from '../components/shared/Recipe';
import { IMAGES } from './images';

export const recipe1 = new RecipeProps({
	day: 1,
	meal: 'breakfast',
	icon: IMAGES.camping,
	name: '大阪燒',
	stuffs: ['低筋麵粉', '玉米粉', '培根', '高麗菜', '雞蛋', '大阪燒醬', '柴魚片', '美乃滋'],
	content: `STEP 1：將高麗菜切成細末狀（約3公分長度，0.5公分寬）
    STEP 2：將麵糊淋在切好的高麗菜上，放入一顆雞蛋、白胡椒、鹽巴，攪拌均勻即可。
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
